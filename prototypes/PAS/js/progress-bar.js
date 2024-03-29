$(document).ready(function () {
    //jQuery time
    var form, pb //form and progress bar
    var current_fs, next_fs, previous_fs; //fieldsets
    var form_height, pb_height, current_height, next_height, previous_height; //fieldset/form heights
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches
    
    var nextBtn = $(".next");
    var prevBtn = $(".previous");
    var submitBtn = $(".submit");
        
    form = $('#msform');
    pb = $("#progressbar");
    
    pb_height = pb.outerHeight();
    
    $(nextBtn).click(function () {
        if (animating) return false;
        animating = true;

        
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        current_height = current_fs.outerHeight() + 75;
        next_height = next_fs.outerHeight() + 75;
        form_height = form.height(current_height + pb_height);
        

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("progActive");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50) + "%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({ 'transform': 'scale(' + scale + ')'});
                next_fs.css({ 'left': left, 'opacity': opacity });
                form.height((next_height + pb_height) - now);
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $(prevBtn).click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        current_height = current_fs.height() + 75;
        previous_height = previous_fs.height() + 75;
        form_height = form.height(previous_height + pb_height);

        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("progActive");

        //show the previous fieldset
        previous_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1 - now) * 50) + "%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({ 'left': left });
                previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
                form.height((previous_height + pb_height) - now);
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $('.submit').click(function () {
        $('#defectSuccess').removeClass('hidden');
        $('#progressbar').addClass('complete');
        //$('#progressbar').fadeOut();
        $('#msform fieldset:last').fadeOut();
        $('#msform fieldset:first').fadeIn();
        return false;
     });

});