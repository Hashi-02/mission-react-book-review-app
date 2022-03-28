import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <h1>新規登録ページ</h1>

      <div></div>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Signup;
