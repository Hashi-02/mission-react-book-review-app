import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';

const Profile = () => {
  const navigate = useNavigate();
  const [name, setUsername] = React.useState();
  const TOKEN = localStorage.getItem('token');
  const url = 'https://api-for-missions-and-railways.herokuapp.com/users';
  const url1 = 'https://api-for-missions-and-railways.herokuapp.com/users';
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data.name);
        // const result = JSON.stringify(res.data.name);
        const result = res.data.name;
        setUsername(result);
      })
      .catch((res) => {
        console.log(res.data);
        navigate('/login');
      });
  }, [TOKEN, navigate]);

  const formik = useFormik({
    initialValues: {
      name: name,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required('Required'),
      // email: Yup.string().email('Invalid email address').required('Required'),
      // password: Yup.string()
      //   .max(20, 'Must be 20 characters or less')
      //   .required('Required'),
    }),
    onSubmit: (values) => {
      var names = JSON.stringify(values.name, null, 2);
      var article = { name: names };
      axios
        .put(url1, article, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
  });

  return (
    <div>
      <h1>プロフィールページ</h1>
      <h1>username:{name}</h1>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
