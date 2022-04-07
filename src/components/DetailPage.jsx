import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Detail from './Detail';

const DetailPage = () => {
  const navigate = useNavigate();
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
  }, [TOKEN, navigate]);

  return (
    <div>
      <div>
        <Link to={`/edit`}>編集する</Link>
      </div>
      <Detail />
      <div>
        レビュー一覧は<Link to={`/review`}>こちら</Link>
      </div>
    </div>
  );
};

export default DetailPage;
