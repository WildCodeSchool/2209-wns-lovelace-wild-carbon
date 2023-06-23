import { gql, useQuery } from '@apollo/client';
import { GetFriendshipListQuery } from '../../gql/graphql';
import AddFriend from './AddFriendComponent';

export const GET_FRIENDSHIP_LIST = gql`
  query GetFriendshipList {
    getFriendshipList {
      invitedUsers {
        lastName
        firstName
        email
      }
      id
    }
  }
`;

const FriendshipComponent = () => {
  const { data } = useQuery<GetFriendshipListQuery>(GET_FRIENDSHIP_LIST);
  console.log(data);

  return (
    <>
      <h2 className="my-3 ml-1.5 font-semibold text-base">Ma liste d'amis</h2>
      <div className="flex items-center flex-col">
        <table className="table-fixed border-2 w-80">
          <thead>
            <tr className="border-2 bg-sky-400">
              <th className="border-2 text-white text-left">Nom</th>
              <th className="border-2 text-white text-left">Prénom</th>
              <th className="border-2 text-white text-left">Mail</th>
            </tr>
          </thead>

          {data?.getFriendshipList.map((friend) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td className="border-2 text-left" key={friend.id}>
                      {friend.invitedUsers.firstName}
                    </td>
                    <td className="border-2 text-left">
                      {friend.invitedUsers.lastName}
                    </td>
                    <td className="border-2 text-left overflow-hidden">
                      {friend.invitedUsers.email}
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
        <AddFriend />
      </div>
    </>
  );
};

export default FriendshipComponent;
