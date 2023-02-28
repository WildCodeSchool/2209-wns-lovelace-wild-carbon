import { MdConstruction } from 'react-icons/md';

const Donation = () => {
  return (
    <div className="font-bold items-center flex justify-center flex-col mt-[40%] italic text-center ">
      Vous ne pouvez pas participer au projet pour le moment.
      <br /> Patience!!
      <MdConstruction
        style={{ fontSize: '60px', color: 'orange', marginTop: '10px' }}
      />
    </div>
  );
};

export default Donation;
