import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HOME_PATH } from '../paths';

type PropsType = {
  isLoggedIn: boolean;
  children: any;
};
const AlreadyLoggedIn = (props: PropsType) => {
  const { isLoggedIn, children } = props;
  if (isLoggedIn) {
    toast.error('You must logout to access this page', {
      position: toast.POSITION.BOTTOM_RIGHT,
      toastId: 'alreadyLoggedIn',
    });
    return <Navigate to={HOME_PATH} replace />;
  }
  return children;
};
export default AlreadyLoggedIn;
