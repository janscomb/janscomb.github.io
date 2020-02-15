// Active Tab Shown as First Tab upon click
//$(".diab, .morb, .brea").click(function() {
//    $(this).parent().prepend(this);
//});

// This takes specified tabs out of "More" and brings it to front
$(".coag, .spec").click(function() {
    $(this).parent().parent().parent().prepend(this);

    var tabs = $('#tabs');
    var tabsHeight = tabs.innerHeight();

    if (tabsHeight >= 50) {
      while(tabsHeight > 50) {
        //console.log("new"+tabsHeight);

        var children = tabs.children('li:not(:last-child)');
        var count = children.size();
        $(children[count-1]).prependTo('#collapsed');

        tabsHeight = tabs.innerHeight();
      }
    }
    else {
    	while(tabsHeight < 50 && (tabs.children('li').size()>0)) {

        var collapsed = $('#collapsed').children('li');
        var count = collapsed.size();
        $(collapsed[0]).insertBefore(tabs.children('li:last-child'));
        tabsHeight = tabs.innerHeight();
      }
      if (tabsHeight>50) { // double check height again
      	autocollapse();
      }
    }
});

//Complete HCC - Clinic Follow-Up
$(".completeHCCRena").click(function () {
  //Milestone Tab Completion Status
  $(".rena a").removeClass("incomplete");
  $(".rena a").addClass("complete");
  $(".rena a span").removeClass("glyphicon-remove");
  $(".rena a span").addClass("glyphicon-ok");

  window.location.href = "#QualityMeasures";
  $('html,body').animate({
      scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 99
  }, 'fast');
});



//Complete HCC - Defect Life Cycle
$(".completeHCCDiab").click(function () {
  //HCC Tabs
  $(".nav-tabs li.diab, #Diabetes").removeClass("active");
  $(".nav-tabs li.morb, #MorbidObesity").addClass("active");
  $(".nav-tabs li.diab a").removeClass("incomplete");
  $(".nav-tabs li.diab a").addClass("complete");
  $(".nav-tabs li.diab a span").removeClass("glyphicon-remove");
  $(".nav-tabs li.diab a span").addClass("glyphicon-ok");

  window.location.href = "#backToTabs";
  $('html,body').animate({
          scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 180
    }, 'fast');
  return false;

});

$(".completeHCCMorbObesity").click(function () {
  //Milestone Tab Completion Status
  $(".HCC, .cdHCC, .cd1").removeClass("notcomplete");
  $(".HCC, .cdHCC, .cd1").addClass("complete");
  $(".cd3").removeClass("nostate");
  $(".cd3").addClass("notcomplete");
  $(".HCC span i, .cdHCC span i, .cd1 span i").removeClass("fa fa-close");
  $(".HCC span i, .cdHCC span i, .cd1 span i").addClass("fa fa-check");
  $(".cd3 span i").removeClass("fa fa-minus");
  $(".cd3 span i").addClass("fa fa-close");

  //HCC Tabs
  $(".nav-tabs li.morb a").removeClass("incomplete");
  $(".nav-tabs li.morb a").addClass("complete");
  $(".nav-tabs li.morb a span").removeClass("glyphicon-remove");
  $(".nav-tabs li.morb a span").addClass("glyphicon-ok");

  //Show Banner
  $(".bannerView").slideDown( "fast", function() {
  });
  $(".dismissBanner").click(function () {
      $( ".bannerView" ).slideUp( "fast", function() {
      });
      $( ".bannerView2" ).slideUp( "fast", function() {
      });
  });

  window.location.href = "#top";
  return false;
});

//Click Between Tabs
$(".diab a").click(function () {
  $(".vasc").removeClass("active");
  $(".diab").addClass("active");
  $("#Tab2").addClass("active");
  $("#VascularDisease").removeClass("active");
});

$(".vasc a").click(function () {
  $(".diab").removeClass("active");
  $(".vasc").addClass("active");
  $("#Tab2").removeClass("active");
  $("#VascularDisease").addClass("active");
});

