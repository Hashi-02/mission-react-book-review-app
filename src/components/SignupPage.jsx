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
    <div className="h-screen bg-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-6xl text-gray-50 mb-6 text-center">新規登録ページ</h1>
      <button className="text-gray-50">
        <Link to={`/login/`}>ログインはこちら</Link>
      </button>
      <Signup />
      <button className="text-gray-50">
        <Link to={`/home`}>ホームに戻る</Link>
      </button>
    </div>
  );
};

export default SignupPage;
