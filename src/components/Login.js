import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Axios from 'axios';
import React from 'react';
import * as Yup from 'yup';
const url = 'https://api-for-missions-and-railways.herokuapp.com/signin';

const Login = () => {
  const [error, setError] = React.useState(null);
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
      Axios.post(url, {
        email: formik.values.email,
        password: formik.values.password,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          setError(error);
        });
    },
  });

  // if (error)
  //   return (
  //     <div>
  //       {`Error: ${error.message}`}
  //       <div>
  //         <Link to={`/`}>ホームに戻る</Link>
  //       </div>
  //     </div>
  //   );

  return (
    <>
      <h1>ログインページ</h1>
      <div>
        新規登録は<Link to={`/signup/`}>こちら</Link>
      </div>
      <div>{error && <p>{error.message}</p>}</div>

      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
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
      </div>
    </>
  );
};

export default Login;
