// Navigation
$(document).ready(function () {


	// Locking Wizard Nav
	$(window).scroll(function () {

	    //Scrolling
	    if ($(window).scrollTop() > 45) {

	      $('.topContainer').css({
	          position: "fixed",
	          top: "0px",
	          width: "100%",
	          height: "80px",
	          left: "0px",
	          "z-index": "101",
	          margin: "0px 0px 0px 0px"
	      });
	      $('.logoSVG').css({
	      	  width: "40px"
      	  });
	    }

	    //At Top
	    if ($(window).scrollTop() < 44) {
	      
	      //Worklist Bar
	      $('.topContainer').css({
	          position: "relative",
	          height: "100px"
	      });
	      $('.logoSVG').css({
	      	  width: "60px"
      	  });

	    }


	    //Back to Top - Scrolling
	    if ($(window).scrollTop() > 160) {
	        $(".backToTop").fadeIn( "slow", function() {
	        });
	    }

	    //Back to Top - At Top
	    if ($(window).scrollTop() < 160) {
	        $(".backToTop").fadeOut( "slow", function() {
	        });
	    }
	});
	

});