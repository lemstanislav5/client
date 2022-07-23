import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import styles from './LoginPage.module.css'
import logo from '../../../assets/img/logo.png'

const LoginPage = () => {
  return (
    <div className={styles.form_signin}>
      <h1>Вход</h1>
      <div>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <img src={logo} />
            <label for="floatingInput">Логин</label>
            <Field className="form-control" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <label for="floatingInput">Пароль</label>
            <Field className="form-control" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={isSubmitting}>
              Войти
            </button>
         </Form>
       )}
     </Formik>
   </div>
    </div>
  );
}
export default LoginPage

