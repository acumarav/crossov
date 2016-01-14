package com.crossover.trial.properties.alext.parser.converts;

/**
 * Created by alex on 1/14/2016.
 */
public class IntegerValidator implements Validator {
    @Override
    public boolean isValidValue(String value) {

        try {
            Integer.parseInt(value);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public Class getSupportedType() {
        return Integer.class;
    }
}
