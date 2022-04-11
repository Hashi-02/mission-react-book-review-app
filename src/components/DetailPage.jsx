import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Detail from './Detail';

const DetailPage = () => {
  const TOKEN = localStorage.getItem('token');
  const navigate = useNavigate();
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
      .then(() => {})
      .catch((res) => {
        console.log(res.data);
        navigate('/login');
      });
  }, [TOKEN, navigate]);

  return (
    <div>
      <Detail />
      レビュー一覧は<Link to={`/review`}>こちら</Link>
      <br />
      <Link to={`/home`}>ホームに戻る</Link>
    </div>
  );
};

export default DetailPage;
