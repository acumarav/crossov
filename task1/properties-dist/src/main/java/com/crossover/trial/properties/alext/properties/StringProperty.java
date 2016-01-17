package com.crossover.trial.properties.alext.properties;

import com.crossover.trial.properties.alext.properties.BaseProperty;
import com.crossover.trial.properties.alext.properties.Property;

/**
 * Created by alex on 1/16/2016.
 */
public class StringProperty extends BaseProperty implements Property<String> {

    public StringProperty(String name) {
        super(name);
    }

    @Override
    public String getValue() {
        return null;
    }
}
