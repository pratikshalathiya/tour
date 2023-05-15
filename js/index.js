$(document).ready(function(){
    
     $('#popular-destination').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:2000,
        //   slideTransition:linear,
          navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      })

      $('#review-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        // dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    })

    $('#about-us').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        // dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    })
});