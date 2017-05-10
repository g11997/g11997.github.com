var map = new BMap.Map("container");
var point = new BMap.Point(120.15,30.25);
var school = new BMap.Point(120.018158, 30.295574);
map.centerAndZoom(point, 15);
map.enableScrollWheelZoom();

map.centerAndZoom(new BMap.Point(120.15,30.25), 11);

$(init)
function init() {
    map.centerAndZoom(new BMap.Point(120.15,30.25), 11);
    var local = new BMap.LocalSearch(map, {
        pageCapacity: 8,
        renderOptions: {
        map: map,
        autoViewport: true,
        panel: "result"
        }
    });
    local.searchNearby('宾馆',point,3000);

    $("body").on("click", "#btn1", function() {
        $("#result").fadeIn();
        map.clearOverlays();
        var local = new BMap.LocalSearch(map, {
            pageCapacity: 8,
            renderOptions: {
            map: map,
            autoViewport: true,
            panel: "result"
            }
        });
        local.searchNearby('宾馆',point,3000);
    });

    $("body").on("click", "#btn2", function() {
        $("#result").fadeIn();
        map.clearOverlays();
        var start="杭州师范大学仓前新校区",end="宾馆";
        var transit = new BMap.TransitRoute(map, {
            renderOptions:{
                map: map,
                panel:"result"
            }
        });
        transit.search(start,end);
     });

    $("body").on("click", "#btn3", function() {
        $("#result").hide();
        map.clearOverlays();
        map.centerAndZoom(school, 18);
        var data_info =[[120.014280,30.295106,],
                        [120.012321,30.296306],
                        [120.017610,30.294660],
                        [120.016685,30.294202],
                        [120.016236,30.294794],
                        [120.015860,30.295170],
                        [120.016990,30.295808],
                        [120.016469,30.296089],
                        [120.015804,30.296556],
                        [120.015535,30.296946],
                        [120.015230,30.296089],
                        [120.014798,30.296463],
                        [120.018787,30.295169],
                        [120.017547,30.293921],
                        [120.020134,30.294935],
                        [120.020404,30.295590],
                        [120.018787,30.294405],
                        [120.017098,30.293843],
                        [120.019074,30.295278],
                        [120.021212,30.297040],
                        [120.021428,30.296728],
                        [120.020619,30.296400],
                        [120.019937,30.296837],
                        [120.020188,30.297055],
                        [120.020637,30.297414],
                        [120.017817,30.296650],
                        [120.018266,30.297383],
                        [120.020368,30.297975],
                        [120.020637,30.298162],
                        [120.018338,30.297897],
                        [120.018679,30.298256],
                        [120.017781,30.297507],
                        [120.018230,30.297741],
                        [120.017368,30.297585],
                        [120.017511,30.297679],
                        [120.015050,30.297663],
                        [120.022218,30.298677],
                        [120.022200,30.297574],
                       ];
        for(var i=0;i<data_info.length;i++)
        {
            //设置标注
            var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));
            map.addOverlay(marker);

            //信息框
            var sContent =
            "<div class=\"ui-info\"> \
              <div class=\"container-fluid\"> \
                  <div class=\"row\"> \
                      <div class=\"ui-img\"><img src=\"timg.jpg\" id=\"ui-img-1\"></div> \
                  </div> \
                  <div class=\"row\"> \
                      <div class=\"col-sm-8\"> \
                          <div class=\"ui-info-left\"> \
                              <div class=\"ui-info-left-title\">" + "XXXXXXXX" + "</div> \
                              <div class=\"ui-info-left-star\">\
                                <span class=\"glyphicon glyphicon-star\" id=\"star1\"></span>\
                                <span class=\"glyphicon glyphicon-star\"></span>\
                                <span class=\"glyphicon glyphicon-star\"></span>\
                              </div>\
                              <div class=\"ui-info-left-sub\">\
                                <span class=\"ui-info-left-sub-2\">" + "XX/XX分" + "</span> \
                                <span class=\"ui-info-left-sub-1\">" + "XXXX条评论" + "</span> \
                              </div>\
                          </div> \
                      </div> \
                      <div class=\"col-sm-4\"> \
                          <div class=\"ui-info-right\"> \
                              <div class=\"ui-info-right-sub\">查看详情</div> \
                          </div> \
                      </div> \
                  </div> \
              </div> \
            </div>";

            var content1=data_info[i][2];

            var infoWindow = new BMap.InfoWindow(sContent);
            marker.addEventListener("click", function(){
               this.openInfoWindow(infoWindow);
               document.getElementById('imgdemo').onload = function (){
               infoWindow.redraw();
            }
           });
        }

    });
}

