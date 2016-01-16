package com.crossover.trial.properties.alext.parser;

/**
 * Created by alex on 1/14/2016.
 */
public class Property<T> {

    private final String name;
    private final T value;
    private final String originalValue;

    public Property(String name, T value, String originalValue) {
        this.name = name;
        this.value = value;
        this.originalValue = originalValue;
    }

    public String getName() {
        return name;
    }

    public T getValue() {
        return value;
    }

    public String getOriginalValue() {
        return originalValue;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Property property = (Property) o;

        if (name != null ? !name.equals(property.name) : property.name != null) return false;
        if (value != null ? !value.equals(property.value) : property.value != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + (value != null ? value.hashCode() : 0);
        return result;
    }

    public Class<?> getPropertyType() {
        return value.getClass();
    }
}
