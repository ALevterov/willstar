$(document).ready(function () {
  const casesCarousel = $('.cases-carousel')
  casesCarousel.owlCarousel({
    loop: true,
    nav: true,
    items: 1,
  })
  casesCarousel.on('changed.owl.carousel', function (event) {
    console.log(event)
  })
})
