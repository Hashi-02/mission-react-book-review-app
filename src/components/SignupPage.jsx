import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Signup from './Signup';

const SignupPage = () => {
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token');
  //認証APIを使ってログインorNOT判別
  const LoginAuth =
    'https://api-for-missions-and-railways.herokuapp.com/books?offset=10';
  React.useEffect(() => {
    axios
      .get(LoginAuth, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(() => {
        navigate('/review');
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, [TOKEN, navigate]);

  return (
    <div>
      <h1>新規登録ページ</h1>
      ログインは<Link to={`/login/`}>こちら</Link>
      <Signup />
      <Link to={`/home`}>ホームに戻る</Link>
    </div>
  );
};

export default SignupPage;
