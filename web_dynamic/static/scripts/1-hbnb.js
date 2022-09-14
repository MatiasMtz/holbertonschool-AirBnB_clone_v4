$(document).ready(function(){
    let amenity_dic = {};
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            amenity_dic['amenity_id'] = $(this).attr('data_id'); 
        } else {
          console.log("Checkbox is not checked..");
        }});
});
