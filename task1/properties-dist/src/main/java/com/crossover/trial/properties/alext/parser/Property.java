package com.crossover.trial.properties.alext.parser;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import java.util.Objects;
import java.util.Properties;

/**
 * Created by alex on 1/14/2016.
 */
public class Property {

    private final String name;
    private final Object value;
    private final Class propertyType;

    public Property(String name, Object value, Class propertyType) {
        this.name = name;
        this.value = value;
        this.propertyType = propertyType;
    }


    public String getName() {
        return name;
    }

    public Object getValue() {
        return value;
    }

    public Class getPropertyType() {
        return propertyType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (o == null || getClass() != o.getClass()) return false;

        Property property = (Property) o;

        return new EqualsBuilder()
                .append(name, property.name)
                .append(value, property.value)
                .append(propertyType, property.propertyType)
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
                .append(name)
                .append(value)
                .append(propertyType)
                .toHashCode();
    }
}
