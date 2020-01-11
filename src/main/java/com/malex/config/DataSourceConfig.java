package com.malex.config;

import com.malex.service.IPropertiesReaderApp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.SingleConnectionDataSource;

import javax.sql.DataSource;

@Configuration
@ComponentScan(basePackages = {"com.malexj"})
public class DataSourceConfig {

    private final IPropertiesReaderApp reader;

    @Autowired
    public DataSourceConfig(IPropertiesReaderApp propertiesReaderApp) {
        this.reader = propertiesReaderApp;
    }

    @Primary
    @Bean(name = "jdbcTemplate")
    public JdbcTemplate getJDBCTemplate(@Qualifier("dataSource") DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    @Primary
    @Bean(name = "dataSource")
    public DataSource getDataSource() {
        SingleConnectionDataSource ds = new SingleConnectionDataSource();
        ds.setDriverClassName(reader.getProperty("app.driver.class.name"));
        ds.setUrl(reader.getProperty("app.url.database"));
        return ds;
    }
}
