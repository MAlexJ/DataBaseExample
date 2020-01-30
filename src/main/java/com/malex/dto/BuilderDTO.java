package com.malex.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.List;
import java.util.Set;

@Getter
@Builder
@ToString
public class BuilderDTO {

    boolean isError;
    private String message;

    // RowSet
    private Set<String> columnNames;
    private List<String> columnTypes;
    private List<List<String>> columnData;
}
