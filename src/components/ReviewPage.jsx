import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import GetUserAPI from './GetUserAPI';
import Logout from './Logout';
import Review from './Review';

const ReviewPage = () => {
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
    <>
      <GetUserAPI />
      <Logout />
      <br />
      レビュー投稿は<Link to={`/new`}>こちら</Link>
      <br />
      プロフィールは<Link to={`/profile`}>こちら</Link>
      <br />
      <Link to={`/home`}>ホームに戻る</Link>
      <h1>レビュー一覧</h1>
      <Review />
    </>
  );
};

export default ReviewPage;
