$('[data-modal=consultation]').on('click', () => {
    $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', () => {
    $('.overlay, .modal').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', () => {
        $('#order .modal__descr').text(
            $('.catalog-item__subtitle').eq(i).text()
        );
        $('.overlay, #order').fadeIn('slow');
    });
});

