/*  Home.js */

import { Link } from 'react-router-dom';
import GetUserAPI from './GetUserAPI';
const Home = () => {
  return (
    <div className="bg-gray-800 container-none">
      <div className="flex flex-col ... ">
        <div className="text-right text-gray-50 ">
          <GetUserAPI />
        </div>

        <div className="h-screen flex flex-col items-center justify-center">
          <p className="text-6xl text-gray-50 mb-6 text-center	">ホーム</p>
          <button
            className="my-2 px-4 py-2 w-44
        border-2  rounded-md
        bg-gradient-to-b from-purple-600 to-purple-400
        hover:from-purple-500 hover:to-purple-300 
        text-white shadow-lg"
          >
            <Link to={`/signup/`}>新規登録はこちら</Link>
          </button>
          <button
            className="my-2 px-4 py-2 w-44
          border-2  rounded-md
          bg-gradient-to-b from-purple-600 to-purple-400
          hover:from-purple-500 hover:to-purple-300 
          text-white shadow-lg"
          >
            <Link to={`/login/`}>ログインはこちら</Link>
          </button>
          <button
            className="my-2 px-4 py-2 w-52
          border-2  rounded-md
          bg-gradient-to-b from-purple-600 to-purple-400
          hover:from-purple-500 hover:to-purple-300 
          text-white shadow-lg"
          >
            <Link to={`/review`}>レビュー一覧はこちら</Link>
          </button>
          <button
            className="my-2 px-4 py-2 w-52
          border-2  rounded-md
          bg-gradient-to-b from-purple-600 to-purple-400
          hover:from-purple-500 hover:to-purple-300 
          text-white shadow-lg"
          >
            <Link to={`/profile`}>プロフィールはこちら</Link>
          </button>
          <button
            className="my-2 px-4 py-2 w-52
          border-2  rounded-md
          bg-gradient-to-b from-purple-600 to-purple-400
          hover:from-purple-500 hover:to-purple-300 
          text-white shadow-lg"
          >
            <Link to={`/new`}>レビュー投稿はこちら</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
