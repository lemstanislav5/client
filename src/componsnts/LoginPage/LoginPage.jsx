import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import logo from '../../assets/img/logo.png';
import { connect } from 'react-redux';
import { authThunkCreator } from '../../redux/authReducer'

const LoginPage = (props) => {
  const { authFn } = props;

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
    if (!state.email) errors.email = 'Почта не указана';
    const validEmail = /^([A-Za-z0-9])+@([A-Za-z0-9])+.([A-Za-z]{2,4})$/;
    if (!validEmail.test(state.login)) errors.login = 'Некорректная почта';
    if(!state.password) {
      errors.password = 'Пароль не указан'
    } else {
      const err = [];
      if(!/^[a-zA-Z0-9]+$/.test(state.password)) err.push(' Допустимы символы A-z и 0-9.')
      if(!/^.{8,}$/.test(state.password)) err.push('  Минимальная длина 8 символов.');
      errors.password = err.join(' ');
    }
    setState({...state, errors});
    if (!errors.password && !errors.login) authFn(state.login, state.password);
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
            { state.errors.login ? <label className="text-danger inline-block w-100" htmlFor="floatingInput">{state.errors.login}</label> : <></> }
          <label htmlFor="floatingInput">Пароль (8: A-z, 0-9)</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={state.password}
            onChange={e => setState({...state, password: e.target.value})}/>
            { state.errors.password ? <label className="text-danger inline-block w-100" htmlFor="floatingInput">{state.errors.password}</label> : <></> }
          <button
            className="mt-2 w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={validate}>
            Войти
          </button>
          <p>
            <a href="/registration" className="float-start">Регистрация</a>
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
