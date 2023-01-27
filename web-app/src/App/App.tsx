import {
  HOME_PATH,
  REGISTER_PATH,
  DASHBOARD_PATH,
  DONATION_PATH,
} from '../pages/paths';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Donation from '../pages/Donation/Donation';
import Nav from '../components/Nav/Nav';
function App() {
  return (
    <>
      <Routes>
        <Route path={HOME_PATH} element={<Home />} />
        <Route path={DASHBOARD_PATH} element={<Dashboard />} />
        <Route path={REGISTER_PATH} element={<Register />} />
        <Route path={DONATION_PATH} element={<Donation />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
