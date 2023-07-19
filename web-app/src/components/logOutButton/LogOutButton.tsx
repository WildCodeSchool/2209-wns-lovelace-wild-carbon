import { HOME_PATH, SIGN_IN_PATH } from '../../pages/paths';
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

const LogOutButton = ({
  userData,
  setIsLogged,
}: {
  userData: any;
  setIsLogged: any;
}) => {
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
    setIsLogged(false);
  };

  return (
    <div>
      <div className=" text-[white] flex justify-between mx-5 text-[14px] mb-5">
        <p className="bg-[#484B8A] p-[5px] rounded-[5px]">
          Connecté : <br />
          {userData.myProfile.email}
        </p>
        <button
          onClick={() => {
            handleDisconnect(userData);
          }}
          className="bg-[#484B8A] rounded-[5px] p-[5px]"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default LogOutButton;
