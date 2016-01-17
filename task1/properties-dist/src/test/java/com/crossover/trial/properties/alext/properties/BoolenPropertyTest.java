package com.crossover.trial.properties.alext.properties;

import com.amazonaws.regions.Regions;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;

/**
 * Created by tsumaraa on 15/01/2016.
 */
public class BoolenPropertyTest {

    @Test
    public void testParseBoolProperty() throws Exception {

        Property<Boolean> boolProp=new BooleanProperty("test");

        boolProp.parseValue("true");

        assertEquals("test",boolProp.getName());
        assertEquals(true,boolProp.getValue());
        assertEquals(true,boolProp.isValid());

        boolProp.reset();
        assertEquals(false,boolProp.isValid());
        assertEquals(null,boolProp.getValue());
    }

}