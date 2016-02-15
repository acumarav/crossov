
<article>
    <header>
        <script type="text/javascript" charset="UTF-8" src="./js/iss/js.js"></script>
        <script async="" src="./js/iss/analytics.js"></script>
        <script type="text/javascript" charset="UTF-8" src="./js/iss/common.js"></script>
        <script type="text/javascript" charset="UTF-8" src="./js/iss/util.js"></script>
        <script type="text/javascript" charset="UTF-8" src="./js/iss/stats.js"></script>
        <script type="text/javascript" charset="UTF-8" src="./js/iss/map.js"></script>
        <script type="text/javascript" charset="UTF-8" src="./js/iss/marker.js"></script>
        <script type="text/javascript" charset="UTF-8" src="./js/iss/onion.js"></script>
        <script type="text/javascript" charset="UTF-8" src="./js/iss/controls.js"></script>
        <script type="text/javascript" src="./js/iss/tracker.js"/>

        <!--anti iframe-->
        <script type="text/javascript">
            debugger;
            alert("hello");
            log("init map");
            $(document).ready(function(){
                log("init map");
                issTracker_init();
            });

            $(window).on('resize', function(){
                log.("subscribing to resize");
                issTrackerResize();
            });

        </script>
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
            <div id="isst_dt" style="height: 57.408px; background-color: rgb(0, 84, 159);">
                <table height="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                    <tr>
                        <td>
                            <div class="isst_cl">Широта</div>
                            <div id="isst_lat" class="isst_cd">51,0 S</div>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <div class="isst_cl">Долгота</div>
                            <div id="isst_lon" class="isst_cd">53,0 E</div>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <div class="isst_cl">Высота</div>
                            <div id="isst_alt" class="isst_cd">425 km</div>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <div class="isst_cl">Скорость</div>
                            <div id="isst_spd" class="isst_cd">27553 km/h</div>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <div class="isst_cl">Время (GMT)</div>
                            <div id="isst_tim" class="isst_cd">28 Jan 2016, 07:49:20</div>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <table cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td>
                                        Метрика / Империал&nbsp;&nbsp;
                                    </td>
                                    <td>
                                        <div id="btn_metric" onclick="javascript:changeMetric();"
                                             style="width: 36.8px; height: 18.4px;">
                                            <div id="btn_metric2"
                                                 style="width: 18.4px; height: 18.4px; left: 0px;"></div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>
                            <div onclick="javascript:manageFullScreen();"><img id="btn_fs"
                                                                               src="./imgs/fullscreen.png"
                                                                               style="height: 27.6px; display: block;">
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id="waitmsg" style="height: 57.408px; display: none;">
                    <div><br>Пожалуйста, подождите...</div>
                </div>
            </div>
            <div id="isstgap2" style="height: 0px;">&nbsp;</div>
        </div>
        <div>
            <div id="map_canvas"
                 style="height: 220px; position: relative; overflow: hidden; transform: translateZ(0px); background-color: rgb(229, 227, 223);">
                <div class="gm-style"
                     style="position: absolute; left: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: 0;">
                    <div style="position: absolute; left: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: 0; cursor: url(http://maps.gstatic.com/mapfiles/openhand_8_8.cur) 8 8, default;">
                        <div style="position: absolute; left: 0px; top: 0px; z-index: 1; width: 100%; transform-origin: 460px 140px 0px; transform: matrix(1, 0, 0, 1, -258, -72);">
                            <div style="transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;">
                                <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                                    <div aria-hidden="true"
                                         style="position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;">
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 279px; top: -120px;"></div>
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 279px; top: 136px;"></div>
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 23px; top: -120px;"></div>
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 23px; top: 136px;"></div>
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 535px; top: -120px;"></div>
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 535px; top: 136px;"></div>
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 791px; top: -120px;"></div>
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 791px; top: 136px;"></div>
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 1047px; top: -120px;"></div>
                                        <div style="width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 1047px; top: 136px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div style="transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div>
                            <div style="transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div>
                            <div style="transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;">
                                <div style="position: absolute; left: 0px; top: 0px; z-index: -1;">
                                    <div aria-hidden="true"
                                         style="position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;">
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 279px; top: -120px;">
                                            <canvas draggable="false" height="256" width="256"
                                            style="-webkit-user-select: none; position: absolute; left: 0px; top: 0px; height: 256px; width: 256px;"></canvas>
                                        </div>
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 279px; top: 136px;">
                                            <canvas draggable="false" height="256" width="256"
                                            style="-webkit-user-select: none; position: absolute; left: 0px; top: 0px; height: 256px; width: 256px;"></canvas>
                                        </div>
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 23px; top: -120px;"></div>
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 23px; top: 136px;"></div>
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 535px; top: -120px;">
                                            <canvas draggable="false" height="256" width="256"
                                            style="-webkit-user-select: none; position: absolute; left: 0px; top: 0px; height: 256px; width: 256px;"></canvas>
                                        </div>
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 535px; top: 136px;">
                                            <canvas draggable="false" height="256" width="256"
                                            style="-webkit-user-select: none; position: absolute; left: 0px; top: 0px; height: 256px; width: 256px;"></canvas>
                                        </div>
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 791px; top: -120px;"></div>
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 791px; top: 136px;"></div>
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 1047px; top: -120px;"></div>
                                        <div style="width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 1047px; top: 136px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                                <div aria-hidden="true"
                                     style="position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;">
                                    <div style="transform: translateZ(0px); position: absolute; left: 279px; top: -120px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/kh" draggable="false" alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;"><img
                                        src="./imgs/vt" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;">
                                    </div>
                                    <div style="transform: translateZ(0px); position: absolute; left: 279px; top: 136px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/kh(1)" draggable="false"
                                             alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;"><img
                                        src="./imgs/vt(1)" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;">
                                    </div>
                                    <div style="transform: translateZ(0px); position: absolute; left: 23px; top: -120px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/kh(2)" draggable="false"
                                             alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;"><img
                                        src="./imgs/vt(2)" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;">
                                    </div>
                                    <div style="transform: translateZ(0px); position: absolute; left: 23px; top: 136px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/kh(3)" draggable="false"
                                             alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;"><img
                                        src="./imgs/vt(3)" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;">
                                    </div>
                                    <div style="transform: translateZ(0px); position: absolute; left: 535px; top: -120px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/kh(4)" draggable="false"
                                             alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;"><img
                                        src="./imgs/vt(4)" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;">
                                    </div>
                                    <div style="transform: translateZ(0px); position: absolute; left: 535px; top: 136px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/kh(5)" draggable="false"
                                             alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;"><img
                                        src="./imgs/vt(5)" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;">
                                    </div>
                                    <div style="transform: translateZ(0px); position: absolute; left: 791px; top: -120px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/kh(6)" draggable="false"
                                             alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;"><img
                                        src="./imgs/vt(6)" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;">
                                    </div>
                                    <div style="transform: translateZ(0px); position: absolute; left: 791px; top: 136px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/kh(7)" draggable="false"
                                             alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;"><img
                                        src="./imgs/vt(7)" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;">
                                    </div>
                                    <div style="transform: translateZ(0px); position: absolute; left: 1047px; top: -120px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/vt(8)" draggable="false"
                                             alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;"><img
                                        src="./imgs/kh(8)" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;">
                                    </div>
                                    <div style="transform: translateZ(0px); position: absolute; left: 1047px; top: 136px; transition: opacity 200ms ease-out; -webkit-transition: opacity 200ms ease-out;">
                                        <img src="./imgs/vt(9)" draggable="false"
                                             alt=""
                                             style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 1;"><img
                                        src="./imgs/kh(9)" draggable="false" alt=""
                                        style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; z-index: 0;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute; left: 0px; top: 0px; z-index: 2; width: 100%; height: 100%;"></div>
                        <div style="position: absolute; left: 0px; top: 0px; z-index: 3; width: 100%; transform-origin: 460px 140px 0px; transform: matrix(1, 0, 0, 1, -258, -72);">
                            <div style="transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div>
                            <div style="transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div>
                            <div style="transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"></div>
                            <div style="transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div>
                        </div>
                    </div>
                    <div style="padding: 15px 21px; border: 1px solid rgb(171, 171, 171); font-family: Roboto, Arial, sans-serif; color: rgb(34, 34, 34); -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; z-index: 10000002; display: none; width: 256px; height: 148px; position: absolute; left: 310px; top: 50px; background-color: white;">
                        <div style="padding: 0px 0px 10px; font-size: 16px;">Map Data</div>
                        <div style="font-size: 13px;">Map data ©2016 Imagery ©2016 NASA</div>
                        <div style="width: 13px; height: 13px; overflow: hidden; position: absolute; opacity: 0.7; right: 12px; top: 12px; z-index: 10000; cursor: pointer;">
                            <img src="./imgs/mapcnt6.png" draggable="false"
                                 style="position: absolute; left: -2px; top: -336px; width: 59px; height: 492px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                        </div>
                    </div>
                    <div class="gmnoprint"
                         style="z-index: 1000001; position: absolute; right: 72px; bottom: 0px; width: 187px;">
                        <div draggable="false" class="gm-style-cc"
                             style="-webkit-user-select: none; height: 14px; line-height: 14px;">
                            <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                                <div style="width: 1px;"></div>
                                <div style="width: auto; height: 100%; margin-left: 1px; background-color: rgb(245, 245, 245);"></div>
                            </div>
                            <div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;">
                                <a style="color: rgb(68, 68, 68); text-decoration: none; cursor: pointer; display: none;">Map
                                    Data</a><span style="">Map data ©2016  Imagery ©2016 NASA</span></div>
                        </div>
                    </div>
                    <div class="gmnoscreen" style="position: absolute; right: 0px; bottom: 0px;">
                        <div style="font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(68, 68, 68); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);">
                            Map data ©2016 Imagery ©2016 NASA
                        </div>
                    </div>
                    <div class="gmnoprint gm-style-cc" draggable="false"
                         style="z-index: 1000001; -webkit-user-select: none; height: 14px; line-height: 14px; position: absolute; right: 0px; bottom: 0px;">
                        <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                            <div style="width: 1px;"></div>
                            <div style="width: auto; height: 100%; margin-left: 1px; background-color: rgb(245, 245, 245);"></div>
                        </div>
                        <div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;">
                            <a href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank"
                            style="text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);">Terms of Use</a>
                        </div>
                    </div>
                    <div style="width: 25px; height: 25px; margin-top: 10px; overflow: hidden; display: none; margin-right: 14px; position: absolute; top: 0px; right: 0px;">
                        <img src="./imgs/sv5.png" draggable="false"
                             class="gm-fullscreen-control"
                             style="position: absolute; left: -52px; top: -86px; width: 164px; height: 112px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;">
                    </div>
                    <div draggable="false" class="gm-style-cc"
                         style="-webkit-user-select: none; height: 14px; line-height: 14px; display: none; position: absolute; right: 0px; bottom: 0px;">
                        <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
                            <div style="width: 1px;"></div>
                            <div style="width: auto; height: 100%; margin-left: 1px; background-color: rgb(245, 245, 245);"></div>
                        </div>
                        <div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;">
                            <a target="_new" title="Report errors in the road map or imagery to Google"
                               href="https://www.google.com/maps/@-51.0609305,53.0353005,5z/data=!3m1!1e3!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                            style="font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); text-decoration: none; position: relative;">Report
                                a map error</a></div>
                    </div>
                    <div class="gmnoprint" draggable="false" controlwidth="28" controlheight="93"
                         style="margin: 10px; -webkit-user-select: none; position: absolute; bottom: 107px; right: 28px;">
                        <div class="gmnoprint" controlwidth="28" controlheight="55"
                             style="position: absolute; left: 0px; top: 38px;">
                            <div draggable="false"
                                 style="-webkit-user-select: none; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; width: 28px; height: 55px; background-color: rgb(255, 255, 255);">
                                <div title="Zoom in"
                                     style="position: relative; width: 28px; height: 27px; left: 0px; top: 0px;">

                                    <div style="overflow: hidden; position: absolute; width: 15px; height: 15px; left: 7px; top: 6px;">
                                        <img src="./imgs/tmapctrl.png"
                                             draggable="false"
                                             style="position: absolute; left: 0px; top: 0px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; width: 120px; height: 54px;">
                                    </div>
                                </div>
                                <div style="position: relative; overflow: hidden; width: 67%; height: 1px; left: 16%; top: 0px; background-color: rgb(230, 230, 230);"></div>
                                <div title="Zoom out"
                                     style="position: relative; width: 28px; height: 27px; left: 0px; top: 0px;">
                                    <div style="overflow: hidden; position: absolute; width: 15px; height: 15px; left: 7px; top: 6px;">
                                        <img src="./imgs/tmapctrl.png"
                                             draggable="false"
                                             style="position: absolute; left: 0px; top: -15px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; width: 120px; height: 54px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gm-svpc" controlwidth="28" controlheight="28"
                             style="-webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-radius: 2px; width: 28px; height: 28px; cursor: url(http://maps.gstatic.com/mapfiles/openhand_8_8.cur) 8 8, default; position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255);">
                            <div style="position: absolute; left: 1px; top: 1px;"></div>
                            <div style="position: absolute; left: 1px; top: 1px;">
                                <div aria-label="Street View Pegman Control"
                                     style="width: 26px; height: 26px; overflow: hidden; position: absolute; left: 0px; top: 0px;">
                                    <img src="./imgs/cb_scout5.png" draggable="false"
                                         style="position: absolute; left: -147px; top: -26px; width: 215px; height: 835px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                                </div>
                                <div aria-label="Pegman is on top of the Map"
                                     style="width: 26px; height: 26px; overflow: hidden; position: absolute; left: 0px; top: 0px; visibility: hidden;">
                                    <img src="./imgs/cb_scout5.png" draggable="false"
                                         style="position: absolute; left: -147px; top: -52px; width: 215px; height: 835px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                                </div>
                                <div aria-label="Street View Pegman Control"
                                     style="width: 26px; height: 26px; overflow: hidden; position: absolute; left: 0px; top: 0px; visibility: hidden;">
                                    <img src="./imgs/cb_scout5.png" draggable="false"
                                         style="position: absolute; left: -147px; top: -78px; width: 215px; height: 835px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                                </div>
                            </div>
                        </div>
                        <div class="gmnoprint" controlwidth="28" controlheight="0"
                             style="display: none; position: absolute;">
                            <div title="Rotate map 90 degrees"
                                 style="width: 28px; height: 28px; overflow: hidden; position: absolute; border-radius: 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; cursor: pointer; display: none; background-color: rgb(255, 255, 255);">
                                <img src="./imgs/tmapctrl4.png" draggable="false"
                                     style="position: absolute; left: -141px; top: 6px; width: 170px; height: 54px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                            </div>
                            <div class="gm-tilt"
                                 style="width: 28px; height: 28px; overflow: hidden; position: absolute; border-radius: 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; top: 0px; cursor: pointer; background-color: rgb(255, 255, 255);">
                                <img src="./imgs/tmapctrl4.png" draggable="false"
                                     style="position: absolute; left: -141px; top: -13px; width: 170px; height: 54px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                            </div>
                        </div>
                    </div>
                    <div class="gmnoprint"
                         style="margin: 10px; z-index: 0; position: absolute; cursor: pointer; left: 0px; top: 0px;">
                        <div class="gm-style-mtc" style="float: left;">
                            <div draggable="false" title="Show street map"
                                 style="direction: ltr; overflow: hidden; text-align: center; position: relative; color: rgb(86, 86, 86); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; padding: 8px; border-bottom-left-radius: 2px; border-top-left-radius: 2px; -webkit-background-clip: padding-box; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; min-width: 22px; background-color: rgb(255, 255, 255); background-clip: padding-box;">
                                Map
                            </div>
                            <div style="z-index: -1; padding: 2px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; position: absolute; left: 0px; top: 29px; text-align: left; display: none; background-color: white;">
                                <div draggable="false" title="Show street map with terrain"
                                     style="color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; padding: 6px 8px 6px 6px; direction: ltr; text-align: left; white-space: nowrap; background-color: rgb(255, 255, 255);">
                                    <span role="checkbox"
                                          style="box-sizing: border-box; position: relative; line-height: 0; font-size: 0px; margin: 0px 5px 0px 0px; display: inline-block; border: 1px solid rgb(198, 198, 198); border-radius: 1px; width: 13px; height: 13px; vertical-align: middle; background-color: rgb(255, 255, 255);"><div
                                            style="position: absolute; left: 1px; top: -2px; width: 13px; height: 11px; overflow: hidden; display: none;">
                                        <img src="./imgs/imgs8.png" draggable="false"
                                             style="position: absolute; left: -52px; top: -44px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; width: 68px; height: 67px;">
                                    </div></span><label style="vertical-align: middle; cursor: pointer;">Terrain</label>
                                </div>
                            </div>
                        </div>
                        <div class="gm-style-mtc" style="float: left;">
                            <div draggable="false" title="Show satellite imagery"
                                 style="direction: ltr; overflow: hidden; text-align: center; position: relative; color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; padding: 8px; border-bottom-right-radius: 2px; border-top-right-radius: 2px; -webkit-background-clip: padding-box; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-left-width: 0px; min-width: 40px; font-weight: 500; background-color: rgb(255, 255, 255); background-clip: padding-box;">
                                Satellite
                            </div>
                            <div style="z-index: -1; padding: 2px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; position: absolute; right: 0px; top: 29px; text-align: left; display: none; background-color: white;">
                                <div draggable="false" title="Show imagery with street names"
                                     style="color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; padding: 6px 8px 6px 6px; direction: ltr; text-align: left; white-space: nowrap; background-color: rgb(255, 255, 255);">
                                    <span role="checkbox"
                                          style="box-sizing: border-box; position: relative; line-height: 0; font-size: 0px; margin: 0px 5px 0px 0px; display: inline-block; border: 1px solid rgb(198, 198, 198); border-radius: 1px; width: 13px; height: 13px; vertical-align: middle; background-color: rgb(255, 255, 255);"><div
                                            style="position: absolute; left: 1px; top: -2px; width: 13px; height: 11px; overflow: hidden;">
                                        <img src="./imgs/imgs8.png" draggable="false"
                                             style="position: absolute; left: -52px; top: -44px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; width: 68px; height: 67px;">
                                    </div></span><label style="vertical-align: middle; cursor: pointer;">Labels</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;">
                        <a target="_blank"
                           href="https://maps.google.com/maps?ll=-51.06093,53.0353&z=5&t=h&hl=en-US&gl=US&mapclient=apiv3"
                           title="Click to see this area on Google Maps"
                           style="position: static; overflow: visible; float: none; display: inline;">
                            <div style="width: 66px; height: 26px; cursor: pointer;"><img
                                    src="./imgs/google_white5.png" draggable="false"
                                    style="position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;">
                            </div>
                        </a></div>
                </div>
            </div>
        </div>
    </div>
    </section>
</article>

