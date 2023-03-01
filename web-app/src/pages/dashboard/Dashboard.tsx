import DoughnutComponent from '../../components/doughnut/doughnut';

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center text-[#609f39] mt-6">
        <h2 className="font-semibold text-[25px]">Mon tableau de bord</h2>
        <p className="text-base">
          Visualisez en temps réel ses depenses carbones
        </p>
      </div>
      <div className="flex justify-around mt-6 ">
        <p className="font-bold">Jean Clenche</p>
        <p className="font-bold">Donation: 1000€</p>
      </div>
      <div className="flex justify-center mt-px">
        <div className="h-0.5 w-3/4 bg-[#CAC5C5]"></div>
      </div>

      <DoughnutComponent />
    </>
  );
};

export default Dashboard;
