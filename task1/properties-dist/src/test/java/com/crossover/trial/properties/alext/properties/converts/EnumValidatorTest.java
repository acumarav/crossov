package com.crossover.trial.properties.alext.properties.converts;

import com.amazonaws.regions.Regions;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * Created by tsumaraa on 15/01/2016.
 */
public class EnumValidatorTest {

    private EnumPropertyParser enumParser = new EnumPropertyParser(Regions.class);
    private AwsRegionsPropertyParser awsRegionParser = new AwsRegionsPropertyParser();



    @Test
    public void testParseExistingEnumMemberQ() {
        assertTrue(enumParser.isValidValue("AP_NORTHEAST_2"));
        assertEquals(Regions.class, enumParser.getSupportedType());
    }

    @Test
    public void testParseExistingEnumMember() {
        assertTrue(awsRegionParser.isValidValue("us-gov-west-1"));
        assertTrue(awsRegionParser.isValidValue("us-east-1"));
        assertTrue(awsRegionParser.isValidValue("us-west-1"));
        assertTrue(awsRegionParser.isValidValue("us-west-2"));
        assertTrue(awsRegionParser.isValidValue("eu-west-1"));
        assertTrue(awsRegionParser.isValidValue("eu-central-1"));
        assertTrue(awsRegionParser.isValidValue("ap-southeast-1"));
        assertTrue(awsRegionParser.isValidValue("ap-southeast-2"));
        assertTrue(awsRegionParser.isValidValue("ap-northeast-1"));
        assertTrue(awsRegionParser.isValidValue("ap-northeast-2"));
        assertTrue(awsRegionParser.isValidValue("sa-east-1"));
        assertTrue(awsRegionParser.isValidValue("cn-north-1"));

        assertEquals(Regions.class, awsRegionParser.getSupportedType());
    }
}