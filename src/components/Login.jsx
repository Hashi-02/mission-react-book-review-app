import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  // ユーザーログインAPI
  const url = 'https://api-for-missions-and-railways.herokuapp.com/signin';
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      axios
        .post(url, {
          email: formik.values.email,
          password: formik.values.password,
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem('token', res.data.token);
          navigate('/review');
        })
        .catch((error) => {
          setError(error);
        });
    },
  });

  return (
    <>
      {/* APIを叩いた時に上手くいかなかったらそのエラーを表示する↓ */}
      <div>{error && <p>{error.message}</p>}</div>
      {/* ↓フォーム↓ */}
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <button type="submit">Submit</button>
        </form>
        {/* ↑フォーム↑ */}
      </div>
    </>
  );
};

export default Login;
