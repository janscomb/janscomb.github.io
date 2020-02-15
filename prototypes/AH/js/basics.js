// DYNAMIC DATES

// Fifteen Minutes Ago
$(document).ready(function Back_date() {
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes() -15

  if (minutes < 10)
  minutes = "0" + minutes

  var suffix = "AM";
  if (hours >= 12) {
  suffix = "PM";
  hours = hours - 12;
  }
  if (hours == 0) {
  hours = 12;
  }

  $('.fifteenAgo').html(hours + ":" + minutes + " " + suffix);
});

$(document).ready(function () {
  var plus32 = moment().add(32, 'days').format('MM/DD/YYYY');
  var plus14 = moment().add(14, 'days').format('MM/DD/YYYY');
  var today = moment().format('MM/DD/YYYY');
  var minus2 = moment().subtract(2, 'days').format('MM/DD/YYYY');
  var minus15 = moment().subtract(15, 'days').format('MM/DD/YYYY');
  var minus30 = moment().subtract(30, 'days').format('MM/DD/YYYY');
  var minus32 = moment().subtract(32, 'days').format('MM/DD/YYYY');
  var minus45 = moment().subtract(45, 'days').format('MM/DD/YYYY');
  var minus183 = moment().subtract(183, 'days').format('MM/DD/YYYY');
  var minus375 = moment().subtract(375, 'days').format('MM/DD/YYYY');
  var minus425 = moment().subtract(425, 'days').format('MM/DD/YYYY');
  var minus487 = moment().subtract(487, 'days').format('MM/DD/YYYY');
  var minus548 = moment().subtract(548, 'days').format('MM/DD/YYYY');
  var minus578 = moment().subtract(578, 'days').format('MM/DD/YYYY');
  var minus730 = moment().subtract(730, 'days').format('MM/DD/YYYY');
  var minus852 = moment().subtract(852, 'days').format('MM/DD/YYYY');
  var minus1278 = moment().subtract(1278, 'days').format('MM/DD/YYYY');
  var minus1734 = moment().subtract(1734, 'days').format('MM/DD/YYYY');
  var minus1820 = moment().subtract(1820, 'days').format('MM/DD/YYYY');
  var minus1825 = moment().subtract(1825, 'days').format('MM/DD/YYYY');
  var minus25642 = moment().subtract(25642, 'days').format('MM/DD/YYYY');

  $('.datePlus32').html(plus32);
  $('.datePlus14').html(plus14);
  $('.todayDate').html(today);
  $('.dateMinus2').html(minus2);
  $('.dateMinus15').html(minus15);
  $('.dateMinus30').html(minus30);
  $('.dateMinus32').html(minus32);
  $('.dateMinus45').html(minus45);
  $('.dateMinus183').html(minus183);
  $('.dateMinus375').html(minus375);
  $('.dateMinus425').html(minus425);
  $('.dateMinus487').html(minus487);
  $('.dateMinus548').html(minus548);
  $('.dateMinus578').html(minus578);
  $('.dateMinus730').html(minus730);
  $('.dateMinus852').html(minus852);
  $('.dateMinus1278').html(minus1278);
  $('.dateMinus1734').html(minus1734);
  $('.dateMinus1820').html(minus1820);
  $('.dateMinus1825').html(minus1825);
  $('.dateMinus25642').html(minus25642);
});

//Hide Script
$(".hideScripting").click(function () {
//Hide
    $( ".scripting" ).slideUp( "fast", function() {
    });
    //Hide button
    $(".hideScripting").css({
        display: "none"
    });
    //Show button
    $(".showScripting").css({
        display: "inline"
    });
    //Fix padding of Yes / No Buttons
    $(".answerButtons").css({
        "padding-top": "0px"
    });
    $(".questionBox").css({
        padding: "10px 40px 15px 40px"
    });
});
//Show
$(".showScripting").click(function () {
    $( ".scripting" ).slideDown( "fast", function() {
    });
    //Hide button
    $(".showScripting").css({
        display: "none"
    });
    //Show button
    $(".hideScripting").css({
        display: "inline"
    });
    //Fix padding of Yes / No Buttons
    $(".answerButtons").css({
        "padding-top": "30px"
    });
    $(".questionBox").css({
        padding: "25px 40px 35px 40px"
    });
});

//Click Row
$('tbody tr').click(function () {
    var getLinkVal = $(this).find('a').attr('href');
    if (getLinkVal)
    {
        window.location.href = getLinkVal;
    }
});

// Select / Option script for default #CCC
$('select').change(function() {
     if ($(this).children('option:first-child').is(':selected')) {
       $(this).addClass('placeholder');
     } else {
      $(this).removeClass('placeholder');
     }
});


