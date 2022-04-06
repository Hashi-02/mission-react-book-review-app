import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import GetUserAPI from './GetUserAPI';
import Logout from './Logout';

const Review = () => {
  const [info, setInfo] = React.useState([]);
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token');
  const url = 'https://api-for-missions-and-railways.herokuapp.com/books?';

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        const result = res.data;
        setInfo(result);
      })
      .catch((res) => {
        console.log(res.data);
        navigate('/login');
      });
  }, [TOKEN, navigate]);
  // const listInfo = info.map((i) => <div key={i}>{info[i]}</div>);
  // {a:2}

  return (
    <>
      <GetUserAPI />
      <Logout />
      <div>
        レビュー投稿は<Link to={`/new`}>こちら</Link>
      </div>
      <div>
        プロフィールは<Link to={`/profile`}>こちら</Link>
      </div>
      <h1>レビュー一覧</h1>
      <div>
        新規登録は<Link to={`/signup/`}>こちら</Link>
      </div>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        書籍一覧
        {info.map((d, index) => (
          <div key={index}>
            <p>タイトル「{d.title}」</p>
            <p>レビュー:{d.review}</p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Review;
