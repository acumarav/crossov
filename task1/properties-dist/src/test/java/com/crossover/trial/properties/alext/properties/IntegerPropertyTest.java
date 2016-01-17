package com.crossover.trial.properties.alext.properties;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by tsumaraa on 15/01/2016.
 */
public class IntegerPropertyTest {

    private IntegerProperty intProp = new IntegerProperty("intProp");

    @Test
    public void testIsValidValue() throws Exception {
        assertTrue(intProp.parseValue("345"));
        assertTrue(intProp.parseValue("-34"));
        assertTrue(intProp.parseValue("+34"));
        assertTrue(intProp.parseValue(" 0 "));
        assertFalse(intProp.parseValue(" 0 0 "));
    }

    @Test
    public void testParseValue() throws Exception {
        intProp.parseValue( "-34");
        assertEquals((Integer) (-34), intProp.getValue());

        intProp.parseValue( "+34");
        assertEquals((Integer) 34, intProp.getValue());
    }

}