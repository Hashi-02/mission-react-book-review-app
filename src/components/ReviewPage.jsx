import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import GetUserAPI from './GetUserAPI';
import Logout from './Logout';
import Review from './Review';

const ReviewPage = () => {
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
    <div className="h-screen container-none bg-gray-900 ">
      <div className="text-right">
        <GetUserAPI />
      </div>
      <div className="text-gray-50">
        <Logout />
        <br />
        レビュー投稿は<Link to={`/new`}>こちら</Link>
        <br />
        プロフィールは<Link to={`/profile`}>こちら</Link>
        <br />
        <Link to={`/home`}>ホームに戻る</Link>
      </div>
      <div className="flex flex-col text-center  items-center">
        <h1>レビュー一覧</h1>
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
};

export default ReviewPage;
