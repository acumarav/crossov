package com.crossover.trial.properties;

import com.crossover.trial.properties.alext.PropertiesLoader;
import com.crossover.trial.properties.alext.parser.PropertyMatcher;
import com.google.common.base.Preconditions;

import java.io.PrintStream;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;

/**
 * A simple main method to load and print properties. You should feel free to change this class
 * or to create additional class. You may add addtional methods, but must implement the
 * AppPropertiesManager API contract.
 * <p>
 * Note: a default constructor is required
 *
 * @author code test administrator
 */
public class TrialAppPropertiesManager implements AppPropertiesManager {

    private final PropertiesLoader loader;

    private final PropertyMatcher propertyMatcher;

    public TrialAppPropertiesManager(PropertiesLoader loader, PropertyMatcher propertyMatcher) {
        this.propertyMatcher = propertyMatcher;
        Preconditions.checkNotNull(loader);
        this.loader = loader;
    }

    @Override
    public AppProperties loadProps(List<String> propUris) {

        HashMap<String, List<String>> map = new HashMap<>();
        for (String uri : propUris) {
            Properties props = loader.loadResource(uri);
            mergeProperties(map, props);
        }

        return new TrialAppProperties();
    }

    private void mergeProperties(HashMap<String, List<String>> map, Properties props) {
        for (String key : props.stringPropertyNames()) {
            String value = props.getProperty(key);

            if (map.containsKey(key)) {
                List<String> values = map.get(key);
                values.add(key);
            } else {
                map.put(key, Arrays.asList(value));
            }
        }
    }

    @Override
    public void printProperties(AppProperties props, PrintStream sync) {
        sync.println(props);
    }
}
