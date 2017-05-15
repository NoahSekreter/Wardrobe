$(document).mousemove(function (e) {
    var $width = ($(document).width()) / 255;
    var $height = ($(document).height()) / 255;
    var $pageX = parseInt(e.pageX / $width, 10);
    var $pageY = parseInt(e.pageY / $height, 10);

    $("hr").css("border-top", "2px solid rgb(" + 200 + "," + $pageX + "," + $pageY + ")");
    $(".thumbnail").css("border", "3px solid rgb(" + $pageX + "," + 200 + "," + $pageY + ")");
    $(".btn").css("border", "3px solid rgb(" + 200 + "," + $pageX + "," + $pageY + ")");
});