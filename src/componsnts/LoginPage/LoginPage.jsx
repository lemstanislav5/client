import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik"
import styles from './LoginPage.module.css'
import logo from '../../assets/img/logo.png'
import { connect } from 'redux'

const LoginPage = () => {

  const [state, setState] = useState({
    login: "", password: ""
  });


  // const validate = () => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = 'Почта не указана'
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = 'Некорректная почта'
  //   }
  //   if(!values.password) {
  //     errors.password = 'Пароль не указан'
  //   }
  //   return errors;
  // }


  return (
    <div className={styles.form_signin}>
      <div>
        <form>
          <img src={logo} alt="" className="form-control"/>
          <label htmlFor="floatingInput">Логин</label>
          <input
            className="form-control"
            type="email"
            name="email"
            autoComplete="on"
            value={state.login}
            onChange={e => setState({...state, login: e.target.value})}
          />
          <label htmlFor="floatingInput">Пароль</label>
          <input className="form-control" type="password" name="password" value={{...state, password: e.target.value}}/>
          <button className="mt-2 w-100 btn btn-lg btn-primary" type="submit" disabled={false}>
            Войти
          </button>
          <p>
            <a href="/registration" className="float-start">Регистрация</a>
            <a href="/forgot_password" className="float-end">Забыли пароль?</a>
          </p>
        </form>

      </div>
    </div>
  );
}
export default LoginPage
