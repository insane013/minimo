$(document).ready(function () {
  $("[data-interact='toggle-menu']").on('click', function (e) {
    e.preventDefault,
      $($(this).attr("data-href")).toggleClass("menu--mobile--visible")
    $(this).toggleClass("menu-btn--header--menu-open")
    $('body').toggleClass("menu-open")
  });

  $("[data-interact='close-menu']").on('click', function (e) {
    e.preventDefault,
      $($(this).attr("data-href")).removeClass("menu--mobile--visible")
    $("[data-interact='toggle-menu']").removeClass("menu-btn--header--menu-open")
    $('body').removeClass("menu-open")
  });
});
