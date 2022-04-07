import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';

const Edit = () => {
  const navigate = useNavigate();
  const [name, setUsername] = React.useState();
  const TOKEN = localStorage.getItem('token');
  const url = 'https://api-for-missions-and-railways.herokuapp.com/users';
  const url1 = 'https://api-for-missions-and-railways.herokuapp.com/books/';
  const id = '18c73646-be9c-4165-8b29-4608381c1aaf';
  const error = React.useState(null);

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
      title: '',
      url: '',
      detail: '',
      review: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required('Required'),
      url: Yup.string().required('Required'),
      detail: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      review: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values, null, 2);
      var article = JSON.stringify(values, null, 2);
      axios
        .put(url1 + id, article, {
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
      <h1>編集ページ</h1>
      <h1>username:{name}</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>{error && <p>{error.message}</p>}</div>
      <div>
        <Link to={`/home`}>ホームに戻る</Link>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          id="title"
          name="title"
          type="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}

        <label htmlFor="url">url</label>
        <input
          id="url"
          name="url"
          type="url"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.url}
        />
        {formik.touched.url && formik.errors.url ? (
          <div>{formik.errors.url}</div>
        ) : null}

        <label htmlFor="detail">detail</label>
        <input
          id="detail"
          name="detail"
          type="detail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.detail}
        />
        {formik.touched.detail && formik.errors.detail ? (
          <div>{formik.errors.detail}</div>
        ) : null}

        <label htmlFor="review">review</label>
        <input
          id="review"
          name="review"
          type="review"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.review}
        />
        {formik.touched.review && formik.errors.review ? (
          <div>{formik.errors.review}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Edit;
