import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import styles from './LoginPage.module.css'
import logo from '../../assets/img/logo.png'

const LoginPage = () => {
  return (
    <div className={styles.form_signin}>
      <div>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Почта не указана'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Некорректная почта'
          } 
          if(!values.password) {
            errors.password = 'Пароль не указан'
          } 
          return errors;
      }
       }
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2))
           setSubmitting(false);
         }, 400)
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <img src={logo} alt="" className="form-control"/>
            <label htmlFor="floatingInput">Логин</label>
            <Field className="form-control" type="email" name="email" autoComplete="on"/>
            <ErrorMessage name="email" component="div" />
            <label htmlFor="floatingInput">Пароль</label>
            <Field className="form-control" type="password" name="password" autoComplete="on"/>
            <ErrorMessage name="password" component="div" />
            <button className="mt-2 w-100 btn btn-lg btn-primary" type="submit" disabled={isSubmitting}>
              Войти
            </button>
            <p>
              <a href="/registration" className="float-start">Регистрация</a>    
              <a href="/forgot_password" className="float-end">Забыли пароль?</a>
            </p>
         </Form>
       )}
     </Formik>
   </div>
    </div>
  );
}
export default LoginPage