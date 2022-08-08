// NAVBAR


// OWL CAROUSEL

$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 1,
    nav: true,
    loop: true,
    animateIn: 'flipInY',
    animateOut: 'zoomOutDown',

    responsive: {
        0: {
            items: 1,
            dots: false
        },
        485: {
            items: 1,
            dots: false
        },
        728: {
            items: 2,
            dots: false
        },
        960: {
            items: 3,
            dots: false
        },
        1200: {
            items: 3,
            dots: true
        }

    }
});

// Property owlCarousel

/**
 * Property carousel
 */
new Swiper('.property-slider', {
    speed: 200,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        920: {
            slidesPerView: 3,
            spaceBetween: 20
        },




        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});



// BLOG owlCarousel

/**
 * News carousel
 */
new Swiper('.blog-slider', {
    speed: 200,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        920: {
            slidesPerView: 3,
            spaceBetween: 20
        },


        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

// Testimonial owlCarousel

/**
 * testimonial carousel
 */
new Swiper('.testimonial-slider ', {
    speed: 200,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },



        1200: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});


/**
   * Testimonial carousel
   */
new Swiper('#testimonial-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.testimonial-carousel-pagination',
        type: 'bullets',
        clickable: true
    }
});
