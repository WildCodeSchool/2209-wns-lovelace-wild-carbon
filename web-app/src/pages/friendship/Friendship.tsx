import FriendshipComponent from '../../components/Friendship/FriendshipComponent';
import Title from '../../components/Title';

const Friendhsip = () => {
  return (
    <>
      <Title title='Mes amis' subtitle={`Créer votre réseau d'amitié`} />
      <div className="flex flex-col items-center text-[#609f39] mt-6">
        <h2 className="font-semibold text-[25px]"></h2>
        <p className="text-base"></p>
      </div>
      <div className="flex justify-center mt-px">
        <div className="h-0.5 w-3/4 bg-[#CAC5C5]"></div>
      </div>
      <FriendshipComponent />
    </>
  );
};

export default Friendhsip;
