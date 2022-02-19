export const FORM_LABELS = {
  name: 'Логин',
  email: 'Email',
  mobile: 'Телефон',
  location: 'Город'
}

export const FORM_PLACEHOLDERS = {
  name: 'Введите имя и фамилию...',
  email: 'Укажите Email...',
  mobile: 'Введите номер телефона',
  location: 'Введите город'
}

export const FORM_SUCCESS = {
  name: 'Принято!',
  email: 'Принято!',
  mobile: 'Принято!',
  location: 'Принято!'
}

export const FORM_ERRORS: any = {
  name: '',
  email: '',
  mobile: '',
  location: ''
}

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Имя обязательно',
    minlength: 'Имя должно содержать не менее 4 символа.',
    maxlength: 'Имя должно содержать не более 23 символа.'
  },
  email: {
    required: 'Email обязательно',
    emailValidator: 'Неправильный формат email адреса.',
  },
  mobile: {
    required: 'Телефон обязательно',
    // mobileValidator: 'Значения должно быть целым числом в диапазоне 9..13 цифр.',
    minlength: 'Телефон должен содержать не менее 9 цифр.',
    maxlength: 'Телефон должен содержать не более 13 символа.',
  },
  location: {
    required: 'Обязательное поле',
  },
}