//Complete Quality Measures - Clinic Follow-Up


//Complete HCC - Production Coding
$(".diab").click(function () {
    $("#Diabetes").addClass("active");
    $("#MorbidObesity, #CompletedTab").removeClass("active");
    $("#Diabetes").slideDown( "500", function() {
        $("#MorbidObesity, #CompletedTab").slideUp( "100", function() {});
    });
});

$(".morb").click(function () {
    $("#MorbidObesity").addClass("active");
    $("#Diabetes, #CompletedTab").removeClass("active");
    $("#MorbidObesity").slideDown( "500", function() {
        $("#Diabetes, #CompletedTab").slideUp( "100", function() {});
    });
});

$(".completeHCCDiab2").click(function () {
  //Milestone Tab Completion Status
  $("#Diabetes").delay(200).slideUp( "400", function() {

    $(".diab a").removeClass("incomplete");
    $(".diab a").addClass("complete");
    $(".diab a span").removeClass("glyphicon-remove");
    $(".diab a span").addClass("glyphicon-ok");

    $("#MorbidObesity").delay(1500).slideDown( "200", function() {
      $(".diab, #Diabetes").removeClass("active");
      $(".morb").addClass("active");
    });

  });

  window.location.href = "#backToTabs";
  $('html,body').animate({
          scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 180
    }, 'fast');
  return false;

});
$(".completeHCCMorb").click(function () {
  //Milestone Tab Completion Status
  $("#MorbidObesity").slideUp( "400", function() {
    $(".HCC, .cdHCC").removeClass("notcomplete");
    $(".HCC, .cdHCC").addClass("complete");
    $(".HCC span i, .cdHCC span i").removeClass("fa fa-close");
    $(".HCC span i, .cdHCC span i").addClass("fa fa-check");

    $(".morb a").removeClass("incomplete");
    $(".morb a").addClass("complete");
    $(".morb a span").removeClass("glyphicon-remove");
    $(".morb a span").addClass("glyphicon-ok");
  });

  $("#CompletedTab").delay(1500).slideDown( "200", function() {
    $(".diab, .morb, #Diabetes").removeClass("active");
    $("#CompletedTab").addClass("active");
    $("#CompletedTab .successBanner").delay(200).slideDown( "200", function() {
    });

  });

  window.location.href = "#backToTabs";
  $('html,body').animate({
          scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 180
    }, 'fast');
  return false;
});

//Click Between Tabs
$(".diab a").click(function () {
  $(".morb, .coag, .spec, .brea").removeClass("active");
  $(".diab").addClass("active");
  $("#Diabetes").addClass("active");
  $("#MorbidObesity").removeClass("active");
});

$(".morb a").click(function () {
  $(".diab, .brea, .coag, .spec").removeClass("active");
  $(".morb").addClass("active");
  $("#Diabetes").removeClass("active");
  $("#MorbidObesity").addClass("active");
});

$(".brea a").click(function () {
  $(".diab, .morb, .coag, .spec").removeClass("active");
  $(".brea").addClass("active");
  $("#Diabetes").removeClass("active");
  $("#MorbidObesity").addClass("active");
});

$(".coag a").click(function () {
  $(".diab, .morb, .brea, .spec").removeClass("active");
  $(".coag").addClass("active");
  $("#Diabetes").removeClass("active");
  $("#MorbidObesity").addClass("active");
});

$(".spec a").click(function () {
  $(".diab, .morb, .brea, .coag").removeClass("active");
  $(".spec").addClass("active");
  $("#Diabetes").removeClass("active");
  $("#MorbidObesity").addClass("active");
});

