/*  Home.js */

import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

const Review = () => {
  const [info, setInfo] = React.useState(['']);
  const url =
    'https://api-for-missions-and-railways.herokuapp.com/books?offset=10';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDg4MzkwNTIsImlhdCI6IjIwMjItMDMtMzFUMTg6NTA6NTIuMDQwNTc0MTgxWiIsInN1YiI6IjU0NTQ2NTU3MzU0IiwidXNlcl9pZCI6IjA0OGM4OTE4LTMyYTctNDg2NC1hYzc0LTc4Mjg4Y2Q5OTNjMyJ9.Wf8KoMB5IifPxO8_Nf8RLFA-m5y-ymA22Lc_vn3vRM0';

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        const result = res.data;
        setInfo(Object.keys(result));
      });
  }, []);
  const listInfo = info.map((i) => <div key={i}>{info[i]}</div>);

  return (
    <>
      <h1>レビュー一覧</h1>
      <div>
        新規登録は<Link to={`/signup/`}>こちら</Link>
      </div>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>書籍一覧{listInfo}</div>
    </>
  );
};

export default Review;
// 0: {id: 'e8745ced-3b38-4a58-b620-7b904c24abec', title: 'fadss', url: 'fadss', detail: 'fdas', review: 'fdas', …}
// 1: {id: '76603746-2c87-49b9-b7d6-177959ed6ff6', title: 'アオのハコ 1(ジャンプコミックス) ', url: 'https://www.amazon.co.jp/アオのハコ-1-ジャンプコミックス-三浦-糀/dp…タカナ&dchild=1&keywords=あおのはこ&qid=1633687602&sr=8-2', detail: 'バドミントン部に所属する猪股大喜は、女子バスケ部の先輩・鹿野千夏に恋をしていた──。自主練を真摯に取…れていたが、思いもよらぬ事実が発覚し…!? 道のりは遠く、想いは近く。青春ラブストーリー、はじまり', review: '今ジャンプの中ではかなり面白い作品だと思っています。\n読み切りから絵が綺麗で、爽やかな青春を描くのが…係が進んでいくのは青春漫画としては花丸だと思っています。\nこれからも期待して読ませていただきます。', …}
// 2: {id: '69eb977c-e033-4469-8663-9fd67ce4804a', title: 'string', url: 'string', detail: 'string', review: 'string', …}
// 3: {id: '5f115b32-e33c-4f87-af58-8aa63ceab768', title: 'string', url: 'string', detail: 'string', review: 'string', …}
// 4: {id: '7c66d616-716e-42e5-aade-b3e4e2c6ed90', title: 'test', url: 'test', detail: 'test', review: 'test', …}
// 5: {id: '5d00a2b2-6d1a-4b2b-a156-c1abfd2a2270', title: '33333', url: '3333333', detail: '333333333333', review: '333333', …}
// 6: {id: '4da524f1-d1e1-40f5-aa51-557efa10b1fa', title: 'qqqqqqqqqqq', url: 'qqqqqqqqqqq', detail: 'qqqqqqqqqqqqqqqq', review: 'qqqqqqqqqqqq', …}
// 7: {id: '7519fa65-1b80-4d3a-8601-73a6003b141a', title: 'qqqqqqqq', url: 'qqqqqq', detail: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', review: 'qqqqqqqqqqqqqqqqqqqq', …}
// 8: {id: 'a2910a9a-eab9-4c54-8fd7-12b2037f141a', title: '2222', url: '222222', detail: '2222222', review: '2222222222', …}
// 9: {id: 'hgoeidlogaMaVsL6k9Bdda', title: 'Kubernetes完全ガイド 第2版 impress top gearシリーズ ', url: 'https://www.amazon.co.jp/dp/B08FZX8PYW/ref=cm_sw_em_r_mt_dp_7NDC2QCY40JYYR6RE3KJ', detail: 'Kubernetes解説書の決定版がついに改訂！\n\n        Kubernetesはコンテナ化…加された機能や変更点にも言及し、最新のKubernetesを活用するための多くの知見を提供します。', review: 'めちゃくちゃわかりやすかった！', …}
