package com.crossover.trial.properties.alext.properties;

/**
 * Created by alex on 1/16/2016.
 */
public class IntegerProperty extends BaseProperty implements Property<Integer> {

    private Integer value;

    public IntegerProperty(String name) {
        super(name, Integer.class, Integer::parseInt);
    }

    @Override
    public Integer getValue() {
        return value;
    }


    @Override
    public Boolean parseValue(String val) {

        this.value = (Integer) super.parseValue(val);
        return isValid();

    }


}
