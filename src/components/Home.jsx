/*  Home.js */

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        新規登録は<Link to={`/signup/`}>こちら</Link>
      </div>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        レビュー一覧は<Link to={`/review`}>こちら</Link>
      </div>
      <div>
        プロフィールは<Link to={`/profile`}>こちら</Link>
      </div>
      <div>
        レビュー投稿は<Link to={`/new`}>こちら</Link>
      </div>
      <div>
        レビュー詳細は<Link to={`/detail`}>こちら</Link>
      </div>
    </>
  );
};

export default Home;
