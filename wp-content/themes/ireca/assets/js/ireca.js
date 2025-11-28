(function($){
	"use strict";
	$(document).ready(function(){
		
		var cal_lang = 'en';
		var disweek, disweek_arr, time, time_arr;

		if( $('body').data( 'lang' ) ){
			cal_lang = $('body').data( 'lang' ).replace(/\s/g, '');	
		}
		$.datetimepicker.setLocale( cal_lang );

		if( $('body').data( 'disweek' ) ){

			disweek = $('body').data( 'disweek' ).toString();
			disweek_arr = disweek.split(',').map(function(item) {
				return parseInt(item, 10);
			});
		}
		

		if( $( 'body' ).data( 'time' ) ){
			time = $( 'body' ).data( 'time' );	
			time_arr = 	time.replace(/ /g,'').split( ',' );
		}
		
		

		var day_of_week_start = 1;
        if (typeof(dayOfWeekStart) != "undefined"){
            day_of_week_start = dayOfWeekStart;
        }

        // Check mobile
        if ($(window).width() <= 1024){
			$('.ovacrs_datetimepicker').datetimepicker({closeOnTimeSelect: false}); // Not closed when selecting time.
		}

		$('.ovacrs_datetimepicker').each(function(){

			var hour_default = $(this).data('hour_default');
			var time_step = $(this).data('time_step');
			var dateformat = $(this).data('dateformat');
			var timeformat = $(this).data('timeformat');

			if( $(this).data('lang') ){
				cal_lang = $(this).data('lang');
				$.datetimepicker.setLocale( cal_lang );
			}

			if( $(this).data( 'time' ) ){
				time = $(this).data( 'time' );	
				time_arr = 	time.replace(/ /g,'').split( ',' );
			}

			if( $(this).data( 'disweek' ) ){

				disweek = $(this).data( 'disweek' ).toString();
				disweek_arr = disweek.split(',').map(function(item) {
					return parseInt(item, 10);
				});
			}
			
			var today = new Date();
			var datePickerOptions = '';


			$("#ova-select-product-booking").on("change", function() {
				var list_rental_type = JSON.parse($("#ova_booking_form .list_rental_type").val());
				var list_unfixed = ($("#ova_booking_form .list_rental_type").data('unfixed'));

				// var list_unfixed = JSON.parse($("#ova_booking_form .list_rental_type").data('unfixed'));
				var id_product = $(this).val();
				var flag = false;
				for (var key in list_rental_type) {
					if (list_rental_type.hasOwnProperty(key)) {
						if (key == id_product && list_rental_type[key] == "period_time") {
							if(list_unfixed.hasOwnProperty(key) && list_unfixed[key] == "yes") {
								flag = false;
							} else {
								flag = true;
							}
						}
					}
				}
				if (flag) {
					datePickerOptions = {
						format: dateformat,
						formatDate: dateformat,
						firstDay: 1,
						minDate: today,
						disabledWeekDays: disweek_arr,
						defaultTime: hour_default,
						dayOfWeekStart: day_of_week_start,
						timepicker:false,
					}
				} else {
					datePickerOptions = {
						format: dateformat+' '+timeformat,
						formatDate: dateformat,
                    	formatTime: timeformat,
						firstDay: 1,
						step: time_step,
						minDate: today,
						allowTimes: time_arr,
						disabledWeekDays: disweek_arr,
						dayOfWeekStart: day_of_week_start,
						defaultTime: hour_default,
						timepicker:true,
					}	
				}

				$("#ova-pickup-form-booking").datetimepicker(datePickerOptions);
			});

			$("#ova-select-product-booking-request").on("change", function() {
				var list_rental_type = JSON.parse($("#list_rental_type_request").val());
				var list_unfixed = ($("#ova_booking_form .list_rental_type").data('unfixed'));
				
				var id_product = $(this).val();
				var flag = false;
				for (var key in list_rental_type) {
					if (list_rental_type.hasOwnProperty(key)) {
						if (key == id_product && list_rental_type[key] == "period_time") {
							if(list_unfixed.hasOwnProperty(key) && list_unfixed[key] == "yes") {
								flag = false;
							} else {
								flag = true;
							}
						}
					}
				}
				if (flag) {
					datePickerOptions = {
						format: dateformat,
						formatDate: dateformat,
						firstDay: 1,
						minDate: today,
						disabledWeekDays: disweek_arr,
						defaultTime: hour_default,
						dayOfWeekStart: day_of_week_start,
						timepicker:false,
					}
				} else {
					datePickerOptions = {
						format: dateformat+' '+timeformat,
						formatDate: dateformat,
                    	formatTime: timeformat,
						firstDay: 1,
						step: time_step,
						minDate: today,
						allowTimes: time_arr,
						disabledWeekDays: disweek_arr,
						dayOfWeekStart: day_of_week_start,
						defaultTime: hour_default,
						timepicker:true,
					}	
				}
				
				$("#ova-pickup-form-booking-request").datetimepicker(datePickerOptions);
			});

			/* Rental Type is Period Hour,Time */
			if( timeformat == '' ){
				datePickerOptions = {
					format: dateformat,
					formatDate: dateformat,
					firstDay: 1,
					minDate: today,
	            	disabledWeekDays: disweek_arr,
	            	defaultTime: hour_default,
	            	dayOfWeekStart: day_of_week_start,
	            	timepicker:false,
	            }
	        }else{
	        	datePickerOptions = {
	        		format: dateformat+' '+timeformat,
	        		formatDate: dateformat,
                    formatTime: timeformat,
	        		firstDay: 1,
	        		step: time_step,
	        		minDate: today,
	        		allowTimes: time_arr,
	        		disabledWeekDays: disweek_arr,
	        		dayOfWeekStart: day_of_week_start,
	        		defaultTime: hour_default,
	        	}	
	        }

	        $('.ovacrs_datetimepicker.ovacrs_enddate').on('click', function(){

	        	if($(this).hasClass('ovacrs_enddate')) {
		        	var min;
		        	min = $(this).closest('.wrap_fields').children('.rb_field').children('.ovacrs_startdate').val();
		        	if( ! min ) {
		        		min = $(this).closest('.wrap_content').find('.ovacrs_startdate').val();
		        	}

		        	var min_year;
		            var min_month;
		            var min_day;
		            var time;
		            if( dateformat == 'd-m-Y' ) {
		                min_day = min.slice( 0,2 );
		                min_month = min.slice(3,5);
		                min_year = min.slice(6,10);
		                time = min.slice( min.indexOf( ' ' ) );

		                min = min_year + '-' + min_month + '-' + min_day + time;
		            } else if ( dateformat == 'm-d-Y' ) {
		                min_day = min.slice(3,5);
		                min_month = min.slice( 0,2 );
		                min_year = min.slice(6,10);
		                time = min.slice( min.indexOf( ' ' ) );

		                min = min_year + '-' + min_month + '-' + min_day + time;
		            } else if( dateformat == 'Y-m-d' ) {
		            	min_day = min.slice(8,10);
		                min_month = min.slice( 5,7 );
		                min_year = min.slice(0,4);
		            }

		            if ( min != '' ) {
		                min = new Date( min );
		            } else {
		                min = new Date();
		            }

		            datePickerOptions.minDate = min;

		            $(this).datetimepicker(datePickerOptions);

		        }
	        });
	        
	        $(this).datetimepicker(datePickerOptions);
	        
	    });

		




		if( $('#request_booking').length > 0 ) {
			$('#request_booking').validate({
				errorPlacement: function(error, element) {
					var placement = $(element).data('error');
					if (placement) {
						$(placement).append(error)
					} else {
						error.insertAfter(element);
					}
				}
			});
		}

		if( $( '#booking_form' ).length > 0 ){
			$('#booking_form').validate({
				errorPlacement: function(error, element) {
					var placement = $(element).data('error');
					if (placement) {
						$(placement).append(error)
					} else {
						error.insertAfter(element);
					}
				}
			});
		}

		if( $( '#ovacrs_search' ).length > 0 ){
			$('#ovacrs_search').validate({

				errorPlacement: function(error, element) {
					var placement = $(element).data('error');
					if (placement) {
						$(placement).append(error)
					} else {
						error.insertAfter(element);
					}
				}
				
			});
		}

		if( $( '.widget_nav_menu ul li' ).length > 0 ){
			$( '.widget_nav_menu ul li a:empty' ).parent().css('display','none');
		}

		

		$('#request_booking .submit').on( "click", function(){
			var mesg = $(this).parent().data('mesg_required');	
			$.extend($.validator.messages, {
				required: mesg,
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				creditcard: "Please enter a valid credit card number.",
				equalTo: "Please enter the same value again.",
				accept: "Please enter a value with a valid extension.",
				maxlength: $.validator.format("Please enter no more than {0} characters."),
				minlength: $.validator.format("Please enter at least {0} characters."),
				rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
				range: $.validator.format("Please enter a value between {0} and {1}."),
				max: $.validator.format("Please enter a value less than or equal to {0}."),
				min: $.validator.format("Please enter a value greater than or equal to {0}.")
			});
		});

		$('#booking_form .submit').on( "click", function(){
			var mesg = $(this).parent().data('mesg_required');	
			$.extend($.validator.messages, {
				required: mesg,
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				creditcard: "Please enter a valid credit card number.",
				equalTo: "Please enter the same value again.",
				accept: "Please enter a value with a valid extension.",
				maxlength: $.validator.format("Please enter no more than {0} characters."),
				minlength: $.validator.format("Please enter at least {0} characters."),
				rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
				range: $.validator.format("Please enter a value between {0} and {1}."),
				max: $.validator.format("Please enter a value less than or equal to {0}."),
				min: $.validator.format("Please enter a value greater than or equal to {0}.")
			});
		});

		$('.ovacrs_search .submit').on( "click", function(){
			var mesg = $(this).closest('.ovacrs_search').data('mesg_required');
			$.extend($.validator.messages, {
				required: mesg,
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				creditcard: "Please enter a valid credit card number.",
				equalTo: "Please enter the same value again.",
				accept: "Please enter a value with a valid extension.",
				maxlength: $.validator.format("Please enter no more than {0} characters."),
				minlength: $.validator.format("Please enter at least {0} characters."),
				rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
				range: $.validator.format("Please enter a value between {0} and {1}."),
				max: $.validator.format("Please enter a value less than or equal to {0}."),
				min: $.validator.format("Please enter a value greater than or equal to {0}.")
			});


		});

		

		/* Calendar */
		if( typeof order_time != 'undefined' ){
			
			$('.ireca__product_calendar').each(function(){
				var that = $(this)[0];
				var nav = $(this).data('nav');
				var default_view = $(this).data('default_view');
				var more_text = $(this).data( 'more_text' );
				var event_background = $(this).data( 'event_background' );
				var text_color = $(this).data( 'text_color' );
				
				/* Show/hide read more */
				var eventLimit = true;
				var view_eventLimit = 2;

				var show_read_more_date = $(this).data('show_read_more_date');

				if( show_read_more_date == 'hide_read_more_date' ){
					eventLimit = false;
					view_eventLimit = 0;
				}

				if ( default_view == 'month' ) {
					default_view = 'dayGridMonth';
				} else if ( default_view == 'agendaWeek' ) {
					default_view = 'timeGridWeek';
				} else if ( default_view == 'agendaDay' ) {
					default_view = 'timeGridDay';
				}

				var srcCalendar = new FullCalendar.Calendar( that, {
		            headerToolbar: {
		                left: 'prev,next,today',
						center: 'title',
						right: nav
		            },
		            initialView: default_view,
		            eventBackgroundColor: event_background,
		            eventTextColor: text_color,
		            eventDisplay: 'block',
		            displayEventTime : false,
		            events: order_time,
		            firstDay: day_of_week_start,
		            moreLinkContent: more_text,
					showNonCurrentDates: true,
					locale: cal_lang,
					dayMaxEventRows: eventLimit,
					views: {
						dayGrid: {
		                    dayMaxEventRows: view_eventLimit
		                },
		                timeGrid: {
		                    dayMaxEventRows: view_eventLimit
		                },
		                week: {
		                    dayMaxEventRows: view_eventLimit
		                },
		                day: {
		                    dayMaxEventRows: view_eventLimit
		                }
					},
				});

				srcCalendar.render();

			});

		}

		// Active Request Booking
		if( $('body').hasClass('active_request_booking') && $('.ovacrs_contact_tab').length > 0 ){
			$('.active_request_booking .description_tab').removeClass('active');
			$('.active_request_booking .woocommerce-Tabs-panel--description').hide();
			$('.active_request_booking .ovacrs_contact_tab').addClass('active');
			$('.active_request_booking .woocommerce-Tabs-panel--ovacrs_contact').show();	
		}
		

	});





if( $("a[data-gal^='prettyPhoto']").length > 0 ){
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		hook: 'data-gal', 
		theme: 'light_square',
		show_title: false,
		allow_resize: true,
		// autoplay_slideshow:true,
		horizontal_padding: 20,

	});
}

