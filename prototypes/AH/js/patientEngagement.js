// Guarantor on File - Hide and Show
$(document).ready(function () {
  //Show
  $(".guarantor").click(function () {
      $( ".guarantorOnFile" ).slideDown( "fast", function() {
      });

      //Hide Guarantor Open Button
      $(".guarantor").css({
          display: "none"
      });

      //Show Guarantor Close Button
      $(".guarantorHide").css({
          display: "inline"
      });
  });

  //Hide
  $(".guarantorHide").click(function () {
      $( ".guarantorOnFile" ).slideUp( "fast", function() {
      });

      //Hide Guarantor Close Button
      $(".guarantorHide").css({
          display: "none"
      });

      //Show Guarantor Open Button
      $(".guarantor").css({
          display: "inline"
      });
  });
});

//Yes, Who Are You...
$(document).ready(function () {
  //Show
  $(".yesWho").click(function () {
      //Open dialog
      $( ".yesWhoAreYou" ).slideDown( "slow", function() {
      });
      //Change No Opacity
      $(".viewWrongPartyOptions").css({
          opacity: "0.2"
      });
      //Change Continue Button Opacity
      $(".rightParty").css({
          opacity: "0.2",
          cursor: "not-allowed"
      });
      //Hide Lock icons
      $(".allLockedUp").css({
          display: "none"
      });
  });

  //Once a selection is made, allow Continue button clicking
  $(".selectWho").click(function () {
      //Change Continue Button Opacity
      $(".rightParty").css({
          opacity: "1",
          cursor: "pointer"
      });
  });
});

// Yes, Right Party
$(document).ready(function () {
  //Show
  $(".rightParty").click(function () {
      $(".areYouSpeaking .patientLabel").css({
          display: "inline"
      });

      //Milestone Tab Completion Status
      $(".HCC, .pe1").removeClass("notcomplete");
      $(".HCC, .pe1").addClass("complete");
      $(".HCC span").css({
          padding: "1px 4px 2px 4px"
      });
      $(".HCC span i, .pe1 span i").removeClass("fa fa-close");
      $(".HCC span i, .pe1 span i").addClass("fa fa-check");

      //Change No Opacity
      $(".viewWrongPartyOptions").css({
          opacity: "0.2",
          cursor: "not-allowed"
      });
      //Close Box
      $( ".theRightParty" ).slideUp( "fast", function() {
      });
      //Open Attribution Confirmation Box
      $(".confirmCurrentHealth").slideDown( "fast", function() {
        //Direct window to section
        window.location.href = "#AttributionConfirmation";
        $('html,body').animate({
            scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 99
        }, 'fast');
      });
  });
  //Cancel
  $(".closeWrongPartyOptions").click(function () {
    //Close Box
    $(".yesWhoAreYou").slideUp( "fast", function() {
    });
    //Change No Opacity
    $(".viewWrongPartyOptions").css({
        opacity: "1",
        cursor: "pointer"
    });
});
});

// Wrong Party
$(document).ready(function () {
  //Show
  $(".viewWrongPartyOptions").click(function () {
      $( ".wrongPartyChoices" ).slideDown( "fast", function() {
      });
      $(".yesWho").css({
          opacity: "0.2"
      });
      $(".viewWrongPartyOptionsCont").css({
          opacity: "0.2",
          cursor: "not-allowed"
      });
  });
  //Hide
  $(".closeWrongPartyOptions").click(function () {
      $( ".wrongPartyChoices" ).slideUp( "fast", function() {
      });
      $( ".leaveANote" ).slideUp( "fast", function() {
      });
      $( ".answrRqstCallBack" ).slideUp( "fast", function() {
      });
      //Bring back Yes
      $(".yesWho").css({
          opacity: "1",
          cursor: "pointer"
      });

  });
  //Opacity of Continue
  $(".radio").click(function () {
      $(".viewWrongPartyOptionsCont").css({
          opacity: "1",
          cursor: "pointer"
      });
  });
  //Labels and Close
  $(".viewWrongPartyOptionsCont").click(function () {
      $( ".theRightParty" ).slideUp( "fast", function() {
      });
      $(".noAnswer").css({
          display: "inline"
      });
      //Direct window to section
      window.location.href = "#top";
      return false;
  });
});

