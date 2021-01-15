$(document).ready(function () {
  // sticky navigation menu

  let nav_offset_top = $(".headerarea").height() + 50;

  function navbarFixed() {
    if ($(".headerarea").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".headerarea .main-menu").addClass("navbar_fixed");
        } else {
          $(".headerarea .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});