//Quality Measures - Production Coding
$(".completeQualityPCR").click(function () {
  //Milestone Tab Completion Status
  $(".QualityMeasures, .cdQualityMeasures").removeClass("notcomplete");
  $(".QualityMeasures, .cdQualityMeasures").addClass("complete");
  $(".QualityMeasures span i, .cdQualityMeasures span i").removeClass("fa fa-close");
  $(".QualityMeasures span i, .cdQualityMeasures span i").addClass("fa fa-check");

  $(".QualityMeasuretabs li:first-child a").removeClass("incomplete");
  $(".QualityMeasuretabs li:first-child a").addClass("complete");
  $(".QualityMeasuretabs li:first-child a span").removeClass("glyphicon-remove");
  $(".QualityMeasuretabs li:first-child a span").addClass("glyphicon-ok");

  $(".bannerView").slideDown( "fast", function() {
  });
  $(".dismissBanner").click(function () {
      $( ".bannerView" ).slideUp( "fast", function() {
      });
      $( ".bannerView2" ).slideUp( "fast", function() {
      });
  });

  window.location.href = "#top";
  return false;
});

//Wellness - Production Coding
$(".completeWellness").click(function () {
  //Milestone Tab Completion Status
  $(".Wellness, .cdWellness").removeClass("notcomplete");
  $(".Wellness, .cdWellness").removeClass("nostate");
  $(".Wellness, .cdWellness").addClass("complete");
  $(".Wellness span i, .cdWellness span i").removeClass("fa-minus");
  $(".Wellness span i, .cdWellness span i").removeClass("fa-close");
  $(".Wellness span i, .cdWellness span i").addClass("fa-check");

  $(".Wellnesstabs li:first-child a").removeClass("incomplete");
  $(".Wellnesstabs li:first-child a").addClass("complete");
  $(".Wellnesstabs li:first-child a span").removeClass("glyphicon-remove");
  $(".Wellnesstabs li:first-child a span").addClass("glyphicon-ok");

  $(".bannerView").slideDown( "fast", function() {
  });
  $(".dismissBanner").click(function () {
      $( ".bannerView" ).slideUp( "fast", function() {
      });
      $( ".bannerView2" ).slideUp( "fast", function() {
      });
  });

  window.location.href = "#top";
  return false;
});

//TCM - Production Coding
$(".completeTCM").click(function () {
  //TCM Tab Completion Status
  $(".TCM, .cdTCM").removeClass("notcomplete");
  $(".TCM, .cdTCM").removeClass("nostate");
  $(".TCM, .cdTCM").addClass("complete");
  $(".TCM span i, .cdTCM span i").removeClass("fa-minus");
  $(".TCM span i, .cdTCM span i").removeClass("fa-close");
  $(".TCM span i, .cdTCM span i").addClass("fa-check");

  $(".TCMtabs li:first-child a").removeClass("incomplete");
  $(".TCMtabs li:first-child a").addClass("complete");
  $(".TCMtabs li:first-child a span").removeClass("glyphicon-remove");
  $(".TCMtabs li:first-child a span").addClass("glyphicon-ok");

  $(".bannerView").slideDown( "fast", function() {
  });
  $(".dismissBanner").click(function () {
      $( ".bannerView" ).slideUp( "fast", function() {
      });
      $( ".bannerView2" ).slideUp( "fast", function() {
      });
  });

  window.location.href = "#top";
  return false;
});

//CCM - Production Coding
$(".completeCCM").click(function () {
  //TCM Tab Completion Status
  $(".CCM, .cdCCM").removeClass("notcomplete");
  $(".CCM, .cdCCM").removeClass("nostate");
  $(".CCM, .cdCCM").addClass("complete");
  $(".CCM span i, .cdCCM span i").removeClass("fa-minus");
  $(".CCM span i, .cdCCM span i").removeClass("fa-close");
  $(".CCM span i, .cdCCM span i").addClass("fa-check");

  $(".CCMtabs li:first-child a").removeClass("incomplete");
  $(".CCMtabs li:first-child a").addClass("complete");
  $(".CCMtabs li:first-child a span").removeClass("glyphicon-remove");
  $(".CCMtabs li:first-child a span").addClass("glyphicon-ok");

  $(".bannerView").slideDown( "fast", function() {
  });
  $(".dismissBanner").click(function () {
      $( ".bannerView" ).slideUp( "fast", function() {
      });
      $( ".bannerView2" ).slideUp( "fast", function() {
      });
  });

  window.location.href = "#top";
  return false;
});


