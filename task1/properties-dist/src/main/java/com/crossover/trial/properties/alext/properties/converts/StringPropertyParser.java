package com.crossover.trial.properties.alext.properties.converts;

import com.crossover.trial.properties.alext.properties.BaseProperty;

/**
 * Created by alex on 1/16/2016.
 */
public class StringPropertyParser implements PropertyParser<String> {
    @Override
    public boolean isValidValue(String value) {
        return value !=null;
    }

    @Override
    public BaseProperty<String> parseValue(String name, String value) {
        return new BaseProperty<String>(name,value,value);
    }

    @Override
    public Class getSupportedType() {
        return String.class;
    }
}
