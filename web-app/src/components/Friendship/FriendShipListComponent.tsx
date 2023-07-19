interface FriendShipListProps {
  friendsListData: {
    firstName: string;
    lastName: string;
    email: string;
  }[];
}

const FriendShipList = ({ friendsListData }: FriendShipListProps) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <div className="max-h-60 overflow-y-auto">
        <div className="max-h-[200px] overflow-x-auto overflow-y-auto">
          <table className="table-fixed w-full">
            <thead>
              <tr className="border-2 bg-[#484b8a]">
                <th className="border-2 text-white text-left p-2">Nom</th>
                <th className="border-2 text-white text-left p-2">Prénom</th>
                <th className="border-2 text-white text-left p-2">Mail</th>
              </tr>
            </thead>
            <tbody>
              {friendsListData?.map((friend) => (
                <tr key={friend.firstName} className="border-2">
                  <td className="border-2 text-left p-2">{friend.firstName}</td>
                  <td className="border-2 text-left p-2">{friend.lastName}</td>
                  <td className="border-2 text-left p-2 max-w-[200px] truncate">
                    {friend.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FriendShipList;
