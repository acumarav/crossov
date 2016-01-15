package com.crossover.trial.properties.alext.parser.converts;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by alex on 1/14/2016.
 */
public class BooleanConverter implements Converter {
    @Override
    public boolean isValidValue(String value) {
        String trimmedValue = StringUtils.trim(value);
        return StringUtils.equalsIgnoreCase(trimmedValue, "true") || StringUtils.equalsIgnoreCase(trimmedValue,"false");
    }

    @Override
    public Object parseValue(String value) {
        if(isValidValue(value)){
            return Boolean.valueOf(value);
        }
        return null;
    }

    @Override
    public Class getSupportedType() {
        return Boolean.class;
    }
}
