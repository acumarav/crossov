package com.crossover.trial.properties.alext.properties;

/**
 * Created by alex on 1/17/2016.
 */
public class DoubleProperty extends BaseProperty implements Property<Double> {

    private Double propValue;
    private String originalValue;

    public DoubleProperty(String name) {
        super(name, Double.class);
    }

    @Override
    public Double getValue() {
        return propValue;
    }

    @Override
    public Boolean parseValue(String value) {

        originalValue=value;
        if(isValidValue(originalValue)){
            propValue=Double.parseDouble(originalValue);
            return true;
        }
        else {
            propValue=null;
            return false;
        }
    }

    @Override
    public Boolean isValid() {
        return isValidValue(originalValue);
    }

    private static boolean isValidValue(String value){
        try{
            double dbl=Double.parseDouble(value);
            return true;
        }
        catch (Exception ex){
            return false;
        }
    }

}
