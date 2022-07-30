import React, { useState } from 'react'
import styles from './LoginPage.module.css'
import logo from '../../assets/img/logo.png'
import { connect } from 'redux'

const LoginPage = () => {

  const [state, setState] = useState({
    login: "",
    password: "",
    errors: {
      login: "",
      password: ""
    }
  });


  const validate = () => {
    const errors = {};
    if (!state.email) {
      errors.email = 'Почта не указана'
    }
      console.log(/!^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(state.login))
    if (/!^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(state.login)) {

      errors.login = 'Некорректная почта'
    }

    const beginWithoutDigit = /^\D.*$/
    const withoutSpecialChars = /^[^-() /]*$/
    const containsLetters = /^.*[a-zA-Z]+.*$/
    const minimum8Chars = /^.{8,}$/
    const withoutSpaces = /^[\S]$/
    if(!state.password) {
      errors.password = 'Пароль не указан'
    } else if(!beginWithoutDigit.test(errors.password)) {
      errors.password += ' | Пароль не имеет заглавных знаков'
    } else if(!withoutSpecialChars.test(errors.password)) {
      errors.password += ' | Пароль не имеет специальных символов @#$%ˆ&*()'
    } else if(!containsLetters.test(errors.password)) {
      errors.password += ' | '
    }
    setState({...state, errors})
  }


  return (
    <div className={styles.form_signin}>
      <div>
        <div>
          <img src={logo} alt="" className="form-control"/>
          <label htmlFor="floatingInput">Логин</label>
          <input
            className="form-control"
            type="email"
            name="email"
            autoComplete="on"
            value={state.login}
            onChange={e => setState({...state, login: e.target.value})}/>
          <label htmlFor="floatingInput">Пароль</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={state.password}
            onChange={e => setState({...state, password: e.target.value})}/>
            {  
              state.errors.login 
                ? <label htmlFor="floatingInput">{state.errors.login}</label>
                : <></> 
            }
          <button
            className="mt-2 w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={validate}>
            Войти
          </button>
          <p>
            <a href="/registration" className="float-start">Регистрация</a>
            <a href="/forgot_password" className="float-end">Забыли пароль?</a>
          </p>
        </div>

      </div>
    </div>
  );
}
export default LoginPage