// Success Banner
$(document).ready(function () {
  //Show Banner
  $(".viewWrongPartyOptionsCont").click(function () {
      $( ".bannerView" ).slideDown( "fast", function() {
      });
  });
  $(".completeSurvey, .completeSurvey2").click(function () {
      $( ".bannerView2" ).delay(500).slideDown( "slow", function() {
          $(this).delay(10000).slideUp( "slow", function() {
          });
      });
  });

  //Do Not Call's Button
  $(".viewDoNotCall").click(function () {
      $( ".bannerView4" ).delay(500).slideDown( "slow", function() {
          $(this).delay(10000).slideUp( "slow", function() {
          });
      });

      $(".areYouSpeaking .yesLabel").css({
          display: "inline"
      });

      $( ".theRightParty" ).slideUp( "fast", function() {
      });

      //Direct window to section
      window.location.href = "#top";
  });
});

// Success Banner
$(document).ready(function () {
  //Show Banner
  $(".viewWrongPartyOptionsCont").click(function () {
      $( ".bannerView" ).slideDown( "fast", function() {
      });
  });
  $(".completeSurvey, .completeSurvey2").click(function () {
      $( ".bannerView2" ).delay(500).slideDown( "slow", function() {
          $(this).delay(10000).slideUp( "slow", function() {
          });
      });
  });
});

// Success Banner for "Do Not Call"
$(document).ready(function () {
  //Show Banner
  $(".doNotCall").click(function () {
      //$( ".bannerView4" ).slideDown( "fast", function() {
      //});

      //$(".areYouSpeaking .yesLabel").css({
      //    display: "inline"
      //});

      //$( ".theRightParty" ).slideUp( "fast", function() {
      //});

      $(".WPButtons").css({
          display: "none"
      });

      $(".DNCButtons").css({
          display: "block"
      });
  });
});

// Close Banner
$(document).ready(function () {
  //Show Banner
  $(".dismissBanner").click(function () {
      $( ".bannerView" ).slideUp( "fast", function() {
      });
      $( ".bannerView2" ).slideUp( "fast", function() {
      });
  });
});

// Re-opening the "Are You..." Question Box
$(document).ready(function () {
  //Show
  $(".questionLabel.areYouSpeaking").click(function () {
      $( ".theRightParty" ).slideDown( "fast", function() {
      });
  });
});

// Answered, Request Call Back
$(document).ready(function () {
  //Show
  $(".answeredRequestCallBack").click(function () {
      $( ".answrRqstCallBack" ).slideDown( "fast", function() {
      });
  });
});

// Leave a Note
$(document).ready(function () {
  //Show
  $(".leaveNote").click(function () {
      $( ".leaveANote" ).slideDown( "fast", function() {
      });
  });
});

// Physician Addition Show
$(document).ready(function () {
  //Show
  $(".viewPhysicianOptions").click(function () {
      $( ".physicianChoices" ).slideDown( "fast", function() {
      });
      $(".yesPhysicianOptions").css({
          opacity: "0.2"
      });

  });
  //Hide
  $(".closePhysicianOptions").click(function () {
      $( ".physicianChoices" ).slideUp( "fast", function() {
      });

  });
});

// Re-Enable the Continue Button
$(document).ready(function () {
  //Show
  $(".physicianInput").click(function () {
      $(".continuePhysician").css({
          opacity: "1",
          cursor: "pointer"
      });
  });
});

