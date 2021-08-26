$(document).ready(function () {
    let fade = $("#fade");
    let element = $("#element");

    fade.click(function () {
        $(element).fadeOut(500);
    });
});