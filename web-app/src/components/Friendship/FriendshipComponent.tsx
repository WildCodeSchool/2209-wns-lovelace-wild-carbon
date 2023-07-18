import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { gql, useMutation, useQuery } from '@apollo/client';
import {
  GetFriendshipListQuery,
  SendFriendshipRequestMutation,
  SendFriendshipRequestMutationVariables,
} from '../../gql/graphql';
import addFriend, { SEND_FRIENDSHIP_REQUEST } from './AddFriendComponent';
import getErrorMessage from '../../utils';
import AddFriend from './AddFriendComponent';
import FriendshipRequestList from './FriendshipRequestList';
import { AppContext } from '../../context/AppContext';

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
    // Créer un tableau pour stocker les objets d'informations des amis
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

    // Retourner l'objet combiné avec les informations des amis
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
    <div className="p-4">
      <div className="space-y-4">
        <div className="flex justify-center">
          <button
            className={`py-2 px-3 sm:px-4 text-base sm:text-lg font-medium rounded-t-lg focus:outline-none ${
              activeTab === 'friends'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('friends')}
          >
            Liste des amis
          </button>
          <button
            className={`py-2 px-3 sm:px-4 text-base sm:text-lg font-medium rounded-t-lg focus:outline-none ${
              activeTab === 'friendRequests'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('friendRequests')}
          >
            Demandes d'amis
          </button>
        </div>
        {activeTab === 'friends' && (
          <div className="bg-white p-4 shadow rounded">
            <div className="max-h-60 overflow-y-auto">
              <table className="table-fixed w-full">
                <thead>
                  <tr className="border-2 bg-sky-400">
                    <th className="border-2 text-white text-left p-2">Nom</th>
                    <th className="border-2 text-white text-left p-2">
                      Prénom
                    </th>
                    <th className="border-2 text-white text-left p-2">Mail</th>
                  </tr>
                </thead>
                <tbody>
                  {friendsList?.map((friend) => (
                    <tr key={friend.firstName} className="border-2">
                      <td className="border-2 text-left p-2">
                        {friend.firstName}
                      </td>
                      <td className="border-2 text-left p-2">
                        {friend.lastName}
                      </td>
                      <td className="border-2 text-left p-2 max-w-[200px] truncate">
                        {friend.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'friendRequests' && (
          <div className="bg-white p-4 shadow rounded">
            {/* Affichez ici les demandes d'amis en cours avec les boutons accepter ou supprimer */}
            <FriendshipRequestList />
          </div>
        )}
      </div>
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
