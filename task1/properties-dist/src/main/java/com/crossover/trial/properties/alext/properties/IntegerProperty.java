package com.crossover.trial.properties.alext.properties;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by alex on 1/16/2016.
 */
public class IntegerProperty extends BaseProperty implements Property<Integer> {

    private Integer value;
    private String stringValue;

    public IntegerProperty(String name) {
        super(name, Integer.class);
    }

    @Override
    public Integer getValue() {
        return value;
    }



    private static boolean isValidValue(String value) {

        try {
            Integer.parseInt(StringUtils.trim(value));
            return true;
        } catch (Exception e) {
            return false;
        }
    }


    @Override
    public Boolean parseValue(String val) {

        stringValue = val;

        if (isValidValue(stringValue)) {
            value = Integer.valueOf(StringUtils.trim(val));
            return true;
        } else {
            value = null;
            return false;
        }
    }

    @Override
    public Boolean isValid() {
        return isValidValue(stringValue);
    }
}
