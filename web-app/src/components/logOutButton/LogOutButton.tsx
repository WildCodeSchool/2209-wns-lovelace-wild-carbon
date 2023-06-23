import { HOME_PATH } from '../../pages/paths';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { SignOutMutation, SignOutMutationVariables } from '../../gql/graphql';
import { toast } from 'react-toastify';

const SIGN_OUT = gql`
  mutation SignOut($signOutId: String!) {
    signOut(id: $signOutId) {
      id
    }
  }
`;

const LogOutButton = ({ userData }: { userData: any }) => {
  const navigate = useNavigate();

  const [signOut] = useMutation<SignOutMutation, SignOutMutationVariables>(
    SIGN_OUT,
    {
      onCompleted: () => {
        toast.success('Vous êtes bien déconnecté.');
        navigate(HOME_PATH);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const handleDisconnect = async (user: any) => {
    signOut({
      variables: {
        signOutId: userData.myProfile.id,
      },
    });
  };

  return (
    <div>
      <div>
        <p>Connecté avec l'adresse email : {userData.myProfile.email}</p>
        <button
          onClick={() => {
            handleDisconnect(userData);
          }}
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default LogOutButton;
