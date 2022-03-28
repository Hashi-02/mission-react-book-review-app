import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Signup = () => {
  const url = 'https://api-for-missions-and-railways.herokuapp.com/users';

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));

      Axios.post(url, {
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
      }).then((res) => {
        console.log(res.data);
      });
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
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
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
      <div></div>
    </div>
  );
};

export default Signup;
