import {
  HOME_PATH,
  REGISTER_PATH,
  DASHBOARD_PATH,
  DONATION_PATH,
  SIGNIN_PATH,
} from '../pages/paths';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Donation from '../pages/Donation/Donation';
import Signin from '../pages/signin/signin';
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes>
        <Route path={HOME_PATH} element={<Home />} />
        <Route path={DASHBOARD_PATH} element={<Dashboard />} />
        <Route path={REGISTER_PATH} element={<Register />} />
        <Route path={DONATION_PATH} element={<Donation />} />
        <Route path={SIGNIN_PATH} element={<Signin />} />
      </Routes>
      {location.pathname !== REGISTER_PATH &&
        location.pathname !== SIGNIN_PATH && <Nav />}
    </>
  );
}

export default App;
