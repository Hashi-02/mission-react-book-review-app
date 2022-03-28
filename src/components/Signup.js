import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h1>新規登録ページ</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
      <div></div>
    </div>
  );
};

export default Signup;
