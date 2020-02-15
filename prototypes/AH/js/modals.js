// Edit Inurance Cards

//Edit Cards
$(document).ready(function () {

    // Edit Card One
    $(".clickEdit1, .insuranceUnlock").click(function () {
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

// Add Insurance Card -->

//Add Card
$(document).ready(function () {
    // Edit Card One
    $(".clickAddCard").click(function () {
        $( ".cardDetails" ).slideUp( "fast", function() {
            $(".editCardTwo").css({
                display: "inline"
            });
            $(".addNewCard").css({
                display: "none"
            });
        });
    });

    //Save Card
    $(".addInsuranceCard").click(function () {
        $( ".editCardTwo" ).slideUp( "fast", function() {
            $(".cardDetails, .addNewCard").css({
                display: "inline"
            });
        });
        $( ".bannerIns2" ).slideDown( "fast", function() {
        });
        $( ".dismissBannerIns" ).click(function () {
            $( ".bannerIns2" ).slideUp( "fast", function() {
            });
        });
    });

    //Hide Stuff on close
    $(".close, .cancelNav").click(function () {
      $(".bannerIns, .bannerIns2, .editCardTwo, .editCardOne").css({
          display: "none"
      });
      $(".cardDetails, .addNewCard").css({
          display: "inline"
      });
    });
});



// Lock and Unlock Patient Information Modal

//Unlock
$(document).ready(function () {
    $(".patientUnlock").click(function () {
        $(".patientUnlock, .closeModal").css({
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
    //Primary & Plus' Minus' - Contact Information
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
    //Primary & Plus' Minus' - Preferences
    $(".firstLangPlusPref").click(function () {
        $(".secondaryLang").css({
            display: "block"
        });
        $(".firstLangPlusPref").css({
            display: "none"
        });
        $(".setPrimaryPref").css({
            display: "inline"
        });
        $(".makePrimaryPref.secondLang").css({
            display: "inline"
        });
        $(".removeLangPref.firstLangMinus").css({
            display: "inline"
        });
    });
    $(".secondLangMinus").click(function () {
        $(".secondaryLanguage").css({
            display: "none"
        });
        $(".firstLangPlus").css({
            display: "inline"
        });
    });
    $(".firstLangPlus").click(function () {
        $(".secondaryLanguage").css({
            display: "block"
        });
        $(".firstLangPlus").css({
            display: "none"
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
        $(".closeModal").css({
            display: "block"
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
        $(".closeModal").css({
            display: "block"
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


//Set Providers
// Set 1
$(".set1").click(function () {
  $(".star2, .star3, .star4, .set1").css({
        display: "none"
  });
  $(".star1, .set2, .set3, .set4").css({
        display: "inline"
  });
});
// Set 2
$(".set2").click(function () {
  $(".star1, .star3, .star4, .set2").css({
        display: "none"
  });
  $(".star2, .set1, .set3, .set4").css({
        display: "inline"
  });
});
// Set 3
$(".set3").click(function () {
  $(".star1, .star2, .star4, .set3").css({
        display: "none"
  });
  $(".star3, .set1, .set2, .set4").css({
        display: "inline"
  });
});
// Set 4
$(".set4").click(function () {
  $(".star1, .star2, .star3, .set4").css({
        display: "none"
  });
  $(".star4, .set1, .set2, .set3").css({
        display: "inline"
  });
});
