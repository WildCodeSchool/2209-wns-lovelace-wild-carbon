import { MdConstruction } from 'react-icons/md';

const Profile = () => {
  return (
    <div className="font-bold items-center flex justify-center flex-col mt-[40%] italic ">
      Votre profil se fait une beauté !!
      <MdConstruction
        style={{ fontSize: '60px', color: 'orange', marginTop: '10px' }}
      />
    </div>
  );
};

export default Profile;
