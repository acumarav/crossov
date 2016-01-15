package com.crossover.trial.properties.alext.parser.converts;

/**
 * Created by alex on 1/14/2016.
 */
public interface Converter {

    boolean isValidValue(String value);

    Object parseValue(String value);

    Class getSupportedType();
}
