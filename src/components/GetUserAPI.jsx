import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Login from './Login';

const GetUserAPI = () => {
  const navigate = useNavigate();
  const [name, setUsername] = React.useState([]);
  const TOKEN = localStorage.getItem('token');
  const url = 'https://api-for-missions-and-railways.herokuapp.com/users';

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        const result = res.data;
        setUsername(result);
      })
      .catch((res) => {
        console.log(res.data);
        navigate('/login');
      });
  }, []);

  if (TOKEN) {
    return <h1>username:{name.name}</h1>;
  }
  return <Login />;
};

export default GetUserAPI;
