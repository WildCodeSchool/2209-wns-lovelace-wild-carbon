import { FaLeaf } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="text-[#609F39] font-bold text-[28px] flex justify-start items-center fixed top-0 left-0 z-[50] w-full bg-[#fffaf2] h-[70px]">
      <h1 className="ml-5 flex justify-start">
        Wild-carbon <FaLeaf style={{ color: '#609F39', marginLeft: '10px' }} />
      </h1>
    </div>
  );
};

export default Header;
