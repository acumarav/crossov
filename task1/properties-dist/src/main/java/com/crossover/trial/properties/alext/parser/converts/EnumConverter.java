package com.crossover.trial.properties.alext.parser.converts;

import org.apache.commons.lang3.StringUtils;

import java.util.Map;
import java.util.TreeMap;

/**
 * Created by alex on 1/14/2016.
 */
public class EnumConverter implements Converter {

    private final Class<? extends Enum> enumType;
    private final Map<Enum, String> enumMembers;

    public EnumConverter(Class<? extends Enum> enumType) {
        this.enumType = enumType;

        enumMembers = new TreeMap<>();
        for (Enum member : enumType.getEnumConstants()) {
            enumMembers.put(member, member.name());
        }
    }


    @Override
    public boolean isValidValue(String value) {
        Enum parsed = findEnumMemberByName(value);

        return parsed != null;
    }

    @Override
    public Object parseValue(String value) {
        if(isValidValue(value)){
            return findEnumMemberByName(value);
        }
        return null;
    }

    private Enum findEnumMemberByName(String name) {
        for (Enum member : enumMembers.keySet()) {
            String memberName = enumMembers.get(member);
            if (StringUtils.equalsIgnoreCase(memberName, name)) {
                return member;
            }
        }
        return null;
    }

    /*private static <T extends Enum<T>> T getEnumFromString(Class<T> c, String string) {
        if (c != null && string != null) {
            try {
                return Enum.valueOf(c, string.trim());
            } catch (IllegalArgumentException ex) {
            }
        }
        return null;
    }*/

    @Override
    public Class getSupportedType() {
        return enumType;
    }
}
