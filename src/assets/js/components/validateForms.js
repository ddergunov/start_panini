// валидация

function validateForms(form) {
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Укажите свое имя",
            phone: "Необходимо указать свой телефон",
            email: {
                required: "Нам нужен Ваш email для связи",
                email: "Укажите правильный email"
            }
        }
    });
    return false;
};

validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');
