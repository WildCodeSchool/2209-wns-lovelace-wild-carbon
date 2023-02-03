import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useQuery, gql } from '@apollo/client';
import { Get_SpendingQuery } from 'gql/graphql';

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
  const { data } = useQuery<Get_SpendingQuery>(GET_SPENDING);

  const dataGraph = {
    labels: ['Voiture', 'Avion', 'Multimedia', 'Transports', 'Train'],
    datasets: [
      {
        label: 'consommation pour la catégorie sur la consomamtion total',
        data: [20, 20, 20, 20, 20],
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
      <div>
        <Doughnut data={dataGraph} />
      </div>
      {data?.spendings.map((spending) => {
        return (
          <div key={spending.id}>
            <p>{spending.date}</p>
            <p>{spending.title}</p>
            <p>{spending.weight}</p>
          </div>
        );
      })}
    </>
  );
};

export default DoughnutComponent;
