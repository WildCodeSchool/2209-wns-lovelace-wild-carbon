import { MdConstruction } from 'react-icons/md';

const Home = () => {
  return (
    <div className="font-bold items-center flex justify-center flex-col mt-[40%] italic ">
      Votre dashboard arrive, patience ...
      <MdConstruction style={{ fontSize: '50px', color: 'orange' }} />
    </div>
  );
};

export default Home;
