package com.crossover.trial.properties.alext.parser.converts;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by alex on 1/14/2016.
 */
public class IntegerConverter implements Converter {
    @Override
    public boolean isValidValue(String value) {

        try {
            Integer.parseInt(StringUtils.trim(value));
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public Object parseValue(String value) {
        if(isValidValue(value)){
            return Integer.valueOf(StringUtils.trim(value));
        }
        return null;
    }

    @Override
    public Class getSupportedType() {
        return Integer.class;
    }
}
