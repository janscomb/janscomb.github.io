
        // in order to set theme for a chart, all you need to include theme file
        // located in amcharts/themes folder and set theme property for the chart.

        var chart1;
        var chart2;

        makeCharts("light", "#FFFFFF");

        // Theme can only be applied when creating chart instance - this means
        // that if you need to change theme at run time, youhave to create whole
        // chart object once again.

        function makeCharts(theme, bgColor, bgImage){

            if(chart1){
                chart1.clear();
            }
            if(chart2){
                chart2.clear();
            }

            // background
            if(document.body){
                document.body.style.backgroundColor = bgColor;
                document.body.style.backgroundImage = "url(" + bgImage + ")";
            }

            // column chart


chart1 = AmCharts.makeChart("chartdiv1", {
    "type": "serial",
	"theme": "light",
	"startDuration": 1,
    "path": "http://www.amcharts.com/lib/3/",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 2,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
    "dataProvider": [{
        "month": "3/23/15",
        "allauthors": 60,
        "user": 10,
    }, {
        "month": "3/30/15",
        "allauthors": 55,
        "user": 8,
    }, {
        "month": "4/6/15",
        "allauthors": 43,
        "user": 10,
    }, {
        "month": "4/13/15",
        "allauthors": 40,
        "user": 11,
    }, {
        "month": "4/20/15",
        "allauthors": 52,
        "user": 12,
    }, {
        "month": "4/27/15",
        "allauthors": 49,
        "user": 12,
    }, {
        "month": "5/4/15",
        "allauthors": 60,
        "user": 10,
    }, {
        "month": "5/11/15",
        "allauthors": 55,
        "user": 8,
    }, {
        "month": "5/18/15",
        "allauthors": 43,
        "user": 10,
    }, {
        "month": "5/25/15",
        "allauthors": 40,
        "user": 11,
    }, {
        "month": "6/1/15",
        "allauthors": 52,
        "user": 12,
    }, {
        "month": "6/8/15",
        "allauthors": 49,
        "user": 10,
    }],
    "valueAxes": [{
		"title": "Number of Cases",
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [ {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Mark Coleman",
        "type": "column",
		"color": "#000000",
        "valueField": "user"
    },{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "All Other Authors",
        "type": "column",
		"color": "#000000",
        "valueField": "allauthors"
    }],
    "categoryField": "month",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
    	"enabled": true
     }

});

chart2 = AmCharts.makeChart("chartdiv2", {
    "type": "serial",
	"theme": "light",
	"startDuration": 1,
    "path": "http://www.amcharts.com/lib/3/",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 2,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
    "dataProvider": [{
        "month": "Aug 2014",
		"user": 32,
        "allauthors": 210

    }, {
        "month": "July 2014",
		"user": 19,
        "allauthors": 232
    }, {
        "month": "Sept 2014",
		"user": 29,
        "allauthors": 320

    }, {
        "month": "Oct 2014",
		"user": 50,
		"allauthors": 400
    }, {
        "month": "Nov 2014",
		"user": 34,
		"allauthors": 390
    }, {
        "month": "Dec 2014",
		"user": 13,
		"allauthors": 287
    }, {
        "month": "Jan 2015",
		"user": 43,
        "allauthors": 290
    }, {
        "month": "Feb 2015",
		"user": 30,
        "allauthors": 300
    }, {
        "month": "Mar 2015",
		"user": 39,
        "allauthors": 320
    }, {
        "month": "Apr 2015",
		"user": 45,
        "allauthors": 280
    }, {
        "month": "May 2015",
		"user": 40,
        "allauthors": 300
    }
	, {
        "month": "June 2015",
        "allauthors": 400,
		"user": 30
    }],
    "valueAxes": [{
		"title": "Number of Cases",
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [ {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Mark Coleman",
        "type": "column",
		"color": "#000000",
        "valueField": "user"
    },{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "All Other Authors",
        "type": "column",
		"color": "#000000",
        "valueField": "allauthors"
    }],
    "categoryField": "month",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
    	"enabled": true
     }

});
            // pie chart
chart3 = AmCharts.makeChart("chartdiv3", {
    "type": "serial",
	"theme": "dark",
	"startDuration": 1,
    "path": "http://www.amcharts.com/lib/3/",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 2,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
    "dataProvider": [{
        "cases": "0-10",
        "awaiting": 50,
        "ready": 50,
		"in-progress": 40,
		"backoffice": 30
    }, {
        "cases": "11-20",
        "awaiting": 75,
        "ready": 40,
		"in-progress": 30,
		"backoffice": 47
    }, {
        "cases": "21-30",
        "awaiting": 53,
        "ready": 54,
		"in-progress": 30,
		"backoffice": 30
    }, {
        "cases": "31-50",
        "awaiting": 120,
        "ready": 40,
		"in-progress": 50,
		"backoffice": 30
    }, {
        "cases": "50+",
        "awaiting": 35,
        "ready": 30,
		"in-progress": 60,
		"backoffice": 60
    }],
    "valueAxes": [{
		"title": "Number of Cases",
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Awaiting",
        "type": "column",
		"color": "#000000",
        "valueField": "awaiting"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Ready",
        "type": "column",
		"color": "#000000",
        "valueField": "ready"
    }
	, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "In-Progress",
        "type": "column",
		"color": "#000000",
        "valueField": "in-progress"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Back Office",
        "type": "column",
		"color": "#000000",
        "valueField": "backoffice"
    }],
    "categoryField": "cases",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "bottom"
    },
    "export": {
    	"enabled": true
     }

});

        }
// JavaScript Document

