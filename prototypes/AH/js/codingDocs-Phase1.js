
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

$(document).ready(function () {

    //Show Banner
    $(".form-control").click(function () {
      $( ".completeSurvey" ).css({
        opacity: "1",
        cursor: "pointer"
      });
    });

    //Close Banner
    $(".dismissBanner").click(function () {
      $(".bannerView").slideUp( "fast", function() {
      });
    });

    //Complete Morbid Obesity
    $(".HCCMorb").click(function () {
      //Tab Completion Status
      $(".morbOb").removeClass("incomplete");
      $(".morbOb").addClass("complete");
      $(".morbOb span.glyphicon").removeClass("glyphicon-remove");
      $(".morbOb span.glyphicon").addClass("glyphicon-ok");

      //Activate Next Tab & Contents
      $(".diab").addClass("active");
      $(".morbOb, .cong, .vasc, .dise, .tube").removeClass("active");

      $( ".morbButtons" ).css({
        display: "none"
      });

      //Move user back to top of section
      window.location.href = "#HCCReview";
      $('html,body').animate({
          scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 180
      }, 'fast');

    });

    //Complete Diabetes
    $(".HCCDiab").click(function () {
      //Tab Completion Status
      $(".diab").removeClass("incomplete");
      $(".diab").addClass("complete");
      $(".diab span.glyphicon").removeClass("glyphicon-remove");
      $(".diab span.glyphicon").addClass("glyphicon-ok");
      //Activate Next Tab & Contents
      $(".morbOb").addClass("active");
      $(".diab, .cong, .vasc, .dise, .tube").removeClass("active");

      $( ".diabButtons" ).css({
        display: "none"
      });

      //Move user to next section
      window.location.href = "#QualityMeasures";
      $('html,body').animate({
          scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 180
      }, 'fast');

    });

    //Quality Measures - Production Coding
    $(".completeQualityPCR").click(function () {
      //Tab Completion Status
      $(".QualityMeasuretabs li:first-child a").removeClass("incomplete");
      $(".QualityMeasuretabs li:first-child a").addClass("complete");
      $(".QualityMeasuretabs li:first-child a span").removeClass("glyphicon-remove");
      $(".QualityMeasuretabs li:first-child a span").addClass("glyphicon-ok");
      $( ".qualityButtons" ).css({
        display: "none"
      });

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


});
