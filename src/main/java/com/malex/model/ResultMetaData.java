package com.malex.model;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ResultMetaData {
    private int id;
    private String columnName;
    private String typeName;
}
