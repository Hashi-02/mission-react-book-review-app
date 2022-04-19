import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <>
      <div className=" h-screen grid grid-cols-4 gap-4">
        {info.map((d, index) => (
          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div key={index}>
              <Link to={`/detail/${d.id}?id=${d.id}`}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>{d.title}</p>
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <p>レビュー:{d.review}</p>
              </p>
              <Link to={`/detail/${d.id}?id=${d.id}`}>
                <button
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  詳しく
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Review;
