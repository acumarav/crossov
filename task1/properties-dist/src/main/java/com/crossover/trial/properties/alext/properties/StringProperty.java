package com.crossover.trial.properties.alext.properties;

import com.crossover.trial.properties.alext.properties.BaseProperty;
import com.crossover.trial.properties.alext.properties.Property;

/**
 * Created by alex on 1/16/2016.
 */
public class StringProperty extends BaseProperty implements Property<String> {

    private String stringValue;

    public StringProperty(String name) {
        super(name, String.class);
    }

    @Override
    public String getValue() {
        return stringValue;
    }

    @Override
    public Boolean parseValue(String value) {
        stringValue =value;
        return isValid();
    }

    @Override
    public Boolean isValid() {
        return stringValue!=null;
    }
}
