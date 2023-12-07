$(document).ready(function () {
  $(".nav-link").on("click", function (event) {
    console.log("hey");
    event.preventDefault();

    var target = $(this).data("target");
    var offset = $(target).offset().top;

    $("html, body").animate({ scrollTop: offset }, 800);
  });
});