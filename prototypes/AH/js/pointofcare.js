//********************** CLICK THROUGH ************************//

// Example Clear Section
$(document).ready(function () {
    $(".exampleClearHider").click(function () {
        $(".exampleClear").css({
            display: "none"
        });
        $(".clearEvent").css({
            display: "block"
        });
    });
});


// Show All HCC History
$(document).ready(function () {
    $(".expanderHCCHist").click(function () {

        $(".HCCHist").animate({
            "max-height": '10000px'
        });
        $(".HCCHist .sticky-wrap").animate({
            "max-height": '10000px'
        });
        $(".depanderHCCHist").css({
            display: "inline"
        });
        $(".expanderHCCHist").css({
            display: "none"
        });
    });

    $(".depanderHCCHist").click(function () {

        $(".HCCHist").animate({
            "max-height": '214px'
        });
        $(".HCCHist .sticky-wrap").animate({
            "max-height": '214px'
        });
        $(".depanderHCCHist").css({
            display: "none"
        });
        $(".expanderHCCHist").css({
            display: "inline"
        });
    });
});


// Show All / Show Less Preventive Quality - OPEN
$(document).ready(function () {
    $(".expanderPrevOpen").click(function () {

        $(".PrevOpen").animate({
            "max-height": '10000px'
        });
        $(".PrevOpen .sticky-wrap").animate({
            "max-height": '10000px'
        });
        $(".depanderPrevOpen").css({
            display: "inline"
        });
        $(".expanderPrevOpen").css({
            display: "none"
        });
    });

    $(".depanderPrevOpen").click(function () {

        $(".PrevOpen").animate({
            "max-height": '214px'
        });
        $(".PrevOpen .sticky-wrap").animate({
            "max-height": '214px'
        });
        $(".depanderPrevOpen").css({
            display: "none"
        });
        $(".expanderPrevOpen").css({
            display: "inline"
        });
    });
});

// Show All / Show Less Preventive Quality - CLOSED
$(document).ready(function () {
    $(".expanderPrevClosed").click(function () {

        $(".PrevClosed").animate({
            "max-height": '10000px'
        });
        $(".PrevClosed .sticky-wrap").animate({
            "max-height": '10000px'
        });
        $(".depanderPrevClosed").css({
            display: "inline"
        });
        $(".expanderPrevClosed").css({
            display: "none"
        });
    });

    $(".depanderPrevClosed").click(function () {

        $(".PrevClosed").animate({
            "max-height": '214px'
        });
        $(".PrevClosed .sticky-wrap").animate({
            "max-height": '214px'
        });
        $(".depanderPrevClosed").css({
            display: "none"
        });
        $(".expanderPrevClosed").css({
            display: "inline"
        });
    });
});


// Show All
$(document).ready(function () {
    $(".expander").click(function () {

        if ($(this).data('name') == 'show') {
            $(".HCCHist").animate({
                "max-height": '10000px'
            });
                $(".showLess").css({
                    display: "inline"
                });
                $(".showMore").css({
                    display: "none"
                });
            $(this).data('name', 'slide')
        } else {
            $(".HCCHist").animate({
                "max-height": '214px'
            });
                $(".showMore").css({
                    display: "inline"
                });
                $(".showLess").css({
                    display: "none"
                });
           $(this).data('name', 'show')
        }
    });
});


// Success Banner
$(document).ready(function () {
    //Show Banner
    $(".completeSurvey").click(function () {
        $( ".bannerView" ).slideDown( "fast", function() {
        });
    });
});

// Close Banner
$(document).ready(function () {
    //Show Banner
    $(".dismissBanner").click(function () {
        $( ".bannerView" ).slideUp( "fast", function() {
        });
    });
});

// Edit Inurance Cards
//Edit Cards
$(document).ready(function () {
    // Edit Card One
    $(".clickEdit1").click(function () {
        $( ".cardDetails" ).slideUp( "fast", function() {
            $(".editCardOne").css({
                display: "inline"
            });
        });
    });
    // Edit Card Two
    $(".clickEdit2").click(function () {
      $( ".cardDetails" ).slideUp( "fast", function() {
          $(".editCardTwo").css({
              display: "inline"
          });
      });
    });

    //Save Card
    $(".updateInsuranceCard").click(function () {
        $( ".editCardOne" ).slideUp( "fast", function() {
            $(".cardDetails").css({
                display: "inline"
            });
        });
        $( ".bannerIns" ).slideDown( "fast", function() {
        });
        $( ".dismissBannerIns" ).click(function () {
            $( ".bannerIns" ).slideUp( "fast", function() {
            });
        });
    });
});


