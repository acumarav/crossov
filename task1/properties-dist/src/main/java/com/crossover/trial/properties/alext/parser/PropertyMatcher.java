package com.crossover.trial.properties.alext.parser;

import com.crossover.trial.properties.alext.parser.converts.PropertyParser;

import java.util.List;

/**
 * Created by alex on 1/14/2016.
 */
public class PropertyMatcher {

    private final PropertyParser[] converters;

    public PropertyMatcher(PropertyParser... converters) {

        this.converters = converters;
    }

    Property parseProperty(String name, List<String> values) {

        converter:
        for (PropertyParser converter : converters) {

            for (String value : values) {
                if (!converter.isValidValue(value)) {
                    continue converter;
                }
            }

            return converter.parseValue(name, values.get(values.size() - 1));
        }

        //By Default any property can be string
        return new Property<String>(name, values.get(values.size() - 1));

    }
}
