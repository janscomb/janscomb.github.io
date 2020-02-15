
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
        "month": "5/4/15",
		"incomplete": 10,
        "complete": 60,

    }, {
        "month": "5/11/15",
		        "incomplete": 8,
        "complete": 55,

    }, {
        "month": "5/18/15",
		        "incomplete": 20,
        "complete": 43,

    }, {
        "month": "5/25/15",
		        "incomplete": 31,
        "complete": 40,

    }, {
        "month": "6/1/15",
		        "incomplete": 12,
        "complete": 52,

    }, {
        "month": "6/8/15",
		        "incomplete": 6,
        "complete": 49,

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
        "title": "Incomplete",
        "type": "column",
		"color": "#000000",
        "valueField": "incomplete"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Complete",
        "type": "column",
		"color": "#000000",
        "valueField": "complete"
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

            // column chart
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
        "month": "Dec 2014",
        "complete": 210,
        "incomplete": 58,
    }, {
        "month": "Jan 2015",
        "complete": 290,
        "incomplete": 70,
    }, {
        "month": "Feb 2015",
        "complete": 280,
        "incomplete": 50,
    }, {
        "month": "Mar 2015",
        "complete": 230,
        "incomplete": 45,
    }, {
        "month": "Apr 2015",
        "complete": 140,
        "incomplete": 50,
    }, {
        "month": "May 2015",
        "complete": 180,
        "incomplete": 70,
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
        "title": "Incomplete",
        "type": "column",
		"color": "#000000",
        "valueField": "incomplete"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Complete",
        "type": "column",
		"color": "#000000",
        "valueField": "complete"
    }, {
		type: "line",
		title: "Total Incomplete Cases",
		valueField: "incomplete",
		lineThickness: 1,
		fillAlphas: 0,
		"lineColor": "#ff0000",
		bullet: "round",
		balloonText: "[[title]] for [[category]]: <b>[[value]]</b>"
	}, {
		type: "line",
		title: "Total Completed Cases",
		valueField: "complete",
		lineThickness: 1,
		fillAlphas: 0,
		bullet: "round",
		"lineColor": "#1d8b3a",
		balloonText: "[[title]] for [[category]]: <b>[[value]]</b>"
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

