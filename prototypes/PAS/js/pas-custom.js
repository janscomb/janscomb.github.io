$(document).ready(function() {

//Click Row
$('tbody tr').click( function() {
    var getLinkVal = $(this).find('a').attr('href');
    //console.log(getLinkVal);
    window.location.href = getLinkVal;
});

$('.gridbuttons a.table-addmore').click(function () {
	$('.level4').show();
	$('#residual .nav-tabs li').removeClass('active');
	$('#appeal-tab01').removeClass('active');
	$('#appeal-tab02').removeClass('active');
	$('#appeal-tab03').removeClass('active');
	$('.level4').addClass('active');
	$('#appeal-tab04').addClass('active');
});

$( "select.appealname" )
  .change(function () {
    var str = "";
    $( "select.appealname option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( ".level4 a" ).text( str );
  })
  .change();

// Smooth Scrolling Anchor Links
$('a.backToTop').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            if ($(window).scrollTop() > 11) {
                // Scrolled down page
                $('html,body').animate({ scrollTop: target.offset().top}, 500);
            } else {
                //At top of page
                $('html,body').animate({ scrollTop: target.offset().top}, 500);
            }
            return false;
        }
    }
});

	$('#prm-menu').width($('#prm-menu-col').width());
	$('#prm-menu').fadeIn("slow");
    idleTimer = null;
    idleState = false;
    idleWait = 500000;
	$("input[name='condition']").prop("disabled", true);
	//Back to Top - Scrolling
	$(window).scroll(function () {
	  if ($(window).scrollTop() > 100) {
		  $(".backToTop").fadeIn( "slow", function() {
		  });
	  }
	  //Back to Top - At Top
	  if ($(window).scrollTop() < 100) {
		  $(".backToTop").fadeOut( "slow", function() {
		  });
	  }
	});
	
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

	$('#main i.fa-calendar').click(function() {
    $(this).parent().find('input[type=text]').focus();
	});

	
	$('#worklistTable tr').click(function () {
			var url = window.location.href; 
			url = url.replace("worklist", "details");
			window.location.href=url;
	});
	
    $('.btn-code-toggle').click(function () {
        $(this).next('pre').toggleClass('visible');
        $(this).children('i').toggleClass('fa-minus-circle fa-plus-circle');
    });
    
    $('.alert .toggle').click(function () {
        $(this).parent('.alert').toggleClass('minimize');
        $(this).children('i').toggleClass('fa-minus-circle fa-plus-circle');
    });
	
	$('.panel .panel-heading .toggle').click(function () {
	$(this).parent().parent().next('.panel-body').slideToggle();
	$(this).parent().parent().next('.panel-content').slideToggle('hide');
	$(this).toggleClass('fa-chevron-down fa-chevron-right');
    });
    
    function toggleChevron(e) {
         $(e.target).prev('.panel-title').find("i.indicator").toggleClass('fa-minus-circle fa-plus-circle');
    }
    
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);

    //searchPRM
    
    var lastId,
    prmMenu = $('#prm-menu'),
    prmMenuCol = $('#prm-menu-col'),
    prmMenuHeight = prmMenu.outerHeight()+35,
    // All list items
    menuItems = prmMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


    // Bind click handler to menu items
     // so we can get a fancy scroll arrow animation for the top fixed navigation tabs
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
			 $('.checkoutbtns .checkout').attr("href", "#" + id);
       }
    });   
    
    if(document.URL.indexOf("search=hide") > -1) {
        $('#searchPRM').addClass('hidden');
    }
    
    if(document.URL.indexOf("idle=show") > -1) {
        idleWait = 5000;
    }

    //$('.sideNav, .panel, hr, .white, section#directional, section#medical, section#web-application, section#text-editor, section#form-control, .dataTable, .tableBordered, ul.listGroup').addClass('proposedChange');

	$('[data-toggle="tooltip"]').tooltip();

    $('.patient-data.stacked li input').val(function() {
        return $(this).next('span').text();
    });



    $('#navbar-minimize').on('click', function() {
        var panel = $('#topNavigation ul');
        var button = $('#navbar-minimize');
        if (panel.hasClass("visible")) {
            button.removeClass("slideleft").animate({
                'margin-right': '10px'
            });;
            panel.removeClass('visible').animate({
                'right': '-138px'
            });
        } else {
            button.addClass("slideleft").animate({
                'margin-right': '138px'
            });
            panel.addClass('visible').animate({
                'right': '0px'
            });
        }
        return false;
    });

    $('#prm-menu li.nav-notes').on('click', function() {
        $('#prm-menu li div.badge').hide();
    });

    $("#uploadFile").on("click", function() {
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test(files[0].type)) { // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function() { // set image data as background of div
                $(".fa-user").hide();
                $("#imagePreview").css("background-image", "url(" + this.result + ")");
            }
        }
    });


	
	// Mobile action buttons 
	if ($(".rightpane-content ul.checkoutbtns").length != 0) {
	var mobilebuttons = $(".rightpane-content ul.checkoutbtns").html();
	$("#mobile-buttons").html(mobilebuttons);		
	}

    /*$('#taskUpdated').modal({
        backdrop: false,
        show: true
    });*/

    $('#orderLab .panel-body .btnPrimary').click(function() {
        //$('#taskUpdated').addClass('orderLab');
        $('.alert.alert-danger.alert-dismissible').fadeOut();
        //$('#orderLab .panel-body .alert').fadeOut();
        $('#orderLab .panel-body .alert').toggleClass('alert-danger alert-success').find('i').toggleClass('fa-exclamation-triangle fa-check');
        $('#orderLab .panel-body .alert').children('div').find('strong').html('Success');
        $('#orderLab .panel-body .alert').children('div').find('p').html('You have successfully updated and finished this task');
        $('#orderLab .panel-body input[type=text], #orderLab .panel-body textarea').val('');
        $('#orderLab .panel-heading').removeClass('alert-danger');
        $('#prm-menu li.nav-orderLab').removeClass('alert-danger');
        $('.exceptions-header .badge').text($('.alert.alert-dismissible').length);

        setTimeout(function() {
            $('#orderLab .panel-body .alert').fadeOut();
        }, 1500);
    });

    $('#auth .panel-body .btnPrimary').click(function() {
        //$('#taskUpdated').addClass('orderLab');
        $('#authExceptions').fadeOut();
        //$('#orderLab .panel-body .alert').fadeOut();
        $('#auth .panel-body .alert').toggleClass('alert-warning alert-success').find('i').toggleClass('fa-exclamation-circle fa-check');
        $('#auth .panel-body .alert').children('div').find('strong').html('Success');
        $('#auth .panel-body .alert').children('div').find('p').html('You have successfully updated and finished this task');
        $('#auth .panel-body input[type=text], #auth .panel-body textarea').val('');
        $('#auth .panel-heading').removeClass('alert-warning');
        $('#prm-menu li.nav-auth').removeClass('alert-warning');
        $('.exceptions-header .badge').text($('.alert.alert-dismissible').length);

        setTimeout(function() {
            $('#auth .panel-body .alert').fadeOut();
        }, 1500);
    });

    /*
    <div class="alert alert-danger" role="alert">
        <i class="fa fa-exclamation-triangle fa-2x pull-left"></i>
        <div class="pull-left">
            <strong>Incomplete</strong>
            <p>Log Follow Up Action</p>
        </div>
    </div>
    */

    $('#taskUpdated').on('show.bs.modal', function(e) {
        if ($(this).hasClass('orderLab')) {
            $('#orderLabExceptions').fadeOut();
            //$('#orderLab .panel-body .alert').fadeOut();
            $('#orderLab .panel-body .alert').toggleClass('alert-danger alert-success').find('i').toggleClass('fa-exclamation-triangle fa-check').children('div').find('strong').html('Successfully Updated');
            $('#orderLab .panel-body input[type=text], #orderLab .panel-body textarea').val('');
            $('#orderLab .panel-heading').removeClass('alert-danger');
            $('#prm-menu li.nav-orderLab').removeClass('alert-danger');
            $('.exceptions-header .badge').text($('.alert.alert-dismissible').length);
        } else if ($(this).hasClass('auth')) {
            // id="orderLabExceptions"
            $('#authExceptions').fadeOut();
            //$('#orderLab .panel-body .alert').fadeOut();
            $('#auth .panel-body .alert').toggleClass('alert-danger alert-success').find('i').toggleClass('fa-exclamation-triangle fa-check').children('div').find('strong').html('Successfully Updated');
            $('#auth .panel-body input[type=text], #orderLab .panel-body textarea').val('');
            $('#auth .panel-heading').removeClass('alert-danger');
            $('#prm-menu li.nav-auth').removeClass('alert-danger');
            $('.exceptions-header .badge').text($('.alert.alert-dismissible').length);
        } else {

        }
        setTimeout(function() {
            $('#taskUpdated').modal('hide');
			var url = window.location.href;  // Page should redirect to worklist after task updated function.  The below lines are intended for prototype functionality only
			url = url.replace("details", "worklist");
			window.location.href=url;
        }, 1500);
		
    });


    function getAge(birth) {
        var today = new Date();
        var curr_date = today.getDate();
        var curr_month = today.getMonth() + 1;
        var curr_year = today.getFullYear();

        var pieces = birth.split('/');
        var birth_month = pieces[0];
        var birth_date = pieces[1];
        var birth_year = pieces[2];

        if (curr_month == birth_month && curr_date >= birth_date) return parseInt(curr_year - birth_year);
        if (curr_month == birth_month && curr_date < birth_date) return parseInt(curr_year - birth_year - 1);
        if (curr_month > birth_month) return parseInt(curr_year - birth_year);
        if (curr_month < birth_month) return parseInt(curr_year - birth_year - 1);
    }

    function admitAge(birth, admitdate) {
        var admission = admitdate.split('/');;
        var ad_date = admission[0];
        var ad_month = admission[1];
        var ad_year = admission[2];

        var pieces = birth.split('/');
        var birth_month = pieces[0];
        var birth_date = pieces[1];
        var birth_year = pieces[2];

        if (ad_month == birth_month && ad_date >= birth_date) return parseInt(ad_year - birth_year);
        if (ad_month == birth_month && ad_date < birth_date) return parseInt(ad_year - birth_year - 1);
        if (ad_month > birth_month) return parseInt(ad_year - birth_year);
        if (ad_month < birth_month) return parseInt(ad_year - birth_year - 1);
    }

    function loadAge() {
        if ($("#ptntdob").length != 0) {
            var defaultDate = $('#ptntdob').html();
            if ($("#admitdate").length != 0) {
                var admitDate = $('#admitdate').html();
                var age2 = admitAge(defaultDate, admitDate);
                $('#ptntdob').html(defaultDate + ' (' + age2 + ' years old at admission)');
            } else {
                var age = getAge(defaultDate);
                $('#ptntdob').html(defaultDate + ' (' + age + ' years old)');
            }
        }
    }
    loadAge();

    if ($("#save-notif").length != 0) {
        setInterval(function() {
            $('#save-notif').fadeIn();
            setTimeout(function() {
                $('#save-notif').fadeOut();
            }, 5000);
        }, 30000);
    }

    // Begin Worklist filters
    function hideList() {
        $('.priority-overdue').hide();
        $('.priority-high').hide();
        $('.priority-medium').hide();
        $('.priority-low').hide();
        $('.priority-trivial').hide();
        $('.priority-complete').hide();
    }

    function showList() {
        $('.priority-overdue').show();
        $('.priority-high').show();
        $('.priority-medium').show();
        $('.priority-low').show();
        $('.priority-trivial').show();
        $('.priority-complete').show();
    }
    if ($("#priorityFilter").length != 0) { // Execute only on a page where a worklist filter is present
        var priorityval = $('#priorityFilter').val();
        priorityval = priorityval.toLowerCase();
    }

    function setFilter() {

        if ($("#priorityFilter").length != 0) { // Execute only on a page where a worklist filter is present
            if (priorityval == "all") {
                showList();
            } else {
                hideList();
                priorityval = '.priority-' + priorityval;
                $(priorityval).show();
            }
        }
    }
    setFilter(); // Filter based on set filter value on page load
    $('#priorityFilter').change(function() { // Change filtering based on dropdown priority
        priorityval = $(this).val();
        priorityval = priorityval.toLowerCase();
        setFilter();
    });
    // End Worklist filters	

    function setInpatientOrderDate() {
        if ($("#inpatientorderDate").length != 0) { // Execute only on a page where the ID exists
            if (pattypeval == "IN - Inpatient") {
                $("#inpatientorderDate").show();
            } else {
                $("#inpatientorderDate").hide();
            }
        }
    }
    if ($("#inpatientorderDate").length != 0) {
        var pattypeval = $(".ptntPatientTypeVal").html();
        setInpatientOrderDate();
    }
    $('.ptntPatientType').change(function() { // Change filtering based on dropdown priority
        pattypeval = $(this).val();
        setInpatientOrderDate();
    });

    $('#overtime').removeAttr('checked'); // Remove overtime checked value by default only for demo purposes
    $('#overtime').change(function() {
        if ($(this).is(':checked')) {
            $('#patient').addClass("overtime");
            $('#overtime-status').text('This case has been marked as overtime status.');
            $('#overtime-label').html('Yes');
        } else {
            $('#patient').removeClass("overtime");
            $('#overtime-status').text('');
        }
    });

    // Delete Notes
    $("#notesList").children().each(function(i) { // Adds unique ID to each note on page load so we can target them for deletion
        $(this).addClass("note-" + (i + 1));
    });
    $('.fa-times').click(function() {
        $(this).attr('data-toggle', 'modal');
        $(this).attr('data-target', '#deleteNote');
        var deleteitem = $(this).closest('li');
        deleteclass = deleteitem.attr('class');
    });

    function checkDischarge() {
        if ($("input[type='radio'].option2").is(':checked')) {
            $('#dischargeField').show();
        } else {
            $('#dischargeField').hide();
            $('#DischargeDateVal').html('');
            $('#datepicker05').val('');
        }
    }
    $("input[type='radio'].dischargeRadio").change(function() {
        var val = $('input:radio[name=dischargeStatus]:checked').val();
        $('#dischargeValue').html(val);
        checkDischarge();
    });
    $("input[type='radio'].pasRecomm").change(function() {
        var val = $('input:radio[name=pasRecomm]:checked').val();
        $('#radioRec').html(val);
    });
	$("input[type='radio'].tertiary-radio").change(function() {
        var val = $('input:radio[name=tertiary-radio]:checked').val();
        $('#radioTertiary').html(val);
		if (val=="Yes") {
			$('#tertiary-review').show();
		}
		else {
			$('#tertiary-review').hide();
		}
	});

		// CHECK OUT RECORD //
		$('.nav-tools li a.checkout').click(function() {
        var gridAction = $(".gridbuttons").toggleClass('show');
        var activeButtons = $(document.body).find('.nav-tools li');
        var valueToggleTab = $(document.body).children('.tab-content').children('.tab-pane.active').find('.patient-data li');
        var valueToggleInput = $(document.body).find('.patient-data li');
        var valueRecordInput = $(document.body).find('.record-data li');
        var valueRadioInput = $(document.body).find('.radio-data li');
        activeButtons.children('a.turnon').toggleClass('disabled');
        activeButtons.children('.checkoutonly').toggleClass('hidden');
        valueRadioInput.children('span, input').toggleClass('hidden');
		$("input[name='condition']").prop("disabled", false);
        $('.astrix').css ({display: "inline"});
		if ($("span.notes").length != 0) {
		var notesval = $('span.notes').html();
		notesval = notesval.replace(/<p>/gi,"\n");
		notesval = notesval.replace(/<\/p>/gi,"\n");
		
		}
		if ($("textarea.notes").length != 0) {
		var notesTextval = $('textarea.notes').html();
		notesTextval = notesTextval.replace(/\n/g,"<p>");
		}
        $('.timeline-activity .fa-times').show();
        valueRecordInput.children('a').toggleClass('hidden');
		valueToggleInput.children('title').toggleClass('hidden');
        valueToggleInput.children('i').toggleClass('show-cal');
        valueToggleInput.children('span, input, div, select, textarea, a').toggleClass('hidden').text(function() {
           // return $(this).siblings('input, select, textarea, span').val();
        });
        checkDischarge();
	
        if ($(this).children('span').text() == "Check Out") {
			 $('#main').toggleClass("checkedout");
            $(this).children('span').text("Release");
            $(this).children('i').toggleClass('fa-pencil-square-o fa-unlock-alt');
            $(this).addClass('save-record');

            /* Clean up the DOB field for the Datepicker, to remove age value*/
            var datescrub = $('#ptntdob').html();
            datescrub = datescrub.replace(/ \([^)]*\)/, '');
            $('#ptntdob').text(datescrub);
            $('#datepicker01').text(datescrub);
            $('.uploadFileImg').show();
            $('#checkin-timer').show();
            if (typeof(elem) !== 'undefined') {
                findTIME(); // Start the timer for a checked out record for Appeals
            }
		if ($("textarea.notes").length != 0) {$('textarea.notes').html(notesval);}
        }

        /*else if ($(this).hasClass('save-record') ) {
            $('.save-record').click( function(){
                $(this).attr('data-toggle', 'modal');
                $(this).attr('data-target', '#taskUpdated');
                $(this).attr('data-backdrop', 'false');
            });
        }*/
        else { /* Save Record */
		    	// Scroll checkout
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					if ($(window).scrollTop() > 11) {
						// Scrolled down page
						$('html,body').animate({ scrollTop: target.offset().top}, 500);
					} else {
						//At top of page
						$('html,body').animate({ scrollTop: target.offset().top}, 500);
					}
				}
				// End scroll checkout
            $(this).children('span').text("Check Out");
			$('#main').toggleClass("checkedout");
            $(this).children('i').toggleClass('fa-pencil-square-o fa-floppy-o');
            $(this).removeClass('save-record');
            $(this).attr('data-toggle', '');
            $(this).attr('data-target', '');
            loadAge();
            var RadioRecomm = $('.radio-data input[type="radio"]:checked').val();
            $('#radioRec').text(RadioRecomm);
            var patientLast = $('#ptntLast').html();
            var patientFirst = $('#ptntFirst').html();
            var patientMI = $('#ptntMI').html();
			$('.astrix').hide();
			$('.title-heading .astrix').show();
            $('.timeline-activity .fa-times').hide();
			$("input[name='condition']").prop("disabled", true);
			var checkedconditions = $(".checkbox-condition:checked").length;
			if (checkedconditions > 0){
				var searchIDs = $('.checkbox-condition:checked').map(function(){
				return $(this).val();  
				});
				var conditionslist = searchIDs.get();
				$('#conditionschecked').html("&nbsp;" + conditionslist);				
			}
			else {$('#conditionschecked').html("&nbsp;None");}
			$("input[type='radio']:checked").each(function() {
				var idVal = $(this).attr("id");
				var chartAuditLabel = $("label[for='"+idVal+"']").text();
				$('#chartAuditLabel').html(chartAuditLabel);
			});
            if (typeof(elem) !== 'undefined') {
                findTIME(); // Pause the timer for a checked out record for Appeals
            }
            if ($('#overtime').is(':checked')) {
                $('#overtime-label').html('Yes');
            } else {
                $('#overtime-label').html('No');
            }
            if ($('#complete').is(':checked')) {
                $('#complete-label').html('Yes');
            } else {
                $('#complete-label').html('No');
            }
            var patientName = patientLast + ", " + patientFirst + " " + patientMI;
            $('#heading-right').text(patientName);
            $('.uploadFileImg').hide();
			if ($("span.notes").length != 0){
				if ($("span.notes").html() == ""){
				$('span.notes').html(notesTextval);
				}
				}
        }
		// Scroll checkout
		var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            if ($(window).scrollTop() > 11) {
                // Scrolled down page
                $('html,body').animate({ scrollTop: target.offset().top - 70}, 500);
            } else {
                //At top of page
                $('html,body').animate({ scrollTop: target.offset().top - 70}, 500);
            }
        }
		// End scroll checkout
    });


    //Scroll Loading
    /*
    var $panel = $('.panel');

	//hide timeline blocks which are outside the viewport
	$panel.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.panel-content').addClass('hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$panel.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.panel-content').hasClass('hidden') ) {
				$(this).find('.panel-content').removeClass('hidden');
			}
		});
	});
    */



    /*$('#saveReallocation').click(function() {
        $('.reallocateCB:checked').map(function() {
            return this.value;
        }).get().join(', ');
        $('.allocatedFacil').text($('.reallocateCB:checked').val());
        console.log($('.reallocateCB:checked').map(function() {
            return this.value;
        }).get().join(', '));
    });*/

    /*$('.reallocateCB[type="checkbox"]').bind('click',function() {
        if($(this).is(':checked')) {
            $('.allocatedFacil').html($(this).val());
         }
   });*/

    $('.reallocateCB[type="checkbox"]').each(function() {
        $('.allocatedFacil').append($(this).val() + ', ');
    });

    //SideNav
    $('.sideNav ul.subMenu li > a').click(function() {
        $(this).next('.inner-submenu').toggleClass('hidden');
        $('span', this).children('i').toggleClass('fa-caret-down fa-caret-right');
    });

    var toggleInnerBtn = $('.toggle-inner-btn');
    var toggleInnerContent = $('.toggle-inner-content').children('div');

    toggleInnerContent.each(function() {
        if ($(this).height() > 20) {
            $(this).addClass('add-scroll');
        }
    });

    //Toggle Inner
    toggleInnerBtn.click(function() {
        $(this).next(toggleInnerContent).toggleClass('open');
        $(this).children('i').toggleClass('fa-chevron-up fa-chevron-down');
    });

    //Worklist - toggle between list/tile view
    $('.worklist-toggle div:last-child .btn').click(function() {
        $('.worklist-toggle div:last-child .btn').removeClass('active');
        $(this).addClass('active');
        if ($('.worklist-toggle div:last-child .btn:first-child').hasClass('active')) {
            $('.worklist-accounts').addClass('listed');
            $('#scroll-nav').removeClass('tile');
            $('#header-row').removeClass('tile');
        } else {
            $('.worklist-accounts').removeClass('listed');
            $('#header-row').addClass('tile');
            $('#scroll-nav').addClass('tile');
        }
    });

    if ($(".worklist-accounts").length != 0) {
        function showtileResponsive() {
            var docwidth = $(document).width();
            if (docwidth < 1000) {
                $('.worklist-accounts').removeClass('listed');
                $('.worklist-accounts').addClass('fullwidth');
            } else {
                $('.worklist-accounts').addClass('listed');
                $('.worklist-accounts').removeClass('fullwidth');
            }
        }
        showtileResponsive();
        $(window).resize(function() {
            showtileResponsive();
        });
    }


    /*$('.patient-data.stacked').each(function(){  
        var stackedList = $('.patient-data.stacked li');
        var highestListItem = 0;
        $(stackedList, this).each(function(){
            if($(stackedList).height() > highestListItem) 
               highestListItem = $(stackedList).height(); 
        });  

        $(stackedList,this).height(highestListItem);
    }); */

    $('.radio-group .radio-btn .btn').click(function() {
        $(this).parent().parent().find('.btn').removeClass('btnPrimary');
        $(this).addClass('btnPrimary');
    });

    $('.editable').click(function() {
        var input = $('<input type="text" />', {
            value: $(this).text()
        }).click(function() {
            $.get($(this).value(), function(response) {
                var span = $('span', {
                    text: response
                });
                $(this).replaceWith(span);
            });
        });
        $(this).replaceWith(input);
    });

    //$('.genNumbs').each(function() {
    //  var genNumber = 1 + Math.floor(Math.random() * 100000000);
    //  $(this).text(genNumber.toString());
    //});

    $('.genDaysHigh').each(function() {
        var genDayHighMin = 0;
        var genDayHighMax = 1;
        var genDayHigh = 1 + Math.floor(Math.random() * (genDayHighMax - genDayHighMin + 1) + genDayHighMin);
        $(this).text(genDayHigh.toString());
    });

    $('.genDaysMed').each(function() {
        var genDayMedMin = 2;
        var genDayMedMax = 4;
        var genDayMed = 1 + Math.floor(Math.random() * (genDayMedMax - genDayMedMin + 1) + genDayMedMin);
        $(this).text(genDayMed.toString());
    });

    $('.genDaysLow').each(function() {
        var genDayLowMin = 5;
        var genDayLowMax = 9;
        var genDayLow = 1 + Math.floor(Math.random() * (genDayLowMax - genDayLowMin + 1) + genDayLowMin);
        $(this).text(genDayLow.toString());
    });

    $('.countActual').each(function() {
        var genDayLowMin = 0;
        var genDayLowMax = 5;
        var genDayLow = 1 + Math.floor(Math.random() * (genDayLowMax - genDayLowMin + 1) + genDayLowMin);
        $(this).text(genDayLow.toString());
    });

    $('.countTotal').each(function() {
        /*var facilities = new Array("BACC", "", "", "", "", "", "", "SJMC"),
            randomFacil = facilities[Math.floor()]*/

        var genDayLowMin = 9;
        var genDayLowMax = 14;
        var genDayLow = 1 + Math.floor(Math.random() * (genDayLowMax - genDayLowMin + 1) + genDayLowMin);
        $(this).text(genDayLow.toString());

        /*var items = facilArr[Math.floor(Math.random()*facilArr.length)];
        console.log(items+" Facility")*/
    });

    $('#hidearrow, #hidearrow2').click(function() {
        var arrows = $('#hidearrow, #hidearrow2');
        $('.col-ofh').toggleClass("hiderightpane");
        $('#prm-menu-col').toggleClass("col-lg-8 col-lg-12").animate();
        arrows.toggleClass("fa-chevron-circle-left fa-chevron-circle-right");
    });
	
	$('.validation').click(function() {
	//$('.dnnFormItem div').removeClass('hidden');
	$(".dnnFormItem div.alert").fadeIn();
	});

    jQuery.fn.exists = function() {
        return ($(this).length < 0);
    }


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $('.hidearrow-rightbg').show();
        var accountHeader = $('.worklist-accounts.listed > .header');
        var worklists = $('.worklist-accounts').html();
        var scrollval;
        if ($('.worklist-accounts').get(0)) { //allow for a bigger scroll value if we are on the worklist page
            scrollval = 250;
        } else {
            scrollval = 150;
        }
        var worklistAccount = $('.worklist-accounts .tab-content .tab-pane.active a');
        var affixWidth = $('.idm-tools .affix-top').width();
        if (scroll >= scrollval) {
            $(accountHeader).addClass('affix').width($(worklistAccount).width());
            $('#scroll-nav').html($('#header-row').html());
            $('.fixedHeader').show();
            //$('#header-row').hide();
            $('.idm-tools .rightpane-content').width(affixWidth);
            $('#rightpane').width(affixWidth);
			windowheight = ($(window).height());
            $('#cases-box').css("height", windowheight - 320);
            $('#cases-box2').css("height", windowheight - 320);
            if ($("#worklist-header")[0]) {
                $('.navbar-nav').removeClass('worklist-navpos');
            } // only elecute if we are on the worklist page
        } else {
            $(accountHeader).removeClass('affix').width('46%');
            $('#header-row').show();
            $('.fixedHeader').hide();
            $('#scroll-nav').html('');
			$('#cases-box').css("height", windowheight - 370);
            $('#cases-box2').css("height", windowheight - 370);
            if ($("#worklist-header")[0]) {
                $('.navbar-nav').addClass('worklist-navpos');
            } // only elecute if we are on the worklist page
        }
    });


    $('.submit').click(function(e) {
        e.preventDefault();
        var goTo = this.getAttribute("href");

        setTimeout(function() {
            window.location = goTo;
        }, 2000);
    });

    //covSource Select Menu
    /*$('#covSource').bind('change', function (e) { 
        if( $('#covSource').val() == 'system') {
            $('#covSystem').removeClass('hidden');
            $('#covWebPhone').addClass('hidden');
            $('.taskTxt').text(' - BSO');
        }
        else{
            $('#covSystem').addClass('hidden');
            $('#covWebPhone').removeClass('hidden');
            $('.taskTxt').text(' - Forced to US Team');
        }         
    });*/

    //covSource Radio Menu
    $('#covSource input').click(function() {
        if ($('#covSourceSystem').is(':checked')) {
            $('#covSystem').removeClass('hidden');
            $('#covWebPhone').addClass('hidden');
            $('.taskTxt').text(' - BSO');
        } else {
            $('#covSystem').addClass('hidden');
            $('#covWebPhone').removeClass('hidden');
            $('.taskTxt').text(' - Forced to US Team');
        }
    });

    //contactSource Radio Menu
    $('#contactSource input').click(function() {
        if ($('#contactSourcePhysician').is(':checked')) {
            $('#contactPhysician').removeClass('hidden');
            $('#contactPatient').addClass('hidden');
        } else {
            $('#contactPhysician').addClass('hidden');
            $('#contactPatient').removeClass('hidden');
        }
    });

    //authPhonePhysican
    //authWebPhone Radio Menu
    $('#authSource input').click(function() {
        if ($('#authSourcePhonePhysician').is(':checked')) {
            $('#authPhonePhysican').removeClass('hidden');
            $('#authWebPhone').addClass('hidden');
        } else {
            $('#authPhonePhysican').addClass('hidden');
            $('#authWebPhone').removeClass('hidden');
        }
    });

    $('a.scrollTarget[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 1000);
                return false;
            }
        }
    });

    // BEGIN Add & Delete rows in grid table 
    $(".table-delete").on('click', function() {
        $('.appeals-table:radio:checked').parents("tr").remove();

    });
    var i = 2;
    $(".table-addmore").on('click', function() {
        var data = "<tr><td class='check'><input name='appealsinfo' type='radio' class='appeals-table'></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        data += "<td><ul class='patient-data stacked'><li><input type='text' class=''><span class='hidden'></span></li></ul></td>";
        $('#appeals-info-table').append(data);
        i++;
    });

    // BEGIN Add & Delete rows in grid table 



    $('#datepicker01, #datepicker02, #datepicker03, #datepicker04, #datepicker05, #datepicker06, #datepicker07').datepicker({
        autoclose: true,
        format: 'mm/dd/yyyy'
    });
    $('.dropdown-submenu > a').submenupicker();

    if (document.URL.indexOf("href=change") > -1) {
        $('a.stat-box').attr("href", "fcc-patient-records.html");
    }
    if (document.URL.indexOf("val=high") > -1) {
        $('.worklist-accounts > ul > li').hide();
        $('.worklist-accounts > ul > li.high').show();
    }

    if (document.URL.indexOf("on=high") > -1) {
        $('.btn-group.nav-tabs li').removeClass('active');
        $('.worklist-accounts .tab-content .tab-pane').removeClass('active');
        $('.btn-group.nav-tabs li:first').addClass('active');
        $('.worklist-accounts .tab-content .tab-pane:first').addClass('active');
    }

    if (document.URL.indexOf("off=high") > -1) {
        $('.btn-group.nav-tabs li').removeClass('active');
        $('.worklist-accounts .tab-content .tab-pane').removeClass('active');
        $('.btn-group.nav-tabs li:first').addClass('active');
        $('.worklist-accounts .tab-content .tab-pane:first').addClass('active');
    }

    if (document.URL.indexOf("on=med") > -1) {
        $('.btn-group.nav-tabs li').removeClass('active');
        $('.worklist-accounts .tab-content .tab-pane').removeClass('active');
        $('.btn-group.nav-tabs li:eq(1)').addClass('active');
        $('.worklist-accounts .tab-content .tab-pane:eq(1)').addClass('active');
    }

    if (document.URL.indexOf("off=med") > -1) {
        $('.btn-group.nav-tabs li').removeClass('active');
        $('.worklist-accounts .tab-content .tab-pane').removeClass('active');
        $('.btn-group.nav-tabs li:eq(1)').addClass('active');
        $('.worklist-accounts .tab-content .tab-pane:eq(1)').addClass('active');
    }

    if (document.URL.indexOf("on=low") > -1) {
        $('.btn-group.nav-tabs li').removeClass('active');
        $('.worklist-accounts .tab-content .tab-pane').removeClass('active');
        $('.btn-group.nav-tabs li:last').addClass('active');
        $('.worklist-accounts .tab-content .tab-pane:last').addClass('active');
    }

    if (document.URL.indexOf("off=low") > -1) {
        $('.btn-group.nav-tabs li').removeClass('active');
        $('.worklist-accounts .tab-content .tab-pane').removeClass('active');
        $('.btn-group.nav-tabs li:last').addClass('active');
        $('.worklist-accounts .tab-content .tab-pane:last').addClass('active');
    }
    var windowheight = ($(window).height());

    $('#cases-box').css("height", windowheight - 370);
    $('#cases-box2').css("height", windowheight - 370);
    $(window).resize(function() {
		if ( $( ".hiderightpane" ).length ) {
		}
		else {$('#prm-menu').width($('#prm-menu-col').width());}
		windowheight = ($(window).height());
        $('#cases-box').css("height", windowheight - 370);
        $('#cases-box2').css("height", windowheight - 370);
    });

    $('#kmd-search').on('click', function() {
        $("#searchresults").load("files/results.html");
    });

    $('#kmd-jump').on('click', function() {
        $('.nav-tabs li').removeClass('active');
        $('.nav-tabs li.kmd').addClass('active');

        $('#prm-menu').slideUp("fast", function() {
            // Animation complete.
            $('.navbar-nav').addClass('navpos');
        });

    });

    $('.section_header ul.nav-tabs li').on('click', function() {
        var navid = $(this).children('a').html();
        var summarynav = $('#prm-menu');
        if (navid == "Summary") {
            summarynav.slideDown("fast", function() {
                // Animation complete.
                $('.navbar-nav').removeClass('navpos');
            });
        } else {
            summarynav.slideUp("fast", function() {
                // Animation complete.
                $('.navbar-nav').addClass('navpos');
            });
        }
    });
});