package com.crossover.trial.properties.alext.properties;

import com.amazonaws.regions.Regions;

/**
 * Created by alex on 1/17/2016.
 */
public class AwsRegionsProperty extends BaseProperty implements Property<Regions> {

    private Regions propValue;
    private String originalValue;

    public AwsRegionsProperty(String name) {
        super(name, Regions.class);
    }

    public static boolean isValidValue(String value) {
        try {
            Regions parsedName = Regions.fromName(value);
            return parsedName != null;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public Boolean parseValue(String value) {

        originalValue = value;

        if (isValidValue(originalValue)) {
            propValue = Regions.fromName(value);
            return true;
        } else {
            propValue = null;
            return false;
        }
    }

    @Override
    public Regions getValue() {
        return propValue;
    }

    @Override
    public Boolean isValid() {
        return isValidValue(originalValue);
    }
}
