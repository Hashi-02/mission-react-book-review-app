import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';

const New = () => {
  const navigate = useNavigate();
  const url = 'https://api-for-missions-and-railways.herokuapp.com/books';
  const [error, setError] = React.useState(null);
  const TOKEN = localStorage.getItem('token');
  const formik = useFormik({
    initialValues: {
      title: '',
      url: '',
      detail: '',
      review: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      url: Yup.string().required('Required'),
      detail: Yup.string().required('Required'),
      review: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      var article = JSON.stringify(values, null, 2);
      axios
        .post(url, article, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          navigate('/review');
        })
        .catch((error) => {
          setError(error);
        });
    },
  });

  return (
    <div>
      <div>{error && <p>{error.message}</p>}</div>

      <form class="w-full max-w-sm" onSubmit={formik.handleSubmit}>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              htmlFor="title"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              title
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              htmlFor="url"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              url
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              htmlFor="detail"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              detail
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
          </div>
        </div>

        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              htmlFor="review"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              review
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default New;
