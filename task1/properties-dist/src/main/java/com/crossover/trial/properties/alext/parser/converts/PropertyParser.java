package com.crossover.trial.properties.alext.parser.converts;

import com.crossover.trial.properties.alext.parser.Property;

/**
 * Created by alex on 1/14/2016.
 */
public interface PropertyParser<T> {

    boolean isValidValue(String value);

    Property<T> parseValue(String name,String value);

    default Class  getSupportedType(){return getClass().getGenericSuperclass().getClass();}
}
