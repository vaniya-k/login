export const WHITESPACES_KEY_CODES = [
  32,
  160,
  5760,
  8192,
  8192,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288,
]

export const EMAIL = 'Email'
export const PASSWORD = 'Пароль'
export const SHOW_PASSWORD = 'Показать пароль'
export const LOG_IN = 'Войти'
export const CAPS_LOCK = 'Caps Lock'

export const RFC_5322_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const EMPTY_EMAIL = 'Email не может быть пустым'
export const INVALID_EMAIL = 'Некорректный email'

export const INVALID_PASSWORD_REGEXP = /^(.{0,7}|[^A-Z]*|[^a-z]*|[a-zA-Z]*)$/
export const NO_NUMBER_REGEXP = /^([^0-9]*)$/
export const NO_UPPERCASE_REGEXP = /^([^A-Z]*)$/
export const NO_LOWERCASE_REGEXP = /^([^a-z]*)$/

export const ALL_REQUIREMENTS = 'Пароль должен быть не короче 8 символов и содержать минимум одну цифру, одну заглавную и одну строчную букву латиницей'
export const EMPTY_PASSWORD = 'Пароль не может быть пустым'
export const NO_REQUIRED_SYMBOLS = 'Пароль должен содержать минимум одну цифру, одну заглавную и одну строчную букву латиницей'
export const NO_NUMBER_AND_UPPERCASE = 'Пароль должен содержать минимум одну цифру и одну заглавную букву латиницей'
export const NO_NUMBER_AND_LOWERCASE = 'Пароль должен содержать минимум одну цифру и одну строчную букву латиницей'
export const NO_UPPERCASE_AND_LOWERCASE = 'Пароль должен содержать минимум одну заглавную и одну строчную букву латиницей'
export const NO_NUMBER = 'Пароль должен содержать минимум одну цифру'
export const NO_UPPERCASE = 'Пароль должен содержать минимум одну заглавную букву латиницей'
export const NO_LOWERCASE = 'Пароль должен содержать минимум одну строчную букву латиницей'