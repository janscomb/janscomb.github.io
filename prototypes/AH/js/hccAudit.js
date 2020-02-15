//Click-through tabs
$(document).ready(function () {
    $(".morbOb").click(function () {
      $(".morbOb").addClass("active");
      $(".diab, .cong, .vasc, .dise, .tube").removeClass("active");
    });
    $(".diab").click(function () {
      $(".diab").addClass("active");
      $(".morbOb, .cong, .vasc, .dise, .tube").removeClass("active");
    });
    $(".cong").click(function () {
      $(".cong").addClass("active");
      $(".diab, .morbOb, .vasc, .dise, .tube").removeClass("active");
    });
    $(".vasc").click(function () {
      $(".vasc").addClass("active");
      $(".diab, .cong, .morbOb, .dise, .tube").removeClass("active");
    });
    $(".dise").click(function () {
      $(".dise").addClass("active");
      $(".diab, .cong, .vasc, .morbOb, .tube").removeClass("active");
    });
    $(".tube").click(function () {
      $(".tube").addClass("active");
      $(".diab, .cong, .vasc, .dise, .morbOb").removeClass("active");
    });

    //Show Banner
    $(".form-control").click(function () {
      $( ".completeSurvey" ).css({
        opacity: "1",
        cursor: "pointer"
      });
    });

    $(".completeSurveyMorb").click(function () {
      //Tabs
      $(".diab").addClass("active");
      $(".morbOb, .cong, .vasc, .dise, .tube").removeClass("active");

      //Complete Tabs
      $(".morbOb").removeClass("incomplete");
      $(".morbOb").addClass("complete");
      $(".morbOb a span").removeClass("glyphicon-remove");
      $(".morbOb a span").addClass("glyphicon-ok");

      //Take User
      window.location.href = "#backToTabs";
      $('html,body').animate({
              scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 180
        }, 'fast');
      return false;
    });

    $(".completeSurveyDiab").click(function () {
      //Tabs
      $(".diab, .morbOb, .cong, .vasc, .dise, .tube").removeClass("active");

      //Complete Tabs
      $(".diab").removeClass("incomplete");
      $(".diab").addClass("complete");
      $(".diab a span").removeClass("glyphicon-remove");
      $(".diab a span").addClass("glyphicon-ok");

      //Open Banner & Take User
      $( ".bannerView" ).slideDown( "fast", function() {
        //Direct window to section
        window.location.href = "#top";
        return false;
      });
    });

    //Close Banner
    $(".dismissBanner").click(function () {
      $(".bannerView").slideUp( "fast", function() {
      });
    });
});