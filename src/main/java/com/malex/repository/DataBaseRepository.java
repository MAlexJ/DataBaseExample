package com.malex.repository;

import com.malex.dto.BuilderDTO;

public interface DataBaseRepository {

    BuilderDTO executeSelect(String query);

    BuilderDTO executeUpdate(String query);
}
