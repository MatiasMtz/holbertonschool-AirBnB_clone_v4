$(document).ready(function () {
    let amenity_dic = {};
    $('input[type="checkbox"]').change(function () {
        if (this.checked === true) {
            amenity_dic[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenity_dic[$(this).attr('data-id')]
        }
        $('.amenities h4').text(Object.values(amenity_dic).join(", "))
    });
    $.get("http://localhost:5001/api/v1/status/", function (data) {
        if (data.status === "OK") {
            $("div#api_status").addClass('available');
        } else {
            $("div#api_status").removeClass('available');
        }
    });
});
