package com.malex.service;

import com.malex.dto.BuilderDTO;
import com.malex.enums.SqlStatement;

public interface DataBaseService {

    BuilderDTO executeQuery(String query, SqlStatement sql);

}
