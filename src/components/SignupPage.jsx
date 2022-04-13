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
    <div className="flex flex-col text-center  items-center">
      <h1>新規登録ページ</h1>
      <button>
        <Link to={`/login/`}>ログインはこちら</Link>
      </button>
      <Signup />
      <button>
        <Link to={`/home`}>ホームに戻る</Link>
      </button>
    </div>
  );
};

export default SignupPage;
