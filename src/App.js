import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/signup/`} element={<Signup />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
