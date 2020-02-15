// Inventory controls
var chart = AmCharts.makeChart("inventoryClinic", {
  "type": "serial",
	"theme": "light",
  "autoMarginOffset": 0,
  "autoMargins": false,
  "marginBottom": 30,
  "marginTop": 15,
  "marginLeft": 25,
  "marginRight": 0,
  "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "autoMargins":false,
        "marginBottom": 0,
        "marginTop": 0,
        "marginLeft": 20,
        "marginRight": 0,
        "useGraphSettings": false,
		    "markerSize": 14,
        "markerType": "circle",
        "align": "right",
        "valueWidth": 0
    },
    "dataProvider": [{
        "week": "Pat. Eng.",
        "clinic": 5,
        "shared": 68,
        //"total": 73
    }, {
        "week": "Scheduling",
        "clinic": 18,
        "shared": 78,
        //"total": 96
    }, {
        "week": "Doc. & Coding",
        "clinic": 20,
        "shared": 64,
        //"total": 84
    }, {
        "week": "Orders Reqs.",
        "clinic": 16,
        "shared": 0,
        //"total": 16
    }, {
        "week": "Care Mgmt.",
        "clinic": 10,
        "shared": 46,
        //"total": 56
    }],
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Clinic",
        "type": "column",
		    "color": "#000000",
        "valueField": "clinic"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Shared Service",
        "type": "column",
        "fillColors": "#FF6239",
		    "color": "#000000",
        "valueField": "shared"
    }], //{
        //Total
        //"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        //"fillAlphas": 0,
        //"labelText": "[[value]]",
        //"lineAlpha": 1,
        //"lineThickness": 3,
        //"bullet": "round",
        //"title": "Total",
        //"type": "line",
		    //"color": "#e6c300",
        //"fillColors": "#e6c300",
        //"lineColor": "#e6c300",
        //"valueField": "total"
    //}],
    "categoryField": "week",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left",
        "labelRotation": 15
    },
    "export": {
    	"enabled": true
     }
});

// Practice Inventory Snapshot
var chart = AmCharts.makeChart("practiceClinic", {
  "type": "serial",
	"theme": "light",
  "autoMarginOffset": 0,
  "autoMargins": false,
  "marginBottom": 30,
  "marginTop": 15,
  "marginLeft": 25,
  "marginRight": 0,
  "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "autoMargins":false,
        "marginBottom": 0,
        "marginTop": 0,
        "marginLeft": 20,
        "marginRight": 0,
        "useGraphSettings": false,
		    "markerSize": 14,
        "markerType": "circle",
        "align": "right",
        "valueWidth": 0
    },
  "guides": [{
      "dashLength": 6,
      "inside": true,
      "label": "Trend",
      "lineAlpha": 1,
      "value": 70
  }],
    "dataProvider": [{
        "week": "Pat. Eng.",
        "high": 2,
        "inProcess": 1,
        "unworked": 2,
        "total": 5
    }, {
        "week": "Scheduling",
        "high": 4,
        "inProcess": 4,
        "unworked": 10,
        "total": 18
    }, {
        "week": "Doc. & Coding",
        "high": 3,
        "inProcess": 5,
        "unworked": 12,
        "total": 20
    }, {
        "week": "Orders Reqs.",
        "high": 1,
        "inProcess": 5,
        "unworked": 10,
        "total": 16
    }, {
        "week": "Care Mgmt.",
        "high": 2,
        "inProcess": 6,
        "unworked": 2,
        "total": 10
    }],
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "High-Risk",
        "type": "column",
		"color": "#000000",
        "fillColors": "#FF6239",
        "valueField": "high"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "In-Process",
        "type": "column",
		"color": "#000000",
        "fillColors": "#A459F2",
        "valueField": "inProcess"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Unworked",
        "type": "column",
		    "color": "#000000",
        "fillColors": "#CC3300",
        "valueField": "unworked"
    }], //{
        //Total
        //"balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        //"fillAlphas": 0,
        //"labelText": "[[value]]",
        //"lineAlpha": 1,
        //"lineThickness": 3,
        //"bullet": "round",
        //"title": "Total",
        //"type": "line",
		    //"color": "#e6c300",
        //"fillColors": "#e6c300",
        //"lineColor": "#e6c300",
        //"valueField": "total"
    //}],
    "categoryField": "week",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left",
        "labelRotation": 15
    },
    "export": {
    	"enabled": true
     }

});

