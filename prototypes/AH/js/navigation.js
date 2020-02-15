// Milestone Menu
$(document).ready(function () {

    //Patient Engagement
    //Enter
    $(".patientEngagement").click(function () {
        $(".patientEngagementMenu").slideDown( "fast", function() {
        });
    });

    //Give Button an Active State
    $(".patientEngagementMenu").mouseenter(function () {
        $(".patientEngagement").addClass("activeMilestone");
    });

    //Exit
    $(".containerContent, .scheduling, .codingDocumentation, .claimsRegistry, .careManagement, .other").click(function () {
        $(".patientEngagementMenu").slideUp( "fast", function() {
        });
    });

    //Remove Button Active State
    $(".patientEngagementMenu").mouseleave(function () {
        $(".patientEngagement").removeClass("activeMilestone");
    });


    //Scheduling & Follow-Up
    //Enter
    $(".scheduling").click(function () {
        $(".schedulingMenu").slideDown( "fast", function() {
        });
    });

    //Give Button an Active State
    $(".schedulingMenu").mouseenter(function () {
        $(".scheduling").addClass("activeMilestone");
    });

    //Exit
    $(".containerContent, .patientEngagement, .codingDocumentation, .claimsRegistry, .careManagement, .other").click(function () {
        $(".schedulingMenu").slideUp( "fast", function() {
        });
    });

    //Remove Button Active State
    $(".schedulingMenu").mouseleave(function () {
        $(".scheduling").removeClass("activeMilestone");
    });


    //Coding & Documentation
    //Enter
    $(".codingDocumentation").click(function () {
        $(".codingDocumentationMenu").slideDown( "fast", function() {
        });
    });

    //Give Button an Active State
    $(".codingDocumentationMenu").mouseenter(function () {
        $(".codingDocumentation").addClass("activeMilestone");
    });

    //Exit
    $(".containerContent, .patientEngagement, .scheduling, .claimsRegistry, .careManagement, .other").click(function () {
        $(".codingDocumentationMenu").slideUp( "fast", function() {
        });
    });

    //Remove Button Active State
    $(".codingDocumentationMenu").mouseleave(function () {
        $(".codingDocumentation").removeClass("activeMilestone");
    });


    //Claims & Registry
    //Enter
    $(".claimsRegistry").click(function () {
        $(".claimsRegistryMenu").slideDown( "fast", function() {
        });
    });

    //Give Button an Active State
    $(".claimsRegistryMenu").mouseenter(function () {
        $(".claimsRegistry").addClass("activeMilestone");
    });

    //Exit
    $(".containerContent, .patientEngagement, .scheduling, .codingDocumentation, .careManagement, .other").click(function () {
        $(".claimsRegistryMenu").slideUp( "fast", function() {
        });
    });

    //Remove Button Active State
    $(".claimsRegistryMenu").mouseleave(function () {
        $(".claimsRegistry").removeClass("activeMilestone");
    });


    //Other
    //Enter
    $(".other").click(function () {
        $(".otherMenu").slideDown( "fast", function() {
        });
    });

    //Give Button an Active State
    $(".otherMenu").mouseenter(function () {
        $(".other").addClass("activeMilestone");
    });

    //Exit
    $(".containerContent, .patientEngagement, .scheduling, .codingDocumentation, .claimsRegistry, .careManagement").click(function () {
        $(".otherMenu").slideUp( "fast", function() {
        });
    });

    //Remove Button Active State
    $(".otherMenu").mouseleave(function () {
        $(".other").removeClass("activeMilestone");
    });



    //*******************CLICKING NAVIGATION*************************************************************************************
    //Click for Scheduling
    //Order Status
    $(".sc1, .OrderStatus").click(function () {
        //Hide Main Menu & H2
        $(".mainMilestones, .mileMain").slideUp( "fast", function() {
        });
        //Show Scheduling Menu
        $(".codingRecoveryServicesMenu, .mileHCC").slideDown( "slow", function() {
        });
        //Active Button State
        $(".sc1, .OrderStatus").addClass("activeMilestone");
        //Clear other active states
        $(".Outreach, .DemographicConfirmation, .InsuranceVerification, .OutcomesReview, .sc2, .sc3, .sc4, .sc5").removeClass("activeMilestone");
    });

    //Outreach
    $(".sc2, .Outreach").click(function () {
        //Hide Main Menu & H2
        $(".mainMilestones, .mileMain").slideUp( "fast", function() {
        });
        //Show Scheduling Menu
        $(".codingRecoveryServicesMenu, .mileHCC").slideDown( "slow", function() {
        });
        //Active Button State
        $(".sc2, .Outreach").addClass("activeMilestone");
        //Clear other active states
        $(".OrderStatus, .DemographicConfirmation, .InsuranceVerification, .OutcomesReview, .sc1, .sc3, .sc4, .sc5").removeClass("activeMilestone");
    });

    //Demographic Confirmation
    $(".sc3, .DemographicConfirmation").click(function () {
        //Hide Main Menu & H2
        $(".mainMilestones, .mileMain").slideUp( "fast", function() {
        });
        //Show Schdeuling Menu
        $(".codingRecoveryServicesMenu, .mileHCC").slideDown( "slow", function() {
        });
        //Active Button State
        $(".sc3, .DemographicConfirmation").addClass("activeMilestone");
        //Clear other active states
        $(".OrderStatus, .Outreach, .InsuranceVerification, .OutcomesReview, .sc1, .sc2, .sc4, .sc5").removeClass("activeMilestone");
    });

    //Insurance Verification
    $(".sc4, .InsuranceVerification").click(function () {
        //Hide Main Menu & H2
        $(".mainMilestones, .mileMain").slideUp( "fast", function() {
        });
        //Show Schdeuling Menu
        $(".codingRecoveryServicesMenu, .mileHCC").slideDown( "slow", function() {
        });
        //Active Button State
        $(".sc4, .InsuranceVerification").addClass("activeMilestone");
        //Clear other active states
        $(".OrderStatus, .Outreach, .DemographicConfirmation, .OutcomesReview, .sc1, .sc2, .sc3, .sc5").removeClass("activeMilestone");
    });

    //Outcomes Review
    $(".sc5, .OutcomesReview").click(function () {
        //Hide Main Menu & H2
        $(".mainMilestones, .mileMain").slideUp( "fast", function() {
        });
        //Show Schdeuling Menu
        $(".codingRecoveryServicesMenu, .mileHCC").slideDown( "slow", function() {
        });
        //Active Button State
        $(".sc5, .OutcomesReview").addClass("activeMilestone");
        //Clear other active states
        $(".OrderStatus, .Outreach, .DemographicConfirmation, .InsuranceVerification, .sc1, .sc2, .sc3, .sc4").removeClass("activeMilestone");
    });

    //Exit to Original Menu
    $(".subContainer").click(function () {
        $(".mainMilestones").slideUp( "fast", function() {
            $(".codingRecoveryServicesMenu").slideDown( "fast", function() {
            });
        });
    });

    //GO BACK
    $(".goBack").click(function () {
        //Hide Minor Menus
        $(".codingDocumentationMenu, .otherMenu, .claimsRegistryMenu, .schedulingMenu, .patientEngagementMenu").css({
                display: "none"
        });
        $(".mainMilestones").slideDown( "slow", function() {
        });
        //Hide Previous Menu
        $(".codingRecoveryServicesMenu").slideUp( "fast", function() {
        });
        //Highlight Sections Where You Previously Were  <-- Hacked
        //$(".scheduling").addClass("activeMilestone");
    });
});
