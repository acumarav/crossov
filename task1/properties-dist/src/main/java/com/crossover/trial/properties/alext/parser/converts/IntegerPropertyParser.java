package com.crossover.trial.properties.alext.parser.converts;

import com.crossover.trial.properties.alext.parser.Property;
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
    public Property<Integer> parseValue(String name, String value) {

        Preconditions.checkNotNull(name);
        Preconditions.checkArgument(isValidValue(value));

        Integer val = Integer.valueOf(StringUtils.trim(value));
        return new Property<Integer>(name, val, value);
    }


}
