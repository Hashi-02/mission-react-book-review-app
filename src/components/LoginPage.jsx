import { Link } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
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
      <h1>ログインページ</h1>
      <button>
        <Link to={`/signup/`}>新規登録はこちら</Link>
      </button>
      <Login />
      <button>
        <Link to={`/home`}>ホームに戻る</Link>
      </button>
    </div>
  );
};

export default LoginPage;
