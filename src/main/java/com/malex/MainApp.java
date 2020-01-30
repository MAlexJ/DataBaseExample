package com.malex;

import com.malex.config.DataSourceConfig;
import com.malex.dto.BuilderDTO;
import com.malex.enums.SqlStatement;
import com.malex.service.DataBaseService;
import lombok.extern.log4j.Log4j;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Arrays;

@Log4j
public class MainApp {

    /**
     * Base package for scanning annotation
     */
    private static final String BASE_SCAN_PACKAGE = "com.malex";

    /**
     * Run app
     */
    public static void main(String[] args) {
        log.info("Run App");

        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(BASE_SCAN_PACKAGE);
        context.register(DataSourceConfig.class);

        // read beans
        readAllDefinitionNames(context);

        DataBaseService service = context.getBean(DataBaseService.class, "dataBaseService");
        BuilderDTO builderDTO = service.executeQuery("SELECT * FROM NEW_USER_TABLE", SqlStatement.SELECT);
        log.info(builderDTO.toString());

        log.info("Close App");
    }

    private static void readAllDefinitionNames(ApplicationContext context) {
        String[] beanDefinitionNames = context.getBeanDefinitionNames();
        Arrays.stream(beanDefinitionNames).forEach(log::info);
    }
}
