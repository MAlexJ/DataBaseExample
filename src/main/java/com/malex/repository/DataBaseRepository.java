package com.malex.repository;

import com.malex.dto.BuilderDTO;
import com.malex.enums.SqlStatement;

public interface DataBaseRepository {

    BuilderDTO executeQuery(String query, SqlStatement sql);

}
