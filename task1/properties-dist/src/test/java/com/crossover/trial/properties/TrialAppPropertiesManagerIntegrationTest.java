package com.crossover.trial.properties;

import com.crossover.trial.properties.alext.JsonPropertiesParser;
import com.crossover.trial.properties.alext.PropertiesLoaderImpl;
import org.junit.Test;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;

import static org.junit.Assert.*;

/**
 * Created by alex on 1/17/2016.
 */
public class TrialAppPropertiesManagerIntegrationTest {

    private JsonPropertiesParser parser=new JsonPropertiesParser();

    @Test
    public void testLoadClassPathPropertyFile(){
        TrialAppPropertiesManager manager=new TrialAppPropertiesManager(new PropertiesLoaderImpl(parser));

        AppProperties appProps = manager.loadProps(Arrays.asList("classpath:resources/jdbc.properties"));

        assertNotNull(appProps);
        assertEquals(17,appProps.getKnownProperties().size());
        assertEquals(12,appProps.getMissingProperties().size());

        manager.printProperties(appProps,System.out);
    }

    @Test
    public void testLoadClassPathFileUri() throws URISyntaxException {
        TrialAppPropertiesManager manager=new TrialAppPropertiesManager(new PropertiesLoaderImpl(parser));

        URI uri = this.getClass().getResource("/config.json").toURI();

        AppProperties appProps = manager.loadProps(Arrays.asList(uri.toString()));

        assertNotNull(appProps);
        assertEquals(17,appProps.getKnownProperties().size());
        System.out.println(appProps.getMissingProperties());
        assertEquals(12,appProps.getMissingProperties().size());

        manager.printProperties(appProps,System.out);
    }

}