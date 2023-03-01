import FriendsList from 'components/FriendPart/FriendsList';
import Title from 'components/Title';

const FriendShip = () => {
  return (
    <>
      <div className="my-[50px]">
        <Title title={'Mes amis'} subtitle={'Créez votre communauté'} />
      </div>
      <FriendsList />
    </>
  );
};

export default FriendShip;
