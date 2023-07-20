import {
  HOME_PATH,
  REGISTER_PATH,
  DASHBOARD_PATH,
  DONATION_PATH,
  SIGN_IN_PATH,
  CARBON_SPENDING_PATH,
  FRIENDSHIP_PATH,
} from '../pages/paths';
import { Routes, Route } from 'react-router-dom';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Donation from '../pages/Donation/Donation';
import SignIn from '../pages/signin/SignIn';
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { MyProfileQuery } from '../gql/graphql';
import CarbonSpending from '../components/carbon-spending/CarbonSpending';
import { useState } from 'react';
import Protected from '../pages/alreadyLog/Protected';
import LogOutButton from '../components/logOutButton/LogOutButton';
import Friendhsip from '../pages/friendship/Friendship';

function App() {
  const MY_PROFILE = gql`
    query MyProfile {
      myProfile {
        email
        id
      }
    }
  `;

  const [isLogged, setIsLogged] = useState(false);

  const { loading, refetch, data } = useQuery<MyProfileQuery>(MY_PROFILE, {
    onCompleted: (data) => {
      if (data.myProfile) {
        setIsLogged(true);
      }
    },
    onError: () => {
      setIsLogged(false);
    },
  });

  const location = useLocation();
  return (
    <>
      <Header />
      <div className="flex justify-end text-[#fff] mt-[10px] text-sm ">
        {data?.myProfile ? (
          <i>{data?.myProfile.email}</i>
        ) : (
          <nav>
            <Link to={REGISTER_PATH} className="bg-[#484B8A]  rounded p-[3px]">
              Inscription
            </Link>
            {' | '}
            <Link
              to={SIGN_IN_PATH}
              className="bg-[#484B8A]  rounded p-[3px] mr-5"
            >
              Connexion
            </Link>
          </nav>
        )}
      </div>
      <Protected isLoggedIn={isLogged} loading={loading}>
        <LogOutButton userData={data} />
      </Protected>
      <main>
        <Routes>
          <Route
            path={HOME_PATH}
            element={
              <Protected isLoggedIn={isLogged} loading={loading}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path={DASHBOARD_PATH}
            element={
              <Protected isLoggedIn={isLogged} loading={loading}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path={DONATION_PATH}
            element={
              <Protected isLoggedIn={isLogged} loading={loading}>
                <Donation />
              </Protected>
            }
          />
          <Route
            path={CARBON_SPENDING_PATH}
            element={
              <Protected isLoggedIn={isLogged} loading={loading}>
                <CarbonSpending />
              </Protected>
            }
          />
          <Route
            path={FRIENDSHIP_PATH}
            element={
              <Protected isLoggedIn={isLogged} loading={loading}>
                <Friendhsip />
              </Protected>
            }
          />

          <Route
            path={REGISTER_PATH}
            element={<Register onSuccess={refetch} />}
          />
          <Route
            path={FRIENDSHIP_PATH}
            element={
              <Protected isLoggedIn={isLogged} loading={loading}>
                <Friendhsip />
              </Protected>
            }
          />
          <Route path={SIGN_IN_PATH} element={<SignIn onSuccess={refetch} />} />
        </Routes>
      </main>
      {location.pathname !== REGISTER_PATH &&
        location.pathname !== SIGN_IN_PATH && <Nav />}
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
        style={{ marginBottom: '80px' }}
      />
    </>
  );
}

export default App;
