package com.crossover.trial.properties.alext.properties;

import com.amazonaws.regions.Regions;

/**
 * Created by alex on 1/17/2016.
 */
public class AwsRegionsProperty extends BaseProperty implements Property<Regions> {

    private Regions propValue;


    public AwsRegionsProperty(String name) {
        super(name, Regions.class, Regions::fromName);
    }

    @Override
    public Boolean parseValue(String value) {
        propValue = (Regions) super.parseValue(value);
        return isValid();
    }

    @Override
    public Regions getValue() {
        return propValue;
    }

}