if( $('.ireca-thumbnails').length > 0 ){
	$('.ireca-thumbnails').each(function(){

		var rtl = false;
		if( $('body').hasClass('rtl') ){
			rtl = true;
		}

		$(this).owlCarousel({
			autoplay: true,
			autoplayHoverPause: true,
			loop: false,
			margin: 30,
			dots: true,
			nav: true,
			rtl: rtl,
			responsive: {
				0:    {items: 2},
				479:  {items: 2},
				768:  {items: 3},
				1024: {items: 4}
			}
		});
	});
}






/* Popup */
$('[data-popup-open]').on('click', function(e)  {
	var targeted_popup_class = $(this).attr('data-popup-open');
	$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
	e.preventDefault();
});
$('[data-popup-close]').on('click', function(e)  {
	var targeted_popup_class = $(this).attr('data-popup-close');
	$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
	e.preventDefault();
});


/* Scroll */
$('.scroll')
.not('[href="#"]')
.not('[href="#0"]')
.on( "click", function(event) {
	    // On-page links
	    if (
	    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	    	&& 
	    	location.hostname == this.hostname
	    	) {
	    	/* Figure out element to scroll to */
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    /* Does a scroll target exist? */
	    if (target.length) {
	    	/* Only prevent default if animation is actually gonna happen */
	    	event.preventDefault();
	    	$('html, body').animate({
	    		scrollTop: target.offset().top
	    	}, 1000, function() {
	    		/* Callback after animation */
	    		/* Must change focus! */
	    		var $target = $(target);
	    		$target.focus();
	    		if ($target.is(":focus")) { /* Checking if the target was focused*/
	    			return false;
	    		} else {
	    			$target.attr('tabindex','-1'); /* Adding tabindex for elements not focusable*/
	    			$target.focus(); /* Set focus again */
	    		};
	    	});
	    }
	}
});


