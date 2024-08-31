document.addEventListener("DOMContentLoaded", function () {
  var logosSlider = document.querySelector(".logos");

  if (logosSlider) {
    new Slick(logosSlider, {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }
});
