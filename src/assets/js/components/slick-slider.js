$('.carousel__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 600,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="assets/img/icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="assets/img/icons/right.svg"></button>',
    responsive: [{
        breakpoint: 801,
        settings: {
            arrows: false,
        }
    }]
});