// Lock and Unlock Patient Information Modal
//Unlock
$(document).ready(function () {
    $(".patientUnlock").click(function () {
        $(".patientUnlock").css({
            display: "none"
        });
        $(".patientLock").css({
            display: "inline"
        });
        $(".unlockedPatientInformation").css({
            display: "inline"
        });
        $(".lockedPatientInformation").css({
            display: "none"
        });
        //Buttons
        $(".updatePatientButtons").css({
            display: "block"
        });
    });
    //Primary & Plus' Minus'
    $(".firstContactPlus").click(function () {
        $(".secondaryEmail").css({
            display: "block"
        });
        $(".firstContactPlus").css({
            display: "none"
        });
        $(".setPrimary").css({
            display: "inline"
        });
        $(".makePrimary.secondContact").css({
            display: "inline"
        });
        $(".removeContact.firstContactMinus").css({
            display: "inline"
        });
    });
    //Close Secondary
    $(".secondContactMinus").click(function () {
        $(".secondaryEmail").slideUp( "fast", function() {
        });
        $(".firstContactPlus").css({
            display: "inline"
        });
        $(".setPrimary").css({
            display: "none"
        });
        $(".removeContact.firstContactMinus").css({
            display: "none"
        });
    });
});
//Lock
$(document).ready(function () {
    $(".patientLock").click(function () {
        $(".patientUnlock").css({
            display: "inline"
        });
        $(".patientLock").css({
            display: "none"
        });
        $(".unlockedPatientInformation").css({
            display: "none"
        });
        $(".lockedPatientInformation").css({
            display: "inline"
        });
        //Buttons
        $(".updatePatientButtons").css({
            display: "none"
        });
    });
});
//Save Patient Information & Show Banner
$(document).ready(function () {
    $(".updatePatientInformation").click(function () {
        $(".bannerPI").slideDown( "fast", function() {
        });
        //Show Main Page Banner
        $(".bannerPIMain").slideDown( "fast", function() {
        });
        $(".patientUnlock").css({
            display: "inline"
        });
        $(".patientLock").css({
            display: "none"
        });
        $(".unlockedPatientInformation").css({
            display: "none"
        });
        $(".lockedPatientInformation").css({
            display: "inline"
        });
        $(".updatePatientButtons").css({
            display: "none"
        });
    });
    $(".patientLock").click(function () {
        $(".bannerPI").slideDown( "fast", function() {
        });
        //Show Main Page Banner
        $(".bannerPIMain").slideDown( "fast", function() {
        });
        $(".patientUnlock").css({
            display: "inline"
        });
        $(".patientLock").css({
            display: "none"
        });
        $(".unlockedPatientInformation").css({
            display: "none"
        });
        $(".lockedPatientInformation").css({
            display: "inline"
        });
        $(".updatePatientButtons").css({
            display: "none"
        });
    });
});

//Banner Close
$(document).ready(function () {
    $(".dismissBannerPI").click(function () {
        $(".bannerPI").slideUp( "fast", function() {
        });
    });
    $(".dismissBannerPIMain").click(function () {
        $(".bannerPIMain").slideUp( "fast", function() {
        });
    });
});

//Banner Close
$(document).ready(function () {
  $(".alertNotification").on('mouseover', function () {
        $(".alertBox").css({
            visibility: "visible"
        });
  });
});


//********************** BASICS *******************************//

// Locking Wizard Nav
$(window).scroll(function () {

    //Scrolling
    if ($(window).scrollTop() > 175) {

      //Patient Card
      $('.patientCard2').css({
          position: "fixed",
          top: "0px",
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
          top: "42px",
          left: "0px",
          width: "99vw",
          margin: "0px",
          "z-index": "1000",
      });
    }

    //At Top
    if ($(window).scrollTop() < 174) {
      
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
