package com.crossover.trial.properties.alext.properties;

/**
 * Created by alex on 1/14/2016.
 */
public abstract  class BaseProperty {

    private final String name;
    private final Class supportedType;

    public BaseProperty(String name, Class supportedType) {
        this.name = name;

        this.supportedType = supportedType;
    }


    public String getName() {
        return name;
    }




}
