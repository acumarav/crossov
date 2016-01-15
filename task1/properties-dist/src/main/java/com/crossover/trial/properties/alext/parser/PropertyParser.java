package com.crossover.trial.properties.alext.parser;

import com.crossover.trial.properties.alext.parser.converts.Converter;

import java.util.List;

/**
 * Created by alex on 1/14/2016.
 */
public class PropertyParser {

    private final Converter[] converters;

    public PropertyParser(Converter... converters) {

        this.converters = converters;
    }

    Property parseProperty(String name, List<String> values) {

        converter:
        for (Converter converter : converters) {

            for (String value : values) {
                if (!converter.isValidValue(value)) {
                    continue converter;
                }
            }
            Class supportedType = converter.getSupportedType();
            Object lastValue = converter.parseValue(values.get(values.size() - 1));
            return new Property(name, lastValue, supportedType);

        }

        //By Default any property can be string
        return new Property(name, values.get(values.size() - 1), String.class);

    }
}
