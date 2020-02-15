// Scheduling Click Through Actions for Milestone and scroll

//Outreach
$(".rightParty").click(function () {
  //Milestone Tab Completion Status
  $(".Outreach, .sc2").removeClass("notcomplete");
      $(".Outreach, .sc2").removeClass("nostate");
  $(".Outreach, .sc2").addClass("complete");
  $(".Outreach span i, .sc2 span i").removeClass("fa fa-close");
      $(".Outreach span i, .sc2 span i").removeClass("fa fa-minus");
  $(".Outreach span i, .sc2 span i").addClass("fa fa-check");
  //Direct window to section
  window.location.href = "?scroll=demo";
});

//Demographics
$(".confirmDemo").click(function () {
  //Milestone Tab Completion Status
  $(".DemographicConfirmation, .sc3").removeClass("notcomplete");
      $(".DemographicConfirmation, .sc3").removeClass("nstate");
  $(".DemographicConfirmation, .sc3").addClass("complete");
  $(".DemographicConfirmation span i, .sc3 span i").removeClass("fa fa-close");
      $(".DemographicConfirmation span i, .sc3 span i").removeClass("fa fa-minus");
  $(".DemographicConfirmation span i, .sc3 span i").addClass("fa fa-check");
  //Direct window to section
  window.location.href = "#InsurVerif";
  $('html,body').animate({
      scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 180
  }, 'fast');
});

//Insurance
$(".confirmIns").click(function () {
  //Milestone Tab Completion Status
  $(".InsuranceVerifciation, .sc4").removeClass("notcomplete");
      $(".InsuranceVerifciation, .sc4").removeClass("nostate");
  $(".InsuranceVerifciation, .sc4").addClass("complete");
  $(".InsuranceVerifciation span i, .sc4 span i").removeClass("fa fa-close");
      $(".InsuranceVerifciation span i, .sc4 span i").removeClass("fa fa-minus");
  $(".InsuranceVerifciation span i, .sc4 span i").addClass("fa fa-check");
  //Direct window to section
  window.location.href = "#OutcomesReview";
  $('html,body').animate({
      scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 99
  }, 'fast');
});

//Outcomes Review
$(".completeSche").click(function () {
  //Milestone Tab Completion Status
  $(".OutcomesReview, .sc5, .scheduling").removeClass("notcomplete");
      $(".OutcomesReview, .sc5, .scheduling").removeClass("nostate");
  $(".OutcomesReview, .sc5, .scheduling").addClass("complete");
  $(".OutcomesReview span i, .sc5 span i, .scheduling span i").removeClass("fa fa-close");
      $(".OutcomesReview span i, .sc5 span i, .scheduling span i").removeClass("fa fa-minus");
  $(".OutcomesReview span i, .sc5 span i, .scheduling span i").addClass("fa fa-check");
  $( ".bannerView" ).slideDown( "fast", function() {
    //Direct window to section
    window.location.href = "#top";
    return false;
  });
});


// Question Boxes

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

// Yes, Who Are You...
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

        //Change No Opacity
        $(".viewWrongPartyOptions").css({
            opacity: "0.2",
            cursor: "not-allowed"
        });
        //Close Box
        $( ".theRightParty" ).slideUp( "slow", function() {
        });
        //Open Attribution Confirmation Box
        $(".confirmCurrentHealth").slideDown( "slow", function() {
        });
        //Direct window to section
        window.location.href = "#DemographicConfirmation";
        $('html,body').animate({
            scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 99
        }, 'fast');
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

// Close Banner
$(document).ready(function () {
    //Show Banner
    $(".dismissBanner").click(function () {
        $( ".bannerView" ).slideUp( "fast", function() {
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