/* Scroll to top */
function scrollUp(options) {

	var defaults = {
		scrollName: 'scrollUp', 
		topDistance: 600, 
		topSpeed: 800, 
		animation: 'fade', 
		animationInSpeed: 200, 
		animationOutSpeed: 200, 
		scrollText: '<i class="arrow_carrot-up"></i>', 
		scrollImg: false, 
		activeOverlay: false 
	};

	var o = $.extend({}, defaults, options),
	scrollId = '#' + o.scrollName;


	$('<a/>', {
		id: o.scrollName,
		href: '#top',
		title: o.scrollText
	}).appendTo('body');


	if (!o.scrollImg) {

		$(scrollId).html(o.scrollText);
	}


	$(scrollId).css({'display': 'none', 'position': 'fixed', 'z-index': '2147483647'});


	if (o.activeOverlay) {
		$("body").append("<div id='" + o.scrollName + "-active'></div>");
		$(scrollId + "-active").css({'position': 'absolute', 'top': o.topDistance + 'px', 'width': '100%', 'border-top': '1px dotted ' + o.activeOverlay, 'z-index': '2147483647'});
	}


	$(window).scroll(function () {
		switch (o.animation) {
			case "fade":
			$(($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed));
			break;
			case "slide":
			$(($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed));
			break;
			default:
			$(($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0));
		}
	});


	$(scrollId).on( "click", function (event) {
		$('html, body').animate({scrollTop: 0}, o.topSpeed);
		event.preventDefault();
	});

}
scrollUp();


