import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Axios from 'axios';
import React from 'react';
const url = 'https://api-for-missions-and-railways.herokuapp.com/signin';

const Login = () => {
  const [error, setError] = React.useState(null);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
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

  if (error)
    return (
      <div>
        {`Error: ${error.message}`}
        <div>
          <Link to={`/`}>ホームに戻る</Link>
        </div>
      </div>
    );

  return (
    <>
      <h1>ログインページ</h1>
      <div>
        新規登録は<Link to={`/signup/`}>こちら</Link>
      </div>
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
            value={formik.values.email}
          />
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
