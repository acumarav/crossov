package com.crossover.trial.properties.alext.parser;

import com.amazonaws.regions.Regions;
import com.crossover.trial.properties.alext.parser.converts.AwsRegionsConverter;
import com.crossover.trial.properties.alext.parser.converts.BooleanConverter;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.*;

/**
 * Created by tsumaraa on 15/01/2016.
 */
public class PropertyParserTest {

    private PropertyParser parser=new PropertyParser(new AwsRegionsConverter(), new BooleanConverter());

    @Test
    public void testParseBoolOrStringProperty() throws Exception {
        Property boolProp = parser.parseProperty("boolProperty", Arrays.asList("true", "false"));
        Property stringProp = parser.parseProperty("stringProperty", Arrays.asList("true", "false","not bool"));

        assertNotNull(boolProp);
        assertEquals(Boolean.class,boolProp.getPropertyType());
        assertEquals("boolProperty",boolProp.getName());
        assertEquals(false,boolProp.getValue());

        assertNotNull(stringProp);
        assertEquals(String.class, stringProp.getPropertyType());
        assertEquals("stringProperty", stringProp.getName());
        assertEquals("not bool", stringProp.getValue());
    }


    @Test
    public void testParseAwsRegionsProperty(){

        Property awsProperty=parser.parseProperty("awsRegion",Arrays.asList("us-gov-west-1","us-east-1","us-west-1","us-west-2","eu-west-1","eu-central-1","ap-southeast-1","ap-southeast-2","ap-northeast-1","ap-northeast-2","sa-east-1","cn-north-1"));

        Property fakeAwsProperty=parser.parseProperty("fakeAwsRegion",Arrays.asList("N/A","us-gov-west-1","us-east-1","us-west-1","us-west-2","eu-west-1","eu-central-1","ap-southeast-1","ap-southeast-2","ap-northeast-1","ap-northeast-2","sa-east-1","cn-north-1"));

        assertNotNull(awsProperty);
        assertEquals(Regions.class, awsProperty.getPropertyType());
        assertEquals("awsRegion", awsProperty.getName());
        assertEquals("cn-north-1", awsProperty.getValue());

        assertNotNull(fakeAwsProperty);
        assertEquals(String.class, fakeAwsProperty.getPropertyType());
        assertEquals("fakeAwsRegion", fakeAwsProperty.getName());
        assertEquals("cn-north-1", fakeAwsProperty.getValue());
    }
}