jQuery(function ($) {
    var list_array = [];
    var elem;
    var num = 0;
    var id_elem = [];
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
        append_img();
    });


    function append_img() {
        $("#loadZone").html('');
        var m = 0;
        id_elem = [];
        for (var i = 0; i < list_array.length; i++) {
            if (list_array[i]['view'] === true) {
                ++m;
                $("#loadZone").append("<div id=" + i + "id" + " class=item></div>");
                if (m == 1) {
                }
                id_elem.push(i + 'id');
                $("#" + i + 'id')
                    .append("<img src=" + list_array[i]['url'] + " alt=" + list_array[i]['alt'] + " data-text='" + list_array[i]['text'] + "'>");
            }
        }
        slider();
    }

    function slider() {
        $("#loadText").html('');
        elem = $('#' + id_elem[num]);
        $('.active').removeClass('active');
        $(elem).addClass('active');
        ++num;

        if (num >= id_elem.length) {
            num = 0;
        }

        $("#loadText").append(elem.children().data('text'));
    }

    setInterval(slider, 1000);

});