// Basic Milestone Click Through Actions
//HCC
//$(".completeHCC,.completeHCCDiab, .completeHCCVasc, .completeHCCMorb, .completeHCCRena").click(function () {
  //Milestone Tab Completion Status
//  $(".HCC, .cdHCC").removeClass("notcomplete");
//      $(".HCC, .cdHCC").removeClass("nostate");
//  $(".HCC, .cdHCC").addClass("complete");
//  $(".HCC span i, .cdHCC span i").removeClass("fa fa-close");
//      $(".HCC span i, .cdHCC span i").removeClass("fa fa-minus");
//  $(".HCC span i, .cdHCC span i").addClass("fa fa-check");

//  window.location.href = "#backToTabs";
//    $('html,body').animate({
//          scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 180
//      }, 'fast');
//  return false;
//});



//Quality Measures
$(".completeQuality, .completeQualityCFCR, .completeQualityPCR, .completeQualityDLC").click(function () {
  //Milestone Tab Completion Status
  $(".QualityMeasures, .cdQualityMeasures").removeClass("notcomplete");
      $(".QualityMeasures, .cdQualityMeasures").removeClass("nostate");
  $(".QualityMeasures, .cdQualityMeasures").addClass("complete");
  $(".QualityMeasures span i, .cdQualityMeasures span i").removeClass("fa fa-close");
      $(".QualityMeasures span i, .cdQualityMeasures span i").removeClass("fa fa-minus");
  $(".QualityMeasures span i, .cdQualityMeasures span i").addClass("fa fa-check");
});

//HAC
$(".completeHAC, .completeHACCFCR, .completeHACPCR, .completeHACDLC").click(function () {
  //Milestone Tab Completion Status
  $(".HAC, .cdHAC").removeClass("notcomplete");
      $(".HAC, .cdHAC").removeClass("nostate");
  $(".HAC, .cdHAC").addClass("complete");
  $(".HAC span i, .cdHAC span i").removeClass("fa fa-close");
      $(".HAC span i, .cdHAC span i").removeClass("fa fa-minus");
  $(".HAC span i, .cdHAC span i").addClass("fa fa-check");
});

//Mortality
$(".completeMortality, .completeMortalityCFCR, .completeMortalityPCR, .completeMortalityDLC").click(function () {
  //Milestone Tab Completion Status
  $(".Mortality, .cdMortality, .codingDocumentation, .cd1").removeClass("notcomplete");
      $(".Mortality, .cdMortality, .codingDocumentation, .cd1").removeClass("nostate");
  $(".Mortality, .cdMortality, .codingDocumentation, .cd1").addClass("complete");
  $(".Mortality span i, .cdMortality span i, .codingDocumentation span i, .cd1 span i").removeClass("fa fa-close");
      $(".Mortality span i, .cdMortality span i, .codingDocumentation span i, .cd1 span i").removeClass("fa fa-minus");
  $(".Mortality span i, .cdMortality span i, .codingDocumentation span i, .cd1 span i").addClass("fa fa-check");
});


// Extra CCM
$(document).ready(function () {
  //Show
  $(".more").click(function () {
      $( ".extraCC" ).slideDown( "fast", function() {
      });

      //Hide Guarantor Open Button
      $(".more").css({
          display: "none"
      });

      //Show Guarantor Close Button
      $(".moreHide").css({
          display: "inline"
      });
  });

  //Hide
  $(".moreHide").click(function () {
      $( ".extraCC" ).slideUp( "fast", function() {
      });

      //Hide Guarantor Close Button
      $(".moreHide").css({
          display: "none"
      });

      //Show Guarantor Open Button
      $(".more").css({
          display: "inline"
      });
  });
});