// Locking Wizard Nav
$(window).scroll(function () {

    //Scrolling
    if ($(window).scrollTop() > 175) {

      $('.tooltip').css('z-index', '99999');

      //Worklist Bar
      $('.HCCWorklistBar').css({
          position: "fixed",
          top: "0px",
          width: "99vw",
          left: "0px",
          "z-index": "890",
          margin: "0px 0px 0px 0px",
          "font-size": "11px",
          padding: "5px 0px 8px 0px",
          "-webkit-box-shadow": "0px 0px 0px 0px rgba(0, 0, 0, 0)",
          "-moz-box-shadow":    "0px 0px 0px 0px rgba(0, 0, 0, 0)",
          "box-shadow":         "0px 0px 0px 0px rgba(0, 0, 0, 0)"
      });
      $('.backNav').css({
          "font-size": "10px"
      });

      //Patient Card
      $('.patientCard2').css({
          position: "fixed",
          top: "28px",
          width: "99vw",
          left: "0px",
          "z-index": "1001",
          margin: "0px 0px 0px 0px",
          padding: "7px 12px",
          "border": "0px",
          "-webkit-box-shadow": "0px 0px 0px 0px rgba(0, 0, 0, 0)",
          "-moz-box-shadow":    "0px 0px 0px 0px rgba(0, 0, 0, 0)",
          "box-shadow":         "0px 0px 0px 0px rgba(0, 0, 0, 0)"
      });
      $('.quikLaunch li a').css({
          "font-size": "14px",
          padding: "5px 9px"
      });
      $('.quikLaunch li a.smallIcon').css({
          "font-size": "14px",
          padding: "5px 11px"
      });
      $('.patientDeets').css({
          "margin-top": "3px"
      })
      $('.patientDeets label').css({
          "font-size": "0.65em",
          padding: "4px 8px"
      });

      //Milestone Navigation
      $('.mileNav').css({
          position: "fixed",
          top: "70px",
          left: "0px",
          width: "99vw",
          margin: "0px",
          "z-index": "888",
      });
    }

    //At Top
    if ($(window).scrollTop() < 174) {
      
      //Worklist Bar
      $('.HCCWorklistBar').css({
          position: "relative",
          "font-size": "14px",
          top: "0px",
          width: "auto",
          left: "0px",
          "margin-top": "10px",
          "margin-bottom": "15px"
      });
      $('.backNav').css({
          "font-size": "12px"
      });

      //Patient Card
      $('.patientCard2').css({
          position: "relative",
          top: "0px",
          margin: "5px 0px 10px 0px",
          padding: "12px 12px 15px 20px",
          left: "0px",
          width: "100%",
          border: "1px solid #ccc",
        	"border-bottom": "4px solid #b9c3d4",
          "-webkit-box-shadow": "0px 1px 3px 0px rgba(50, 50, 50, 0.25)",
          "-moz-box-shadow":    "0px 1px 3px 0px rgba(50, 50, 50, 0.25)",
          "box-shadow":         "0px 1px 3px 0px rgba(50, 50, 50, 0.25)"
      });
      $('.quikLaunch li a').css({
          "font-size": "19px",
          padding: "7px 12px"
      });
      $('.quikLaunch li a.smallIcon').css({
          "font-size": "19px",
          padding: "7px 14px"
      });
      $('.patientDeets').css({
          "margin-top": "2px"
      })
      $('.patientDeets label').css({
          "font-size": "0.75em",
          padding: "4px 10px"
      });

      //Milestone Navigation
      $('.mileNav').css({
          position: "relative",
          top: "0px",
          height: "auto",
          width: "auto",
          margin: "10px 0px",
      });
    }
});


// Select / Option script for default #CCC
$('select').change(function() {
     if ($(this).children('option:first-child').is(':selected')) {
       $(this).addClass('placeholder');
     } else {
      $(this).removeClass('placeholder');
     }
});


// Smooth Scrolling Anchor Links
$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            if ($(window).scrollTop() > 11) {
                // Scrolled down page
                $('html,body').animate({ scrollTop: target.offset().top - $('.mileNav').height() - $('.HCCWorklistBar').height() - $('.patientCard2').height()  - 40 }, 500);
            } else {
                //At top of page
                $('html,body').animate({ scrollTop: target.offset().top - $('.mileNav').height() - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 240 }, 500);
            }
            return false;
        }
    }
});


// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({ container:"body"});
});

//Universal Search Bar
//Show Search Bar
$(".menuUniSearch").click(function () {
    //Show Search Bar
    $( ".universalSearchBar" ).slideDown( "fast", function() {
    });
    //Hide Default Search Button
    $(".menuUniSearch").css({
        display: "none"
    });
    //Show Close Search Button
    $(".menuUniSearchClose").css({
        display: "inline"
    });
});

