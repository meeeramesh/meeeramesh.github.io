$(document).ready(function () {

  // Navbar scrolling animation
  $(".nav-link").on("click", function (event) {
    event.preventDefault();

    var target = $(this).data("target");
    var offset = $(target).offset().top;

    $("html, body").animate({ scrollTop: offset }, 800);
  });

  // Tab switching
  $(document).on('click', '.other-tab', function () {
    $('.curr-tab').addClass('other-tab').removeClass('curr-tab');
    $(this).addClass('curr-tab').removeClass('other-tab');
  });

  // Hide tab divider and show window
  $("#educ-tab").on('click', function () {
    $('#divider').addClass('hidden');
    $('.work-window').addClass('remove');
    $('.educ-window').removeClass('remove');
  });
  $("#work-tab").on('click', function () {
    $('#divider').removeClass('hidden');
    $('.educ-window').addClass('remove');
    $('.work-window').removeClass('remove');
  });

  // Extracurriculars Tab Switching
  $(document).on('click', '.ec-unclicked', function () {
    $('.ec-item').removeClass('.ec-clicked');
    $('.ec-item').addClass('.ec-unclicked');
    $(this).addClass('.ec-clicked');
  })


});

