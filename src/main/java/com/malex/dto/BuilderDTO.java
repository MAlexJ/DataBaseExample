package com.malex.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Builder
@Getter
@ToString
public class BuilderDTO
{
    // response
    private String message;
    boolean isError;

    // default
    private String html;

    // Category
    private Integer idCategory;
    private String nameCategory;
    private String descriptionCategory;
    private String htmlCategory;

    // SubCategory
    private Integer idSubCategory;
    private String nameSubCategory;
    private String descriptionSubCategory;
    private String htmlSubCategory;

    private List<BuilderDTO> subCategories;

    // RowSet
    private Set<String> resultColumns;
    private List<List<Object>> resultRows;

    public static class BuilderDTOBuilder
    {
        BuilderDTOBuilder addSubCategory(BuilderDTO dto)
        {
            if (Objects.isNull(subCategories))
            {
                subCategories = new ArrayList<>();
            }
            subCategories.add(dto);
            return this;
        }
    }
}