//Search Button needs Fade (Has relative positioning)
$(".menuUniSearch").click(function () {
    //Show Search Button
    $( ".searchButtons, .settingButtons" ).fadeIn( "slow", function() {
    });
});

//Hide Search Bar
$(".menuUniSearchClose").click(function () {
    //Hide Search Button
    $( ".searchButtons" ).fadeOut( "fast", function() {
    });
    //Hide Search Bar
    $(".universalSearchBar").slideUp( "slow", function() {
    });
    //Hide Default Search Button
    $(".menuUniSearch").css({
        display: "inline"
    });
    //Show Close Search Button
    $(".menuUniSearchClose").css({
        display: "none"
    });
    //Close X
    $(".universalAdvanced").slideUp( "slow", function() {
    });
    //Hide Default Search Button
    $(".settingButtons .btn").css({
        background: "#516A94"
    });
    //Change Chevron
    $(".settingButtons a.btn span:last-child").addClass("accord");
    $(".settingButtons a.btn span:last-child").removeClass("decord");
});

//Show Advanced Search
$(".settingButtons .btn").click(function () {
    //Show Advanced Bar
    $(".universalAdvanced").slideDown( "fast", function() {
    });
    //Show Close X
    $(".closeUniversalFilter").css({
        display: "inline"
    });
    $(".settingButtons .btn").css({
        height: "45px"
    });
    //Change Chevron
    $(".settingButtons a.btn span:last-child").removeClass("accord");
    $(".settingButtons a.btn span:last-child").addClass("decord");
});

//Close Advanced Search
$(".closeUniversalFilter").click(function () {
    //Close X
    $(".universalAdvanced").slideUp( "fast", function() {
    });
    $(".settingButtons .btn").css({
        height: "auto"
    });
    //Change Chevron
    $(".settingButtons a.btn span:last-child").addClass("accord");
    $(".settingButtons a.btn span:last-child").removeClass("decord");
});


//Back to Top - Scrolling
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
      $(".backToTop").fadeIn( "slow", function() {
      });
  }
  //Back to Top - At Top
  if ($(window).scrollTop() < 100) {
      $(".backToTop").fadeOut( "slow", function() {
      });
  }
});


// Show All
$(document).ready(function () {
    $(".expander").click(function () {

        if ($(this).data('name') == 'show') {
            $(".callLog").animate({
                "max-height": '10000px'
            });
            $(this).data('name', 'slide')
        } else {
            $(".callLog").animate({
                "max-height": '214px'
            });
           $(this).data('name', 'show')
        }

    });
});

$(document).ready(function () {

      $('.hideFull').css({
          display: "none"
      });

      // Show All - Terms / Privacy
      $('.showFull').click(function () {
          $('.scrollyPage').animate({
                "max-height": '10000px',
                "overflow-y": 'none'
            });
            $('.showFull').css({
                display: 'none'
            });
            $('.hideFull').css({
                display: 'inline'
            });
      });

      $('.hideFull').click(function () {
          $('.scrollyPage').animate({
                "max-height": '70vh',
                "overflow-y": 'scroll'
            });
            $('.showFull').css({
                display: 'inline'
            });
            $('.hideFull').css({
                display: 'none'
            });
      });

    // Show All - HCC
    $(".expanderHCCHist").click(function () {
        $(".HCCHist").animate({
              "max-height": '10000px'
          });
          $('.expanderHCCHist').css({
              display: "none"
          });
          $('.depanderHCCHist').css({
              display: "inline"
          });
    });
    $(".depanderHCCHist").click(function () {
        $(".HCCHist").animate({
                "max-height": '214px'
          });
          $('.expanderHCCHist').css({
              display: "inline"
          });
          $('.depanderHCCHist').css({
              display: "none"
          });
    });

    // Show All - Coding Summary
    $(".expanderCodeSum").click(function () {
        $(".codeSum .sticky-wrap").animate({
              "max-height": '10000px'
          });
          $('.expanderCodeSum').css({
              display: "none"
          });
          $('.depanderCodeSum').css({
              display: "inline"
          });
    });
    $(".depanderCodeSum").click(function () {
        $(".codeSum .sticky-wrap").animate({
              "max-height": '214px'
          });
          $('.expanderCodeSum').css({
              display: "inline"
          });
          $('.depanderCodeSum').css({
              display: "none"
          });
    });

    // Show All - Preventive / Quality Services - OPEN
    $(".expanderPrevOpen").click(function () {
        $(".PrevOpen").animate({
                "max-height": '10000px'
          });
          $('.expanderPrevOpen').css({
              display: "none"
          });
          $('.depanderPrevOpen').css({
              display: "inline"
          });
    });
    $(".depanderPrevOpen").click(function () {
        $(".PrevOpen").animate({
                "max-height": '214px'
          });
          $('.expanderPrevOpen').css({
              display: "inline"
          });
          $('.depanderPrevOpen').css({
              display: "none"
          });
    });

    // Show All - Preventive / Quality Services - CLOSED
    $(".expanderPrevClosed").click(function () {
        $(".PrevClosed").animate({
                "max-height": '10000px'
          });
          $('.expanderPrevClosed').css({
              display: "none"
          });
          $('.depanderPrevClosed').css({
              display: "inline"
          });
    });
    $(".depanderPrevClosed").click(function () {
        $(".PrevClosed").animate({
                "max-height": '214px'
          });
          $('.expanderPrevClosed').css({
              display: "inline"
          });
          $('.depanderPrevClosed').css({
              display: "none"
          });
    });

    // Show All - Call History
    $(".expanderCallHist").click(function () {

        $(".CallHist .sticky-wrap").animate({
                "max-height": '10000px'
          });
          $('.expanderCallHist').css({
              display: "none"
          });
          $('.depanderCallHist').css({
              display: "inline"
          });
    });
    $(".depanderCallHist").click(function () {
        $(".CallHist .sticky-wrap").animate({
                "max-height": '214px'
        });
        $('.expanderCallHist').css({
            display: "inline"
        });
        $('.depanderCallHist').css({
            display: "none"
        });
    });

    // Show All - Acceptable Codes
    $(".expanderAccCode").click(function () {

        $(".AccCode .sticky-wrap").animate({
            "max-height": '10000px'
        });
        $('.expanderAccCode').css({
            display: "none"
        });
        $('.depanderAccCode').css({
            display: "inline"
        });
    });
    $(".depanderAccCode").click(function () {
        $(".AccCode .sticky-wrap").animate({
            "max-height": '80vh'
        });
        $('.expanderAccCode').css({
            display: "inline"
        });
        $('.depanderAccCode').css({
            display: "none"
        });
    });
});


