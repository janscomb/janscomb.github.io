$(document).ready(function () {
        
    $('.navbar-minimize').click(function () {
        $('body').toggleClass('left-side-collapsed');
    });
    
    $('.btn-popover').popover({
      trigger: 'focus' //Give all popovers dismiss functionality
    });
    
    $('.btn-code-toggle').click(function () {
        $(this).next('pre').toggleClass('visible');
        $(this).children('i').toggleClass('fa-angle-double-down fa-angle-double-up');
    });
    
    function toggleChevron(e) {
         $(e.target).prev('.panel-title').find("i.indicator").toggleClass('fa-chevron-down fa-chevron-up');
    }
    
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
    
    if(document.URL.indexOf("contrast") > -1) {
        $('.sideNav, .panel, hr, .white, section#directional, section#medical, section#web-application, section#text-editor, section#form-control, .dataTable, .tableBordered, ul.listGroup').addClass('proposedChange');
    }
    

});