// Yes, Current Physician
$(document).ready(function () {
  $(".yesPhysicianOptions").click(function () {
      $(".attributionConfirmation .yesLabel").css({
          display: "inline"
      });
      $(".confirmCurrentHealth").slideUp( "fast", function() {
      });
      //Open Service Eligibility Box
      $(".coloBox").slideDown( "fast", function() {
        //Direct window to section
        window.location.href = "#PreventativeServices";
        $('html,body').animate({
            scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 99
        }, 'fast');
      });

      //Milestone Tab Completion Status
      $(".QualityMeasures, .pe2").removeClass("notcomplete");
      $(".QualityMeasures, .pe2").addClass("complete");
      $(".QualityMeasures span i, .pe2 span i").removeClass("fa fa-close");
      $(".QualityMeasures span i, .pe2 span i").addClass("fa fa-check");
      $(".QualityMeasures span").css({
          padding: "1px 4px 2px 4px"
      });
  });

  $(".continuePhysician").click(function () {
    //Milestone Tab Completion Status
    $(".QualityMeasures, .pe2").removeClass("notcomplete");
    $(".QualityMeasures, .pe2").addClass("complete");
    $(".QualityMeasures span i, .pe2 span i").removeClass("fa fa-close");
    $(".QualityMeasures span i, .pe2 span i").addClass("fa fa-check");
    $(".QualityMeasures span").css({
          padding: "1px 4px 2px 4px"
      });
  });
});

// Update Physician and Close
$(document).ready(function () {
  $(".continuePhysician").click(function () {
      $(".attributionConfirmation .noLabel").css({
          display: "inline"
      });
      $(".attributionConfirmation .updateLabel").css({
          display: "inline"
      });
      $(".confirmCurrentHealth").slideUp( "fast", function() {
      });
      //Open Service Eligibility Box
      $(".coloBox").slideDown( "fast", function() {
        //Direct window to section
        window.location.href = "#PreventativeServices";
        $('html,body').animate({
            scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 99
        }, 'fast');
      });
  });
});

// Re-opening the "Attribution Confirmation" Question Box
$(document).ready(function () {
  //Show
  $(".questionLabel-lowMar.attributionConfirmation").click(function () {
      $( ".confirmCurrentHealth" ).slideDown( "fast", function() {
      });
  });
});

// PREVENTIVE - Had or Haven't Had Service
$(document).ready(function () {
  //Yes
  $(".yesHadService").click(function () {
      $(".noService").css({
          opacity: "0.2"
      });
      $(".whenWasYourLastService").slideDown( "fast", function() {
      });
      $(".prepCont").click(function () {
          $(".continueService").css({
              opacity: "1",
              cursor: "pointer"
          });
      });
      $(".continueService").click(function () {
          $(".coloBox").slideUp( "fast", function() {
          });
          $(".headColo .yesLabel").css({
              display: "inline"
          });
          $(".headColo .serviceDateLabel").css({
              display: "inline"
          });

          $(".nav-tabs li a").removeClass("incomplete");
          $(".nav-tabs li a").addClass("complete");
          $(".nav-tabs li a span").removeClass("glyphicon-remove");
          $(".nav-tabs li a span").addClass("glyphicon-ok");


          //Open Contact Verification Box
          $(".conPrefBox").slideDown( "slow", function() {
            //Direct window to section
            window.location.href = "#ContactVerificationPreferences";
            $('html,body').animate({
                scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 99
            }, 'fast');
          });

          //Milestone Tab Completion Status
          $(".PreventiveServices, .pe3").removeClass("notcomplete");
          $(".PreventiveServices, .pe3").addClass("complete");
          $(".PreventiveServices span i, .pe3 span i").removeClass("fa fa-close");
          $(".PreventiveServices span i, .pe3 span i").addClass("fa fa-check");
          $(".PreventiveServices span").css({
              padding: "1px 4px 2px 4px"
          });
      });
  });
  //Cancel
  $(".closeLastService").click(function () {
      $(".whenWasYourLastService").slideUp( "fast", function() {
      });
  });
  //No
  $(".noService").click(function () {
      $(".headColo .noLabel").css({
          display: "inline"
      });
      $(".yesHadService").css({
          opacity: "0.2"
      });
      $(".coloBox").slideUp( "fast", function() {
      });

      //Milestone Tab Completion Status
      $(".PreventiveServices, .pe3").removeClass("notcomplete");
      $(".PreventiveServices, .pe3").addClass("complete");
      $(".PreventiveServices span i, .pe3 span i").removeClass("fa fa-close");
      $(".PreventiveServices span i, .pe3 span i").addClass("fa fa-check");
      $(".PreventiveServices span").css({
          padding: "1px 4px 2px 4px"
      });

      //Tab Completion Status
      $(".prevServTabs .nav-tabs li").removeClass("active");
      $(".prevServTabs .nav-tabs li a").removeClass("incomplete");
      $(".prevServTabs .nav-tabs li a").addClass("complete");
      $(".prevServTabs .nav-tabs li a span").removeClass("glyphicon-remove");
      $(".prevServTabs .nav-tabs li a span").addClass("glyphicon-ok");

      //$(".letsScheduleYourNextVisit").slideDown( "fast", function() {
      //});
      //Open Contact Verification Box
      $(".conPrefBox").slideDown( "slow", function() {
        //Direct window to section
        window.location.href = "#ContactVerificationPreferences";
        return false;
      });
  });

  //On click of milestone button open section
  $(".ContactVerificationPreference").click(function () {
      $(".conPrefBox").slideDown( "fast", function() {
      });
  });


  //Re Open box
  $(".headColo").click(function () {
      $(".coloBox").slideDown( "fast", function() {
      });
  });
});

