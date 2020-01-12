package com.malex.service.impl;

import com.malex.dto.BuilderDTO;
import com.malex.enums.SqlStatement;
import com.malex.exception.AppException;
import com.malex.repository.DataBaseRepository;
import com.malex.service.DataBaseService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
@Qualifier("dataBaseService")
public class DataBaseServiceImpl implements DataBaseService {

    /**
     * Error messages
     */
    private static final String ERROR_INCORRECT_SQL_QUERY = "Incorrect sql query!";

    private DataBaseRepository repository;

    @Autowired
    public DataBaseServiceImpl(DataBaseRepository repository) {
        this.repository = repository;
    }

    @Override
    public BuilderDTO executeQuery(String query, SqlStatement sql) {
        if (StringUtils.isBlank(query)) {
            throw new AppException(ERROR_INCORRECT_SQL_QUERY);
        }
        String processingQuery = query.trim();
        return repository.executeQuery(processingQuery, sql);
    }
}
