package com.crossover.trial.properties.alext.properties;

import java.util.List;

/**
 * Created by alex on 1/16/2016.
 */
public interface PropertyMatcher {

    BaseProperty parseProperty(String name, List<String> values);
}
