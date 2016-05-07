package org.issview;

import org.apache.commons.io.IOUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Date;

/**
 * Created by alex on 5/7/2016.
 */
@WebServlet(urlPatterns = {"/tle"})
public class TleServlet extends HttpServlet {

    private static final long MILLI_PER_HOUR = 60 * 60 * 1000;
    private static long lastUpdate = 0;
    private static String lastTle = null;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long now = new Date().getTime();
        if (now - lastUpdate > MILLI_PER_HOUR) {
            String url = "http://wsn.spaceflight.esa.int/iss/tledata.txt?r=" + now;
            InputStream in = new URL(url).openStream();
            try {
                lastTle = IOUtils.toString(in, StandardCharsets.US_ASCII);
                lastUpdate = now;
            } finally {
                IOUtils.closeQuietly(in);
            }
        }
        resp.getWriter().append(lastTle);
        //resp.getWriter().append("\n"+lastUpdate);
    }
}
