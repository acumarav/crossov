package com.crossover.trial.properties.alext.parser.converts;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by tsumaraa on 15/01/2016.
 */
public class IntegerConverterTest {

    private IntegerPropertyParser parser = new IntegerPropertyParser();

    @Test
    public void testIsValidValue() throws Exception {
        assertTrue(parser.isValidValue("345"));
        assertTrue(parser.isValidValue("-34"));
        assertTrue(parser.isValidValue("+34"));
        assertTrue(parser.isValidValue(" 0 "));
        assertFalse(parser.isValidValue(" 0 0 "));
    }

    @Test
    public void testParseValue() throws Exception {
        assertEquals((Integer) (-34), parser.parseValue("t", "-34").getValue());
        assertEquals((Integer) 34, parser.parseValue("t", "+34").getValue());
    }

    @Test
    public void testGetSupportedType() throws Exception {
        assertEquals(Integer.class, parser.getSupportedType());
    }
}