package com.crossover.trial.properties.alext.parser;

import com.amazonaws.regions.Region;
import com.crossover.trial.properties.alext.parser.converts.Validator;

import java.util.List;

/**
 * Created by alex on 1/14/2016.
 */
public class PropertyParser {


    private final Validator[] validators;

    public PropertyParser( Validator[] validators) {

        this.validators = validators;
    }

    Property<?> parseProperty(String name, List<String> values){
        //Enum.valueOf()
        return null;
    }
}
