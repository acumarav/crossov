package com.crossover.trial.properties.alext.parser.converts;

/**
 * Created by alex on 1/14/2016.
 */
public interface Validator {

   boolean isValidValue(String value);

    Class getSupportedType();
}
