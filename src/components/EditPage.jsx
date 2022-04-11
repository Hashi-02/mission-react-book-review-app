import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Delete from './DeleteButton';
import Edit from './Edit';
import GetUserAPI from './GetUserAPI';
const EditPage = () => {
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token');
  const LoginAuth =
    'https://api-for-missions-and-railways.herokuapp.com/books?offset=10';
  React.useEffect(() => {
    axios
      .get(LoginAuth, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(() => {})
      .catch((res) => {
        console.log(res.data);
        navigate('/login');
      });
  }, [TOKEN, navigate]);
  return (
    <div>
      <h1>編集ページ</h1>
      <GetUserAPI />
      <Edit />
      <Delete />
      <div>
        <Link to={`/home`}>ホームに戻る</Link>
      </div>
    </div>
  );
};

export default EditPage;
