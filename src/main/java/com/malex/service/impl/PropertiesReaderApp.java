package com.malex.service.impl;

import com.malex.exception.AppException;
import com.malex.service.IPropertiesReaderApp;
import org.springframework.stereotype.Service;

import javax.annotation.Nonnull;
import javax.annotation.PostConstruct;
import java.util.ResourceBundle;

@Service
public class PropertiesReaderApp implements IPropertiesReaderApp {

    /**
     * The name of  root property file
     */
    private static final String ROOT_PROPERTY_FILE = "application";

    private static final String ERROR_MSG = "Could not load any resources with name: %s";

    private ResourceBundle resourceBundle;

    @PostConstruct
    void initResourceBundle() {
        resourceBundle = ResourceBundle.getBundle(ROOT_PROPERTY_FILE);
        if (resourceBundle == null) {
            throw new AppException(String.format(ERROR_MSG, ROOT_PROPERTY_FILE));
        }
    }

    @Nonnull
    @Override
    public String getProperty(@Nonnull final String propertyName) {
        return resourceBundle.getString(propertyName);
    }
}
