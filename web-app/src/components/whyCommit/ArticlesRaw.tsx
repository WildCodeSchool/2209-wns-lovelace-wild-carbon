//Next Step - Need to call articles data

import { gql, useQuery } from '@apollo/client';
import Footer from 'components/Footer/Footer';
import { QueryQuery } from 'gql/graphql';
import { Link } from 'react-router-dom';

const GET_ARTICLES = gql`
  query Query {
    articles {
      title
      description
      category {
        categoryName
      }
    }
  }
`;
interface ICategory {
  __typename?: string;
  categoryName: string;
}

interface IArticles {
  __typename?: string;
  id?: string;
  title: string;
  description: string;
  category: ICategory;
}

const ArticlesRaw = () => {
  const { data } = useQuery<QueryQuery>(GET_ARTICLES);
  console.log(data);
  return (
    <>
      <div className="h-[95vh]">
        {data?.articles.map((c: IArticles) => (
          <div
            key={c.id}
            className="bg-[#fff] hover:bg-[#f8efe2] duration-300 ease-in-out mb-5 mx-5 p-[30px] rounded-xl cursor-pointer "
          >
            <div className="flex flex-col font-bold text-center mb-5">
              <h2 className="text-[17px]">{c.title}</h2>
              <br />
              <p className="text-[13px]">{c.category.categoryName}</p>
            </div>
            <div className="text-[12px]">{c.description}</div>
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
