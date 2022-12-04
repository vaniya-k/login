import React, { useState, useRef } from 'react'

import { useEmailValidation } from './useEmailValidation.js'
import { usePasswordValidation } from './usePasswordValidation.js'
import { useCapsLock } from './useCapsLock.js'

import {
  WHITESPACES_KEY_CODES,
  EMAIL,
  PASSWORD,
  LOG_IN,
  SHOW_PASSWORD,
  CAPS_LOCK,
} from './constants.js'

import styles from './Login.css'

export const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [hasEmailErrorHighlight, setHasEmailErrorHighlight] = useState(false)
  const [hasPasswordErrorHighlight, setHasPasswordErrorHighlight] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const togglePasswordVisibility = () => setIsPasswordShown((value) => !value)

  const isCapsLockOn = useCapsLock();

  const [checkEmail, updateEmailHint, emailHint] = useEmailValidation();
  const [checkPassword, updatePasswordHint, passwordHint] = usePasswordValidation();

  const validateEmail = () => {
    const isEmailValid = checkEmail(emailRef.current.value)
    updateEmailHint(emailRef.current.value, isEmailValid)
    setHasEmailErrorHighlight(!isEmailValid)
  }

  const validatePassword = () => {
    const isPasswordValid = checkPassword(passwordRef.current.value)
    updatePasswordHint(passwordRef.current.value, isPasswordValid)
    setHasPasswordErrorHighlight(!isPasswordValid)
  }

  const handleBlurEmail = validateEmail

  /* we want to check email validity on each symbol only if it's correction,
  to get rid of the error highlight, otherwise we bother the user with the premature highlight */
  const handleChangeEmail = () => {
    if(hasEmailErrorHighlight) {
      validateEmail()
    }
  }

  const handleBlurPassword = validatePassword

  /* we want to update the hint on each symbol of the password if needed,
  but we update the error highlight's state only if it's correction,
  otherwise we might bother the user with the premature highlight */
  const handleChangePassword = () => {
    const isPasswordValid = checkPassword(passwordRef.current.value)
    updatePasswordHint(passwordRef.current.value, isPasswordValid)

    if(hasPasswordErrorHighlight) {
      setHasPasswordErrorHighlight(!isPasswordValid)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const isPasswordValid = checkPassword(passwordRef.current.value)
    const isEmailValid = checkEmail(emailRef.current.value)

    if(isPasswordValid && isEmailValid) {
      setIsLoggedIn(true)
    } else {
      updateEmailHint(emailRef.current.value, isEmailValid)
      updatePasswordHint(passwordRef.current.value, isPasswordValid)
      setHasPasswordErrorHighlight(!isPasswordValid)
      setHasEmailErrorHighlight(!isEmailValid)
    }
  }

  const handleKeyDownEmail = (event) => {
    if (WHITESPACES_KEY_CODES.includes(event.keyCode)) {
      event.preventDefault();
    }
  }

  const handlePasteEmail = (event) => {
    event.preventDefault()

    emailRef.current.value = 
      emailRef.current.value + event.clipboardData.getData('Text').replace(/\s/g,'')

    validateEmail()
  }

  const formClassNames = 
    `${styles.form} ${isLoggedIn ? styles['hidden'] : ''}`

  const emailInputClassNames =
    `${styles.input} ${hasEmailErrorHighlight ? styles['error-input'] : ''}`

  const passwordInputClassNames =
    `${styles.input} ${hasPasswordErrorHighlight ? styles['error-input'] : ''}`

  return (
    <div className={styles.wrapper}>
      <form className={formClassNames} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email" className={styles.label}>
            {EMAIL}
          </label>

          <input
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            className={emailInputClassNames}
            autoComplete="username"
            autoFocus
            onKeyDown={handleKeyDownEmail}
            onPasteCapture={handlePasteEmail}
            onBlur={handleBlurEmail}
            onChange={handleChangeEmail}
          />

          {emailHint && <p className={styles.hint}>{emailHint}</p>}
        </div>

        <div className={styles.row}>
          <label htmlFor="current-password" className={styles.label}>
            {PASSWORD}
          </label>

          <input
            ref={passwordRef}
            id="current-password"
            name="current-password"
            type={isPasswordShown ? "text" : "password"}
            className={passwordInputClassNames}
            autoComplete="current-password"
            onBlur={handleBlurPassword}
            onChange={handleChangePassword}
          />

          <div className={styles['password-helpers-wrapper']}>
            <div>
              <input
                type="checkbox"
                id="password-visibility-checkbox"
                className={styles['password-visibility-checkbox']}
                checked={isPasswordShown}
                onChange={togglePasswordVisibility}
              />
              <label htmlFor="password-visibility-checkbox">
                {SHOW_PASSWORD}
              </label>
            </div>

            {isCapsLockOn && <span>{CAPS_LOCK}</span>}
          </div>

          {passwordHint && <p className={styles.hint}>{passwordHint}</p>}
        </div>

        <button type="submit" className={styles.submit}>
          {LOG_IN}
        </button>
      </form>

      {isLoggedIn && (
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={styles.success}>
          <path d="
            M128,24A104,104,0,1,0,232,128,104.12041,104.12041,
            0,0,0,128,24Zm49.53125,85.78906-58.67187,56a8.02441,
            8.02441,0,0,1-11.0625,0l-29.32813-28a8.00675,8.00675,
            0,0,1,11.0625-11.57812l23.79687,22.72656,53.14063-50.72656a8.00675,
            8.00675,0,0,1,11.0625,11.57812Z
          "/>
        </svg>
      )}
    </div>    
  )
}