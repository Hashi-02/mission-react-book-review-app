import axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const [review, setReview] = React.useState([]);
  const TOKEN = localStorage.getItem('token');
  const id = useParams();
  const url = 'https://api-for-missions-and-railways.herokuapp.com/books/';

  React.useEffect(() => {
    axios
      .get(url + id.id, {
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
        console.log(id);
        console.log(res.data);
      });
  }, [TOKEN, id]);

  return (
    <div>
      <p>id:{review.id}</p>
      <p>タイトル:{review.title}</p>
      <p>レビュー：{review.review}</p>
      <p>詳細：{review.detail}</p>
      <p>URL:{review.url}</p>
      <p>
        レビュワー:
        {review.reviewer}
      </p>
      <Link to={`/edit/${review.id}`}>編集する</Link>
    </div>
  );
};

export default Detail;
