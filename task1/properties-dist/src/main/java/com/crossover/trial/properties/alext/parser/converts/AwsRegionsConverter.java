package com.crossover.trial.properties.alext.parser.converts;

import com.amazonaws.regions.Regions;

/**
 * Created by tsumaraa on 15/01/2016.
 */
public class AwsRegionsConverter implements Converter {
    @Override
    public boolean isValidValue(String value) {

        try{
            Regions parsedName = Regions.fromName(value);
            return parsedName!=null;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public Object parseValue(String value) {
        if(isValidValue(value)){
            return Regions.fromName(value);
        }
        return null;
    }

    @Override
    public Class getSupportedType() {
        return Regions.class;
    }
}
