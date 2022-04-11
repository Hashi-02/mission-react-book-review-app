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
