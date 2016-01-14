package com.crossover.trial.properties.alext.parser;

/**
 * Created by alex on 1/14/2016.
 */
public class Property<T> {

    private final String name;
    private final T value;

    public Property(String name, T value) {
        this.name = name;
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Property<?> property = (Property<?>) o;

        if (!name.equals(property.name)) return false;
        return !(value != null ? !value.equals(property.value) : property.value != null);

    }

    @Override
    public int hashCode() {
        int result = name.hashCode();
        result = 31 * result + (value != null ? value.hashCode() : 0);
        return result;
    }
}
