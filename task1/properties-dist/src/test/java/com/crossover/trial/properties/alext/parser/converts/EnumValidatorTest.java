package com.crossover.trial.properties.alext.parser.converts;

import com.amazonaws.regions.Regions;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * Created by tsumaraa on 15/01/2016.
 */
public class EnumValidatorTest {

    private EnumConverter enumValidator = new EnumConverter(Regions.class);
    private AwsRegionsConverter awsRegionValidator = new AwsRegionsConverter();

    @Test
    public void testGetSupportedClass() throws Exception {
        assertEquals(Regions.class, enumValidator.getSupportedType());
    }

    @Test
    public void testParseExistingEnumMemberQ() {
        assertTrue(enumValidator.isValidValue("AP_NORTHEAST_2"));
    }

    @Test
    public void testParseExistingEnumMember() {
        assertTrue(awsRegionValidator.isValidValue("us-gov-west-1"));
        assertTrue(awsRegionValidator.isValidValue("us-east-1"));
        assertTrue(awsRegionValidator.isValidValue("us-west-1"));
        assertTrue(awsRegionValidator.isValidValue("us-west-2"));
        assertTrue(awsRegionValidator.isValidValue("eu-west-1"));
        assertTrue(awsRegionValidator.isValidValue("eu-central-1"));
        assertTrue(awsRegionValidator.isValidValue("ap-southeast-1"));
        assertTrue(awsRegionValidator.isValidValue("ap-southeast-2"));
        assertTrue(awsRegionValidator.isValidValue("ap-northeast-1"));
        assertTrue(awsRegionValidator.isValidValue("ap-northeast-2"));
        assertTrue(awsRegionValidator.isValidValue("sa-east-1"));
        assertTrue(awsRegionValidator.isValidValue("cn-north-1"));
    }
}