//Show Hide Sections
$(document).ready(function () {

    //Snapshot
    $(".mySnap.hideItems").click(function () {
        $( ".snapArea" ).slideUp( "fast", function() {
        });
        $(".mySnap.showItems").css({
            display: "inline"
        });
        $(".mySnap.hideItems").css({
            display: "none"
        });
        $(".mySnap.headLine").css({
            display: "block"
        });
    });
    $(".mySnap.showItems").click(function () {
        $( ".snapArea" ).slideDown( "fast", function() {
        });
        $(".mySnap.showItems").css({
            display: "none"
        });
        $(".mySnap.hideItems").css({
            display: "inline"
        });
        $(".mySnap.headLine").css({
            display: "none"
        });
    });

    //Worklist
    $(".workAction.hideItems").click(function () {
        $( ".treeList" ).slideUp( "fast", function() {
        });
        $(".workAction.showItems").css({
            display: "inline"
        });
        $(".workAction.hideItems").css({
            display: "none"
        });
        $(".workAction.headLine").css({
            display: "block"
        });
    });
    $(".workAction.showItems").click(function () {
        $( ".treeList" ).slideDown( "fast", function() {
        });
        $(".workAction.showItems").css({
            display: "none"
        });
        $(".workAction.hideItems").css({
            display: "inline"
        });
        $(".workAction.headLine").css({
            display: "none"
        });
    });

    //Work Metrics
    $(".workMetrics.hideItems").click(function () {
        $( ".workMetricsCont" ).slideUp( "fast", function() {
        });
        $(".workMetrics.showItems").css({
            display: "inline"
        });
        $(".workMetrics.hideItems").css({
            display: "none"
        });
        $(".workMetrics.headLine").css({
            display: "block"
        });
    });
    $(".workMetrics.showItems").click(function () {
        $( ".workMetricsCont" ).slideDown( "fast", function() {
        });
        $(".workMetrics.showItems").css({
            display: "none"
        });
        $(".workMetrics.hideItems").css({
            display: "inline"
        });
        $(".workMetrics.headLine").css({
            display: "none"
        });
    });

    //Patient Search
    $(".patientSrch.hideItems").click(function () {
        $( ".patientSrchCont" ).slideUp( "fast", function() {
        });
        $(".patientSrch.showItems").css({
            display: "inline"
        });
        $(".patientSrch.hideItems").css({
            display: "none"
        });
        $(".patientSrch.headLine").css({
            display: "block"
        });
    });
    $(".patientSrch.showItems").click(function () {
        $( ".patientSrchCont" ).slideDown( "fast", function() {
          //Direct window to section
          window.location.href = "#bottom";
          return false;
        });
        $(".patientSrch.showItems").css({
            display: "none"
        });
        $(".patientSrch.hideItems").css({
            display: "inline"
        });
        $(".patientSrch.headLine").css({
            display: "none"
        });
    });


    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();


    // NOTIFICATIONS & INBOX
    // Message 1
    $(".mess1, .notiLog > .sticky-wrap > .sticky-col > tbody > tr.mess1").click(function () {
        $(".mess1 th, .notiLog > .sticky-wrap > .sticky-col > tbody > tr.mess1 > th").removeClass("newNoti");
    });
    $(".keep1").click(function () {
        $(".mess1 th").removeClass("newNoti, archiveIt");
        $(".mess1 th").addClass("keepIt");
        $(".keep1").css({
                opacity: "0.3"
        });
        $(".archive1").css({
                opacity: "1"
        });
    });
    $(".delete1, .archive1").click(function () {
        $( ".mess1" ).slideUp( "slow", function() {
        });
    });
    $(".env1").click(function () {
        $(".env1").css({
                opacity: "0.3"
        });
    });

    // Message 2
    $(".mess2").click(function () {
        $(".mess2 th").removeClass("newNoti");
    });
    $(".keep2").click(function () {
        $(".mess2 th").removeClass("newNoti, archiveIt");
        $(".mess2 th").addClass("keepIt");
        $(".keep2").css({
                opacity: "0.3"
        });
        $(".archive2").css({
                opacity: "1"
        });
    });
    $(".delete2, .archive2").click(function () {
        $( ".mess2" ).slideUp( "slow", function() {
        });
    });
    $(".env2").click(function () {
        $(".env2").css({
                opacity: "0.3"
        });
    });

    // Message 3
    $(".mess3").click(function () {
        $(".mess3 th").removeClass("newNoti");
    });
    $(".keep3").click(function () {
        $(".mess3 th").removeClass("newNoti, archiveIt");
        $(".mess3 th").addClass("keepIt");
        $(".keep3").css({
                opacity: "0.3"
        });
        $(".archive3").css({
                opacity: "1"
        });
    });
    $(".delete3, .archive3").click(function () {
        $( ".mess3" ).slideUp( "slow", function() {
        });
    });
    $(".env3").click(function () {
        $(".env3").css({
                opacity: "0.3"
        });
    });

    // Message 4
    $(".mess4").click(function () {
        $(".mess4 th").removeClass("newNoti");
    });
    $(".keep4").click(function () {
        $(".mess4 th").removeClass("newNoti, archiveIt");
        $(".mess4 th").addClass("keepIt");
        $(".keep4").css({
                opacity: "0.3"
        });
        $(".archive4").css({
                opacity: "1"
        });
    });
    $(".delete4, .archive4").click(function () {
        $( ".mess4" ).slideUp( "slow", function() {
        });
    });
    $(".env4").click(function () {
        $(".env4").css({
                opacity: "0.3"
        });
    });

    // Message 5
    $(".mess5").click(function () {
        $(".mess5 th").removeClass("newNoti");
    });
    $(".keep5").click(function () {
        $(".mess5 th").removeClass("newNoti, archiveIt");
        $(".mess5 th").addClass("keepIt");
        $(".keep5").css({
                opacity: "0.3"
        });
        $(".archive5").css({
                opacity: "1"
        });
    });
    $(".delete5, .archive5").click(function () {
        $( ".mess5" ).slideUp( "slow", function() {
        });
    });
    $(".env4").click(function () {
        $(".env4").css({
                opacity: "0.3"
        });
    });


    // Archive
    $(".archiveIcon").click(function () {
        //Hide Inbox Header
        $(".notificationHead").css({
                display: "none"
        });
        //Show Archive Header
        $(".archiveHead").css({
                display: "inline"
        });
        //Hide Archive Icon
        $(".archiveIcon").css({
                display: "none"
        });
        //Show Inbox Icon
        $(".notificationIcon").css({
                display: "inline"
        });
        //Hide Notification Table
        $( ".notiLog" ).slideUp( "fast", function() {
          //Show Archive Table
          $( ".archiveLog" ).slideDown( "fast", function() {
              //Direct window to section
              window.location.href = "#bottom";
              return false;
          });
        });


    });

    //Inbox
    $(".notificationIcon").click(function () {
        //Bring Back Inbox header
        $(".notificationHead").css({
                display: "inline"
        });
        //Hide Archive Header
        $(".archiveHead").css({
                display: "none"
        });
        //Show Archive Icon
        $(".archiveIcon").css({
                display: "inline"
        });
        //Hide Inbox Icon
        $(".notificationIcon").css({
                display: "none"
        });
        //Hide Archive Table
        $( ".archiveLog" ).slideUp( "fast", function() {
          //Show Notification Table
          $( ".notiLog" ).slideDown( "fast", function() {
              //Direct window to section
              window.location.href = "#bottom";
              return false;
          });
        });

    });

});

/* Graph Key */
$(document).ready(function () {

    $('.graphKey').click(function(){
        $(".keyToGraph").fadeIn( "1500", function() {
        });
    });

    $('.closeKey').click(function(){
        $(".keyToGraph").fadeOut( "1500", function() {
        });
    });

});


/* Toggle */
$(document).ready(function () {

    $('.switch').click(function(){
        $(this).toggleClass('off-btn');
    });

});
