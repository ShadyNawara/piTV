$(function () {
    FastClick.attach(document.body);
    setmenu();
    $(".playvideobtn").click(function () {
        $(".playvideobtn").css({background:'#0EBFE9',color:'#fff'});
        setTimeout("$('.playvideobtn').css({background:'#31A343',color:'#333'});", 200);
        if (isUrlValid($(".urltext").val())) {
            $('.videosent').slideDown();
            $.get("scripts/play.php?url=" + $(".urltext").val(), function (data) {
                    setTimeout("$('.urltext').val('');$('.videosent').slideUp();", 1200);
            });
        } else {
            $('.videoerror').slideDown();
            setTimeout("$('.urltext').val('');$('.videoerror').slideUp();", 1200);
        }
    });
    $(".mediaitem").click(function () {
        var btn = $(this).attr("title");
        $(this).css({background:'#0EBFE9',color:'#fff'});
        setTimeout("$('.mediaitem').css({background:'#fff',color:'#555'});", 200);
        $.get("scripts/mediactrl.php?action=" + btn, function (data) {

        });
    });
});
$(window).resize(function () {
    setmenu();
});

function setmenu() {
    var menheight = (($(window).height() - 120) / 6);
    $(".mediaitem").css({
        "padding-top": (menheight / 2),
        "padding-bottom": (menheight / 2),
        "margin-top": (menheight / 4),
        "margin-bottom": (menheight / 4),
        "font-size": ((menheight / 2)) + "px"
    })
    if (parseInt($(".mediaitem").css("fontSize")) < 12) {
        $(".mediaitem").css({ "font-size": "12px" });   
    }
}

function isUrlValid(url) {
    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
}
