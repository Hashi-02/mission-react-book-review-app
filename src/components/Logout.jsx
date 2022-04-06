import React from 'react';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
  const navigate = useNavigate();
  const buttonLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return <button onClick={buttonLogout}>ログアウト</button>;
};

export default Logout;
