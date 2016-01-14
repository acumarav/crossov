package com.crossover.trial.properties.alext.parser.converts;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by alex on 1/14/2016.
 */
public class BooleanValidator implements Validator {
    @Override
    public boolean isValidValue(String value) {
        String trimmedValue = StringUtils.trim(value);
        return StringUtils.equalsIgnoreCase(trimmedValue, "true") || StringUtils.equalsIgnoreCase(trimmedValue,"false");
    }

    @Override
    public Class getSupportedType() {
        return Boolean.class;
    }
}
