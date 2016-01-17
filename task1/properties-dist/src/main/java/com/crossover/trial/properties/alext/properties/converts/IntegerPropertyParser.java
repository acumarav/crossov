package com.crossover.trial.properties.alext.properties.converts;

import com.crossover.trial.properties.alext.properties.BaseProperty;
import com.google.common.base.Preconditions;
import org.apache.commons.lang3.StringUtils;

/**
 * Created by alex on 1/14/2016.
 */
public class IntegerPropertyParser implements PropertyParser<Integer> {
    @Override
    public boolean isValidValue(String value) {

        try {
            Integer.parseInt(StringUtils.trim(value));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public BaseProperty<Integer> parseValue(String name, String value) {

        Preconditions.checkNotNull(name);
        Preconditions.checkArgument(isValidValue(value));

        Integer val = Integer.valueOf(StringUtils.trim(value));
        return new BaseProperty<Integer>(name, val, value);
    }

    @Override
    public Class getSupportedType() {
        return Integer.class;
    }


}
