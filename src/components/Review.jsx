import axios from 'axios';
import React from 'react';

const Review = () => {
  const [info, setInfo] = React.useState([]);
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
      });
  }, [TOKEN]);
  // const listInfo = info.map((i) => <div key={i}>{info[i]}</div>);
  // {a:2}
  return (
    <>
      <div>
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
