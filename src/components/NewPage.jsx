import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import New from './New';

const NewPage = () => {
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token');
  const url1 =
    'https://api-for-missions-and-railways.herokuapp.com/books?offset=10';

  React.useEffect(() => {
    axios
      .get(url1, {
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
      <h1>レビュー投稿ページ</h1>
      レビュー一覧は<Link to={`/review`}>こちら</Link>
      <New />
      <Link to={`/home`}>ホームに戻る</Link>
    </div>
  );
};

export default NewPage;
