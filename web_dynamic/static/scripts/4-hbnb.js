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
    $.ajax({
        type: "POST",
        url: "http://localhost:5001/api/v1/places_search/",
        data: "{}",
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
          for (const place of data) {
            $('section.places').append( 
                            `<article>
                                <div class="title_box">
                                  <h2>${place.name}</h2>
                                    <div class="price_by_night">$${place.price_by_night}</div>
                                </div>
                            <div class="information">
                            <div class="max_guest">${place.max_guest} Guests</div>
                                         <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                                       <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                                  </div>
                                <div class="description">${place.description}</div>
                           </article>`);
          }
        }
      });
      $("button").click(function (){ 
        $.ajax({
            type: "POST",
            url: "http://localhost:5001/api/v1/places_search/",
            data: JSON.stringify({ "amenities": Object.key(amenity_dic) }),
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
            for (const place of data) {
                $('section.places').append( 
                                `<article>
                                    <div class="title_box">
                                    <h2>${place.name}</h2>
                                        <div class="price_by_night">$${place.price_by_night}</div>
                                    </div>
                                <div class="information">
                                <div class="max_guest">${place.max_guest} Guests</div>
                                            <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                                        <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                                    </div>
                                    <div class="description">${place.description}</div>
                            </article>`);
            }
            }
        });
    });
});
