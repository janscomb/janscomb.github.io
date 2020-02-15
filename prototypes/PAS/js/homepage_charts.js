
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
                type: "serial",
                theme:theme,
                dataProvider: [{
                    "year": "Nov",
                        "totalcases": 239,
                        "loc-cases": 120
                }, {
                    "year": "Dec",
                        "totalcases": 255,
                        "loc-cases": 200
                }, {
                    "year": "Jan",
                        "totalcases": 332,
                        "loc-cases": 301
                }, {
                    "year": "Feb",
                        "totalcases": 375,
                        "loc-cases": 300
                }, {
                    "year": "March",
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
                    title: "LOC Cases",
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

            // pie chart
            chart2 = AmCharts.makeChart("chartdiv2", {
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