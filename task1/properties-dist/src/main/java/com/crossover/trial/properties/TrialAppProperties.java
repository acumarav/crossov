package com.crossover.trial.properties;

import com.crossover.trial.properties.alext.properties.IntegerProperty;
import com.crossover.trial.properties.alext.properties.Property;
import com.crossover.trial.properties.alext.properties.StringProperty;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * A dummy implementation of TrialAppProperties, this clearly doesn't work. Candidates SHOULD change 
 * this class to add their implementation. You are also free to create additional classes
 *
 * note: a default constructor is required.
 *
 * @author code test administrator
 */
public class TrialAppProperties implements AppProperties {

    private final Map<String,Property> knownProperties;

    public TrialAppProperties(){
        knownProperties=new HashMap<>();
        knownProperties.put("JDBC_DRIVER",new StringProperty());


        knownProperties.put("JDBC_DRIVER",new StringProperty());
        knownProperties.put("JDBC_URL",new StringProperty());
        knownProperties.put("JDBC_USERNAME",new StringProperty());
        knownProperties.put("JDBC_PASSWORD",new StringProperty());
        knownProperties.put("hibernate.generate_statistics",new BooleanProperty());
        knownProperties.put("hibernate.show_sql",new BooleanProperty());
        knownProperties.put("jpa.showSql", new BooleanProperty());

        knownProperties.put("aws_access_key",new StringProperty());
        knownProperties.put("aws_secret_key",new StringProperty());
        knownProperties.put("aws_account_id",new IntegerProperty());
        knownProperties.put("aws_region_id",new StringProperty());

        knownProperties.put("auth.endpoint.uri",new StringProperty());
        knownProperties.put("job.timeout",new IntegerProperty());
        knownProperties.put("job.maxretry",new IntegerProperty());
        knownProperties.put("sns.broadcast.topic_name",new StringProperty());
        knownProperties.put("sns.broadcast.visibility_timeout",new IntegerProperty());
        knownProperties.put("score.factor",new StringProperty());
        knownProperties.put("jpa.showSql",new BooleanProperty());


    }

    @Override
    public List<String> getMissingProperties() {
        return Collections.emptyList();
    }

    @Override
    public List<String> getKnownProperties() {
        return Collections.emptyList();
    }

    @Override
    public boolean isValid() {
        return true;
    }

    @Override
    public void clear() {

    }

    @Override
    public Object get(String key) {
        return "dummy";
    }
}

