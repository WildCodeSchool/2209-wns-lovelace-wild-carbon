import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineEuroCircle,
} from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import {
  HOME_PATH,
  DONATION_PATH,
  CARBON_SPENDING_PATH,
} from '../../pages/paths';

interface MenuItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

const Navigation = () => {
  const Menus: MenuItem[] = [
    { name: 'Accueil', icon: <AiOutlineHome />, path: HOME_PATH },
    { name: 'Profil', icon: <AiOutlineUser />, path: '/' },
    {
      name: 'Ajouter',
      icon: <IoMdAddCircleOutline />,
      path: CARBON_SPENDING_PATH,
    },
    { name: 'Donner', icon: <AiOutlineEuroCircle />, path: DONATION_PATH },
  ];
  const [active, setActive] = useState(0);

  let location = useLocation();
  useEffect(() => {
    Menus.forEach((menu, i) => {
      if (location.pathname === menu.path) {
        setActive(i);
      }
    });
  }, [location]);
  return (
    <>
      <nav className="bg-[#484B8A] max-h-[5rem] pr-6 rounded-t-xl fixed bottom-0 w-full z-50">
        <ul className="flex justify-around">
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <Link
                className="flex flex-col text-center pt-7 text-white"
                to={menu.path}
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-[30px] cursor-pointer duration-500 flex justify-center ${
                    i === active && '-mt-4 '
                  }`}
                >
                  {menu.icon}
                </span>
                <span
                  className={` ${
                    active === i
                      ? 'translate-y-1 duration-700 opacity-100 text-white'
                      : 'opacity-0 translate-y-10  '
                  } `}
                >
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
