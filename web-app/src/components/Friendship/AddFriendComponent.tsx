import { useState } from 'react';
import { toast } from 'react-toastify';
import getErrorMessage from '../../utils';
import { gql, useMutation } from '@apollo/client';
import {
  SendFriendshipRequestMutation,
  SendFriendshipRequestMutationVariables,
} from '../../gql/graphql';

export const SEND_FRIENDSHIP_REQUEST = gql`
  mutation SendFriendshipRequest($invitedUserEmail: String!) {
    sendFriendshipRequest(invitedUserEmail: $invitedUserEmail) {
      invitedUsers {
        email
      }
    }
  }
`;

const AddFriend = () => {
  const [friendInput, setFriendInput] = useState<string>('');

  const [senFriendshipRequest] = useMutation<
    SendFriendshipRequestMutation,
    SendFriendshipRequestMutationVariables
  >(SEND_FRIENDSHIP_REQUEST);

  console.log(friendInput);

  const submit = async () => {
    try {
      await senFriendshipRequest({
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
    <>
      <div className="flex flex-col items-center text-[#609f39] mt-16">
        <label className="font-medium text-[18px]">Ajouter un ami</label>
        <input
          className="bg-[#c3e9ac] rounded border-transparent mt-1"
          type="text"
          name="friend"
          value={friendInput}
          onChange={(event) => {
            setFriendInput(event.target.value);
          }}
        />
      </div>
      <button
        className="mt-[30px] text-white self-center w-3/4 h-12 bg-[#484b8a] rounded font-semibold text-[20px] leading-[24px]
      "
        onClick={async (event) => {
          event.preventDefault();
          await submit();
        }}
      >
        Envoyer l'invitation
      </button>
    </>
  );
};

export default AddFriend;
