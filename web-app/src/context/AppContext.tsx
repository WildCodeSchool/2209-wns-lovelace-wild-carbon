import {
  ApolloQueryResult,
  gql,
  OperationVariables,
  useQuery,
} from '@apollo/client';
import { MyProfileQuery } from '../gql/graphql';
import { createContext, useEffect, useState } from 'react';

const USER_PROFILE = gql`
  query MyProfileQuery {
    myProfile {
      id
      email
      firstName
      lastName
    }
  }
`;

type ValueType = {
  userProfile: MyProfileQuery | null;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<MyProfileQuery | null>>;
};

export const AppContext = createContext<ValueType | null>(null);

export function ContextProvider({ children }: any) {
  const { data, error, refetch } = useQuery<MyProfileQuery | null>(
    USER_PROFILE
  );
  const [userProfile, setUserProfile] = useState<MyProfileQuery | null>(null);

  useEffect(() => {
    if (data) {
      setUserProfile(data);
    }
  }, [data, error]);

  return (
    <AppContext.Provider value={{ userProfile, refetch }}>
      {children}
    </AppContext.Provider>
  );
}

// import { gql, useQuery } from '@apollo/client';
// import { createContext, useState } from 'react';
// import { MyProfileQuery } from '../gql/graphql';

// const USER_PROFILE = gql`
//   query MyProfileQuery {
//     myProfile {
//       id
//       email
//       firstName
//       lastName
//     }
//   }
// `;

// type UserContextType = {
//   userData: any;
//   isAuthenticated: boolean;
//   loading: boolean;
//   refetch: () => {};
// };

// export const AppContext = createContext<UserContextType | null>(null);

// export function ContextProvider({ children }: any) {
//   const [isAuthenticated, setIsUserAuthenticated] = useState(false);
//   const [userData, setUserData] = useState({});

//   const { loading, refetch } = useQuery<MyProfileQuery>(USER_PROFILE, {
//     notifyOnNetworkStatusChange: true,
//     onCompleted: (data) => {
//       if (data.myProfile) {
//         setIsUserAuthenticated(true);
//         setUserData(data.myProfile);
//       }
//     },
//     onError: () => {
//       setIsUserAuthenticated(false);
//     },
//   });
//   console.log(userData);

//   return (
//     <AppContext.Provider
//       value={{
//         userData,
//         isAuthenticated,
//         loading,
//         refetch,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }
