package com.crossover.trial.properties.alext.parser.converts;

import com.amazonaws.regions.Regions;
import com.crossover.trial.properties.alext.parser.Property;
import com.google.common.base.Preconditions;

/**
 * Created by tsumaraa on 15/01/2016.
 */
public class AwsRegionsPropertyParser implements PropertyParser<Regions> {
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
    public Property<Regions> parseValue(String name,String value) {
        Preconditions.checkNotNull(name);
        Preconditions.checkArgument(isValidValue(value));

        Regions regions = Regions.fromName(value);
        return new Property<Regions>(name,regions);

    }


}
