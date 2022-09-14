$( document ).ready(function(){
    let amenity_dic = {};
    $('input[type="checkbox"]').change(function() {
        if (this.checked === true) {
            amenity_dic[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenity_dic[$(this).attr('data-id')]
        }
        $('.amenities h4').text(Object.values(amenity_dic).join(", "))
    });
});
