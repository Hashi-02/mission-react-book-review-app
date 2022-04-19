import { useFormik } from 'formik';
import axios from 'axios';
import React from 'react';
import * as Yup from 'yup';

const Profile = () => {
  const [name, setUsername] = React.useState('');
  const TOKEN = localStorage.getItem('token');
  const url = 'https://api-for-missions-and-railways.herokuapp.com/users';
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        const result = res.data.name;
        setUsername(result);
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, [TOKEN]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      // ここの代入方法がわからない
      name: name,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(40).required('Required'),
    }),
    onSubmit: (values) => {
      console.log('aaa' + values.name);
      var names = values.name;
      var article = { name: names };
      axios
        .put(url, article, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .then((res) => {
          console.log('res');
          const result = res.data.name;
          setUsername(result);
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
              htmlFor="name"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              name
            </label>
          </div>
          <div class="md:w-2/3"></div>

          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3"></div>
            <label class="md:w-2/3 block text-gray-500 font-bold"></label>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3"></div>

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

export default Profile;
