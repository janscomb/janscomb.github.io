
(function ($) {
    $.fn.extend({
        vscroller: function (options) {
            var settings = $.extend({ speed: 1000, stay: 100000000, newsfeed: '', cache: true }, options);

            return this.each(function () {
				
				var d = new Date();
 				var month = d.getMonth()+1;
				var day = d.getDate();
				var todaydate = d.getFullYear() + '-' + ((''+month).length<2 ? '0' : '') + month + '-' +
    			((''+day).length<2 ? '0' : '') + day;
				var eventdate;
				var fulldate;
                var interval = null;
                var mouseIn = false;
                var totalElements;
                var h;
                var t;
                var wrapper = $(this).addClass('news-wrapper');
                if (settings.newsfeed == '') { alert('No XML file specified'); return; }
                $.ajax({
                    url: settings.newsfeed,
                    type: 'GET',
                    dataType: 'xml',
                    cache: settings.cache,
                    success: function (xml) {
                        //if there are upcoming events then build the html
                        var contentWrapper = $('<div/>').addClass('news-contents-wrapper');
                        var newsContents = $('<div/>').addClass('news-contents');
                        wrapper.append(contentWrapper);
                        contentWrapper.append(newsContents);
                        var i = 0;
						var ev = 0;
                        totalElements = $(xml).find('event').length;
                        $(xml).find('event').each(function () {
							
							eventdate = $(this).attr('date');
							//eventdate = eventdate.replace(/-/g, '/');

							if (eventdate >= todaydate) {  // Only show events that occur either today or in the future
							//alert("event date: " + eventdate + ".    today's date: " + todaydate);
									var news = $('<div/>').addClass('news');
									newsContents.append(news);
									var history = $('<div/>').addClass('history');
									var description = $('<div/>').addClass('description');
									var location = $(this).find('event-location').text();
									var venue = $(this).find('event-venue').text();
									var url = $(this).attr('url');
									news.append(history);
									news.append(description);
									history.append(getCircle($(this).attr('category'), eventdate));
									var externallink = "&nbsp;&nbsp;<i class='fa fa-external-link' title='External Link' alt='External Link'></i>";
									var htext = $(this).find('event-title').text();
									if (url !== "#" && url !== "") {
									description.append($('<h3/>').html("<a href='" + url + "' target='_blank'>" + htext  + externallink + "</a>"));
									}
									else {
									description.append($('<h3/>').html(htext));	
									}
									var newsText = $(this).find('detail').text();
									if (newsText.length > 200) {
										newsText = newsText.substr(0, 200) + "...";
									}	
									description.append($('<p/>').addClass('small').html(fulldate));	
									if ((location != "") && (venue != "")) {
										description.append($('<p/>').addClass('small').html(location + " at the " + venue));
									}
									else{
										if (location != "") {
										description.append($('<p/>').addClass('small').html(location));
										}
										if (venue != "") {
										description.append($('<p/>').addClass('small').html(venue));
										}
									}
									description.append($('<p/>').addClass('detail').html(newsText));
									if (url !== "#" && url !== "") {
									description.append($('<p />').html("<a class='btn' href='" + url + "' target='_blank'>Event Details</a>"));
									}
									h = parseFloat($('.news:eq(0)').outerHeight());
									topvalue = ev++ * h;
									//alert("topvalue: " + topvalue);
									news.css({top:topvalue});
                        			//$('.news', wrapper).each(function () {$(this).css({ top: ev++ * h });});
									t = (totalElements - 1) * h;
									newsContents.mouseenter(function () {
										mouseIn = true;
									});
									newsContents.mouseleave(function () {
										mouseIn = false;
										interval = setTimeout(scroll, settings.stay);
									});

							}
							else {
							// Date is in the past
							}
                        });


                    }
                });

				$('.arrow-up').on('click', function() {	
						var mystyle;
						$('.arrow-down').show();
						        arrayVariable =[ ];
								arrayVariable = $(".news-contents .news").map(function()
								{
									mystyle = $(this).attr("style");						  
									return mystyle;
								}) ;
						if ((jQuery.inArray("top: 0px;", arrayVariable) == -1) || ($(arrayVariable).get(0) == "top: 0px;"))
							{
								$('.arrow-up').hide();
							}
							else {
								   $('.news-contents .news').attr( "style", function() {
									var topval = parseInt($(this).css("top"));
									var pos = "top: " + (topval + 200) + "px;";
									if (arrayVariable[1] == "top: 0px;") {
									$('.arrow-up').hide();
									}
									return pos;
									});	
							}
							

					});
				$('.arrow-down').on('click', function() {	
						var mystyle;
						$('.arrow-up').show();
						        arrayVariable =[ ];
								arrayVariable = $(".news-contents .news").map(function()
								{
									  mystyle = $(this).attr("style");			  
									  return mystyle;
								}) ;
						if ((jQuery.inArray("top: 0px;", arrayVariable) == -1) || ($(arrayVariable).get(-1) == "top: 0px;"))
							{
								$('.arrow-down').hide();
							}
							else {
								$('.news-contents .news').attr( "style", function() {
							  	var topval = parseInt($(this).css("top"));
							  	var pos = "top: " + (topval - 200) + "px;";
							  	if (arrayVariable[arrayVariable.length - 2] == "top: 0px;") {
							   	$('.arrow-down').hide();
							  	}
							  	return pos;
						  		});	
							}

					});

               //$.get(settings.newsfeed, );

                function getCircle(category, date) {
					date = date.replace(/-/g, '/');

                    var d = new Date(date);
                    var day = '';
                    var month = '';
                    switch (d.getDate()) {
                        case 1:
                        case 21:
                            day = d.getDate() + 'st';
                            break;
                        case 2:
                        case 22:
                            day = d.getDate() + 'nd';
                            break;
                        case 3:
                        case 23:
                            day = d.getDate() + 'rd';
                            break;
                        default:
                            day = d.getDate() + 'th';
                            break;
                    }
                    switch (d.getMonth()) {
                        case 0:
                            month = 'JAN';
							monthfull = "January";
                            break;
                        case 1:
                            month = 'FEB';
							monthfull = "February";
                            break;
                        case 2:
                            month = 'MAR';
							monthfull = "March";
                            break;
                        case 3: 
                            month = 'APR';
							monthfull = "April";
                            break;
                        case 4:
                            month = 'MAY';
							monthfull = "May";
                            break;
                        case 5:
                            month = 'JUN';
							monthfull = "June";
                            break;
                        case 6:
                            month = 'JUL';
							monthfull = "July";
                            break;
                        case 7:
                            month = 'AUG';
							monthfull = "August";
                            break;
                        case 8:
                            month = 'SEP';
							monthfull = "September";
                            break;
                        case 9:
                            month = 'OCT';
							monthfull = "October";
                            break;
                        case 10:
                            month = 'NOV';
							monthfull = "November";
                            break;
                        case 11:
                            month = 'DEC';
							monthfull = "December";
                            break;

                    }
					var getyear = eventdate.split('-');
					getyear = getyear[0];
					fulldate = monthfull + " " + day + ", " + getyear;
                    return $('<div/>').addClass('circle-outer').append($('<div/>').addClass('circle').addClass(category)
                    .append($('<span/>').addClass('day').html(day))
                    .append($('<span/>').html('...').addClass('elipses'))
                    .append($('<span/>').addClass('month').html(month)));

                }

            });

        }
    });

})(jQuery);

function setcolors() {
									//alert('hello');					//set unique background colors for circles;
									var backgrounds = ["green", "blue", "yellow", "red"];
									var elements = document.getElementsByClassName("circle");
									var len = backgrounds.length;
									for (i = 0; i < elements.length; i++) {
									elements[i].className += ' ' + backgrounds[i%len];

									}		
}
