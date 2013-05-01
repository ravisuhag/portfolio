$(function() {
    var boxheight = (parseInt($(window)
        .height())) - 61;
    $('.home_container')
        .css({
        'height': boxheight
    });
});
$(window)
    .resize(function() {
    var boxheight = (parseInt($(window)
        .height())) -61;
    $('.dis')
        .css({
        'height': boxheight
    });
});