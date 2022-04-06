import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';

const Signup = () => {
  const navigate = useNavigate();
  const url = 'https://api-for-missions-and-railways.herokuapp.com/users';
  const [error, setError] = React.useState(null);

  const TOKEN = localStorage.getItem('token');
  const url1 =
    'https://api-for-missions-and-railways.herokuapp.com/books?offset=10';

  React.useEffect(() => {
    axios
      .get(url1, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        navigate('/review');
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, [TOKEN, navigate]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));

      axios
        .post(url, {
          name: formik.values.name,
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
    <div>
      <h1>新規登録ページ</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>{error && <p>{error.message}</p>}</div>
      <div>
        <Link to={`/home`}>ホームに戻る</Link>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

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
    </div>
  );
};

export default Signup;
