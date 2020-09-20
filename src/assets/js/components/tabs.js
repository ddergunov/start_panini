$('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.container').find('div.catalog__content').removeClass('active').eq($(this).index()).addClass('active');
  });