// Productivity
var chart = AmCharts.makeChart("productivityClinic", {
    "type": "serial",
    "theme": "light",
    "marginRight": 5,
    "autoMarginOffset": 0,
    "dataDateFormat": "YYYY-MM-DD",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "logarithmic": true,
        "dashLength": 1,
        "position": "left"
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":0,
        "valueLineAlpha":0.2
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    },
    "dataProvider": [{
        "date": "2012-07-27",
        "value": 35
    }, {
        "date": "2012-07-28",
        "value": 32
    }, {
        "date": "2012-07-29",
        "value": 33
    }, {
        "date": "2012-07-30",
        "value": 39
    }, {
        "date": "2012-07-31",
        "value": 35
    }, {
        "date": "2012-08-01",
        "value": 28
    }, {
        "date": "2012-08-02",
        "value": 34
    }, {
        "date": "2012-08-03",
        "value": 31
    }, {
        "date": "2012-08-04",
        "value": 29
    }, {
        "date": "2012-08-05",
        "value": 25
    }, {
        "date": "2012-08-06",
        "value": 26
    }, {
        "date": "2012-08-07",
        "value": 32
    }, {
        "date": "2012-08-08",
        "value": 33
    }, {
        "date": "2012-08-09",
        "value": 28
    }, {
        "date": "2012-08-10",
        "value": 28
    }, {
        "date": "2012-08-11",
        "value": 29
    }, {
        "date": "2012-08-12",
        "value": 34
    }, {
        "date": "2012-08-13",
        "value": 25
    }, {
        "date": "2012-08-14",
        "value": 31
    }, {
        "date": "2012-08-15",
        "value": 33
    }, {
        "date": "2012-08-16",
        "value": 31
    }, {
        "date": "2012-08-17",
        "value": 33
    }, {
        "date": "2012-08-18",
        "value": 26
    }, {
        "date": "2012-08-19",
        "value": 28
    }, {
        "date": "2012-08-20",
        "value": 29
    }, {
        "date": "2012-08-21",
        "value": 33
    }, {
        "date": "2012-08-22",
        "value": 28
    }, {
        "date": "2012-08-23",
        "value": 35
    }, {
        "date": "2012-08-24",
        "value": 32
    }, {
        "date": "2012-08-25",
        "value": 34
    }, {
        "date": "2012-08-26",
        "value": 28
    }, {
        "date": "2012-08-27",
        "value": 27
    }, {
        "date": "2012-08-28",
        "value": 32
    }, {
        "date": "2012-08-29",
        "value": 33
    }, {
        "date": "2012-08-30",
        "value": 31
    }, {
        "date": "2012-08-31",
        "value": 30
    }, {
        "date": "2012-09-01",
        "value": 27
    }, {
        "date": "2012-09-02",
        "value": 29
    }, {
        "date": "2012-09-03",
        "value": 32
    }, {
        "date": "2012-09-04",
        "value": 34
    }, {
        "date": "2012-09-05",
        "value": 25
    }, {
        "date": "2012-09-06",
        "value": 26
    }, {
        "date": "2012-09-07",
        "value": 31
    }, {
        "date": "2012-09-08",
        "value": 33
    }, {
        "date": "2012-09-09",
        "value": 30
    }, {
        "date": "2012-09-10",
        "value": 29
    }, {
        "date": "2012-09-11",
        "value": 34
    }, {
        "date": "2012-09-12",
        "value": 29
    }, {
        "date": "2012-09-13",
        "value": 34
    }, {
        "date": "2012-09-14",
        "value": 27
    }, {
        "date": "2012-09-15",
        "value": 32
    }, {
        "date": "2012-09-16",
        "value": 29
    }, {
        "date": "2012-09-17",
        "value": 26
    }, {
        "date": "2012-09-18",
        "value": 27
    }, {
        "date": "2012-09-19",
        "value": 25
    }, {
        "date": "2012-09-20",
        "value": 34
    }, {
        "date": "2012-09-21",
        "value": 29
    }, {
        "date": "2012-09-22",
        "value": 27
    }, {
        "date": "2012-09-23",
        "value": 26
    }, {
        "date": "2012-09-24",
        "value": 33
    }, {
        "date": "2012-09-25",
        "value": 34
    }, {
        "date": "2012-09-26",
        "value": 31
    }, {
        "date": "2012-09-27",
        "value": 32
    }, {
        "date": "2012-09-28",
        "value": 34
    }, {
        "date": "2012-09-29",
        "value": 28
    }, {
        "date": "2012-09-30",
        "value": 37
    }, {
        "date": "2012-10-01",
        "value": 34
    }, {
        "date": "2012-10-02",
        "value": 35
    }, {
        "date": "2012-10-03",
        "value": 36
    }, {
        "date": "2012-10-04",
        "value": 28
    }, {
        "date": "2012-10-05",
        "value": 25
    }, {
        "date": "2012-10-06",
        "value": 39
    }, {
        "date": "2012-10-07",
        "value": 34
    }, {
        "date": "2012-10-08",
        "value": 31
    }, {
        "date": "2012-10-09",
        "value": 26
    }, {
        "date": "2012-10-10",
        "value": 26
    }, {
        "date": "2012-10-11",
        "value": 33
    }, {
        "date": "2012-10-12",
        "value": 34
    }, {
        "date": "2012-10-13",
        "value": 31
    }, {
        "date": "2012-10-14",
        "value": 29
    }, {
        "date": "2012-10-15",
        "value": 28
    }, {
        "date": "2012-10-16",
        "value": 27
    }, {
        "date": "2012-10-17",
        "value": 34
    }, {
        "date": "2012-10-18",
        "value": 29
    }, {
        "date": "2012-10-19",
        "value": 29
    }, {
        "date": "2012-10-20",
        "value": 27
    }, {
        "date": "2012-10-21",
        "value": 34
    }, {
        "date": "2012-10-22",
        "value": 31
    }, {
        "date": "2012-10-23",
        "value": 34
    }, {
        "date": "2012-10-24",
        "value":33
    }, {
        "date": "2012-10-25",
        "value": 31
    }, {
        "date": "2012-10-26",
        "value": 27
    }, {
        "date": "2012-10-27",
        "value": 29
    }, {
        "date": "2012-10-28",
        "value": 25
    }, {
        "date": "2012-10-29",
        "value": 29
    }, {
        "date": "2012-10-30",
        "value": 31
    }, {
        "date": "2012-10-31",
        "value": 32
    }, {
        "date": "2012-11-01",
        "value": 33
    }, {
        "date": "2012-11-02",
        "value": 27
    }, {
        "date": "2012-11-03",
        "value": 28
    }, {
        "date": "2012-11-04",
        "value": 25
    }, {
        "date": "2012-11-05",
        "value": 31
    }, {
        "date": "2012-11-06",
        "value": 35
    }, {
        "date": "2012-11-07",
        "value": 34
    }, {
        "date": "2012-11-08",
        "value": 31
    }, {
        "date": "2012-11-09",
        "value": 26
    }, {
        "date": "2012-11-10",
        "value": 27
    }, {
        "date": "2012-11-11",
        "value": 31
    }, {
        "date": "2012-11-12",
        "value": 33
    }, {
        "date": "2012-11-13",
        "value": 30
    }, {
        "date": "2012-11-14",
        "value": 31
    }, {
        "date": "2012-11-15",
        "value": 37
    }, {
        "date": "2012-11-16",
        "value": 32
    }, {
        "date": "2012-11-17",
        "value": 26
    }, {
        "date": "2012-11-18",
        "value": 30
    }, {
        "date": "2012-11-19",
        "value": 27
    }, {
        "date": "2012-11-20",
        "value": 33
    }, {
        "date": "2012-11-21",
        "value": 25
    }]
});

