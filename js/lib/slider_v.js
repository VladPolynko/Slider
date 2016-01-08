/**
 * Created by Vlad on 15.12.2015.
 */
jQuery(function ($) {
    var num_img=0; //step img
    var kol_img=0; //kolichestwo img
    var $hjg = $('#S-hide-img div');



    function kol_img_f (){
        $('#S-hide-img div').each(function() {
            ++kol_img;
        });
    }
    kol_img_f ();

    function Slider_append_img (){
        $('#S-loadZone').html('');
        num_img = num_img%kol_img;
        $('#S-loadZone').append($hjg[num_img]);
    }

    Slider_append_img ();

    $(document).on('click', '#next_img', function () {
        ++num_img;
        Slider_append_img ();
    });
    $(document).on('click', '#prev_img', function () {
        --num_img;
        if (num_img == -1) {
            num_img = kol_img-1;//array start 0
        }
        Slider_append_img ();
    });
});