import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { gql, useMutation, useQuery } from '@apollo/client';
import {
  GetFriendshipListQuery,
  SendFriendshipRequestMutation,
  SendFriendshipRequestMutationVariables,
} from '../../gql/graphql';
import { SEND_FRIENDSHIP_REQUEST } from './AddFriendComponent';
import getErrorMessage from '../../utils';
import AddFriend from './AddFriendComponent';
import FriendshipRequestList from './FriendshipRequestList';
import { AppContext } from '../../context/AppContext';
import FriendShipList from './FriendShipListComponent';

export const GET_FRIENDSHIP_LIST = gql`
  query GetFriendshipList {
    getFriendshipList {
      invitingUser {
        lastName
        firstName
        email
        id
      }
      invitedUsers {
        lastName
        firstName
        email
        id
      }
    }
  }
`;

const FriendshipComponent = () => {
  const { data, refetch } =
    useQuery<GetFriendshipListQuery>(GET_FRIENDSHIP_LIST);
  const [friendInput, setFriendInput] = useState<string>('');
  const [sendFriendshipRequest] = useMutation<
    SendFriendshipRequestMutation,
    SendFriendshipRequestMutationVariables
  >(SEND_FRIENDSHIP_REQUEST);

  const [activeTab, setActiveTab] = useState<'friends' | 'friendRequests'>(
    'friends'
  );

  const { userProfile } = useContext(AppContext) || {};

  const friendsList = data?.getFriendshipList.map((friend) => {
    const userObjects = [];

    // Ajouter l'objet invitedUser s'il existe
    if (friend.invitedUsers.id === userProfile?.myProfile.id) {
      userObjects.push({
        firstName: friend.invitingUser.firstName,
        lastName: friend.invitingUser.lastName,
        email: friend.invitingUser.email,
      });
    }

    // Ajouter l'objet invitingUser s'il existe
    if (friend.invitingUser.id === userProfile?.myProfile.id) {
      userObjects.push({
        firstName: friend.invitedUsers.firstName,
        lastName: friend.invitedUsers.lastName,
        email: friend.invitedUsers.email,
      });
    }

    // Combiner les objets en un seul objet à l'aide de l'opérateur de décomposition
    const combinedUserObject = Object.assign({}, ...userObjects);

    return combinedUserObject;
  });

  const handleTabClick = (tab: 'friends' | 'friendRequests') => {
    setActiveTab(tab);
    refetch();
  };

  const submit = async () => {
    try {
      await sendFriendshipRequest({
        variables: {
          invitedUserEmail: friendInput,
        },
      });
      toast.success(`La requête a bien été envoyée`);
      setFriendInput('');
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <div className="p-4 mt-8 w-full h-[70vh] md:w-1/2 md:mx-auto">
      <div className="flex justify-center">
        <button
          className={`w-full py-2 px-3 sm:px-4 text-base sm:text-lg font-medium rounded-t-lg focus:outline-none ${
            activeTab === 'friends'
              ? 'bg-[#484b8a] text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick('friends')}
        >
          Liste des amis
        </button>
        <button
          className={`w-full py-2 px-3 sm:px-4 text-base sm:text-lg font-medium rounded-t-lg focus:outline-none ${
            activeTab === 'friendRequests'
              ? 'bg-[#484b8a] text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick('friendRequests')}
        >
          Demandes d'amis
        </button>
      </div>
      {activeTab === 'friends' && (
        <FriendShipList friendsListData={friendsList || []} />
      )}
      {activeTab === 'friendRequests' && (
        <div className="bg-white p-4 shadow rounded">
          <FriendshipRequestList />
        </div>
      )}

      {/* Partie pour rechercher un ami */}
      <AddFriend
        friendInput={friendInput}
        setFriendInput={setFriendInput}
        submit={submit}
      />
    </div>
  );
};

export default FriendshipComponent;
