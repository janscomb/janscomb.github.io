$(document).ready(function () {
    
    idleTimer = null;
    idleState = false;
    idleWait = 500000;

    $('*').bind('mousemove keydown scroll', function () {

        clearTimeout(idleTimer);

        if (idleState == true) { 

            // Reactivated event
            //$('#idle .modal-body .idle-text').text('Welcome Back!');
            $('.modal-backdrop').removeClass('hidePHI');
            $('#main').removeClass('blurred');
            setTimeout(function() {$('#idle').modal('hide'); }, 1000);
        }
        idleState = false;

        idleTimer = setTimeout(function () { 

            // Idle Event
            $('#idle').modal('show');
            $('.modal-backdrop').addClass('hidePHI');
            $('#main').addClass('blurred');
            $('#idle .modal-body .idle-text').html('<div class="timeout"><h4>Are you still there?</h4><p>For your security, PAS sessions expire after 30 minutes of inactivity.</p><p><strong>Your current session will expire in <span>30</span> seconds, at 9:51am CST.</strong></p></div>');
			idleState = true; 
			}, idleWait);
        
    });

    $("body").trigger("mousemove");
    
    
    $('[data-toggle="tooltip"]').tooltip();

    $('.trigger').popover({
        html : true,
        title: function() {
          return $(this).parent().find('.head').html();
        },
        content: function() {
          return $(this).parent().find('.content').html();
        },
        container: 'body',
        trigger: 'hover',
        placement: 'auto'
    });
    
    $('#searchNotesInput').keyup(function() {
        var value = $(this).val();
        var exp = new RegExp('^' + value, 'i');

        $('.timeline-details .agent').each(function() {
            var isAgentMatch = exp.test($('.name', this).text());
            $(this).closest('li').toggle(isAgentMatch);
        });
        
        /*$('.timeline-details .info').each(function() {
            var isInfoMatch = exp.test($('.details', this).text());
            $(this).closest('li').toggle(isInfoMatch);
        });
        
        $('.timeline-details .timeline').each(function() {
            var isDateMatch = exp.test($('.date', this).text());
            $(this).closest('li').toggle(isDateMatch);
        });*/
    });
    
    $('.btn-code-toggle').click(function () {
        $(this).next('pre').toggleClass('visible');
        $(this).children('i').toggleClass('fa-chevron-down fa-chevron-right');
    });
    
    $('.alert .toggle').click(function () {
        $(this).parent('.alert').toggleClass('minimize');
        $(this).children('i').toggleClass('fa-chevron-down fa-chevron-right');
    });
    
    /*$('.panel .panel-heading').click(function () {
        $(this).next('.panel-body').toggleClass('hide');
        $(this).children('.panel-title').children('i').toggleClass('fa-chevron-down fa-chevron-right');
    });*/
    
    /*$('.panel-tab .panel-heading').click(function () {
        $(this).next('.panel-content').toggleClass('hide');
        $(this).children('.panel-title').children('i').toggleClass('fa-chevron-down fa-chevron-right');
    });*/
        
    $('.panel .panel-heading .toggle').click(function () {
        $(this).parent().parent().next('.panel-body').slideToggle();
        $(this).parent().parent().next('.panel-content').slideToggle('hide');
        $(this).toggleClass('fa-chevron-down fa-chevron-right');
    });
    
    function toggleChevron(e) {
         $(e.target).prev('.panel-title').find("i.indicator").toggleClass('fa-chevron-down fa-chevron-right');
    }
    
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
    
    //searchPRM
    
    var lastId,
    prmMenu = $('#prm-menu'),
    prmMenuCol = $('#prm-menu-col'),
    prmMenuHeight = prmMenu.outerHeight()+15,
    // All list items
    menuItems = prmMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-prmMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+prmMenuHeight;

       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
        
        /*if($(prmMenu).hasClass('affix')) {
            $(prmMenu).width(prmMenuCol.width());
        }*/

       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }                   
    });   
    
    if(document.URL.indexOf("search=hide") > -1) {
        $('#searchPRM').addClass('hidden');
    }
    
    if(document.URL.indexOf("idle=show") > -1) {
        idleWait = 5000;
    }
});