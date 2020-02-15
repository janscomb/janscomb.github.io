
        // in order to set theme for a chart, all you need to include theme file
        // located in amcharts/themes folder and set theme property for the chart.

        var chart1;
        var chart2;
		var chart3;
		var chart4;
		var chart5;
		var chart6;
		var chart7;
		var chart8;

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
			if(chart5){
                chart5.clear();
            }
			if(chart6){
                chart6.clear();
            }
			if(chart7){
                chart7.clear();
            }
			if(chart8){
                chart8.clear();
            }

            // background
            if(document.body){
                document.body.style.backgroundColor = bgColor;
                document.body.style.backgroundImage = "url(" + bgImage + ")";
            }

            // Submitted Cases Today
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
    }, {
        "time": "12am",
        "ed": 2,
        "fl": 2,
		"discharged": 2
    }, {
        "time": "1pm",
        "ed": 2,
        "fl": 3,
		"discharged": 3
    }, {
        "time": "2pm",
        "ed": 2,
        "fl": 2,
		"discharged": 2
    }, {
        "time": "3pm",
        "ed": 2,
        "fl": 2,
		"discharged": 2
    }, {
        "time": "4pm",
        "ed": 2,
        "fl": 2,
		"discharged": 2
    },{
        "time": "5pm",
        "ed": 2,
        "fl": 4,
		"discharged": 2
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

// Submitted Cases By Day
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
        "day": "6/16/15",
        "ed": 50,
        "fl": 50,
		"discharged": 40
    }, {
        "day": "6/17/15",
        "ed": 50,
        "fl": 50,
		"discharged": 40
    }, {
        "day": "6/18/15",
        "ed": 50,
        "fl": 50,
		"discharged": 40
    }, {
        "day": "6/19/15",
        "ed": 50,
        "fl": 50,
		"discharged": 40
    }, {
        "day": "6/22/15",
        "ed": 50,
        "fl": 50,
		"discharged": 40
    }, {
        "day": "6/23/15",
        "ed": 75,
        "fl": 40,
		"discharged": 30,
		"backoffice": 47
    }, {
        "day": "6/24/15",
        "ed": 53,
        "fl": 54,
		"discharged": 30
    }, {
        "day": "6/25/15",
        "ed": 80,
        "fl": 40,
		"discharged": 50
    }, {
        "day": "6/26/15",
        "ed": 35,
        "fl": 30,
		"discharged": 60
    }, {
        "day": "6/29/15",
        "ed": 45,
        "fl": 40,
		"discharged": 30
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
    "categoryField": "day",
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

// Submitted Cases By Week
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
        "time": "5/25/15",
        "ed": 50,
        "fl": 50,
		"discharged": 40
    }, {
        "time": "6/1/15",
        "ed": 75,
        "fl": 40,
		"discharged": 30,
		"backoffice": 47
    }, {
        "time": "6/8/15",
        "ed": 53,
        "fl": 54,
		"discharged": 30
    }, {
        "time": "6/15/15",
        "ed": 80,
        "fl": 40,
		"discharged": 50
    }, {
        "time": "6/22/15",
        "ed": 35,
        "fl": 30,
		"discharged": 60
    }, {
        "time": "6/29/15",
        "ed": 45,
        "fl": 40,
		"discharged": 30
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

// Submitted Cases Today
chart4 = AmCharts.makeChart("chartdiv4", {
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
    }, {
        "time": "Jun 2015",
        "ed": 150,
        "fl": 150,
		"discharged": 140
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

// Completed Cases Today
chart5 = AmCharts.makeChart("chartdiv5", {
	type: "serial",
	theme:theme,
	dataProvider: [{
		"time": "7am",
			"totalcases": 6,
			"your-cases": 0
	}, {
		"time": "8am",
			"totalcases": 6,
			"your-cases": 1
	}, {
		"time": "9am",
			"totalcases": 7,
			"your-cases": 2
	}, {
		"time": "10am",
			"totalcases": 8,
			"your-cases": 2
	}, {
		"time": "11am",
			"totalcases": 10,
			"your-cases": 4
	}, {
		"time": "12pm",
			"totalcases": 10,
			"your-cases": 4
	}, {
		"time": "1pm",
			"totalcases": 12,
			"your-cases": 4
	}, {
		"time": "2pm",
			"totalcases": 15,
			"your-cases": 3
	}, {
		"time": "3pm",
			"totalcases": 11,
			"your-cases": 2
	}, {
		"time": "4pm",
			"totalcases": 12,
			"your-cases": 1
	}, {
		"time": "5pm",
			"totalcases": 15,
			"your-cases": 4
	}],
	categoryField: "time",
	startDuration: 1,

	categoryAxis: {
		gridPosition: "start"
	},
	valueAxes: [{
		title: "Number of Cases"
	}],
	graphs: [{
		type: "column",
		title: "Total Cases",
		valueField: "totalcases",
		lineAlpha: 0,
		fillAlphas: 0.8,
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
	}, {
		type: "line",
		title: "Your Completed Cases: Today (6/29/15)",
		valueField: "your-cases",
		lineThickness: 2,
		fillAlphas: 0,
		bullet: "round",
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
	}],
	legend: {
		useGraphSettings: true
	}

});

// Completed Cases By Day
chart6 = AmCharts.makeChart("chartdiv6", {
	type: "serial",
	theme:theme,
	dataProvider: [{
		"week": "6/16/15",
			"totalcases": 239,
			"your-cases": 120
	}, {
		"week": "6/17/15",
			"totalcases": 255,
			"your-cases": 200
	}, {
		"week": "6/18/15",
			"totalcases": 332,
			"your-cases": 301
	}, {
		"week": "6/19/15",
			"totalcases": 375,
			"your-cases": 300
	}, {
		"week": "6/22/15",
			"totalcases": 193,
			"your-cases": 189
	}, {
		"week": "6/23/15",
			"totalcases": 203,
			"your-cases": 140
	}, {
		"week": "6/24/15",
			"totalcases": 183,
			"your-cases": 150
	}, {
		"week": "6/25/15",
			"totalcases": 205,
			"your-cases": 101
	}, {
		"week": "6/26/15",
			"totalcases": 211,
			"your-cases": 120
	}, {
		"week": "6/29/15",
			"totalcases": 203,
			"your-cases": 189
	}],
	categoryField: "week",
	startDuration: 1,

	categoryAxis: {
		gridPosition: "start"
	},
	valueAxes: [{
		title: "Number of Cases"
	}],
	graphs: [{
		type: "column",
		title: "Total Cases",
		valueField: "totalcases",
		lineAlpha: 0,
		fillAlphas: 0.8,
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
	}, {
		type: "line",
		title: "Your Completed Cases: Last 10 Days",
		valueField: "your-cases",
		lineThickness: 2,
		fillAlphas: 0,
		bullet: "round",
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
	}],
	legend: {
		useGraphSettings: true
	}

});

// Completed Cases By Week
chart7 = AmCharts.makeChart("chartdiv7", {
	type: "serial",
	theme:theme,
	dataProvider: [{
		"week": "5/25/15",
			"totalcases": 239,
			"your-cases": 120
	}, {
		"week": "6/1/15",
			"totalcases": 255,
			"your-cases": 200
	}, {
		"week": "6/8/15",
			"totalcases": 332,
			"your-cases": 301
	}, {
		"week": "6/15/15",
			"totalcases": 375,
			"your-cases": 300
	}, {
		"week": "6/22/15",
			"totalcases": 203,
			"your-cases": 189
	}, {
		"week": "6/29/15",
			"totalcases": 203,
			"your-cases": 189
	}],
	categoryField: "week",
	startDuration: 1,

	categoryAxis: {
		gridPosition: "start"
	},
	valueAxes: [{
		title: "Number of Cases"
	}],
	graphs: [{
		type: "column",
		title: "Total Cases",
		valueField: "totalcases",
		lineAlpha: 0,
		fillAlphas: 0.8,
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
	}, {
		type: "line",
		title: "Your Completed Cases: Last 6 Weeks",
		valueField: "your-cases",
		lineThickness: 2,
		fillAlphas: 0,
		bullet: "round",
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
	}],
	legend: {
		useGraphSettings: true
	}

});

// Completed Cases By Month
chart8 = AmCharts.makeChart("chartdiv8", {
	type: "serial",
	theme:theme,
	dataProvider: [{
		"year": "Jan 2015",
			"totalcases": 249,
			"loc-cases": 130
	}, {
		"year": "Feb 2015",
			"totalcases": 239,
			"loc-cases": 120
	}, {
		"year": "March 2015",
			"totalcases": 255,
			"loc-cases": 200
	}, {
		"year": "April 2015",
			"totalcases": 332,
			"loc-cases": 301
	}, {
		"year": "May 2015",
			"totalcases": 375,
			"loc-cases": 300
	}, {
		"year": "Jun 2015",
			"totalcases": 203,
			"loc-cases": 189
	}],
	categoryField: "year",
	startDuration: 1,

	categoryAxis: {
		gridPosition: "start"
	},
	valueAxes: [{
		title: "Number of Cases"
	}],
	graphs: [{
		type: "column",
		title: "Total Cases",
		valueField: "totalcases",
		lineAlpha: 0,
		fillAlphas: 0.8,
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
	}, {
		type: "line",
		title: "Your Completed Cases: Last 6 Months",
		valueField: "loc-cases",
		lineThickness: 2,
		fillAlphas: 0,
		bullet: "round",
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
	}],
	legend: {
		useGraphSettings: true
	}

});

}
		

// JavaScript Document