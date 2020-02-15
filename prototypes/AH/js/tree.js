// Tree
$(document).ready(function () {
    
    //
    $("#treeSlideOut").click(function () {
            //Slide to Minimum Width
            $(".treePane").animate({
                "max-width": "52px",
                duration: "slow"
            });

            //Hide Header
            $(".treePane h3.dash").css({
                display: "none"
            });

            //Hide Left Chevron
            $(".treeToggle").css({
                visibility: "hidden"
            });

            //Show Right Chevron
            //$("#treeSlideIn").css({
            //    visibility: "visible"
            //});

            //Hide Right Chevron
            $(".treeSlideIn").css({
                visibility: "hidden"
            });

            //Hide Grep
            $(".treeGrep").css({
                display: "none"
            });

            //Hide Header Title
            $(".treeHeader").css({
                display: "none"
            });

            //Hide Edit Button
            $(".editFavs").css({
                display: "none"
            });

            //Hide Tree Results
            $(".treeResults").css({
                display: "none"
            });

            //Tree Icon Becomes Clickable
            $(".treeIcon").css({
                cursor: "pointer"
            });

            //Show MiniNav
            $(".miniNav").slideDown({
                duration: "slow"
            });

            //Widen Table
            $(".dashboardContentRight").css({
                width: "93.4vw",
                "max-width": "1480px",
                duration: "slow"
            });

            //Widen Table
            $(".dashContentRight").css({
                width: "89.7vw",
                "max-width": "1480px",
                duration: "slow"
            });
        });

        //Tree Icon button for re-opening tree
        $(".treeIcon, .miniNav").click(function () {
            //Slide back to "Auto" width
            $(".treePane").animate({
                "max-width": "10000px",
                duration: "slow"
            });

            //Show Header
            $(".treePane h3.dash").css({
                display: "block"
            });

            //Show Tree Results
            $(".treeResults").css({
                display: "inline"
            });

            //Hide Right Chevron
            $("#treeSlideIn").css({
                visibility: "hidden"
            });

            //Show Left Chevron
            $("#treeSlide").css({
                visibility: "visible"
            });

            //Show Left Chevron
            $(".treeToggle").css({
                visibility: "visible"
            });

            //Show Header Title
            $(".treeHeader").css({
                display: "inline"
            });

            //Show Grep
            $(".treeGrep").css({
                display: "inline"
            });

            //Show Edit Button
            $(".editFavs").css({
                display: "inline"
            });

            //Hide Right Chevron
            $("#treeSlideIn").css({
                visibility: "hidden"
            });

            //Show Left Chevron
            $("#treeSlide").css({
                visibility: "visible"
            });

            //Show Header Title
            $(".treeHeader").css({
                display: "inline"
            });

            //Show Edit Button
            $(".editFavs").css({
                display: "inline"
            });

            //Tree Icon Loses Cursor
            $(".treeIcon").css({
                cursor: "text"
            });

            //Hide MiniNav
            $(".miniNav").css({
                display: "none"
            });

            //Revert Table
            $(".dashContentRight").css({
                width: "75%"
            });

            //Widen Table
            $(".dashboardContentRight").css({
                width: "75%",
                "max-width": "1480px",
                duration: "slow"
            });
        });

        //Show Search Bar
        $(".menuSearch").click(function () {
            //Show Search Bar
            $( ".searchBar" ).slideDown( "fast", function() {
            });
            //Hide Default Search Button
            $(".menuSearch").css({
                display: "none"
            });
            //Show Close Search Button
            $(".menuSearchClose").css({
                display: "inline"
            });
        });

        //Search Button needs Fade (Has relative positioning)
        $(".menuSearch").click(function () {
            //Show Search Button
            $( ".searchButtons" ).fadeIn( "slow", function() {
            });
        });

        //Hide Search Bar
        $(".menuSearchClose").click(function () {
            //Hide Search Button
            $( ".searchButtons" ).fadeOut( "fast", function() {
            });
            //Hide Search Bar
            $(".searchBar").slideUp( "slow", function() {
            });
            //Hide Default Search Button
            $(".menuSearch").css({
                display: "inline"
            });
            //Show Close Search Button
            $(".menuSearchClose").css({
                display: "none"
            });
        });

        //Show Filter Bar
        $(".menuFilter").click(function () {
            //Show Filter Bar
            $(".filterBar").slideDown( "fast", function() {
            });
            $(".filterResults").slideDown( "fast", function() {
            });
            //Hide Default Search Button
            $(".menuFilter").css({
                display: "none"
            });
            //Show Close Search Button
            $(".menuFilterClose").css({
                display: "inline"
            });
            //Show Close Filter Button
            $(".closeFilterBox").css({
                display: "inline"
            });

            //Add Second Row
            $(".addFilterRow1").click(function () {

                $(".secondFilterRow").slideDown( "fast", function() {

                    //Hide Add Button 1
                    $(".addFilterRow1").css({
                        display: "none"
                    });

                    //Show Remove Button 1
                    $(".removeFilterRow1").css({
                        display: "inline"
                    });

                });

            });

            //Remove First Row
            $(".removeFilterRow1").click(function () {

                $(".firstFilterRow").slideUp( "fast", function() {

                    //Fix Grep Height
                    $(".secondFilterRow .grep").css({
                        padding: "32px 0px 32px 0px"
                    });

                    //Fix Positioning
                    $(".secondFilterRow").css({
                        top: "0px"
                    });

                    //Show Labels
                    $(".secondFilterRow label").css({
                        display: "inline"
                    });

                    //Hide Remove Button 1
                    $(".removeFilterRow2").css({
                        display: "none"
                    });


                });

            });

            //Remove Second Row
            $(".removeFilterRow2").click(function () {

                $(".secondFilterRow").slideUp( "fast", function() {

                    //Hide Add Button 1
                    $(".addFilterRow1").css({
                        display: "inline"
                    });

                    //Show Remove Button 1
                    $(".removeFilterRow1").css({
                        display: "none"
                    });

                });

            });

        });

        //View Favorite
        $(".viewFavorite").click(function () {
            //Hide Filter Bar
            $(".filterBar").slideUp( "slow", function() {
            });
            $(".filterResults").slideDown( "slow", function() {
            });
            //Hide Default Search Button
            $(".menuFilter").css({
                display: "inline"
            });
            //Show Close Filter Button
            $(".menuFilterClose").css({
                display: "none"
            });
            //Show Close Filter Button - Inside Box
            $(".closeFilterBox").css({
                display: "inline"
            });
            //Show Close Filter Button - Inside Box
            $(".viewFilters").css({
                display: "inline"
            });
        });

        //Filter Button
        $(".clickFilter").click(function () {
            //Hide Filter Bar
            $(".filterBar").slideUp( "slow", function() {
            });
            $(".filterResults").slideDown( "slow", function() {
            });
            //Hide Default Search Button
            $(".menuFilter").css({
                display: "inline"
            });
            //Hide Close Filter Button
            $(".menuFilterClose").css({
                display: "none"
            });
            //Show View / Edit
            $(".viewFilters").css({
                display: "inline"
            });
        });

        //Close Filter Box - via close button from within box
        $(".closeFilterBox").click(function () {
            //Hide Filter Bar
            $(".filterBar").slideUp( "slow", function() {
            });
            //Hide Default Search Button
            $(".menuFilter").css({
                display: "inline"
            });
            //Show Close Filter Button
            $(".menuFilterClose").css({
                display: "none"
            });
            //Show Close Filter Button - Inside Box
            $(".closeFilterBox").css({
                display: "none"
            });
            //Show View / Edit Button
            $(".viewFilters").css({
                display: "inline"
            });
        });

        //View Hide Filters
        $(".viewFilters").click(function () {
            //Hide Filter Bar
            $(".filterBar").slideDown( "slow", function() {
            });
            $(".filterResults").slideDown( "slow", function() {
            });
            //Hide Default Search Button
            $(".menuFilter").css({
                display: "none"
            });
            //Show Close Search Button
            $(".menuFilterClose").css({
                display: "inline"
            });
            //Hide This Button
            $(".viewFilters").css({
                display: "none"
            });
            $(".closeFilterBox").css({
                display: "inline"
            });
            //Show Close Filter Button - Inside Box
            $(".viewFilters").css({
                display: "none"
            });
        });

        //Hide Filter Bar
        $(".menuFilterClose").click(function () {
            //Hide Filter Bar
            $(".filterBar").slideUp( "slow", function() {
            });
            $(".filterResults").slideUp( "slow", function() {
            });
            //Hide Default Search Button
            $(".menuFilter").css({
                display: "inline"
            });
            //Show Close Search Button
            $(".menuFilterClose").css({
                display: "none"
            });
        });
});


