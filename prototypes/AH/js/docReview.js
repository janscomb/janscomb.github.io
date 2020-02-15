//Complete Document Review - Clinic Follow-Up
$(document).ready(function () {

  //Initiall Page Load: Button opacity
  $(".completeDiabClin").css({
      opacity: "0.2",
      cursor: "not-allowed"
  });

    //Enable button
    $(".notesField").click(function () {
      $(".completeDiabClin").css({
          opacity: "1",
          cursor: "pointer"
      });
      //Milestone Tab Completion Status
      $(".cd2").removeClass("notcomplete");
      $(".cd2").addClass("complete");
      $(".cd2 span i").removeClass("fa fa-close");
      $(".cd2 span i").addClass("fa fa-check");
    });

    //Show Banner
    $(".completeDiabClin").click(function () {
      $(".bannerView").slideDown( "fast", function() {
      });
      //Milestone Tab Completion Status
      $(".diabClin a").removeClass("incomplete");
      $(".diabClin a").addClass("complete");
      $(".diabClin a span").removeClass("glyphicon-remove");
      $(".diabClin a span").addClass("glyphicon-ok");

      window.location.href = "#Top";
      $('html,body').animate({
          scrollTop: $('.mileNav').offset().top - $('.HCCWorklistBar').height() - $('.patientCard2').height() - 99
      }, 'fast');
    });

    //Close Banner
    $(".dismissBanner").click(function () {
      $(".bannerView").slideUp( "fast", function() {
      });
    });
});
