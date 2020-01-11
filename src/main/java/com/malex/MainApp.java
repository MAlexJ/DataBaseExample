package com.malex;

import lombok.extern.log4j.Log4j;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.Arrays;

@Log4j
public class MainApp {

    public static void main(String[] args) {
        log.info("Run App");
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("context.xml");
        readAllDefinitionNames(context);
        log.info("Close App");
    }

    private static void readAllDefinitionNames(ClassPathXmlApplicationContext context) {
        String[] beanDefinitionNames = context.getBeanDefinitionNames();
        Arrays.stream(beanDefinitionNames).forEach(log::info);
    }
}
