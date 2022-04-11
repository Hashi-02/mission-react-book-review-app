import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';
const Edit = () => {
  const [title, setTitle] = React.useState();
  const [url, setUrl] = React.useState();
  const [detail, setDetail] = React.useState();
  const [review, setReview] = React.useState();

  const navigate = useNavigate();
  const id = useParams();
  const TOKEN = localStorage.getItem('token');
  const API = 'https://api-for-missions-and-railways.herokuapp.com/books/';
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(API + id.id, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data.title);
        setTitle(res.data.title);
        setUrl(res.data.url);
        setDetail(res.data.detail);
        setReview(res.data.review);
      })
      .catch((res) => {
        console.log(id);
        console.log(res.data);
      });
  }, [TOKEN, id]);

  const formik = useFormik(
    {
      enableReinitialize: true,
      initialValues: {
        title: title,
        url: url,
        detail: detail,
        review: review,
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
        console.log(TOKEN);
        var article = JSON.stringify(values, null, 2);
        axios
          .put(url + id.id, article, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          })
          .then((res) => {
            setTitle(res.data.title);
            setUrl(res.data.url);
            setDetail(res.data.detail);
            setReview(res.data.review);
            console.log(res.data);
            navigate('/review');
          })
          .catch((error) => {
            setError(error);
          });
      },
    },
    [TOKEN, navigate]
  );

  return (
    <div>
      <div>{error && <p>{error.message}</p>}</div>

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
