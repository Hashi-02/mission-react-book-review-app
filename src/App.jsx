import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Review from './components/Review';
import Profile from './components/Profile';
import New from './components/New';
import Detail from './components/Detail';
import Edit from './components/Edit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/review`} element={<Review />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/signup/`} element={<Signup />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`*`} element={<NotFound />} />
        <Route path={`/profile/`} element={<Profile />} />
        <Route path={`/new`} element={<New />} />
        <Route path={`/detail`} element={<Detail />} />
        <Route path={`/edit`} element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
