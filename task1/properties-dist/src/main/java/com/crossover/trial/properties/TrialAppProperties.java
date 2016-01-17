package com.crossover.trial.properties;

import com.crossover.trial.properties.alext.properties.BooleanProperty;
import com.crossover.trial.properties.alext.properties.IntegerProperty;
import com.crossover.trial.properties.alext.properties.Property;
import com.crossover.trial.properties.alext.properties.StringProperty;
import org.apache.commons.lang3.StringUtils;

import java.util.*;
import java.util.stream.Collectors;

/**
 * A dummy implementation of TrialAppProperties, this clearly doesn't work. Candidates SHOULD change 
 * this class to add their implementation. You are also free to create additional classes
 *
 * note: a default constructor is required.
 *
 * @author code test administrator
 */
public class TrialAppProperties implements AppProperties {

    private final Set<Property> knownProperties;

    public TrialAppProperties(){
        this(new HashMap<>());
    }

    public TrialAppProperties(Map<String,List<String>> data){
        knownProperties=new HashSet<>();

        knownProperties.add(new StringProperty("jdbc_driver"));
        knownProperties.add(new StringProperty("jdbc_url"));
        knownProperties.add(new StringProperty("jdbc_username"));
        knownProperties.add(new StringProperty("jdbc_password"));
        knownProperties.add(new BooleanProperty("hibernate_generate_statistics"));
        knownProperties.add(new BooleanProperty("hibernate_show_sql"));
        knownProperties.add(new BooleanProperty("jpa_showsql"));

        knownProperties.add(new StringProperty("aws_access_key"));
        knownProperties.add(new StringProperty("aws_secret_key"));
        knownProperties.add(new IntegerProperty("aws_account_id"));
        knownProperties.add(new StringProperty("aws_region_id"));

        knownProperties.add(new StringProperty("auth_endpoint_uri"));
        knownProperties.add(new IntegerProperty("job_timeout"));
        knownProperties.add(new IntegerProperty("job_maxretry"));
        knownProperties.add(new StringProperty("sns_broadcast_topic_name"));
        knownProperties.add(new IntegerProperty("sns_broadcast_visibility_timeout"));
        knownProperties.add(new StringProperty("score_factor"));
        knownProperties.add(new BooleanProperty("jpa_showsql"));


        for(String propertyName: data.keySet()){
            Optional<Property> prop=findByName(propertyName);
            if(prop.isPresent()) {
                List<String> values = data.get(propertyName);
                String lastValue = values.get(values.size());
                prop.parseValue(lastValue);
            }
        }
    }

    private Optional<Property> findByName(String propertyName) {
        String normalizedName= StringUtils.trim(propertyName).toLowerCase().replace('.','_');

        Optional<Property> prop = knownProperties.stream().filter(p -> StringUtils.equalsIgnoreCase(propertyName, p.getName())).findFirst();

        return prop;
    }

    @Override
    public List<String> getMissingProperties() {
        return knownProperties.stream().filter(p->!p.isValid()).map(p->p.getName()).collect(Collectors.toList());
    }

    @Override
    public List<String> getKnownProperties() {
        return knownProperties.stream().map(p->p.getName()).collect(Collectors.toList());
    }

    @Override
    public boolean isValid() {
        knownProperties.stream().filter()
    }

    @Override
    public void clear() {
        for(Property prop:knownProperties){
            prop.reset();
        }

    }

    @Override
    public Object get(String key) {
        Optional<Property> prop = findByName(key);
        if(prop.isPresent()){
            return prop.get().getValue();
        }

        return null;
    }
}

