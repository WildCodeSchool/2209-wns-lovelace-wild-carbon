import { gql } from '@apollo/client';

export const SEND_FRIENDSHIP_REQUEST = gql`
  mutation SendFriendshipRequest($invitedUserEmail: String!) {
    sendFriendshipRequest(invitedUserEmail: $invitedUserEmail) {
      invitedUsers {
        email
      }
    }
  }
`;

interface AddFriendProps {
  friendInput: string;
  setFriendInput: (value: string) => void;
  submit: () => Promise<void>;
}

const AddFriend = ({ friendInput, setFriendInput, submit }: AddFriendProps) => {
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <label className="font-medium text-lg">Ajouter un ami</label>
        <input
          className="bg-[#c3e9ac] rounded border-transparent mt-1 w-full px-4 py-2"
          type="text"
          name="friend"
          value={friendInput}
          onChange={(event) => setFriendInput(event.target.value)}
        />
      </div>
      <button
        className="mt-8 text-white self-center w-full sm:w-auto h-12 bg-[#484b8a] rounded font-semibold text-lg leading-[24px] px-4 py-2"
        onClick={submit}
      >
        Envoyer l'invitation
      </button>
    </>
  );
};

export default AddFriend;