/* Light-switch Toggle */
$(document).ready(function () {

    $('.switch').click(function(){
        $(this).toggleClass('off-btn');
    });

});


//Print from top of POC at all times - add a touch of delay to make sure window is scrolled to the top.
$(".printAction").click(function () {
    //Direct window to section
    window.location.href = "#top";
    window.print().delay(400);
});


//On scroll add Class - In this case, bring sticky-col higher in the z-index
$(document).ready(function() {
  if ( $('body').scrollTop() > $('.attributionConfirmation').position.top ) {
    $('li a.QualityMeasures').addClass('activeMilestone');
  }
});


//Mobile / Tablet Navigation
$(document).ready(function () {
    $(".topBar .nav").click(function () {

        $('.topBar .nav ul, .topBar .nav:after, .topBar .nav ul:after').css({
            display: "block"
        });

        $(".topBar .nav ul").addClass("mobileActive");

    });

    $(".subContainer, .topBar .nav ul li a, .patientEngagementLeft, .containerContent, .mainContainer").click(function () {

        $('.mobileActive, .topBar .nav:after, .topBar .nav ul:after').css({
            display: "none"
        });

        //Hide Search Input
        $('.navSearch2 input').css({
            display: "none"
        });

        //Shrink and Move Search Icon
        $('.navSearch2 span').css({
            color: "#FFF",
            "font-size": "21px",
            top: "0px",
            float: "none",
            margin: "0px"
        });

        $('.navSearch2').css({
            width: "auto",
            padding: "0",
            "background": "transparent"
        });

    });

    $(".navSearch2").click(function () {

        //Show and Expand Search Box
        $('.navSearch2 span').css({
            color: "#3d64a8",
            "font-size": "19px",
            top: "1px",
            float: "right",
            margin: "5px 0px"
        });

        //Show Search Box
        $('.navSearch2').css({
            width: "200px",
            padding: "0px 8px 2px 8px",
            "background-color": "rgba(255,255,255,0.6)",
            top: "39px"
        });

        //Show Search Input
        $('.navSearch2 input').css({
            display: "inline"
        });

    });
});

// Loading / Saving Animated Progress Bar
this.$('.js-loading-bar').modal({
    backdrop: 'static',
    show: false
});

$('.load').click(function () {
    var $modal = $('.js-loading-bar'),
        $bar = $modal.find('.progress-bar');

    $modal.modal('show');
    $bar.addClass('animate');

    setTimeout(function () {
        $bar.removeClass('animate');
        $modal.modal('hide');
    }, 3000);
});

// Loading / Saving Animated Progress Bar
this.$('.js-loading-bar2').modal({
    backdrop: 'static',
    show: false
});

$('.load2').click(function () {
    var $modal = $('.js-loading-bar2');

    $modal.modal('show');

    setTimeout(function () {
        $modal.modal('hide');
    }, 3000);
});
