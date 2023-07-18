import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../pages/paths';
const Header = () => {
  return (
    <div>
      <Link
        to={HOME_PATH}
        className="text-[#609F39] font-bold text-[28px] flex justify-start items-center ml-5"
      >
        {' '}
        Wild-carbon <FaLeaf style={{ color: '#609F39', marginLeft: '10px' }} />
      </Link>
    </div>
  );
};

export default Header;