// Completed Requests
var chart = AmCharts.makeChart("userActivitiesClinic", {
  "type": "pie",
  "startDuration": 0,
   "theme": "light",
   "autoMargins": false,
   "marginBottom": 0,
   "marginTop": 0,
   "marginLeft": 0,
   "marginRight": 0,
   "legend": {
         "horizontalGap": 10,
         "maxColumns": 1,
         "position": "right",
         "autoMargins":false,
         "marginBottom": 0,
         "marginTop": 0,
         "marginLeft": 20,
         "marginRight": 40,
         "useGraphSettings": false,
 		    "markerSize": 14,
         "markerType": "circle",
         "align": "right"
     },
  "addClassNames": true,
  "innerRadius": "30%",
  "defs": {
    "filter": [{
      "id": "shadow",
      "width": "200%",
      "height": "200%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceAlpha",
        "dx": 0,
        "dy": 0
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": 5
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }]
  },
  "dataProvider": [ {
    "activity": "Patient Engagement",
    "visits": 50
  }, {
    "activity": "Scheduling",
    "visits": 40
  }, {
    "activity": "Documentation",
    "visits": 100
  }, {
    "activity": "Codinig",
    "visits": 125
  }, {
    "activity": "Orders",
    "visits": 72
  } ],
  "valueField": "visits",
  "titleField": "activity",
  "labelsEnabled": false,
  "export": {
    "enabled": true
  }
});

chart.addListener("init", handleInit);

chart.addListener("rollOverSlice", function(e) {
  handleRollOver(e);
});

function handleInit(){
  chart.legend.addListener("rollOverItem", handleRollOver);
}

function handleRollOver(e){
  var wedge = e.dataItem.wedge.node;
  wedge.parentNode.appendChild(wedge);
}
