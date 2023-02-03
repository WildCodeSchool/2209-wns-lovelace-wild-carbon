import { Chart as ChartJs, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { AiFillCar } from 'react-icons/ai';

ChartJs.register(ArcElement, Tooltip, Legend);

const DoughnutComponent = () => {
  const data = {
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
        <Doughnut data={data} />
      </div>
    </>
  );
};

export default DoughnutComponent;
