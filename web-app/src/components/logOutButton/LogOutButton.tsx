import { HOME_PATH, SIGN_IN_PATH } from 'pages/paths';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { SignOutMutation, SignOutMutationVariables } from 'gql/graphql';
import { toast } from 'react-toastify';

const SIGN_OUT = gql`
  mutation SignOut($signOutId: String!) {
    signOut(id: $signOutId) {
      id
    }
  }
`;

const LogOutButton = ({ userData, setIsLogged }: { userData: any, setIsLogged: any }) => {
  const navigate = useNavigate();

  const [signOut] = useMutation<SignOutMutation, SignOutMutationVariables>(
    SIGN_OUT,
    {
      onCompleted: () => {
        toast.success('Vous êtes bien déconnecté.');
        navigate(SIGN_IN_PATH);

      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const handleDisconnect = async (user: any) => {
    await signOut({
      variables: {
        signOutId: userData.myProfile.id,
      },

    });
    setIsLogged(false)


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
