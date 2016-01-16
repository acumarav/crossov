package com.crossover.trial.properties.alext;

import java.util.Properties;

/**
 * Created by alex on 1/16/2016.
 */
public interface PropertiesLoader {

    /**
     * Load resource by URI or classpath:/ path
     *
     * @param resource
     * @return
     */
    Properties loadResource(String resource);
}
