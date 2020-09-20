const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    controls: false,
    nav: true,
    navPosition: 'bottom',

});

document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
});
