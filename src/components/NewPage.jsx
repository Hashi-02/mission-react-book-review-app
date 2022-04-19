import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import New from './New';

const NewPage = () => {
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
    <div className="h-screen bg-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-6xl text-gray-50 mb-6 text-center">
        レビュー投稿ページ
      </h1>
      <button className="text-gray-50">
        レビュー一覧は<Link to={`/review`}>こちら</Link>
      </button>

      <New />
      <button className="text-gray-50">
        <Link to={`/home`}>ホームに戻る</Link>
      </button>
    </div>
  );
};

export default NewPage;
