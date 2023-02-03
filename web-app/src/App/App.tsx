import React from "react";
import {
  HOME_PATH,
  REGISTER_PATH,
  DASHBOARD_PATH,
  DONATION_PATH,
  CARBON_SPENDING_PATH,
} from "../pages/paths";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Donation from "../pages/Donation/Donation";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import CarbonSpending from "../pages/carbon-spending/carbonSpending";
import Header from "../components/Header/Header";
import { ToastContainer } from "react-toastify";
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
        <Route path={CARBON_SPENDING_PATH} element={<CarbonSpending />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ marginBottom: "80px" }}
      />
      {location.pathname !== REGISTER_PATH && <Nav />}
    </>
  );
}

export default App;
