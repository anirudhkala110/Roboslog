$(document).ready(function () {
    var owl = $('.portfolio_section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3 // Adjust based on the min-width and available space
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.testimonials_section .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    })
})