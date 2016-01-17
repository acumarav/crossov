package com.crossover.trial.properties.alext.properties;

/**
 * Created by alex on 1/16/2016.
 */
public interface Property<T> {

    String getName();

    T getValue();

    Boolean parseValue(String value);

    Boolean isValid();

    default void reset() {
        parseValue(null);
    }

}
