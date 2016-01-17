package com.crossover.trial.properties.alext.properties;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

/**
 * Created by alex on 1/14/2016.
 */
public abstract  class BaseProperty {

    private final String name;
    private final Class supportedType;

    public BaseProperty(String name, Class supportedType) {
        this.name = name;
        this.supportedType = supportedType;
    }


    public String getName() {
        return name;
    }

    public Class getSupportedType() {
        return supportedType;
    }

    public abstract Object getValue();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (!(o instanceof BooleanProperty)) return false;

        BooleanProperty that = (BooleanProperty) o;

        return new EqualsBuilder()
                .append(getSupportedType(), that.getSupportedType())
                .append(getName(), that.getName())
                .append(getValue(), that.getValue())
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
                .append(getSupportedType())
                .append(getName())
                .toHashCode();
    }

    @Override
    public String toString() {
        return ReflectionToStringBuilder.toString(this);
        //return String.format("%s, %s, %s",getName(),supportedType.getName(),getValue());
    }


}
