import { gql, useMutation, useQuery } from '@apollo/client';
import {
  AcceptFriendshipRequestMutation,
  GetFriendshipRequestsQuery,
  DeclineFriendshipRequestMutation,
} from '../../gql/graphql';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CiCircleRemove } from 'react-icons/ci';
import { toast } from 'react-toastify';

export const GET_FRIENDSHIP_REQUEST_LIST = gql`
  query GetFriendshipRequests {
    getFriendshipRequests {
      invitedUsers {
        lastName
        firstName
      }
      id
    }
  }
`;

export const ACCEPT_FRIEND_REQUEST = gql`
  mutation AcceptFriendshipRequest($friendshipId: String!) {
    acceptFriendshipRequest(friendshipId: $friendshipId) {
      id
      acceptInvitation
    }
  }
`;

export const REFUSE_FRIEND_REQUEST = gql`
  mutation DeclineFriendshipRequest($friendshipId: String!) {
    declineFriendshipRequest(friendshipId: $friendshipId)
  }
`;

const FriendshipRequestList = () => {
  const { data, refetch } = useQuery<GetFriendshipRequestsQuery>(
    GET_FRIENDSHIP_REQUEST_LIST
  );

  const [declineFriendshipRequestMutation] =
    useMutation<DeclineFriendshipRequestMutation>(REFUSE_FRIEND_REQUEST);

  const [acceptFriendshipRequest] =
    useMutation<AcceptFriendshipRequestMutation>(ACCEPT_FRIEND_REQUEST);

  const handleAcceptFriendship = async (friendshipId: string) => {
    try {
      await acceptFriendshipRequest({
        variables: {
          friendshipId: friendshipId,
        },
      });
      toast.success(`Demande d'amis acceptée!`);
      refetch();
    } catch (error) {
      console.error("Erreur lors de l'acceptation de l'amitié : ", error);
    }
  };

  const handleRefuseFriendship = async (friendshipId: string) => {
    try {
      await declineFriendshipRequestMutation({
        variables: {
          friendshipId: friendshipId,
        },
      });
      toast.success(`Demande d'amis refusée!`);
      refetch();
    } catch (error) {
      console.error("Erreur lors de la supprésion de l'amitié : ", error);
    }
  };

  return (
    <div className="max-h-[200px] overflow-x-auto overflow-y-auto">
      {data?.getFriendshipRequests?.length === 0 ? (
        <p className="text-center text-gray-600 italic">
          Pas de demande d'amis pour le moment...
        </p>
      ) : (
        <table className="table-fixed w-full">
          <thead>
            <tr className="border-2 bg-[#484b8a]">
              <th className="border-2 text-white text-left p-2">Nom</th>
              <th className="border-2 text-white text-left p-2">Prénom</th>
              <th className="border-2 text-white text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.getFriendshipRequests?.map((request) => (
              <tr key={request.id} className="border-2">
                <td className="border-2 text-left p-2">
                  {request.invitedUsers.firstName}
                </td>
                <td className="border-2 text-left p-2">
                  {request.invitedUsers.lastName}
                </td>
                <td className="border-2 text-left p-2 flex justify-center items-center">
                  <button
                    className="bg-green-500 text-white p-2 rounded-full mx-1 hover:shadow-md"
                    onClick={() => handleAcceptFriendship(request.id)}
                  >
                    <AiOutlinePlusCircle className="w-6 h-6" />
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded-full hover:shadow-md"
                    onClick={() => handleRefuseFriendship(request.id)}
                  >
                    <CiCircleRemove className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FriendshipRequestList;
