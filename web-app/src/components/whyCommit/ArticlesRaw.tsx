import { ImArrowRight2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

//Next Step - Need to call articles data

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
    <div className="h-[95vh]">
      {data.map((c: CardData) => (
        <Link to={`/whyCommit/articles/${c.id}`} key={c.id}>
          <div key={c.id} className="bg-[#fff] mb-5 mx-5 p-[30px] rounded-xl ">
            <div className="flex justify-center">
              <div className="font-bold text-center mb-5 text-[20px] mr-[15px]">
                {c.title}
              </div>
              <ImArrowRight2 style={{ color: '#609F39', fontSize: '30px' }} />
            </div>
            <div className="ml-5 ">{c.content}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesRaw;
