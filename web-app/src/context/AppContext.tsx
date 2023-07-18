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
