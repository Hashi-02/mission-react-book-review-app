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
      {error && <p>{error.message}</p>}
      <form class="w-full max-w-sm" onSubmit={formik.handleSubmit}>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              htmlFor="email"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              htmlFor="password"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
          <label class="md:w-2/3 block text-gray-500 font-bold"></label>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
