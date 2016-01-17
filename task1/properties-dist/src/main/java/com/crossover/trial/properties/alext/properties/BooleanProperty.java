package com.crossover.trial.properties.alext.properties;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by alex on 1/16/2016.
 */
public class BooleanProperty extends BaseProperty implements Property<Boolean> {

    private Boolean value;
    private String stringValue;

    public BooleanProperty(String name) {
        super(name, Boolean.class);
    }

    private static boolean isValidValue(String value) {
        String trimmedValue = StringUtils.trim(value);
        return StringUtils.equalsIgnoreCase(trimmedValue, "true") || StringUtils.equalsIgnoreCase(trimmedValue, "false");
    }

    @Override
    public Boolean parseValue(String val) {

        stringValue = val;
        if (isValidValue(val)) {
            value = Boolean.valueOf(stringValue);
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

    @Override
    public Boolean getValue() {
        return value;
    }


}
