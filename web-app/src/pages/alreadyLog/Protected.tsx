import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SIGN_IN_PATH } from '../paths';

type PropsType = {
  isLoggedIn: boolean;
  children: any;
  loading: boolean;
};
const Protected = (props: PropsType) => {
  const { isLoggedIn, children, loading } = props;
  if (loading) return <div>Loading...</div>;
  if (!isLoggedIn) {
    toast.error('You must sign in to access this page', {
      position: toast.POSITION.BOTTOM_RIGHT,
      toastId: 'notLoggedIn',
    });
    return <Navigate to={SIGN_IN_PATH} replace />;
  }
  return children;
};
export default Protected;
