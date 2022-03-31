/*  Home.js */

import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

const Review = () => {
  const url =
    'https://api-for-missions-and-railways.herokuapp.com/books?offset=10';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDg4MzkwNTIsImlhdCI6IjIwMjItMDMtMzFUMTg6NTA6NTIuMDQwNTc0MTgxWiIsInN1YiI6IjU0NTQ2NTU3MzU0IiwidXNlcl9pZCI6IjA0OGM4OTE4LTMyYTctNDg2NC1hYzc0LTc4Mjg4Y2Q5OTNjMyJ9.Wf8KoMB5IifPxO8_Nf8RLFA-m5y-ymA22Lc_vn3vRM0';

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  });

  return (
    <>
      <h1>レビュー一覧</h1>
      <div>
        新規登録は<Link to={`/signup/`}>こちら</Link>
      </div>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
    </>
  );
};

export default Review;
