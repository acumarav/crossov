package com.crossover.trial.properties.alext.parser;

import java.util.List;

/**
 * Created by alex on 1/16/2016.
 */
public interface PropertyMatcher {

    Property parseProperty(String name, List<String> values);
}
