import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import NotFound from './components/NotFound';
import ReviewPage from './components/ReviewPage';
import ProfilePage from './components/ProfilePage';
import NewPage from './components/NewPage';
import DetailPage from './components/DetailPage';
import EditPage from './components/EditPage';

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
        <Route path={`/edit/:id`} element={<EditPage />} />
        <Route path={`/detail/:id`} element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
