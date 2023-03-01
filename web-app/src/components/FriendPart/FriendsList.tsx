import AddFriends from './AddFriends';

const list = [
  {
    name: 'User 1',
    email: 'user@example.com',
    lastCo: '03/01/2023',
  },
  {
    name: 'User 2',
    email: 'user@example.com',
    lastCo: '03/01/2023',
  },
];

const FriendsList = () => {
  return (
    <div>
      <h1 className="text-center text-xl">Mes amis</h1>
      <div className="mt-5 text-[18px] flex justify-center">
        <table>
          <thead>
            <tr className="bg-[#484B8A] text-[#fff] text-[16px]">
              <th className="p-[5px]">Nom</th>
              <th className="p-[5px]">Email</th>
              <th className="p-[5px]">Dernière connexion</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm bg-[#fff]">
            {list.map((user) => (
              <tr>
                <td className="p-[10px] border-2">{user.name}</td>
                <td className="p-[10px] border-2">{user.email}</td>
                <td className="p-[10px] border-2">{user.lastCo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddFriends />
    </div>
  );
};

export default FriendsList;
