package com.crossover.trial.properties.alext.parser.converts;

import com.crossover.trial.properties.alext.parser.Property;
import com.google.common.base.Preconditions;
import org.apache.commons.lang3.StringUtils;

/**
 * Created by alex on 1/14/2016.
 */
public class BooleanPropertyParser implements PropertyParser<Boolean> {

    @Override
    public boolean isValidValue(String value) {
        String trimmedValue = StringUtils.trim(value);
        return StringUtils.equalsIgnoreCase(trimmedValue, "true") || StringUtils.equalsIgnoreCase(trimmedValue, "false");
    }


    @Override
    public Property<Boolean> parseValue(String name, String value) {

        Preconditions.checkNotNull(name);
        Preconditions.checkArgument(isValidValue(value));

        Boolean val = Boolean.valueOf(name);
        return new Property<Boolean>(name, val, value);
    }

}
