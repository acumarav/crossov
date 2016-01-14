package com.crossover.trial.properties.alext.parser.converts;

import com.amazonaws.regions.Region;

/**
 * Created by alex on 1/14/2016.
 */
public class EnumParser<E extends Enum<E>> implements Validator {

    public EnumParser(E enumType) {
    }

    @Override
    public boolean isValidValue(String value) {

En
       E.valueOf(Enum<E extends Enum<E>>., value);

    }

    @Override
    public Class getSupportedType() {
        //return get Enum<E>;

        return Enum<E extends Enum<E>>;
    }
}
