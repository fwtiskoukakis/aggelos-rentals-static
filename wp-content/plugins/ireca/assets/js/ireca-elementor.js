
(function($){
	"use strict";

	

	$(window).on('elementor/frontend/init', function () {
		
		elementorFrontend.hooks.addAction('frontend/element_ready/ovacrs_product_filter.default', function(){
			if( $('.ovacrs_product_filter .tab-content .tab-pane').length > 0 ){  
				$('.ovacrs_product_filter .tab-content .tab-pane .owl-carousel').each(function(){

					var total_columns_slide = $(this).data('total_columns_slide');
					var show_dots = $(this).data('show_dots');
					var rtl = false;
					if( $('body').hasClass('rtl') ){
						rtl = true;
					}

					$(this).owlCarousel({
						loop:false,
						margin: 30,
						nav:false,
						dots: show_dots,
						rtl: rtl,
						responsive:{
							0:{
								items:1
							},
							768:{
								items: 2
							},
							1200:{
								items: total_columns_slide
							}
						}
					});

					
				});

				var owl = $('.ovacrs_product_filter .tab-content .tab-pane .owl-carousel');
				owl.owlCarousel();
				
				$('.carousel-control-next').click(function() {
					owl.trigger('next.owl.carousel');
				})
				
				$('.carousel-control-prev').click(function() {

					owl.trigger('prev.owl.carousel', [300]);
				})
			}

			$('.ovacrs_product_filter .tab-content .owl-carousel').each(function(){
				var $cat_slug = $(this).data('cat_slug');
				var $total_items = $(this).data('total_items');

				$( '.ovacrs_product_filter ul.nav li .total_items' ).each(function(){
					if( $(this).hasClass( $cat_slug ) ){
						$(this).empty().append( $total_items );
					}
				});

			});
			$( '.ovacrs_product_filter ul.nav li a.nav-link' ).click(function(){
				$(this).parent().parent().find('li a').removeClass('current');
				$(this).parent().parent().find('li .total_items').removeClass('current');
			});
			


		});



		/* Testimonials */
		elementorFrontend.hooks.addAction('frontend/element_ready/ovacrs_testimonial.default', function(){
			if( $('.ovacrs_testimonial').length > 0 ){
				$('.ovacrs_testimonial').each(function(){

					var auto_slider = $(this).data('auto_slider');
					var duration = $(this).data('duration');
					var pagination = $(this).data('pagination');
					var loop = $(this).data('loop');
					var count = $(this).data('count');

					var count_ipad = $(this).data('count_ipad');
					var count_mobile = $(this).data('count_mobile');

					var rtl = false;
					if( $('body').hasClass('rtl') ){
						rtl = true;
					}


					$(this).owlCarousel({
						autoplay: auto_slider,
						autoplayHoverPause: true,
						loop: loop,
						margin: 30,
						rtl: rtl,
						dots: pagination,
						autoplayTimeout: duration,
						responsiveRefreshRate: 100,
						responsive: {
							0:    {items: count_mobile},
							479:  {items: count_mobile},
							768:  {items: count_ipad},
							991:  {items: count},
							1024: {items: count}
						}
					});
				});
			}
		});

		elementorFrontend.hooks.addAction('frontend/element_ready/ovacrs_product_slider.default', function(){

			if( $('.ovacrs_product_slider_slick').length > 0 ){

				$( '.ovacrs_product_slider_slick' ).each(function(){

					var slidestoshow = $(this).data('slidestoshow');
					var total_item = $(this).data('total_item');
					var centermode_setting = $(this).data('centermode');
					var autoplay = $(this).data('autoplay');
					var autoplayspeed = $(this).data('autoplayspeed');
					var show_nav = $(this).data('show_nav');
					var show_dots = $(this).data('show_dots');

					if( total_item > slidestoshow ){
						var centerMode = centermode_setting;
					}else{
						var centerMode = false;
					}

					var rtl = false;
					if( $('body').hasClass('rtl') ){
						rtl = true;
					}

					$(this).not('.slick-initialized').slick({
						slidesToShow: slidestoshow,
						slidesToScroll: 1,
						focusOnSelect: true,
						dots: show_dots,
						arrows: show_nav,
						centerMode: centerMode,
						autoplay: autoplay,
						rtl: rtl,
						autoplaySpeed: autoplayspeed,
						responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: slidestoshow,
							}
						},

						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								centerMode: false
							}
						}
						]

					});
				});

			}

		});

		elementorFrontend.hooks.addAction('frontend/element_ready/ovacrs_skill.default', function(){

			$(document).ready(function(){
				if( $('.ovacrs_count').length > 0 ){

					$('.ovacrs_count').each(function () {
						$(this).waypoint(function(direction){

							var speedtime = parseInt( $(this).data('speedtime') );
							$(this).prop('Counter', 0).animate({
								Counter: parseInt( $(this).data('value') )
							}, {
								duration: speedtime,
								easing: 'swing',
								step: function (now) {                      
									$(this).text(Math.ceil(this.Counter));
								}
							});

						},
						{ offset: '70%'}
						);
					});

				}
			});

		});


		/* Team */
		elementorFrontend.hooks.addAction('frontend/element_ready/ovacrs_team.default', function(){
			if( $('.ovacrs_team').length > 0 ){
				$('.ovacrs_team').each(function(){

					var auto_slider = $(this).data('auto_slider');
					var duration = $(this).data('duration');
					var pagination = $(this).data('pagination');
					var loop = $(this).data('loop');
					var count = $(this).data('count');

					var count_ipad = $(this).data('count_ipad');
					var count_mobile = $(this).data('count_mobile');

					var rtl = false;
					if( $('body').hasClass('rtl') ){
						rtl = true;
					}

					$(this).owlCarousel({
						autoplay: auto_slider,
						autoplayHoverPause: true,
						loop: loop,
						margin: 30,
						rtl: rtl,
						dots: pagination,
						autoplayTimeout: duration,
						responsiveRefreshRate: 100,
						responsive: {
							0:    {items: count_mobile},
							460:  {items: count_ipad},
							768:  {items: count_ipad},
							991:  {items: count},
							1024: {items: count}
						}
					});
				});
			}
		});
		
		/* Poup Video */
		elementorFrontend.hooks.addAction('frontend/element_ready/ovacrs_video_popup.default', function(){
			if( $("a[data-rel^='prettyPhoto']").length > 0 ){
				$("a[data-rel^='prettyPhoto']").prettyPhoto();
			}
		});


		/* Booking form */
		elementorFrontend.hooks.addAction('frontend/element_ready/ovacrs_booking_form.default', function(){
			var list_rental_type = JSON.parse($("#ova_booking_form .list_rental_type").val());
			var list_url = JSON.parse($("#ova_booking_form .list_rental_type").attr("data-url"));
			var list_time_fomat = JSON.parse($("#ova_booking_form .list_rental_type").attr("data-time-fomat"));
			var show_extra_resource = $('.ova-booking-form .extra-resource').attr('data-show-extra-resource');
			var show_extra_resource_desc = $('.ova-booking-form .extra-resource').attr('data-show-extra-resource-description');

			var rental_type = "";
			var url_product = "";
			var id_product = "";
			var link_cart_page = $("#ova-link-cart-page").val();
			var ovacrs_pickup_loc, ovacrs_pickoff_loc, ovacrs_pickup_date, ovacrs_pickoff_date, ovacrs_period_package_id;

			$(".ova-button-submit-rental").on( 'click', function() {
				var scroll_to = $(this).attr("data-scroll");
				if (scroll_to === 'bk_form') {
					$('html,body').animate({
						scrollTop: $(".ova-booking-form").offset().top - 110
					},'slow');

					var id = parseInt($(this).attr('data-id'));
					$('#ova-select-product-booking').val(id );
					$('#ova-select-product-booking').select2().trigger('change');

					rental_type = list_rental_type[id];

					if (rental_type == 'period_time') {
						$.ajax({
							url: ajax_object.ajax_url,
							type: 'POST',
							data: ({
								action: 'get_package_period_time',
								product_id : id_product,
								rental_type : rental_type, 
							}),
							success: function(response){
								if (response) {
									$(".ova-booking-form .input.ova-package").html(response).css({"display": "table", "margin-bottom": "15px"});
									$(".ova-booking-form .input.ova-dropoff").css("display", "none");
								} 
							}
						});
					}
				}
			});
			
			var flag_package = true;
			$("#ova-select-product-booking").on("change", function() {
				id_product = $(this).val();
				rental_type = list_rental_type[id_product];
				url_product = list_url[id_product];

				$("#ova-rental-type").val(rental_type);
				$("#ova-car-id").val(id_product);
				$("#ova-add-cart-id").val(id_product);


				$('.ova-booking-form .input [name=ovacrs_pickup_loc]').prop('disabled', 'disabled');
				$('.ova-booking-form .input [name=ovacrs_pickoff_loc]').prop('disabled', 'disabled');

				$(".ova-booking-form .input.ova-dropoff").css("display", "table");
				flag_package = true;
				$(".ova-booking-form .input.ova-package").css("display", "none");
				$(".ova-booking-form [name=ovacrs_period_package_id]").addClass('dont_current');
				$(".ova-booking-form [name=ovacrs_pickoff_date]").removeClass('dont_current');

				$(".ova-booking-form .ireca_loadding").css({'display':'flex'});

				if (rental_type == "period_time") {
					flag_package = false;
					$.ajax({
						url: ajax_object.ajax_url,
						type: 'POST',
						data: ({
							action: 'get_package_period_time',
							product_id : id_product,
							rental_type : rental_type, 
						}),
						success: function(response){
							if (response) {
								$(".ova-booking-form .input.ova-package").html(response).css({"display": "table", "margin-bottom": "15px"});

								$(".ova-booking-form .input.ova-package select").select2();
								$(".ova-booking-form [name=ovacrs_pickup_date]").addClass('startdate_perido_time');
								$(".ova-booking-form [name=ovacrs_pickup_date]").attr('data-pid', id_product);

								$(".ova-booking-form [name=ovacrs_pickoff_date]").addClass('dont_current');
								$(".ova-booking-form .ova-booking-form [name=ovacrs_period_package_id]").removeClass('dont_current');
								$(".ova-booking-form .input.ova-dropoff").css("display", "none");
							} 
						}
					});
				}

				$.ajax({
					url: ajax_object.ajax_url,
					type: 'POST',
					data: ({
						action: 'get_location_pickup',
						product_id : id_product,
						rental_type : rental_type, 
					}),
					success: function(response){
						if (response) {

							$(".ova-booking-form .input.ovacrs-pickup-loc").empty();
							$(".ova-booking-form .input.ovacrs-pickup-loc").html(response);

							$(".ova-booking-form .input.ovacrs-pickup-loc select[name='ovacrs_pickup_loc']").select2();

						} 
					}
				});

				$.ajax({
					url: ajax_object.ajax_url,
					type: 'POST',
					data: ({
						action: 'get_location_dropoff',
						product_id : id_product,
						rental_type : rental_type, 
					}),
					success: function(response){
						if (response) {

							$(".ova-booking-form .input.ovacrs-dropoff-loc").empty();
							$(".ova-booking-form .input.ovacrs-dropoff-loc").html(response);

							$(".ova-booking-form .input.ovacrs-dropoff-loc select[name='ovacrs_pickoff_loc']").select2();

						} 
					}
				});

				if (rental_type == "transportation") {
					$(".ova-booking-form .input.ova-dropoff").css("display", "none");
					$(".ova-booking-form .input.ova-dropoff input").removeClass('required');

				}

				//get resource product show_extra_resource
				$('.ova-booking-form .extra-resource').empty();
				if (show_extra_resource == 'yes') {
					$.ajax({
						url: ajax_object.ajax_url,
						type: 'POST',
						data: ({
							action: 'get_resource_product',
							product_id : id_product,
							rental_type : rental_type, 
							show_extra_resource_desc: show_extra_resource_desc,
						}),
						success: function(response){
							response = response.slice (0, -1);
							$('.ova-booking-form .extra-resource').append(response);
						}
					});
				}

				//get resource product choise-deposit
				$('.ova-booking-form .choise-deposit').empty();
				$.ajax({
					url: ajax_object.ajax_url,
					type: 'POST',
					data: ({
						action: 'get_choise_deposit',
						product_id : id_product,
						rental_type : rental_type, 
					}),
					success: function(response){
						response = response.slice (0, -1);
						$('.ova-booking-form .choise-deposit').append(response);
					}
				});


				// Custom checkout field
				$('.ova-booking-form .custom-checkout-fields').empty();
				$.ajax({
					url: ajax_object.ajax_url,
					type: 'POST',
					data: ({
						action: 'get_custom_checkout_field_product',
						product_id : id_product
					}),
					success: function(response){
						response = response.slice (0, -1);
						$('.ova-booking-form .custom-checkout-fields').append(response);
						$(".ova-booking-form .custom-checkout-fields select").select2();
					}
				});
			


				$(document).ajaxStop(function() {
					 $(".ova-booking-form .ireca_loadding").css({'display':'none'});
				});

			});//end change select product

			$("#ova_booking_form").on("submit", function() {
				event.preventDefault();
				$(".ova-booking-form .ova-input .error").css('display', 'none');
				var flag = true;
				$('.ova-booking-form .input .required').each(function(){
					var val_require = $(this).val();

					if (!val_require && !$(this).hasClass('dont_current')) {
						$(this).parents( ".input" ).parents( ".ova-input" ).find(".error").css('display', 'block');
						flag = false;
					}

				});
				if (flag_package) {
					$(".error.package").css("display", "none");
				} else {
					$(".error.dropoff").css("display", "none");
				}
				if (!flag) {
					return false;
				}

				id_product = $("#ova-add-cart-id").val();
				var ovacrs_pickup_loc = $("[name=ovacrs_pickup_loc]").val();
				var ovacrs_pickoff_loc = $("[name=ovacrs_pickoff_loc]").val();
				var ovacrs_pickup_date = $("[name=ovacrs_pickup_date]").val();
				var ovacrs_pickoff_date = $("[name=ovacrs_pickoff_date]").val();
				var ovacrs_rental_type = $("[name=ovacrs_rental_type]").val();
				var custom_product_type = $("[name=custom_product_type]").val();
				var ova_type_deposit = $("input[name=ova_type_deposit]:checked").val();

				var ovacrs_quantity = $("[name=ovacrs_quantity]").val();

				var data_checkboxs = {};
				if (show_extra_resource == 'yes') {
					$('.ova-booking-form .extra-resource input:checked').each(function() {
						var name = $(this).attr('key');
						var value = $(this).attr('value');
						data_checkboxs[name] = value;
					});
				}

				var ovacrs_period_package_id = $(".ova-booking-form [name=ovacrs_period_package_id]").val();

				

				var data = {
					action: 'validate_form_booking',
					product_id : id_product,
					ovacrs_pickup_loc: ovacrs_pickup_loc,
					ovacrs_pickoff_loc: ovacrs_pickoff_loc,
					ovacrs_pickup_date: ovacrs_pickup_date,
					ovacrs_pickoff_date: ovacrs_pickoff_date,
					ovacrs_rental_type: ovacrs_rental_type,
					car_id: id_product,
					custom_product_type: custom_product_type,
					ova_type_deposit: ova_type_deposit,
					ovacrs_quantity: ovacrs_quantity
				};

				// Custom checkout field
				$('.ova-booking-form .custom_ck_field').each( function(){

					if( $(this).val() ){
						var custom_fiel_name = $(this).attr('name');
						data[custom_fiel_name] = $(this).val();
					}

				});

				if (ovacrs_rental_type == 'period_time') {
					delete data.ovacrs_pickoff_date;
					data['ovacrs_period_package_id'] = ovacrs_period_package_id;
					data['car_id'] = parseInt(id_product);
					data['product_id'] = parseInt(id_product);
					
				}

				if (!jQuery.isEmptyObject(data_checkboxs)) {
					data['ovacrs_resource_checkboxs'] = JSON.stringify( data_checkboxs );
					data['booking_form_ajax_get_extra_resource'] = "booking-form";
				}
				
				$.ajax({
					url: ajax_object.ajax_url,
					type: 'POST',
					data: data,
					success: function(response){
						response = JSON.parse(response);
						if (response.validate == 0) {
							$(".ova-error-validate-form").text(response.error[0].notice);
							$(".ova-error-validate-form").css('display', 'inline-block');
						} else if (response.validate == 1) {
							window.location = link_cart_page;
						}
					}
				});
			})
		});





	/* Booking form  request*/
	elementorFrontend.hooks.addAction('frontend/element_ready/ovacrs_booking_form_request.default', function(){
		var list_rental_type = JSON.parse($("#list_rental_type_request").val());
		var list_title_product = JSON.parse($("#list_title_product").val());
		var show_extra_resource = $('.ova-booking-form-request .extra-resource').attr('data-show-extra-resource');

		var rental_type = "";
		var id_product = "";
		var title_product = "";
		var ovacrs_pickup_loc, ovacrs_pickoff_loc, ovacrs_pickup_date, ovacrs_pickoff_date, ovacrs_period_package_id;

		$(".ova-button-submit-rental").on( 'click', function() {
			var scroll_to = $(this).attr("data-scroll");
			if (scroll_to === 'rbk_form') {
				$('html,body').animate({
					scrollTop: $(".ova-booking-form-request").offset().top - 110
				},'slow');

				var id = parseInt($(this).attr('data-id'));
				$('#ova-select-product-booking-request').val(id );
				$('#ova-select-product-booking-request').select2().trigger('change');

				rental_type = list_rental_type[id];

				if (rental_type == 'period_time') {
					$.ajax({
						url: ajax_object.ajax_url,
						type: 'POST',
						data: ({
							action: 'get_package_period_time',
							product_id : id_product,
							rental_type : rental_type, 
						}),
						success: function(response){
							if (response) {
								$(".ova-booking-form-request .input.ova-package").html(response).css({"display": "table", "margin-bottom": "15px"});
								$(".ova-booking-form-request .input.ova-dropoff").css("display", "none");

							} 
						}
					});
				}
			}
		});

		var flag_package = true;
		$("#ova-select-product-booking-request").on("change", function() {
			id_product = $(this).val();
			rental_type = list_rental_type[id_product];
			title_product = list_title_product[id_product];

			$('.ova-booking-form-request .input [name=ovacrs_pickup_loc]').prop('disabled', 'disabled');
			$('.ova-booking-form-request .input [name=ovacrs_pickoff_loc]').prop('disabled', 'disabled');

			$(".ova-booking-form-request .ireca_loadding").css({'display':'flex'});


			$("#product_name_request").val(title_product);
			$("#product_id_request").val(id_product);

			$(".input.ova-dropoff").css("display", "table");
			flag_package = true;
			$(".input.ova-package").css("display", "none");
			$(".ova-booking-form-request [name=ovacrs_period_package_id]").addClass('dont_current');
			$("[name=pickoff_date]").removeClass('dont_current');

			if (rental_type == "period_time") {
				flag_package = false;
				$.ajax({
					url: ajax_object.ajax_url,
					type: 'POST',
					data: ({
						action: 'get_package_period_time',
						product_id : id_product,
						rental_type : rental_type, 
					}),
					success: function(response){
						if (response) {
							$(".ova-booking-form-request .input.ova-package").html(response).css({"display": "table", "margin-bottom": "15px"});
							$(".ova-booking-form-request [name=pickoff_date]").addClass('dont_current');
							$(".ova-booking-form-request [name=ovacrs_period_package_id]").removeClass('dont_current');
							$(".ova-booking-form-request .input.ova-dropoff").css("display", "none");

							$(".ova-booking-form-request [name=pickup_date]").addClass('startdate_perido_time');
							$(".ova-booking-form-request [name=pickup_date]").attr('data-pid', id_product);
						} 
					}
				});
			}

			$.ajax({
				url: ajax_object.ajax_url,
				type: 'POST',
				data: ({
					action: 'get_location_pickup',
					product_id : id_product,
					rental_type : rental_type, 
				}),
				success: function(response){
					if (response) {

						$(".ova-booking-form-request .input.ovacrs-pickup-loc").empty();
						$(".ova-booking-form-request .input.ovacrs-pickup-loc").html(response);

						$(".ova-booking-form-request .input.ovacrs-pickup-loc select[name='ovacrs_pickup_loc']").select2();

					} 
				}
			});

			$.ajax({
				url: ajax_object.ajax_url,
				type: 'POST',
				data: ({
					action: 'get_location_dropoff',
					product_id : id_product,
					rental_type : rental_type, 
				}),
				success: function(response){
					if (response) {

						$(".ova-booking-form-request .input.ovacrs-dropoff-loc").empty();
						$(".ova-booking-form-request .input.ovacrs-dropoff-loc").html(response);

						$(".ova-booking-form-request .input.ovacrs-dropoff-loc select[name='ovacrs_pickoff_loc']").select2();

					} 
				}
			});

			if (rental_type == "transportation") {
				$(".ova-booking-form-request .input.ova-dropoff").css("display", "none");
				$(".ova-booking-form-request .input.ova-dropoff input").removeClass('required');
			}

			//get resource product show_extra_resource
			$('.ova-booking-form-request .extra-resource').empty();
			if (show_extra_resource == 'yes') {
				$.ajax({
					url: ajax_object.ajax_url,
					type: 'POST',
					data: ({
						action: 'get_resource_product',
						product_id : id_product,
						rental_type : rental_type, 
					}),
					success: function(response){
						response = response.slice (0, -1);
						$('.ova-booking-form-request .extra-resource').append(response);
					}
				});
			} 

			
			// Custom checkout field
			$('.ova-booking-form-request .custom-checkout-fields').empty();
			$.ajax({
				url: ajax_object.ajax_url,
				type: 'POST',
				data: ({
					action: 'get_custom_checkout_field_product',
					product_id : id_product
				}),
				success: function(response){
					response = response.slice (0, -1);
					$('.ova-booking-form-request .custom-checkout-fields').append(response);
					$(".ova-booking-form-request .custom-checkout-fields select").select2();
				}
			});


			$(document).ajaxStop(function() {
				 $(".ova-booking-form-request .ireca_loadding").css({'display':'none'});
			});

		});
		$("#ova_booking_form_request").on("submit", function() {
			// event.preventDefault();
			$(".ova-booking-form-request .ova-input .error").css('display', 'none');
			var flag = true;
			$('.ova-booking-form-request .input .required').each(function(){
				let val_require = $(this).val();

				if (!val_require && !$(this).hasClass('dont_current')) {
					$(this).parents( ".input" ).parents( ".ova-input" ).find(".error").css('display', 'block');
					flag = false;
				}

			});
			if (flag_package) {
				$(".ova-booking-form-request .error.package").css("display", "none");
				$(".ova-booking-form-request [name=ovacrs_period_package_id]").remove();
			} else {
				$(".ova-booking-form-request .error.dropoff").css("display", "none");
				$("[name=pickoff_date]").val("package id");
			}
			if (!flag) {
				return false;
			}

			
		})
	});

	elementorFrontend.hooks.addAction('frontend/element_ready/ovacrs_product_filter_slide.default', function(){
		var width_browser = window.innerWidth;

		$(".ova-list-detail .item").css({'display' : 'none'});
		var first_id = $(".ova-list-product-rental .title-product li:first a").attr('data-id');
		$(".ova-list-product-rental .title-product li:first a").addClass('active');
		$("#ova-product-" + first_id).css({'display' : 'flex'});

		var number_li = $(".ova-list-product-rental .wp-content .title-product li").length;

		if (number_li <=8 && width_browser > 1024) {
			$('.ova-list-product-rental .control').css({'display' : 'none',});
		}
		if( number_li < 4 && width_browser < 1024 ) {
			$('.ova-list-product-rental .control').css({'display' : 'none',});
		} else if( number_li >= 4 && width_browser < 1024 ) {
			$('.ova-list-product-rental .control').css({'display' : 'inline-flex',});
		}
		$(".ova-list-product-rental .title-product a").off('click').on( 'click', function() {
			$(".ova-list-product-rental .title-product a").removeClass('active');
			$(this).addClass('active');
			var id_product = $(this).attr('data-id');
			$(".ova-list-detail .item").hide();
			$("#ova-product-" + id_product).fadeIn();
		});

		var number_display = $('.ova-list-product-rental .wp-content .wp-filter .wp-title').attr('data-number-product');

		$("#ova-down").off('click').on( 'click', function() {
			var top = parseInt($(".ova-list-product-rental .wp-content .title-product").attr('data-top'));
			var height_title = parseInt($(".ova-list-product-rental .wp-content .title-product").height());
			var condition = (height_title + top) > (57 * number_display);
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
	});




	/* Map */
	elementorFrontend.hooks.addAction( 'frontend/element_ready/ovacrs_map.default', function(){

		if( typeof vehicle_data != 'undefined' ){

			var i = 0;
			var zoom_map = 10;
			var readmore_text = '';
			var icon1, icon2, icon3, icon4, icon5;

			if( typeof attr_map != 'undefined' ){
				zoom_map = attr_map.zoom_map;
				readmore_text = attr_map.readmore_text;
				icon1 = attr_map.icon1;
				icon2 = attr_map.icon2;
				icon3 = attr_map.icon3;
				icon4 = attr_map.icon4;
				icon5 = attr_map.icon5;
			}


			var marker, loc, Clusterer;
			var markers = [];
			var mapIWcontent = '';

   			// Get Data Vehicle
   			var obj_vehicles = ( vehicle_data );



   			var bounds = new google.maps.LatLngBounds();
   			var mapOptionsFirst = {
   				zoom: parseInt(zoom_map),
   				minZoom: 3,
   				center: new google.maps.LatLng(parseFloat(attr_map.lat_default), parseFloat(attr_map.lon_default) ),
   				mapTypeId: google.maps.MapTypeId.ROADMAP,

   				styles: [],
   				scrollwheel: false,
   			};

   			var mapObject = new google.maps.Map(document.getElementById('map'), mapOptionsFirst);

   			google.maps.event.addListener(mapObject, 'domready', function () {

   			});
   			google.maps.event.addListener(mapObject, 'click', function () {
   				closeInfoBox();
   			});


   			var contentString = '' + '' +
   			'<div class="iw-container"' +
   			'<div class="iw-content">' +
   			'' + mapIWcontent +
   			'</div>' +
   			'<div class="iw-bottom-gradient"></div>' +
   			'</div>' +
   			'' +
   			'';

   			var infowindow = new google.maps.InfoWindow({
   				content: contentString,
   				maxWidth: 350
   			});


   			obj_vehicles.forEach(function (item) {

   				marker = new google.maps.Marker({
   					position: new google.maps.LatLng(item.lat, item.lon),
   					map: mapObject
                    // icon: item.fa_icon //,
                });
   				loc = new google.maps.LatLng(item.lat, item.lon);
   				bounds.extend(loc);

   				if ('undefined' === typeof markers[i]) markers[i] = [];
   				markers[i].push(marker);
   				i++;



   				google.maps.event.addListener(marker, 'click', (function () {

   					closeInfoBox();
   					var mapIWcontent = '' +
   					'' +
   					'<div class="map-info-window">' +
   					'<div class="thumbnail no-border no-padding thumbnail-car-card">' +
   					'<div class="media">' +
   					'<a  class="media-link" href="#">' +
   					'<img style="max-width: 350px" src="' + item.img + '" alt=""/>' +
   					'</a>' +
   					'</div>' +
   					'<div class="caption text-center">' +
   					'<div class="buttons">' +
   					'<a class="ireca_btn  btn_tran dashed btn_white btn_price" href="' +
   					item.url + '">' +item.price+'</a>' +
   					'</div>' +
   					'<h2 class="caption-title"><a href="' +
   					item.url + '">' + item.title + '</a></h2>' +
   					'<div class="caption-text"> </div>' +

   					'<table class="table">' +
   					'<tr>' +item.feature +
   					'</tr>' +
   					'</table>' +
   					'</div>' +
   					'</div>' +
   					'<div style="border-top-width: 24px; position: absolute; ; margin-top: 0px; z-index: 0; left: 129px;"><div style="position: absolute; overflow: hidden; left: -6px; top: -1px; width: 16px; height: 30px;"><div style="position: absolute; left: 6px; transform: skewX(22.6deg); transform-origin: 0px 0px 0px; height: 24px; width: 10px; box-shadow: rgba(255, 255, 255, 0.0980392) 0px 1px 6px; z-index: 1; background-color: rgb(255, 255, 255);"></div></div><div style="position: absolute; overflow: hidden; top: -1px; left: 10px; width: 16px; height: 30px;"><div style="position: absolute; left: 0px; transform: skewX(-22.6deg); transform-origin: 10px 0px 0px; height: 24px; width: 10px; box-shadow: rgba(255, 255, 255, 0.0980392) 0px 1px 6px; z-index: 1; background-color: rgb(255, 255, 255);"></div></div></div>' +

   					'</div>' +

   					'';
   					var contentString = '' +
   					'' +
   					'<div class="iw-container">' +
   					'<div class="iw-content">' +
   					'' + mapIWcontent +
   					'</div>' +
   					'<div class="iw-bottom-gradient"></div>' +
   					'</div>' +
   					'' +
   					'';
   					infowindow.close();
   					infowindow = new google.maps.InfoWindow({
   						content: contentString,
   						title: item.title
   						, maxWidth: 350
   						, maxHeight: 500
   					});
   					infowindow.close();
   					infowindow.open(map, this);

   				}));

   			});

    		//options
    		var mcOptions = {
    			gridSize: 20,
    			maxZoom: 20,
    			styles: [{
    				height: 53,
    				url:icon1,
    				width: 52
    			}, {
    				height: 56,
    				url:icon2,
    				width: 55
    			}, {
    				height: 66,
    				url:icon3,
    				width: 65
    			}, {
    				height: 78,
    				url:icon4,
    				width: 77
    			}
    			, {
    				height: 90,
    				url:icon5,
    				width: 89
    			}
    			]

    		};


		    // New markerCluster
		    Clusterer = new MarkerClusterer(mapObject, [], mcOptions);

		    for (var key in markers){
	            //add  markers to Clusterer
	          
	            	Clusterer.addMarkers(markers[key], true);
	        	
	        }	

			function closeInfoBox() {
				jQuery('div.infoBox').remove();
			};

		}// typeof vehicle
	});



	});

})(jQuery);