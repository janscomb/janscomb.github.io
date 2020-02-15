
        // in order to set theme for a chart, all you need to include theme file
        // located in amcharts/themes folder and set theme property for the chart.

        var chart1;
        var chart2;
		var chart3;
		var chart4;

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
			if(chart3){
                chart3.clear();
            }
			if(chart4){
                chart4.clear();
            }

            // background
            if(document.body){
                document.body.style.backgroundColor = bgColor;
                document.body.style.backgroundImage = "url(" + bgImage + ")";
            }

            // column chart
chart1 = AmCharts.makeChart("chartdiv1", {
    "type": "serial",
	"theme": "dark",
	"startDuration": 1,
    "path": "http://www.amcharts.com/lib/3/",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 3,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
    "dataProvider": [{
        "time": "6am",
        "ed": 4,
        "fl": 4,
		"discharged": 2
    }, {
        "time": "7am",
        "ed": 3,
        "fl": 3,
		"discharged": 2
    }, {
        "time": "8am",
        "ed": 3,
        "fl": 3,
		"discharged": 2
    }, {
        "time": "9am",
        "ed": 3,
        "fl": 2,
		"discharged": 2
    }, {
        "time": "10am",
        "ed": 2,
        "fl": 2,
		"discharged": 2
    }, {
        "time": "11am",
        "ed": 2,
        "fl": 2,
		"discharged": 2
    }],
    "valueAxes": [{
		"title": "Number of Cases",
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0,
		"totalText": "[[total]]"
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "ED",
        "type": "column",
		"color": "#000000",
        "valueField": "ed"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "FL",
        "type": "column",
		"color": "#000000",
        "valueField": "fl"
    }
	, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Discharged",
        "type": "column",
		"color": "#000000",
        "valueField": "discharged"
    }],

    "categoryField": "time",
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

chart2 = AmCharts.makeChart("chartdiv2", {
    "type": "serial",
	"theme": "dark",
	"startDuration": 1,
    "path": "http://www.amcharts.com/lib/3/",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 3,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
    "dataProvider": [{
        "time": "5/4/15",
        "ed": 50,
        "fl": 50,
		"discharged": 40
    }, {
        "time": "5/11/15",
        "ed": 75,
        "fl": 40,
		"discharged": 30,
		"backoffice": 47
    }, {
        "time": "5/18/15",
        "ed": 53,
        "fl": 54,
		"discharged": 30
    }, {
        "time": "5/25/15",
        "ed": 80,
        "fl": 40,
		"discharged": 50
    }, {
        "time": "6/1/15",
        "ed": 35,
        "fl": 30,
		"discharged": 60
    }, {
        "time": "6/8/15",
        "ed": 45,
        "fl": 40,
		"discharged": 30
    }],
    "valueAxes": [{
		"title": "Number of Cases",
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0,
		"totalText": "[[total]]"
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "ED",
        "type": "column",
		"color": "#000000",
        "valueField": "ed"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "FL",
        "type": "column",
		"color": "#000000",
        "valueField": "fl"
    }
	, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Discharged",
        "type": "column",
		"color": "#000000",
        "valueField": "discharged"
    }],
    "categoryField": "time",
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

chart3 = AmCharts.makeChart("chartdiv3", {
    "type": "serial",
	"theme": "dark",
	"startDuration": 1,
    "path": "http://www.amcharts.com/lib/3/",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 3,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
    "dataProvider": [{
        "time": "Dec 2015",
        "ed": 150,
        "fl": 150,
		"discharged": 140
    }, {
        "time": "Jan 2015",
        "ed": 175,
        "fl": 140,
		"discharged": 130
    }, {
        "time": "Feb 2015",
        "ed": 153,
        "fl": 154,
		"discharged": 130
    }, {
        "time": "Mar 2015",
        "ed": 120,
        "fl": 140,
		"discharged": 150
    }, {
        "time": "Apr 2015",
        "ed": 135,
        "fl": 130,
		"discharged": 160
    }, {
        "time": "May 2015",
        "ed": 115,
        "fl": 110,
		"discharged": 130
    }],
    "valueAxes": [{
		"title": "Number of Cases",
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0,
		"totalText": "[[total]]"
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "ED",
        "type": "column",
		"color": "#000000",
        "valueField": "ed"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "FL",
        "type": "column",
		"color": "#000000",
        "valueField": "fl"
    }
	, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Discharged",
        "type": "column",
		"color": "#000000",
        "valueField": "discharged"
    }],
    "categoryField": "time",
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

            // pie chart
            chart4 = AmCharts.makeChart("chartdiv4", {
                type: "pie",
                theme: theme,
                dataProvider: [{
                    "priority": "Overdue",
                        "cases": 56
                }, {
                    "priority": "High Priority",
                        "cases": 131
                }, {
                    "priority": "Medium Priority",
                        "cases": 115
                }, {
                    "priority": "Low Priority",
                        "cases": 109
                }, {
                    "priority": "Trivial Status",
                        "cases": 108
                }, {
                    "priority": "Completed",
                        "cases": 65
                }],
                titleField: "priority",
                valueField: "cases",
                balloonText: "[[title]]<br><b>[[value]]</b> ([[percents]]%)",
                legend: {
                    align: "center",
                    markerType: "circle"
                }
            });

        }
		

// JavaScript Document