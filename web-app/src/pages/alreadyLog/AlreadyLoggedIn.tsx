// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { HOME_PATH } from '../paths';

// type PropsType = {
//   isLoggedIn: boolean;
//   children: any;
// };
// const AlreadyLoggedIn = (props: PropsType) => {
//   const { isLoggedIn, children } = props;
//   if (isLoggedIn) {
//     toast.error('Vous devez être connecté pour acceder à cette page', {
//       position: toast.POSITION.BOTTOM_RIGHT,
//       toastId: 'alreadyLoggedIn',
//     });
//     return <></>;
//   }
//   return children;
// };
// export default AlreadyLoggedIn;
const AlreadyLoggedIn = () => {
  return <div>Enter</div>;
};

export default AlreadyLoggedIn;
