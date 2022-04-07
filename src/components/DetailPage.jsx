import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Detail from './Detail';

const DetailPage = () => {
  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk0MzAzOTYsImlhdCI6IjIwMjItMDQtMDdUMTU6MDY6MzYuMDUyMDk3Mzk2WiIsInN1YiI6IjU0NTQ2NTU3MzU0IiwidXNlcl9pZCI6IjdiOTY1NTdkLTQ2MDEtNGVkOS04NzdhLTk2ODY4ZDM1YTA0NCJ9.OBJMx4UAhjb36Losq92yt5KQQqZsi-gNYGGgstCuqY8';
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
      <Link to={`/edit`}>編集する</Link>
      <Detail />
      レビュー一覧は<Link to={`/review`}>こちら</Link>
      <br />
      <Link to={`/home`}>ホームに戻る</Link>
    </div>
  );
};

export default DetailPage;
