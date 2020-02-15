$(document).ready(function () {
            
    $('.call-queue .panel-heading').click(function () {
        $(this).parent().toggleClass('open');
        $(this).children('.toggle').children('i').toggleClass('fa-chevron-down fa-chevron-up');
    });
    
    $('#loader').modal({
        backdrop: 'static',
        show: false
    });
    
    $('#loader').on('show.bs.modal', function (e) {
        setTimeout( function(){ $('#loader').modal('hide'); }, 2000);
    });
    
    function toggleChevron(e) {
         $(e.target).prev('.panel-title').find("i.indicator").toggleClass('fa-chevron-down fa-chevron-up');
    }
    
    $('#accordion, #accordionScore, #inRemitsAccrd, .accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion, #accordionScore, #inRemitsAccrd, .accordion').on('shown.bs.collapse', toggleChevron);
    
    $('#searchField').focus(function() {
        $('#searchFieldMore').show();
        $(document).bind('focusin.search click.search',function(e) {
            if ($(e.target).closest('#searchFieldMore, #searchField').length) return;
            $(document).unbind('#searchFieldMore');
            $('#searchFieldMore').fadeOut('fast');
        });
    });
    $('#searchFieldMore').hide();
    
    $('#handOffSendDD').bind('change', function (e) { 
        if( $('#handOffSendDD').val() == 3) {
            $('#handOffWhy, #handOffHowLong, #handOffNotes').removeClass('hidden');
        }
        else{
            $('#handOffWhy, #handOffHowLong, #handOffNotes').addClass('hidden');
        }         
    });
    
    $('#writeOffSendDD').bind('change', function (e) { 
        if( $('#writeOffSendDD').val() == 3) {
            $('#writeOffWhy, #writeOffHowLong, #writeOffNotes').removeClass('hidden');
        }
        else{
            $('#writeOffWhy, #writeOffHowLong, #writeOffNotes').addClass('hidden');
        }         
    });
    
    $('#searchBySM').bind('change', function (e) { 
        if( $('#searchBySM').val() == 1) {
            $('#searchFName, #searchLName').addClass('hidden');
            $('#searchMain').removeClass('hidden');
            $('#searchInputMain').attr("placeholder","Visit #");
        }
        else if( $('#searchBySM').val() == 2) {
            $('#searchFName, #searchLName').addClass('hidden');
            $('#searchMain').removeClass('hidden');
            $('#searchInputMain').attr("placeholder","SSN");
        }
        else if( $('#searchBySM').val() == 3) {
            $('#searchFName, #searchLName').removeClass('hidden');
            $('#searchMain').addClass('hidden');
        }
        else if( $('#searchBySM').val() == 4) {
            $('#searchFName, #searchLName').addClass('hidden');
            $('#searchMain').removeClass('hidden');
            $('#searchInputMain').attr("placeholder","Medical Records #");
        }
        else{
            $('#searchFName, #searchLName').addClass('hidden');
            $('#searchMain').removeClass('hidden');
            //$('#searchInputMain').attr("placeholder","Search");
        }         
    });
    
    $("#todo-010").change(function() {
        if(this.checked) {
            $('#override-more').removeClass('hidden');
        }
        else {
            $('#override-more').addClass('hidden');
        }
    });
    
    var reqCB = $("#required input[type='checkbox']");
    var reqBtn = $('#requiredBtn');
        
    reqCB.click(function() {
        reqBtn.attr("disabled", !reqCB.is(":checked"));
    });
    
    
    $("#viewAllDocs").change(function() {
        if(this.checked) {
            $('#docLibrary').removeClass('hidden');
        }
        else {
            $('#docLibrary').addClass('hidden');
        }
    });
    
    
    $('.addCall').click(function(){
        /*var $newCaller = $( "<li/>" ),
            newPopQue = document.createElement( "div" ),
            existingdiv1 = document.getElementById( "foo" );*/
        
        $('#callQueAmnt').text(function(i, val) { return val*1+1 });
        /*$('.call-queue .panel-body ul').append($newCaller, [ newPopQue, existingdiv1 ]);*/
        /*$('<li/>', {
               'class' : 'addedPayer', html: getPayerInfo()
        }).hide().appendTo('.call-queue .panel-body ul');*/
        
        $(".call-queue .panel-body > ul").append('<li><div class="popover-queue"><a href="javascript:void(0);" class="trigger"><i class="fa fa-user"></i><span id="callQueACCN"></span></a><a href="javascript:void(0);" class=" pull-right" data-toggle="tooltip" data-placement="top" title="Remove" data-original-title="Remove"> <i class="fa fa-close text-warning"></i></a><div class="head hide">Payer Queue Info</div><div class="content hide"><ul class="patient-data"><li><span><span>Patient Name</span></span><span class="ptntQueName"></span></li><li><span><span>Visit#</span></span><span class="ptntQueVisitNum"></span></li><li><span><span>MRN</span></span><span class="ptntQueMRN"></span></li><li><span><span>SSN</span></span><span class="ptntQueSSN"></span></li><li><span><span>Date(s) of Service</span></span><span class="ptntQueDOS"></span></li></ul></div></div></li>');
    });
    
    var $pntName = $('.ptntName');
    var $pntVisitNum = $('.ptntVisitNum');
    var $pntMRN = $('.ptntMRN');
    var $pntSSN = $('.ptntSSN');
    var $pntDOS = $('.ptntDOS');
    
    var $pntQueName = $('.ptntQueName');
    var $pntQueVisitNum = $('.ptntQueVisitNum');
    var $pntQueMRN = $('.ptntQueMRN');
    var $pntQueSSN = $('.ptntQueSSN');
    var $pntQueDOS = $('.ptntQueDOS');
    
    var $pntQueNameText = $($pntQueName).text($pntName);
    var $pntQueVisitNumText = $($pntQueVisitNum).text($pntVisitNum);
    var $pntQueMRNText = $($pntQueMRN).text($pntMRN);
    var $pntQueSSNText = $($pntQueSSN).text($pntSSN);
    var $pntQueDOSText = $($pntQueDOS).text($pntDOS);
    
    
    function getPayerInfo() {
        var $payerLength = $('.addedPayer').length;
        var $payerHtml = $('.addCallQueTemplate').clone();
        console.log($pntQueName.text());
        /*$payerHtml.find($pntQueName)[0].text($pntQueNameText) + $payerLength;
        $payerHtml.find($pntQueVisitNum)[0].text($pntQueVisitNumText) + $payerLength;
        $payerHtml.find($pntQueMRN)[0].text($pntQueMRNText) + $payerLength;
        $payerHtml.find($pntQueSSN)[0].text($pntQueSSNText) + $payerLength;
        $payerHtml.find($pntQueDOS)[0].text($pntQueDOSText) + $payerLength;*/
        return $payerHtml.html();    
    }
            
});