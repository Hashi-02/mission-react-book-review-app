import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import NotFound from './components/NotFound';
import ReviewPage from './components/ReviewPage';
import ProfilePage from './components/ProfilePage';
import NewPage from './components/NewPage';
import DetailPage from './components/DetailPage';
import Edit from './components/Edit';
import Detail from './components/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/review`} element={<ReviewPage />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/signup/`} element={<SignupPage />} />
        <Route path={`/login/`} element={<LoginPage />} />
        <Route path={`*`} element={<NotFound />} />
        <Route path={`/profile/`} element={<ProfilePage />} />
        <Route path={`/new`} element={<NewPage />} />
        <Route path={`/detail`} element={<DetailPage />} />
        <Route path={`/edit`} element={<Edit />} />
        {/* <Route path={`/detail/:id`} element={<DetailPage />} /> */}
        <Route path={`/details/:id`} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
