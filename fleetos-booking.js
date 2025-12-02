// FleetOS Booking Form JavaScript
(function($) {
    'use strict';

    $(document).ready(function() {
        // Initialize default dates
        function setDefaultDates() {
            const now = new Date();
            const pickupDate = now.toISOString().split('T')[0];
            const pickupTime = now.toTimeString().slice(0, 5);

            const dropoffDate = new Date(now);
            dropoffDate.setDate(dropoffDate.getDate() + 3);
            const dropoffDateStr = dropoffDate.toISOString().split('T')[0];

            const pickupDateInput = $('#pickup_date');
            const pickupTimeInput = $('#pickup_time');
            const dropoffDateInput = $('#return_date');
            const dropoffTimeInput = $('#return_time');

            if (!pickupDateInput.val()) {
                pickupDateInput.val(pickupDate);
            }
            if (!pickupTimeInput.val()) {
                pickupTimeInput.val(pickupTime);
            }
            if (!dropoffDateInput.val()) {
                dropoffDateInput.val(dropoffDateStr);
            }
            if (!dropoffTimeInput.val()) {
                dropoffTimeInput.val(pickupTime);
            }

            // Set minimum dropoff date
            updateDropoffDateMin();
        }

        // Set default dates on load
        setDefaultDates();

        // Vehicle type selection
        $('.fleetos-vehicle-type-item').on('click', function() {
            $('.fleetos-vehicle-type-item').removeClass('active');
            $(this).addClass('active');

            const vehicleType = $(this).data('type');
            $('#vehicle_type').val(vehicleType);
        });

        // Update minimum dropoff date when pickup date changes
        function updateDropoffDateMin() {
            const pickupDate = $('#pickup_date').val();
            if (pickupDate) {
                const pickupDateObj = new Date(pickupDate);
                const minDropoffDate = new Date(pickupDateObj);
                minDropoffDate.setDate(minDropoffDate.getDate() + 1);
                $('#return_date').attr('min', minDropoffDate.toISOString().split('T')[0]);

                // Auto-update dropoff date if it's before the new minimum
                const dropoffDate = $('#return_date').val();
                if (dropoffDate) {
                    const dropoffDateObj = new Date(dropoffDate);
                    if (dropoffDateObj <= pickupDateObj) {
                        const newDropoffDate = new Date(pickupDateObj);
                        newDropoffDate.setDate(newDropoffDate.getDate() + 3);
                        $('#return_date').val(newDropoffDate.toISOString().split('T')[0]);
                    }
                }
            }
        }

        $('#pickup_date').on('change', function() {
            updateDropoffDateMin();
        });

        // Form validation and submission
        $('.fleetos-booking-form').on('submit', function(e) {
            e.preventDefault();

            const form = $(this);
            const vehicleType = $('#vehicle_type').val();
            const pickupLocationId = $('#pickup_location_id').val();

            const formData = {
                vehicle_type: vehicleType,
                pickup_date: form.find('[name="pickup_date"]').val(),
                pickup_time: form.find('[name="pickup_time"]').val() || new Date().toTimeString().slice(0, 5),
                pickup_location_id: pickupLocationId,
                dropoff_date: form.find('[name="return_date"]').val(),
                dropoff_time: form.find('[name="return_time"]').val() || form.find('[name="pickup_time"]').val() || new Date().toTimeString().slice(0, 5),
                dropoff_location_id: pickupLocationId, // Same as pickup for now
            };

            // Validate required fields
            if (!formData.pickup_date || !formData.dropoff_date || !formData.pickup_location_id) {
                alert('Please fill in all required fields.');
                return;
            }

            // Validate dates
            const pickupDate = new Date(formData.pickup_date + 'T' + formData.pickup_time);
            const dropoffDate = new Date(formData.dropoff_date + 'T' + formData.dropoff_time);

            if (pickupDate >= dropoffDate) {
                alert('Return date and time must be after pickup date and time.');
                return;
            }

            // Build redirect URL
            const orgSlug = fleetosBooking.organizationSlug;
            const baseUrl = fleetosBooking.redirectUrl;
            const params = new URLSearchParams(formData);

            // Remove empty values
            for (const [key, value] of params.entries()) {
                if (!value) {
                    params.delete(key);
                }
            }

            window.location.href = baseUrl + '/' + orgSlug + '/search?' + params.toString();
        });
    });
})(jQuery);
