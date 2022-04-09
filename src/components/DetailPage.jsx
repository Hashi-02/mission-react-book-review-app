import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Detail from './Detail';

const DetailPage = () => {
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
      .then(() => {})
      .catch((res) => {
        console.log(res.data);
      });
  }, [TOKEN]);

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
