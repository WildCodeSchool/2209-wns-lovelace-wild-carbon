//Next Step - Need to call articles data

import Footer from 'components/Footer/Footer';
import { Link } from 'react-router-dom';

type CardData = {
  id: number;
  title: string;
  content: string;
};
const data: CardData[] = [
  {
    id: 1,
    title: 'Article 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 2,
    title: 'Article 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 3,
    title: 'Article 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
];

const ArticlesRaw = () => {
  return (
    <>
      <div className="h-[95vh]">
        {data.map((c: CardData) => (
          <div
            key={c.id}
            className="bg-[#fff] hover:bg-[#f8efe2] duration-300 ease-in-out mb-5 mx-5 p-[30px] rounded-xl "
          >
            <div className="flex justify-center">
              <div className="font-bold text-center mb-5 text-[20px] mr-[15px]">
                {c.title}
              </div>
            </div>
            <div className="ml-5 ">{c.content}</div>
          </div>
        ))}
        <Link to={'/register'}>
          <div className="flex justify-center ">
            <button className="bg-[#484B8A] hover:bg-[#31335e] duration-300 ease-in-out	 text-[#fff] text-[22px] font-bold rounded-lg w-[75%] py-[10px] mt-5">
              S'engager
            </button>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ArticlesRaw;
