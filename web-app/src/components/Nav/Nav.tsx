import { useState } from 'react';
import Test from '../Test';

const Navigation = () => {
  const Menus = [
    { name: 'Accueil', icon: 'Home' },
    { name: 'Profil', icon: 'Profile' },
    { name: 'Contact', icon: 'Friends' },
    { name: 'Donation', icon: 'Donation' },
  ];
  const [active, setActive] = useState(0);
  return (
    <>
      <Test />
      <nav className="bg-[#484B8A] max-h-[5rem] pr-6 rounded-t-xl fixed bottom-0 w-full z-50">
        <ul className="flex justify-around">
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    i === active && '-mt-6 text-white'
                  }`}
                >
                  {menu.icon}
                </span>
                <span
                  className={` ${
                    active === i
                      ? 'translate-y-4 duration-700 opacity-100 text-white'
                      : 'opacity-0 translate-y-10  '
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
