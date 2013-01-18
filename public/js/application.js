$(function() {
    var boxheight = (parseInt($(window)
        .height())) - 61;
alert(boxheight);
    $('.dis')
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