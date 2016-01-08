jQuery(function ($) {
    var list_array = [];

    $(document).ready(function () {
        $.getJSON('include/base.json', function (data) {
            list_array = data;
            include();
        });
    });

    function include() {
        $("#load_list").html('');
        for (var i = 0; i < list_array.length; i++) {
            $("#load_list")
                .append("<li><input id='" + list_array[i]['title'] + "' type='checkbox' data-index='" + list_array[i]['index'] + "'> " + list_array[i]['text'] + "</li>");
            if (list_array[i]['view'] === true) {
                $("#" + list_array[i]['title']).attr('checked', 'checked');
            }
        }
        append_img();
    }

    $(document).on('click', '#load_list li input', function () {
        var index = $(this).attr('data-index');
        if (list_array[index]['view'] === true) {
            list_array[index]['view'] = false;
        } else {
            list_array[index]['view'] = true;
        }
    });

    function append_img() {
        $("#loadZone").html('');
        var m = 0;                                                         //crutch
        for (var i = 0; i < list_array.length; i++) {
            if (list_array[i]['view'] === true) {
                ++m;                                                        //crutch
                $("#loadZone").append("<div id=" + i + " class=item></div>");
                if (m == 1) {
                    $("#" + i).addClass('active');                          //crutch
                }
                $("#" + i)
                    .append("<img src=" + list_array[i]['url'] + " alt=" + list_array[i]['alt'] + ">");
            }
        }
    }

    $(document).on('click', '#refresh', function () {
        append_img();
    });

});



