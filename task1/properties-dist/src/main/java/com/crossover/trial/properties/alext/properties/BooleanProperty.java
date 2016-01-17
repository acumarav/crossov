package com.crossover.trial.properties.alext.properties;

/**
 * Created by alex on 1/16/2016.
 */
public class BooleanProperty extends BaseProperty implements Property<Boolean>  {

    public BooleanProperty(String name) {
        super(name, Boolean.class);
    }

    @Override
    public Boolean getValue() {
        return null;
    }
}
