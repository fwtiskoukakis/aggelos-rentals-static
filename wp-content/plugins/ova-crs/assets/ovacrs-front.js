// Pickup Location Change
jQuery('.theme-ireca').on('change', 'select[name="ovacrs_pickup_loc"].ovacrs-transport', function(){
    pickup_location( jQuery(this) );
});

jQuery('.theme-ireca select[name="ovacrs_pickup_loc"].ovacrs-transport').each( function() {
    pickup_location( jQuery(this) );
});

function pickup_location( that ) {
    that.closest('.wrap_fields').find('select[name="ovacrs_pickoff_loc"]').empty();

    var pickup_loc  = that.val();
    var item_loc    = that.find('option[value="'+pickup_loc+'"]').data('item_loc');

    var html_option_dropoff = '';

    if ( item_loc ) {
        item_loc.forEach(function(item){
            if ( item ) {
                html_option_dropoff += '<option value="'+item+'" >'+item+'</option>';
            }
        });
  
        if ( ! html_option_dropoff ) {
            html_option_dropoff = '<option value="">Select Location</option>';
        }
    } else {
        html_option_dropoff = '<option value="">Select Location</option>';
    }

    that.closest('.wrap_fields').find('select[name="ovacrs_pickoff_loc"]').append(html_option_dropoff);
}
// End


/* Choose pickup date in period time */
jQuery( 'body' ).on( 'change', '.startdate_perido_time', function(){

    var that = jQuery(this);

    var startdate = that.val();
    var post_id = that.data('pid');

    that.closest('form').find( 'select[name="ovacrs_period_package_id"] ' ).attr( 'disabled', 'disabled' );

     jQuery.ajax({
        url: ajax_object.ajax_url,
        type: 'POST',
        data: ({
            action: 'ovacrs_get_package_by_time',
            startdate: startdate,
            post_id: post_id
        }),
        success: function(response){

            that.closest('form').find( 'select[name="ovacrs_period_package_id"] option ' ).remove();

            var option = '';
            var option_obj = jQuery.parseJSON( response );

            if(option_obj){
                jQuery.each(option_obj, function(key, value) {
                    option += '<option value="'+ key + '">' + value + '</option>';  
                });
            }

            if( option ) {
                that.closest('form').find( 'select[name="ovacrs_period_package_id"] ' ).append(option);
            }
            
            that.closest('form').find( 'select[name="ovacrs_period_package_id"] ' ).select2();

            that.closest('form').find( 'select[name="ovacrs_period_package_id"] ' ).prop("disabled", false);
            
        },
    });

});

// Remove Cart
jQuery( document.body ).on('click', '.remove_from_cart_button', function() {
    var that = jQuery(this);
    var cart_item_key = that.data( 'cart_item_key' );

    jQuery.ajax({
        url: ajax_object.ajax_url,
        type: 'POST',
        data: ({
            action: 'ovacrs_remove_cart',
            cart_item_key: cart_item_key,
        }),
        success: function(response) {
            if ( response != '' ) {
                jQuery('.ireca-cart-wrapper').find('.label .info span').html( response );
                jQuery('.ireca-cart-wrapper').find('.cart-total .items').html( response );
            }
        },
    });
});