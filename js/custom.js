$(document).ready(function() {

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 80,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  var masonry = new Macy({
      container: '#macy-container',
      trueOrder: false,
      waitForImages: false,
      useOwnImageLoader: false,
      debug: true,
      mobileFirst: true,
      columns: 1,
      margin: {
          y: 16,
          x: '2%',
      },
      breakAt: {
          1200: 4,
          940: 3,
          520: 2,
          400: 2
      },
  });
  
});