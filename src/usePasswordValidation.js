import { useState } from 'react'

import {
  INVALID_PASSWORD_REGEXP,
  NO_REQUIRED_SYMBOLS,
  NO_NUMBER_REGEXP,
  NO_UPPERCASE_REGEXP,
  NO_LOWERCASE_REGEXP,
  ALL_REQUIREMENTS,
  EMPTY_PASSWORD,
  NO_NUMBER_AND_UPPERCASE,
  NO_NUMBER_AND_LOWERCASE,
  NO_UPPERCASE_AND_LOWERCASE,
  NO_NUMBER,
  NO_UPPERCASE,
  NO_LOWERCASE,
} from './constants.js'

const getHintMessage = (value, isValid) => {
  if(isValid) return ''

  if (value.length === 0)  return EMPTY_PASSWORD

  if (value.length < 8) return ALL_REQUIREMENTS

  const hasNoNumber = NO_NUMBER_REGEXP.test(value)
  const hasNoUppercase = NO_UPPERCASE_REGEXP.test(value)
  const hasNoLowercase = NO_LOWERCASE_REGEXP.test(value)

  if (hasNoNumber && hasNoUppercase && hasNoLowercase) return NO_REQUIRED_SYMBOLS

  if (hasNoNumber && hasNoUppercase) return NO_NUMBER_AND_UPPERCASE

  if (hasNoNumber && hasNoLowercase) return NO_NUMBER_AND_LOWERCASE

  if (hasNoUppercase && hasNoLowercase) return NO_UPPERCASE_AND_LOWERCASE
  
  if (hasNoNumber) return NO_NUMBER

  if (hasNoUppercase) return NO_UPPERCASE

  return NO_LOWERCASE
}

export const usePasswordValidation = () => {
  const [hint, setHint] = useState(ALL_REQUIREMENTS)
  
  const checkValue = (value) => {
    return !INVALID_PASSWORD_REGEXP.test(value)
  }

  const updateHint = (value, isValid) => {
    setHint(getHintMessage(value, isValid))
  }

  return [checkValue, updateHint, hint]
}