/* Stick Menu When Scroll Page */

if( $('.ovamenu_shrink').length > 0 ){

	if( !$('.show_mask_header').hasClass( 'mask_header_shrink' ) ){
		$( '<div class="show_mask_header mask_header_shrink" style="position: relative; height: 0;"></div>' ).insertAfter('.ovamenu_shrink');
	}


	var header = $('.ovamenu_shrink');
	var header_shrink_height = header.innerHeight();


	$(window).scroll(function () {

		var scroll = $(this).scrollTop();

		if (scroll >= header_shrink_height+250 ) {
			header.addClass( 'active_fixed' );
			$('.mask_header_shrink').css('height',header_shrink_height);
		} else {
			header.removeClass('active_fixed');
			$('.mask_header_shrink').css('height','0');
		}
	});
}


/* Mobile Menu when click Plus button */
$( 'ul.navbar-nav button.dropdown-toggle' ).on( 'click', function() {
	$( this ).parent().toggleClass('active_sub');
});

/* Select 2 */
$('select').select2({
		// width: '100%'
		dropdownAutoWidth : true
	});

$(".ova-list-detail .item").css({'display' : 'none'});
var first_id = $(".ova-list-product-rental .title-product li:first a").attr('data-id');
$(".ova-list-product-rental .title-product li:first a").addClass('active');
$("#ova-product-" + first_id).css({'display' : 'flex'});

