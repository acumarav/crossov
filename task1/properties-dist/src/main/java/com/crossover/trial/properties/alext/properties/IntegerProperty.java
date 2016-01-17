package com.crossover.trial.properties.alext.properties;

/**
 * Created by alex on 1/16/2016.
 */
public class IntegerProperty extends BaseProperty implements Property<Integer>  {

    public IntegerProperty(String name ) {
        super(name, Integer.class);
    }

    @Override
    public Integer getValue() {
        return null;
    }
}
