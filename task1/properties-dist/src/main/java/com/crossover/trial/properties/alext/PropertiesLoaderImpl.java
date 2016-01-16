package com.crossover.trial.properties.alext;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Preconditions;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;

/**
 * Created by alex on 1/16/2016.
 */
public class PropertiesLoaderImpl implements PropertiesLoader {

    private static final Logger LOGGER = LoggerFactory.getLogger(PropertiesLoaderImpl.class);

    @Override
    public Properties loadResource(String resource) {

        Preconditions.checkNotNull(resource);

        Properties props = new Properties();

        try {

            InputStream ins = null;

            if (StringUtils.startsWithIgnoreCase(resource, "classpath:")) {
                String key = StringUtils.removeStartIgnoreCase(resource, "classpath:resources");
                ins = this.getClass().getResourceAsStream(key);
            } else {
                URI uri = URI.create(resource);
                byte[] content = IOUtils.toByteArray(uri);
                ins = new ByteArrayInputStream(content);
            }

            String ext = StringUtils.lowerCase(FilenameUtils.getExtension(resource));

            switch (ext) {
                case "json":

                    JsonFactory factory = new JsonFactory();
                    ObjectMapper mapper = new ObjectMapper(factory);
                    JsonNode rootNode = mapper.readTree(ins);

                    Iterator<Map.Entry<String, JsonNode>> fieldsIterator = rootNode.fields();

                    while (fieldsIterator.hasNext()) {

                        Map.Entry<String, JsonNode> field = fieldsIterator.next();

                        if (field.getValue() != null) {
                            props.put(field.getKey(), field.getValue().toString());
                        }
                    }

                    break;

                case "properties":
                    props.load(ins);
                    break;

                default:
                    LOGGER.error("unexpected file uri extension " + resource + " - " + ext);
                    break;
            }


        } catch (IOException e) {
            LOGGER.error("cannot load " + resource, e);
        }
        return props;

    }
}