var number_li = $(".ova-list-product-rental .wp-content .title-product li").length;
if (number_li <=8) {
	$('.ova-list-product-rental .control').css({'display' : 'none',});
}
$(".ova-list-product-rental .title-product a").off('click').on( 'click', function() {
	$(".ova-list-product-rental .title-product a").removeClass('active');
	$(this).addClass('active');
	var id_product = $(this).attr('data-id');
	$(".ova-list-detail .item").hide();
	$("#ova-product-" + id_product).fadeIn();
});

$("#ova-down").off('click').on( 'click', function() {
	var top = parseInt($(".ova-list-product-rental .wp-content .title-product").attr('data-top'));
	var height_title = parseInt($(".ova-list-product-rental .wp-content .title-product").height());
	var condition = (height_title + top) > 456;
	if ($(window).width() < 1024) {
		condition = (height_title + top) > 171;
	}
	if (condition) {
		top -= 57; 
	} 
	$(".ova-list-product-rental .wp-content .title-product").attr('data-top', top);
	var top = $(".ova-list-product-rental .wp-content .title-product").css({'top': top + 'px'});
});

$("#ova-up").off('click').on( 'click', function() {
	var top = parseInt($(".ova-list-product-rental .wp-content .title-product").attr('data-top'));
	if (top !== 0) {
		top += 57; 
	}
	$(".ova-list-product-rental .wp-content .title-product").attr('data-top', top);
	var top = $(".ova-list-product-rental .wp-content .title-product").css({'top': top + 'px'});
});


var day_of_week_start_contact = 1;
if (typeof(dayOfWeekStart) != "undefined"){
    day_of_week_start_contact = dayOfWeekStart;
}

$('.ovacrs_datetimepicker_contact').each(function(){

	var today = new Date();

	var dateformat_contact = 'yy-m-d';
    if (typeof(date_format) != "undefined"){
        dateformat_contact = date_format;
    }

     var timeformat_contact = 'H:i';
    if (typeof(time_format) != "undefined"){
        timeformat_contact = time_format;
    }

	$(this).datetimepicker({
		firstDay: 1,
		minDate: today,
		format: dateformat_contact+' '+timeformat_contact,
		dayOfWeekStart: day_of_week_start_contact
	});
});




})(jQuery);