//VERIFY - Yes, Verify Patient Info, Then Verify and Close
$(document).ready(function () {
  //Yes
  $(".verifyPrefs").click(function () {
      $(".headVPD .yesLabel").css({
          display: "inline"
      });
      $(".noVerifyPrefs").css({
          opacity: "0.2"
      });
      $(".conPrefBox").slideDown( "fast", function() {
      });
      $(".verifyContactBox").slideUp( "fast", function() {
      });

      //Milestone Tab Completion Status
      $(".ContactVerificationPreferences, .pe4").removeClass("notcomplete");
      $(".ContactVerificationPreferences, .pe4").addClass("complete");
      $(".ContactVerificationPreferences span i, .pe4 span i").removeClass("fa fa-close");
      $(".ContactVerificationPreferences span i, .pe4 span i").addClass("fa fa-check");
      $(".ContactVerificationPreferences span").css({
          padding: "1px 4px 2px 4px"
      });
  });
  //No (Either answer yields a positive "Complete" label
  $(".noVerifyPrefs").click(function () {
      $(".headVPD .yesLabel").css({
          display: "inline"
      });
      $(".verifyPrefs").css({
          opacity: "0.2"
      });
      $(".verifyContactBox").slideUp( "slow", function() {
      });
      $(".conPrefBox").slideDown( "fast", function() {
      });

      //Milestone Tab Completion Status
      $(".ContactVerificationPreferences, .pe4").removeClass("notcomplete");
      $(".ContactVerificationPreferences, .pe4").addClass("complete");
      $(".ContactVerificationPreferences span i, .pe4 span i").removeClass("fa fa-close");
      $(".ContactVerificationPreferences span i, .pe4 span i").addClass("fa fa-check");
      $(".ContactVerificationPreferences span").css({
          padding: "1px 4px 2px 4px"
      });
  });
  //Re Open box
  $(".headVPD").click(function () {
      $(".verifyContactBox").slideDown( "fast", function() {
      });
  });
});

// Patient Contact Preferences
$(document).ready(function () {
  //Radio Selected
  $(".checkbox").click(function () {
      $(".conPrefsCont").css({
          opacity: "1",
          cursor: "pointer"
      });
  });
  //Continue / Finished
  $(".conPrefsCont").click(function () {
      $(".headPCP .updatedLabel").css({
          display: "inline"
      });
      $(".conPrefBox").slideUp( "fast", function() {
      });

      //Milestone Tab Completion Status
      $(".ContactVerificationPreference, .pe4").removeClass("notcomplete");
      $(".ContactVerificationPreference, .pe4").addClass("complete");
      $(".ContactVerificationPreference span i, .pe4 span i").removeClass("fa fa-close");
      $(".ContactVerificationPreference span i, .pe4 span i").addClass("fa fa-check");

      $(".ContactVerificationPreference span").removeClass("notcomplete");
      $(".ContactVerificationPreference span").addClass("complete");
      $(".ContactVerificationPreference span").css({
          padding: "1px 4px 2px 4px"
      });


      //Open Engagement Outcome
      $(".serviceSchedulingBox").slideDown( "slow", function() {
        //Direct window to section
        window.location.href = "#EngagementOutcome";
        $('html,body').animate({
            scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 99
        }, 'fast');
      });
  });
  //Re Open box
  $(".headPCP").click(function () {
      $(".conPrefBox").slideDown( "fast", function() {
      });
  });
});

