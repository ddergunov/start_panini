//переключение классов по ссылке
function toggleSlide(itemClass) {
    $(itemClass).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('active');
            $('.catalog-item__list').eq(i).toggleClass('active');
        });
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');
