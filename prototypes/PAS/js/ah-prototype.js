$(document).ready(function () {
    /*$('.scenarios input:checkbox').click(function(){
       var scenarioCBValues = '?';
       scenarioCBValues+= $('.scenarios input[name="scenario"]:checked').serialize();
       alert(scenarioCBValues)
    });*/
    
    $('.scenarios input[type="checkbox"]').on('change', function (e) {
        var data = [],
            loc = $('<a>', { href: window.location })[0];
        $(this).each(function (i) {
            if (this.checked) {
                //data.push(this.name + '=' + this.value);
                data.push(this.value);
            }
        });
        data = data.join('&');

        /*$.post('/ajax-post-url/', data);
        if (history.pushState) {
            history.pushState(null, null, loc.pathname + '?' + data);
        }*/
        window.location.href = loc.pathname + '?' + data;
    });

    //Scenarios Button
    $('.scenarios-btn, .scenarios-menu-close').click(function(){
        $('.scenarios-menu').toggleClass('open');
    });
});