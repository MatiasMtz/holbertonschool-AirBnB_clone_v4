$( document ).ready(function(){
    let amenity_dic = {};
    $('input[type="checkbox"]').change(function() {
        if (this.checked === true) {
            amenity_dic[$(this).attr('data-id')] = $(this).attr('data-name');
            $('.amenities h4').text(amenity_dic[$(this).attr('data-id')].join(", "))
        } else {
            delete amenity_dic[$(this).attr('data-id')]
        }
    });
});
