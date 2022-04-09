import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const Delete = () => {
  const navigate = useNavigate();
  const id = useParams();
  const TOKEN = localStorage.getItem('token');
  const url1 = 'https://api-for-missions-and-railways.herokuapp.com/books/';
  const buttonDelete = () => {
    axios
      .delete(url1 + id.id, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate('/review');
      })
      .catch((res) => {
        console.log(res.data);
        console(id);
      });
  };

  return <button onClick={buttonDelete}>削除</button>;
};

export default Delete;
