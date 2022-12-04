import { useState } from 'react'

import {
  RFC_5322_EMAIL_REGEXP,
  EMPTY_EMAIL,
  INVALID_EMAIL,
} from './constants.js'

const getHintMessage = (value, isValid) => {
  if(isValid) return ''

  if (value.length === 0) return EMPTY_EMAIL

  return INVALID_EMAIL
}

export const useEmailValidation = () => {
  const [hint, setHint] = useState('')

  const checkValue = (value) => {
    return RFC_5322_EMAIL_REGEXP.test(value)
  }

  const updateHint = (value, isValid) => {
    setHint(getHintMessage(value, isValid))
  }

  return [checkValue, updateHint, hint]
}