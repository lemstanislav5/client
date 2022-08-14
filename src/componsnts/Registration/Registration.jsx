import React, { useState, useEffect } from 'react';
import styles from './Registration.module.css';
import logo from '../../assets/img/logo.png';
import { connect } from 'react-redux';
import { authThunkCreator } from '../../redux/authReducer'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { api } from '../../api/api'

const LoginPage = () => {
  useEffect(() => {
      loadCaptchaEnginge(6);
  },[]);
  const [state, setState] = useState({
    login: "",
    password: "",
    password_confirm: "",
    errors: {
      login: "",
      password: "",
      password_confirm: "",
      captcha: ""
    }
  });

  const validate = async () => {
    const errors = {};
    if (!state.email) errors.email = 'Почта не указана';
    const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!validEmail.test(state.login)) errors.login = 'Некорректная почта';
    if(!state.password) {
      errors.password = 'Пароль не указан'
    } else {
      const err = [];
      if(!/^[a-zA-Z0-9]+$/.test(state.password)) err.push(' Допустимы символы A-z и 0-9.')
      if(!/^.{8,}$/.test(state.password)) err.push('  Минимальная длина 8 символов.');
      errors.password = err.join(' ');
    }
    let user_captcha = document.getElementById('user_captcha_input').value;
    if (!validateCaptcha(user_captcha)) errors.captcha = "Ответ не верный!";
    setState({...state, errors});
    if (!errors.password && !errors.login) await api.registration(state.login, state.password);
  }
  const passwordConfirm = (e) => {
    if(state.password.indexOf(e) !== -1)
      setState({...state, password_confirm: e, errors: {...state.errors, password_confirm: ""}});
    else
      setState({...state, password_confirm: e, errors: {...state.errors, password_confirm: "Пароли не совпадают!"}});
  }

  return (
    <div className={styles.form_signin}>
      <div>
        <div>
          <img src={logo} alt="" className="form-control"/>
          <label htmlFor="floatingInput">Логин  (email)</label>
          <input
            className="form-control"
            type="email"
            name="email"
            autoComplete="on"
            value={state.login}
            onChange={e => setState({...state, login: e.target.value})}/>
            {state.errors.login ? <label className="text-danger inline-block w-100" htmlFor="floatingInput">{state.errors.login}</label> : <></> }
          <label htmlFor="floatingInput">Пароль (8: A-z, 0-9)</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={state.password}
            onChange={e => setState({...state, password: e.target.value})}/>
            {state.errors.password ? <label className="text-danger inline-block w-100" htmlFor="floatingInput">{state.errors.password}</label> : <></> }
          <label htmlFor="floatingInput">Повторите пароль</label>
          <input
            className="form-control mt-1 mb-2"
            type="password"
            name="password_confirm"
            value={state.password_confirm}
            onChange={e => passwordConfirm(e.target.value)}/>
            {state.errors.password_confirm ? <label className="text-danger inline-block w-100" htmlFor="floatingInput">{state.errors.password_confirm}</label> : <></> }

            <LoadCanvasTemplate/>
            <input className="form-control mt-1" placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input>
            {state.errors.captcha ? <label className="text-danger inline-block w-100" htmlFor="floatingInput">{state.errors.captcha}</label> : <></> }
            <button className="mt-2 w-100 btn btn-lg btn-primary" onClick={() => validate()}>Зарегистрироваться</button>

          <p>
            <a href="/login" className="float-start">Войти</a>
            <a href="/recovery" className="float-end">Забыли пароль?</a>
          </p>
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};


const mapDispatchToProps = dispatch => {
  return {
    authFn: (login, password) => {
      dispatch(authThunkCreator(login, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
