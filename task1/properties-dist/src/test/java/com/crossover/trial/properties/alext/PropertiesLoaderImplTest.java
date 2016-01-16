package com.crossover.trial.properties.alext;


import org.junit.Before;
import org.junit.Test;

import java.net.URI;
import java.net.URL;
import java.util.Properties;

import static org.junit.Assert.*;

/**
 * Created by alex on 1/16/2016.
 */
public class PropertiesLoaderImplTest {

    private PropertiesLoaderImpl loader;

    @Before
    public void setUp() {
        loader = new PropertiesLoaderImpl();
    }

    @Test
    public void testLoadFromPropertiesFile() throws Exception {

        Properties props = loader.loadResource("classpath:resources/jdbc.properties");

        assertNotNull(props);
        assertEquals(5, props.size());

        assertEquals("true", props.getProperty("JPA_SHOWSQL"));
    }

    @Test
    public void testLoadFromJsonFile() throws Exception {

        Properties props = loader.loadResource("classpath:resources/config.json");

        assertNotNull(props);
        assertEquals(5, props.size());

        assertEquals("false", props.get("jpa.showSql"));
    }

    @Test
    public void testLoadFromJsonURI() throws Exception {

        URL resourceUrl = PropertiesLoaderImplTest.class.getResource("/config.json");
        URI uri = resourceUrl.toURI();

        Properties props = loader.loadResource(uri.toASCIIString());

        assertNotNull(props);
        assertEquals(5, props.size());

        assertEquals("false", props.get("jpa.showSql"));
    }
}