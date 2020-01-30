package com.malex.repository.impl;

import com.malex.dto.BuilderDTO;
import com.malex.enums.SqlStatement;
import com.malex.exception.AppException;
import com.malex.model.ResultMetaData;
import com.malex.repository.DataBaseRepository;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collector;
import java.util.stream.IntStream;

import static java.util.stream.Collectors.toCollection;

@Log4j
@Repository("dbRepository")
public class DataBaseRepositoryImpl implements DataBaseRepository {

    /**
     * Error messages
     */
    private static final String ERROR_QUERY_MESSAGE = "Error execute query: %s, Message: %s";
    private static final String SUCCESS_QUERY_MESSAGE = "Success";
    private static final String PARSING_ERROR_MESSAGE = "Error parsing ResultSet, countNumber: %s, message: %s";

    /**
     * DataSource
     */
    private final DataSource dataSource;

    @Autowired
    public DataBaseRepositoryImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public BuilderDTO executeQuery(String query, SqlStatement statement) {
        try (Connection dbConnection = dataSource.getConnection();
             Statement dbStatement = dbConnection.createStatement()) {
            return isSelectStatement(statement)
                    ? getResultFromSelectQuery(query, dbStatement)
                    : executeUpdateQuery(query, dbStatement);
        } catch (SQLException ex) {
            return buildErrorResponse(query, ex);
        }
    }

    private boolean isSelectStatement(SqlStatement statement) {
        return SqlStatement.SELECT == statement;
    }

    private BuilderDTO executeUpdateQuery(String query, Statement statement) throws SQLException {
        BuilderDTO.BuilderDTOBuilder builder = BuilderDTO.builder().message(SUCCESS_QUERY_MESSAGE);
        // todo not clear the result! for only test!!!
        // todo create service!
        boolean resultExecution = statement.execute(query);
        if (!resultExecution) {
            String errMsg = String.format(ERROR_QUERY_MESSAGE, query, "Result of execution fail");
            log.error(errMsg);
            builder.message(errMsg);
        }
        return builder.build();
    }

    private BuilderDTO getResultFromSelectQuery(String query, Statement statement) {
        try (ResultSet resultSet = statement.executeQuery(query)) {
            Set<ResultMetaData> resultMetaDataSet = getResultMetaData(resultSet.getMetaData());
            return BuilderDTO.builder()
                    .message(SUCCESS_QUERY_MESSAGE)
                    .columnTypes(getColumnTypes(resultMetaDataSet))
                    .columnNames(getColumnNames(resultMetaDataSet))
                    .columnData(getColumnData(resultSet, resultMetaDataSet))
                    .build();
        } catch (SQLException ex) {
            return buildErrorResponse(query, ex);
        }
    }

    private Set<ResultMetaData> getResultMetaData(ResultSetMetaData metaData) throws SQLException {
        return IntStream.rangeClosed(1, metaData.getColumnCount())
                .boxed()
                .map(columnNumber -> getResultMetaData(columnNumber, metaData))
                .collect(toCollection(LinkedHashSet::new));
    }


    private List<List<String>> getColumnData(ResultSet resultSet,
                                             Set<ResultMetaData> resultMetaDataSet) throws SQLException {
        List<List<String>> resultSetRow = new ArrayList<>();
        while (resultSet.next()) {
            List<String> rows = new ArrayList<>();
            for (ResultMetaData resultMetaData : resultMetaDataSet) {
                Object obj = resultSet.getObject(resultMetaData.getId());
                rows.add(String.valueOf(obj));
            }
            resultSetRow.add(rows);
        }
        return resultSetRow;
    }

    private List<String> getColumnTypes(Set<ResultMetaData> resultMetaDataSet) {
        return getInfo(resultMetaDataSet, ResultMetaData::getTypeName, toCollection(ArrayList::new));
    }

    private Set<String> getColumnNames(Set<ResultMetaData> resultMetaDataSet) {
        return getInfo(resultMetaDataSet, ResultMetaData::getColumnName, toCollection(LinkedHashSet::new));
    }

    private <R, A> R getInfo(Set<ResultMetaData> resultMetaDataSet,
                             Function<ResultMetaData, String> mapper,
                             Collector<? super String, A, R> collector) {
        return resultMetaDataSet.stream()
                .map(mapper)
                .collect(collector);
    }

    private ResultMetaData getResultMetaData(int countNumber, ResultSetMetaData metaData) {
        try {
            return ResultMetaData.builder()
                    .id(countNumber)
                    .columnName(metaData.getColumnName(countNumber))
                    .typeName(metaData.getColumnTypeName(countNumber))
                    .build();
        } catch (SQLException ex) {
            throw new AppException(String.format(PARSING_ERROR_MESSAGE, countNumber, ex.getMessage()));
        }
    }

    private BuilderDTO buildErrorResponse(String incorrectQuery, Exception ex) {
        log.error(String.format(ERROR_QUERY_MESSAGE, incorrectQuery, ex.getMessage()));
        return BuilderDTO.builder()
                .isError(true)
                .message(ex.getMessage())
                .build();
    }
}
