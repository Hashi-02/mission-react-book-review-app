import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();
  const [review, setReview] = React.useState([]);
  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDkzMjAwMzgsImlhdCI6IjIwMjItMDQtMDZUMDg6Mjc6MTguMDIwOTQ5ODE3WiIsInN1YiI6IjU0NTQ2NTU3MzU0IiwidXNlcl9pZCI6IjgxODZmMzMwLTRlNDktNGRkMC1iMmZlLWNhNDZiMjkxOGVjNyJ9.oUqtEG3IFmPheXqS5JT3JbMncDildQqSnV57HkyHwNc';
  const url = 'https://api-for-missions-and-railways.herokuapp.com/books/';
  const id = '18c73646-be9c-4165-8b29-4608381c1aaf';

  React.useEffect(() => {
    axios
      .get(url + id, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        const result = res.data;
        setReview(result);
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, [TOKEN, navigate]);

  return (
    <div>
      <div>
        <Link to={`/edit`}>編集</Link>
      </div>

      <p>id:{review.id}</p>
      <p>タイトル:{review.title}</p>
      <p>レビュー：{review.review}</p>
      <p>詳細：{review.detail}</p>
      <p>URL:{review.url}</p>
      <p>
        レビュワー:
        {review.reviewer}
      </p>
    </div>
  );
};

export default Detail;
