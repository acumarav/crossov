package com.crossover.trial.properties.alext;

import com.crossover.trial.properties.AppProperties;

import java.util.List;

/**
 * Created by alex on 1/14/2016.
 */
public class ReadyAppProperties implements AppProperties {
    @Override
    public List<String> getMissingProperties() {
        return null;
    }

    @Override
    public List<?> getKnownProperties() {
        return null;
    }

    @Override
    public boolean isValid() {
        return false;
    }

    @Override
    public void clear() {

    }

    @Override
    public Object get(String key) {
        return null;
    }
}
