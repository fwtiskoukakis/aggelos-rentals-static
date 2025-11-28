    

    /* Init Date Time Picket */
    function choosetime(){
        
        var day_of_week_start = 1;
        if (typeof(dayOfWeekStart) != "undefined"){
            day_of_week_start = dayOfWeekStart;
        }

        var dateformat = 'yy-m-d';
        if (typeof(date_format) != "undefined"){
            dateformat = date_format;
        }

         var timeformat = 'yy-m-d';
        if (typeof(time_format) != "undefined"){
            timeformat = time_format;
        }


        jQuery('.datetimepicker').each(function(){
            var today = new Date();
            var datePickerOptions = {
                format: dateformat +' '+ timeformat,
                minDate: today,
                dayOfWeekStart: day_of_week_start,
                changeMonth: true,
                changeYear: true
            }
            jQuery(this).datetimepicker(datePickerOptions);
        });
    }

    /* Choose Hour */
    function choosehour(){

        var day_of_week_start = 1;
        if (typeof(dayOfWeekStart) != "undefined"){
            day_of_week_start = dayOfWeekStart;
        }

        jQuery( '.ovacrs_pehour_picker' ).each(function(){
            var timePickerOptions = {
                datepicker:false,
                format:'H:i'
            }
            jQuery(this).datetimepicker(timePickerOptions);
        });
    }


    /* Package Type Change */
    function change_pack_type(){
        jQuery(".row_petime_record").each(function(){

            jQuery(this).bind( "change_package_type", function(){

                var ovacrs_package_type = jQuery(this).find('select.ovacrs_package_type :selected').val();
                
            
                if( ovacrs_package_type == 'inday' ){
                    var ovacrs_unfixed = jQuery('select#ovacrs_unfixed_time :selected').val();

                    jQuery(this).find( '.ovacrs_petime_days' ).hide();

                    if( ovacrs_unfixed !== 'yes' ) {
                        jQuery(this).find( '.period_times' ).show();
                        jQuery(this).find( '.period_times_unfixed' ).hide();
                    } else {
                        jQuery(this).find( '.period_times_unfixed' ).show();
                        jQuery(this).find( '.period_times' ).hide();
                    }
                    

                    

                }else if( ovacrs_package_type == 'other' ){
                    
                    jQuery(this).find( '.ovacrs_petime_days' ).show();
                    jQuery(this).find( '.period_times' ).hide();
                    jQuery(this).find( '.period_times_unfixed' ).hide();

                }
                        
            });

            jQuery(this).trigger("change_package_type");
            jQuery(this).find('select.ovacrs_package_type').change(function(){
                jQuery(this).trigger("change_package_type");
            });

        });
    }

    function change_unfixed(){
        

            jQuery('#ovacrs_unfixed_time').on( 'change', function(){


                var ovacrs_unfixed_time = jQuery('select#ovacrs_unfixed_time :selected').val();
                
                console.log('ovacrs_unfixed_time: ' + ovacrs_unfixed_time);
                if( ovacrs_unfixed_time == 'yes' ){

                    jQuery('.period_times').hide();
                    jQuery('.period_times_unfixed').show();

                    

                }else {
                    
                    jQuery('.period_times').show();
                    jQuery('.period_times_unfixed').hide();

                }
                        
            });



    }
    
    
    
    // Init DateTime Picker
    choosetime();
    choosehour();

    // Init package type
    change_pack_type();
    change_unfixed();

    //Change unfixed time
    

    
    

    /* Display Custom Field in Car Rental ***********************************************************/
    jQuery( 'body' ).on( 'woocommerce-product-type-change', function( event, select_val, select ) {
        
        if ( select_val == 'ovacrs_car_rental' ) {
            jQuery( '.show_if_ovacrs_car_rental' ).show();
            jQuery( '.product_data_tabs .general_options' ).show();
            jQuery( 'ul.product_data_tabs li' ).removeClass('active');
            jQuery( 'ul.product_data_tabs li.general_options' ).addClass('active');
            jQuery( '#shipping_product_data' ).css('display', 'none');
            jQuery( '#general_product_data' ).css('display', 'block');

            
            /* for Price tab */
            jQuery(' ul.product_data_tabs li.general_tab').addClass('show_if_variable_bulk').show();
            jQuery('#general_product_data .pricing').addClass('show_if_variable_bulk').show();

            
            /* For sale off */
            jQuery('#general_product_data ._sale_price_field').hide();
            jQuery('#general_product_data .sale_price_dates_fields').hide();

            jQuery('#general_product_data .pricing').css('border-bottom','none');

            
            
            

            /* Append text to _regular_price_field */
            jQuery( '#general_product_data ._regular_price_field label' ).first().append( '<span> / Day</span>' );

            /*for Inventory tab */
            jQuery( 'ul.product_data_tabs li.inventory_tab' ).show();
            jQuery('.inventory_options').addClass('show_if_variable_bulk').show();
            jQuery('#inventory_product_data ._manage_stock_field').addClass('show_if_variable_bulk').show();
            jQuery('#inventory_product_data ._sold_individually_field').parent().addClass('show_if_variable_bulk').show();
            jQuery('#inventory_product_data ._sold_individually_field').addClass('show_if_variable_bulk').show();
            
        } else if ( select_val == 'grouped' ) {
            jQuery( '.show_if_ovacrs_car_rental' ).hide();
            jQuery( '.product_data_tabs .general_options' ).hide();

        }else{
            jQuery( '.show_if_ovacrs_car_rental' ).hide();
            jQuery( '#general_product_data ._regular_price_field label span' ).hide();
            jQuery('#general_product_data ._sale_price_field').show();
            jQuery('#general_product_data .sale_price_dates_fields').show();
            jQuery('#general_product_data .pricing').css('border-bottom','1px solid #eee');
            
        }

    });

    /* Display Attributes tab */
    jQuery( '.add_extra_features' ).click(function(e){
        e.preventDefault();
        jQuery( '.product_data_tabs li' ).removeClass('active');
        jQuery( '.product_data_tabs .attribute_options' ).addClass('active');
        jQuery( '#general_product_data' ).hide();
        jQuery( '#product_attributes' ).show();

    });

    
    /* Discount ********************************************************** */
    /* Remove tr discount */
    jQuery( '#general_product_data' ).on('click', '.ovacrs_global_discount .delete', function(e){
        e.preventDefault();
        jQuery(this).closest('.row_discount').remove();
    });

    /* Add extra field discount */
    jQuery( '.ovacrs_global_discount a.insert_discount' ).click(function(e){
        e.preventDefault();
        var html = jQuery(this).data('row');
        jQuery(this).closest('.ovacrs_global_discount').find('tbody').append(html);
    });
    


    /* Range Time with price ***********************************************************/

    /* Total RT Row */
    function total_rt_row(){
        return jQuery('.ovacrs_rt .row_rt_record').length; /* Total Row RT */
    }

    /* Sort pos of Rt Row and Rt discount */
    function sort_rt(){

        /* Sort RT */
        var k = 0;
        jQuery('.ovacrs_rt .row_rt_record').each(function(){
            /* set again post for each rt row */
            jQuery(this).attr('data-pos', k);
            k++;
        });

        /* Sort RT Discount */
        var total_rt_row = jQuery('.ovacrs_rt .row_rt_record').length;
        for( var i = 0; i < total_rt_row; i++ ){
            jQuery( '.wrap_rt .row_rt_record' ).each(function(){
                if( jQuery(this).attr('data-pos') == i ){
                    jQuery(this).find('tbody.real .ovacrs_rt_discount_price').attr('name', 'ovacrs_rt_discount['+i+'][price][]');
                    jQuery(this).find('tbody.real .ovacrs_rt_discount_duration').attr('name', 'ovacrs_rt_discount['+i+'][duration][]');
                    jQuery(this).find('tbody.real .ovacrs_rt_discount_duration_type').attr('name', 'ovacrs_rt_discount['+i+'][duration_type][]');    
                }
            });
        }
    }

    
    /* Add RT Record */
    jQuery( '.ovacrs_rt a.insert_rt_record' ).click(function(e){
        e.preventDefault();
        var html = jQuery(this).data('row');

        
        var rt_total = total_rt_row(); /* Total Row RT */
        html = html.replace( 'data-pos=""', 'data-pos="'+rt_total+'"'  ); /* Add position for each Rt record */

        jQuery(this).closest('.ovacrs_rt').find('tbody').first().append(html);

        // Init Datetimepicker
        choosetime();
    });

    /* Remove RT Record */
    jQuery( '#general_product_data' ).on('click', '.ovacrs_rt .delete_rt', function(e){
        e.preventDefault();
        jQuery(this).closest('.row_rt_record').remove();
        sort_rt();
    });


    /* Add RT Discount  */
    jQuery( '#general_product_data' ).on( 'click', 'a.insert_rt_discount', function(e){
        e.preventDefault();
        var html = jQuery(this).find('.wrap_rt_discount tbody').html();

        var pos_rt = jQuery(this).closest( '.row_rt_record' ).data('pos'); /* Get position of RT */
        html = html.replace( /ovacrs_key/g, pos_rt ); /* Replace all key to position of RT */

        jQuery(this).closest('.ovacrs_rt_discount').find('tbody').first().append(html);

        // Init Datetimepicker
        choosetime();
        
    }); 

    /* Remove RT Discount */
    jQuery( '#general_product_data' ).on('click', '.ovacrs_rt .delete_discount', function(e){
        e.preventDefault();
        jQuery(this).closest('.tr_rt_discount').remove();
    });




    
    /* Unavailable Time ***********************************************************/
    /* Add UnTime */
    jQuery( '.ovacrs_rt_untime a.insert_rt_untime' ).click(function(e){
        e.preventDefault();
        var html = jQuery(this).data('row');
        jQuery(this).closest('.ovacrs_rt_untime').find('tbody').append(html);
        // Init Datetimepicker
        choosetime();
    });

    /* Remove UnTime */
    jQuery( '#general_product_data' ).on('click', '.delete_untime', function(e){
        e.preventDefault();
        jQuery(this).closest('.tr_rt_untime').remove();
    });


    /* Local Price  ***********************************************************/
    /* Add Local Price */
    jQuery( '.ovacrs_local_price a.insert_local_price' ).click(function(e){
        e.preventDefault();
        var html = jQuery(this).data('row');

        jQuery(this).closest('.ovacrs_local_price').find('tbody').append(html);

    });

    /* Remove item local price */
    jQuery( '#general_product_data' ).on('click', '.delete_local_price', function(e){
        e.preventDefault();
        jQuery(this).closest('.tr_rt_local_price').remove();
    });


    //change value;
    jQuery( '.ovacrs_local_price ' ).on('change', 'select[name="ovacrs_pickup_location[]"]', function(){
        var that = jQuery(this);
        var pickup_this_val = that.val();
        if( ! pickup_this_val ) {
            that.closest('.tr_rt_local_price').find('select[name="ovacrs_dropoff_location[]"]').prop('disabled', true);
        } else {
            that.closest('.tr_rt_local_price').find('select[name="ovacrs_dropoff_location[]"]').prop('disabled', false);
            that.closest('.tr_rt_local_price').find('select[name="ovacrs_dropoff_location[]"]').val('');
        }
    })


    jQuery( '.ovacrs_local_price ' ).on('click', 'select[name="ovacrs_dropoff_location[]"]', function(){

        var that = jQuery(this);
        var pickup_this = that.closest('.tr_rt_local_price').find('select[name="ovacrs_pickup_location[]"]');
        var pickup_this_val = pickup_this.val();

        if( ! pickup_this_val ) {
            that.prop('disabled', true);
        } else {
            that.prop('disabled', false);
        }

        var loc_dropoff_arr = [];
        jQuery('.ovacrs_local_price select[name="ovacrs_pickup_location[]"]').each(function(item){
            var loc_pickup = jQuery(this).not(pickup_this).val();
            if( pickup_this_val == loc_pickup ) {
                var loc_dropoff_this = jQuery(this).closest('.tr_rt_local_price').find('select[name="ovacrs_dropoff_location[]"]').val();
                loc_dropoff_arr.push(loc_dropoff_this);
            }
            loc_pickup = loc_pickup ? loc_pickup : '';

        });

        if( loc_dropoff_arr ) {
            loc_dropoff_arr.forEach(function(index) {
                if( index ) {
                    var index_replace = index.replace(' ','\\ ');
                    that.find('option[value=' + index_replace + ']').prop( "disabled", true );
                }
            })
        }

        
    });

    /* ST Locaitons */
    // Add Location
    jQuery( '.ovacrs_st_locations a.insert_st_location' ).click(function(e){
        e.preventDefault();
        var html = jQuery(this).data('row');

        jQuery(this).closest('.ovacrs_st_locations').find('tbody').append(html);

    });

    // Remove Location
    jQuery( '#general_product_data' ).on('click', '.delete_st_location', function(e){
        e.preventDefault();
        jQuery(this).closest('.tr_st_local').remove();
    });

    // Change Location
    jQuery( '.ovacrs_st_locations' ).on('change', 'select[name="ovacrs_st_pickup_location[]"]', function(){
        var that = jQuery(this);
        var pickup_this_val = that.val();

        if ( ! pickup_this_val ) {
            that.closest('.tr_st_local').find('select[name="ovacrs_st_dropoff_location[]"]').prop('disabled', true);
        } else {
            that.closest('.tr_st_local').find('select[name="ovacrs_st_dropoff_location[]"]').prop('disabled', false);
            that.closest('.tr_st_local').find('select[name="ovacrs_st_dropoff_location[]"]').val('');
        }
    })

    jQuery( '.ovacrs_st_locations' ).on('click', 'select[name="ovacrs_st_dropoff_location[]"]', function(){
        var that = jQuery(this);

        var pickup_this     = that.closest('.tr_st_local').find('select[name="ovacrs_st_pickup_location[]"]');
        var pickup_this_val = pickup_this.val();

        if ( ! pickup_this_val ) {
            that.prop('disabled', true);
        } else {
            that.prop('disabled', false);
        }

        var loc_dropoff_arr = [];

        jQuery('.ovacrs_st_locations select[name="ovacrs_st_pickup_location[]"]').each(function(item){
            var loc_pickup = jQuery(this).not(pickup_this).val();

            if ( pickup_this_val == loc_pickup ) {
                var loc_dropoff_this = jQuery(this).closest('.tr_st_local').find('select[name="ovacrs_st_dropoff_location[]"]').val();
                loc_dropoff_arr.push(loc_dropoff_this);
            }

            loc_pickup = loc_pickup ? loc_pickup : '';

        });

        if ( loc_dropoff_arr ) {
            loc_dropoff_arr.forEach(function(index) {
                if( index ) {
                    var index_replace = index.replace(' ','\\ ');
                    that.find('option[value=' + index_replace + ']').prop( "disabled", true );
                }
            })
        }
    });
    /* End ST Locaitons */

    /* Resources ***********************************************************/
    /* Add Resources */
    jQuery( '.ovacrs_resources a.insert_resources' ).click(function(e){
        e.preventDefault();
        var html = jQuery(this).data('row');
        jQuery(this).closest('.ovacrs_resources').find('tbody').append(html);

    });

    /* Remove Resources */
    jQuery( '#general_product_data' ).on('click', '.delete_resource', function(e){
        e.preventDefault();
        jQuery(this).closest('.tr_rt_resource').remove();
    });


    /* Features ***********************************************************/
    /* Add Features */
    jQuery( '.ovacrs_features a.insert_rt_feature' ).click(function(e){
        e.preventDefault();
        var html = jQuery(this).data('row');
        jQuery(this).closest('.ovacrs_features').find('tbody').append(html);

    });
    /* Remove Resources */
    jQuery( '#general_product_data' ).on('click', '.delete_feature', function(e){
        e.preventDefault();
        jQuery(this).closest('.tr_rt_feature').remove();
    });


    /* Other Features ***********************************************************/
    /* Add Other Features */
    jQuery( '.ovacrs_other_features a.insert_rt_other_feature' ).click(function(e){
        e.preventDefault();
        var html = jQuery(this).data('row');
        jQuery(this).closest('.ovacrs_other_features').find('tbody').append(html);

    });
    /* Remove Resources */
    jQuery( '#general_product_data' ).on('click', '.delete_other_feature', function(e){
        e.preventDefault();
        jQuery(this).closest('.tr_rt_other_feature').remove();
    });

    
    
    /* Period Time with price ***********************************************************/

    /* Total Petime Row */
    function total_petime_row(){
        return jQuery('.ovacrs_petime .row_petime_record').length; /* Total Row Petime */
    }

    /* Sort pos of Petime Row and Petime discount */
    function sort_petime(){

        /* Sort Petime */
        var k = 0;
        jQuery('.ovacrs_petime .row_petime_record').each(function(){
            /* set again post for each petime row */
            jQuery(this).attr('data-pos', k);
            k++;
        });

        /* Sort RT Discount */
        var total_petime_row = jQuery('.ovacrs_petime .row_petime_record').length;
        for( var i = 0; i < total_petime_row; i++ ){
            jQuery( '.wrap_petime .row_petime_record' ).each(function(){
                if( jQuery(this).attr('data-pos') == i ){
                    jQuery(this).find('tbody.real .ovacrs_petime_discount_price').attr('name', 'ovacrs_petime_discount['+i+'][price][]');
                    jQuery(this).find('tbody.real .ovacrs_petime_discount_start_time').attr('name', 'ovacrs_petime_discount['+i+'][start_time][]');
                    jQuery(this).find('tbody.real .ovacrs_petime_discount_end_time').attr('name', 'ovacrs_petime_discount['+i+'][end_time][]');    
                }
            });
        }
    }

    
    /* Add Petime Record */
    jQuery( '.ovacrs_petime a.insert_petime_record' ).click(function(e){
        e.preventDefault();
        var html = jQuery(this).data('row');

        
        var rt_total = total_petime_row(); /* Total Row Petime */
        html = html.replace( 'data-pos=""', 'data-pos="'+rt_total+'"'  ); /* Add position for each Petime record */

        jQuery(this).closest('.ovacrs_petime').find('tbody').first().append(html);
        
        // Init Datetimepicker
        choosehour();
        change_pack_type();

    });

    /* Remove Petime Record */
    jQuery( '#general_product_data' ).on('click', '.ovacrs_petime .delete_petime', function(e){
        e.preventDefault();
        jQuery(this).closest('.row_petime_record').remove();
        sort_petime();
    });


    /* Add Petime Discount  */
    jQuery( '#general_product_data' ).on( 'click', 'a.insert_petime_discount', function(e){
        e.preventDefault();
        var html = jQuery(this).find('.wrap_petime_discount tbody').html();

        var pos_rt = jQuery(this).closest( '.row_petime_record' ).data('pos'); /* Get position of Petime */
        html = html.replace( /ovacrs_key/g, pos_rt ); /* Replace all key to position of Petime */

        jQuery(this).closest('.ovacrs_petime_discount').find('tbody').first().append(html);

         // Init Datetimepicker
        choosetime();
        
        
    }); 

    /* Remove Petime Discount */
    jQuery( '#general_product_data' ).on('click', '.ovacrs_petime .delete_petime_discount', function(e){
        e.preventDefault();
        jQuery(this).closest('.tr_petime_discount').remove();
    });
    

    

    
    
    

