package com.crossover.trial.properties.alext.parser.converts;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by tsumaraa on 15/01/2016.
 */
public class IntegerConverterTest {

    private IntegerConverter converter=new IntegerConverter();
    @Test
    public void testIsValidValue() throws Exception {
        assertTrue(converter.isValidValue("345"));
        assertTrue(converter.isValidValue("-34"));
        assertTrue(converter.isValidValue("+34"));
        assertTrue(converter.isValidValue(" 0 "));
        assertFalse(converter.isValidValue(" 0 0 "));
    }

    @Test
    public void testParseValue() throws Exception {
        assertEquals(-34,converter.parseValue("-34"));
        assertEquals(34,converter.parseValue("+34"));
    }

    @Test
    public void testGetSupportedType() throws Exception {
        assertEquals(Integer.class, converter.getSupportedType());
    }
}