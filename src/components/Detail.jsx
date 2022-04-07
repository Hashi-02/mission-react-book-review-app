import axios from 'axios';
import React from 'react';

const Detail = () => {
  const [review, setReview] = React.useState([]);
  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDk0MzAzOTYsImlhdCI6IjIwMjItMDQtMDdUMTU6MDY6MzYuMDUyMDk3Mzk2WiIsInN1YiI6IjU0NTQ2NTU3MzU0IiwidXNlcl9pZCI6IjdiOTY1NTdkLTQ2MDEtNGVkOS04NzdhLTk2ODY4ZDM1YTA0NCJ9.OBJMx4UAhjb36Losq92yt5KQQqZsi-gNYGGgstCuqY8';
  const url = 'https://api-for-missions-and-railways.herokuapp.com/books/';
  const id = 'fb29f8f7-a46f-420b-b677-f7c0b721e79c';

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
  }, [TOKEN]);

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
    </div>
  );
};

export default Detail;
