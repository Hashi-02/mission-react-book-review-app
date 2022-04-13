/*  Home.js */

import { Link } from 'react-router-dom';
import GetUserAPI from './GetUserAPI';
const Home = () => {
  return (
    <div className="flex flex-col ... ">
      <div className="text-right">
        <GetUserAPI />
      </div>
      <div className="flex flex-col text-center  items-center">
        <p className="text-6xl">ホーム</p>
        <button
          className="my-2 px-4 py-2 w-44
        border-2  rounded-md
        bg-gradient-to-b from-blue-600 to-blue-400
        hover:from-blue-500 hover:to-blue-300 
        text-white shadow-lg"
        >
          <Link to={`/signup/`}>新規登録はこちら</Link>
        </button>
        <button
          className="my-2 px-4 py-2 w-44
          border-2  rounded-md
          bg-gradient-to-b from-blue-600 to-blue-400
          hover:from-blue-500 hover:to-blue-300 
          text-white shadow-lg"
        >
          <Link to={`/login/`}>ログインはこちら</Link>
        </button>
        <button
          className="my-2 px-4 py-2 w-52
          border-2  rounded-md
          bg-gradient-to-b from-blue-600 to-blue-400
          hover:from-blue-500 hover:to-blue-300 
          text-white shadow-lg"
        >
          <Link to={`/review`}>レビュー一覧はこちら</Link>
        </button>
        <button
          className="my-2 px-4 py-2 w-52
          border-2  rounded-md
          bg-gradient-to-b from-blue-600 to-blue-400
          hover:from-blue-500 hover:to-blue-300 
          text-white shadow-lg"
        >
          <Link to={`/profile`}>プロフィールはこちら</Link>
        </button>
        <button
          className="my-2 px-4 py-2 w-52
          border-2  rounded-md
          bg-gradient-to-b from-blue-600 to-blue-400
          hover:from-blue-500 hover:to-blue-300 
          text-white shadow-lg"
        >
          <Link to={`/new`}>レビュー投稿はこちら</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