// Engagement Outcome
$(document).ready(function () {
//Re Open box
$(".headServiceScheduling").click(function () {
    $(".serviceSchedulingBox").slideDown( "fast", function() {
    });
});
//Initiate Complete Button
$(".selectDispo").click(function () {
    $(".completeSurvey, .completeSurvey2").css({
        opacity: "1",
        cursor: "pointer"
    });
    $(".completeAndSche").css({
        display: "inline"
    });
});
});

// Complete Survey
$(document).ready(function () {
  //Complete!
  $(".completeSurvey").click(function () {
    //Close Disposition & Notes Box
    $(".serviceSchedulingBox").slideUp( "fast", function() {
    });
    //Mark Completed
    $(".headServiceScheduling .updatedLabel").css({
        display: "inline"
    });

    //Milestone Tab Completion Status
    $(".EngagementOutcome").removeClass("notcomplete");
    $(".EngagementOutcome").addClass("complete");
    $(".EngagementOutcome span i").removeClass("fa fa-close");
    $(".EngagementOutcome span i").addClass("fa fa-check");
    $(".EngagementOutcome span").css({
        padding: "1px 4px 2px 4px"
    });
    //Main Milestone Menu Status'
    $(".pe1, .pe2, .pe3, .pe4, .pe5").removeClass("notcomplete");
    $(".pe1, .pe2, .pe3, .pe4, .pe5").addClass("complete");
    $(".pe1 span i, .pe2 span i, .pe3 span i, .pe4 span i, .pe5 span i").removeClass("fa fa-close");
    $(".pe1 span i, .pe2 span i, .pe3 span i, .pe4 span i, .pe5 span i").addClass("fa fa-check");

    //Take User to the top of the Page
    window.location.href = "#top";
    return false;
  });

  //Complete and Schedule!
  $(".completeSurvey2").click(function () {
    //Close Disposition & Notes Box
    $(".serviceSchedulingBox").slideUp( "fast", function() {
    });
    //Mark Completed
    $(".headServiceScheduling .updatedLabel").css({
        display: "inline"
    });

    //Milestone Tab Completion Status
    $(".EngagementOutcome").removeClass("notcomplete");
    $(".EngagementOutcome").removeClass("nostate");
    $(".EngagementOutcome").addClass("complete");
    $(".EngagementOutcome span i").removeClass("fa fa-close");
    $(".EngagementOutcome span i").removeClass("fa fa-minus");
    $(".EngagementOutcome span i").addClass("fa fa-check");
    $(".EngagementOutcome span").css({
        padding: "1px 3px 2px 3px"
    });
    //Main Milestone Menu Status'
    $(".patientEngagement, .pe1, .pe2, .pe3, .pe4, .pe5").removeClass("notcomplete");
    $(".patientEngagement, .pe1, .pe2, .pe3, .pe4, .pe5").removeClass("nostate");
    $(".patientEngagement, .pe1, .pe2, .pe3, .pe4, .pe5").addClass("complete");
    $(".patientEngagement span i, .pe1 span i, .pe2 span i, .pe3 span i, .pe4 span i, .pe5 span i").removeClass("fa fa-close");
        $(".patientEngagement span i, .pe1 span i, .pe2 span i, .pe3 span i, .pe4 span i, .pe5 span i").removeClass("fa fa-minus");
    $(".patientEngagement span i, .pe1 span i, .pe2 span i, .pe3 span i, .pe4 span i, .pe5 span i").addClass("fa fa-check");

    //Take User to the top of the Page
    window.location.href = "../Scheduling/index.html?scroll=demo";
    return false;
  });
});
