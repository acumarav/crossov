package com.crossover.trial.properties.alext.properties.converts;

import com.crossover.trial.properties.alext.properties.BaseProperty;

/**
 * Created by alex on 1/14/2016.
 */
public interface PropertyParser<T> {

    boolean isValidValue(String value);

    BaseProperty<T> parseValue(String name, String value);

    Class getSupportedType();
}
