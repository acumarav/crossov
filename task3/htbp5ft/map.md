
<article>
    <header>        
        <script type="text/javascript" src="./js/iss/tracker_cut.js"></script>
        <script type="text/javascript" charset="UTF-8" src="./js/iss/common.js"></script>
		<script type="text/javascript" src="./js/iss/issviewinit.js"></script>
    </header>

    <section>
<div id="cover" style="display: none; height: 517.5px; max-width: 920px; width: 920px;">
        <div id="errmsg"></div>
    </div>
    <div id="isst" style="display: block;">
        <div id="isstwp">
            <div id="isstgap" style="height: 0px;">&nbsp;</div>
            <div id="isst_ls" style="height: 460px; background-color: rgb(34, 34, 34);">
                <canvas id="isst_map" style="z-index:0;" width="920" height="460"></canvas>
            </div>

            <div id="isst_dt" style="background-color: rgb(0, 84, 159);">
                <div class="isst_cl">Latitude</div>
                <div id="isst_lat" class="isst_cd">51,0 S</div>

                <div class="isst_cl">Longitude</div>
                <div id="isst_lon" class="isst_cd">53,0 E</div>

                <div class="isst_cl">Height</div>
                <div id="isst_alt" class="isst_cd">425 km</div>

                <div class="isst_cl">Time (GMT)</div>
                <div id="isst_tim" class="isst_cd">28 Jan 2016, 07:49:20</div>

                <div class="isst_cl">Speed</div>
                <div id="isst_spd" class="isst_cd">27553 km/h</div>

                <div>Metric / Imperial</div>
                <div id="btn_metric" onclick="javascript:changeMetric();"
                     style="width: 36.8px; height: 18.4px;">
                    <div id="btn_metric2"
                         style="width: 18.4px; height: 18.4px; left: 0px;"></div>
                </div>

                <div onclick="javascript:manageFullScreen();"><img id="btn_fs"
                                                                   src="./imgs/fullscreen.png"
                                                                   style="height: 27.6px; display: block;">
                </div>
                <div id="waitmsg" style="height: 57.408px; display: none;">
                    <div>Prease wait</div>
                </div>

            </div>

            <div id="isstgap2" style="height: 0px;">&nbsp;</div>
        </div>        
    </div>    
    </section>
</article>


