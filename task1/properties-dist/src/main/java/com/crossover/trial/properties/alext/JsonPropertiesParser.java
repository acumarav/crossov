package com.crossover.trial.properties.alext;

import com.amazonaws.util.json.JSONException;
import com.amazonaws.util.json.JSONObject;
import org.apache.commons.io.IOUtils;

import javax.script.ScriptException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by tsumaraa on 26/01/2016.
 */
public class JsonPropertiesParser {

   /* public Map<String, String> parse(InputStream ins) throws IOException, ScriptException {
        ScriptEngineManager sem = new ScriptEngineManager();
        ScriptEngine jsEngine = sem.getEngineByName("javascript");

        String rawjs = IOUtils.toString(ins);
        String script = String.format("Java.asJSONCompatible(  %s  );", rawjs);
        Object result = jsEngine.eval(script);
        Map content = (Map) result;
        return content;
    }*/

    public Map<String, String> parse(InputStream ins) throws IOException, ScriptException, JSONException {

        String rawjs = IOUtils.toString(ins);
        JSONObject jso = new JSONObject(rawjs);

        HashMap<String, String> map = new HashMap<>();

        for (int index = 0; index < jso.length(); index++) {
            String key = jso.names().getString(index);
            String value = jso.getString(key);
            map.put(key, value);
        }
        return map;
    }
}
