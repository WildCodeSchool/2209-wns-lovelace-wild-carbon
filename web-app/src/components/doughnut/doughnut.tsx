import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useQuery, gql } from '@apollo/client';
import { Get_SpendingQuery } from '../../gql/graphql';
import SpendingCarrouselComponent from '../../components/Spending-carrousel/SpendingCarrouselComponent';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import warning from '../../media/avertissement.png';

ChartJs.register(ArcElement, Tooltip, Legend);

const GET_SPENDING = gql`
  query GET_SPENDING {
    spendings {
      category {
        categoryName
      }
      date
      id
      localizedDate
      title
      unit
      weight
    }
  }
`;

const DoughnutComponent = () => {
  const { data, refetch } = useQuery<Get_SpendingQuery>(GET_SPENDING);

  let categoryWeights: number[] = [];
  let categoryLabels: string[] = [
    'Voiture',
    'Avion',
    'Multimedia',
    'Transports',
    'Train',
  ];

  useEffect(() => {
    refetch();
  }, [data, refetch]);

  if (data) {
    const categories: { [key: string]: number } = {};
    data.spendings.forEach(
      (spending: { category: { categoryName: string }; weight: number }) => {
        const categoryName = spending.category.categoryName;
        const weight = spending.weight;
        if (categories[categoryName]) {
          categories[categoryName] += weight;
        } else {
          categories[categoryName] = weight;
        }
      }
    );
    categoryLabels = Object.keys(categories);
    categoryWeights = Object.values(categories);
  }

  const dataGraph = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'consommation pour la catégorie sur la consomamtion total',
        data: categoryWeights,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(0, 255, 0)',
          'rgb(255, 0, 255)',
        ],
        borderColor: ['	rgb(255,255,255)'],
        hoverOffset: 4,
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      {dataGraph.labels.length === 0 ? (
        <div className="flex flex-col text-center items-center mt-5">
          <img
            className="text-center"
            src={warning}
            alt="warningIcon"
            height="150px"
            width="150px"
          ></img>
          <p className="font-bold text-[#484B8A] mt-5">
            Vous n'avez pas encore de dépense !
          </p>
          <button className="bg-[#484B8A] text-[#ffffff] rounded-[5px] mt-5 p-[5px] mx-[100px]">
            <Link to={'/carbonSpending'}>Ajouter une dépense</Link>
          </button>
        </div>
      ) : (
        <Doughnut data={dataGraph} />
      )}
      <SpendingCarrouselComponent spendingData={data} onRefetch={refetch} />;
    </>
  );
};

export default DoughnutComponent;
