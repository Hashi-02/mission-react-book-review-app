import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import GetUserAPI from './GetUserAPI';
import Profile from './Profile';

const ProfilePage = () => {
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token');
  const url = 'https://api-for-missions-and-railways.herokuapp.com/users';

  React.useEffect(() => {
    axios
      .get(url, {
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
      <h1>プロフィールページ</h1>
      <GetUserAPI />
      <Profile />
      レビュー一覧は<Link to={`/review`}>こちら</Link>
      <br />
      <Link to={`/home`}>ホームに戻る</Link>
    </div>
  );
};

export default ProfilePage;
