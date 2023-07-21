import { gql, useQuery } from '@apollo/client';
import Title from '../../components/Title';
import DoughnutComponent from '../../components/doughnut/doughnut';
import { DonationsByUserIdQuery, MyProfileQueryQuery } from '../../gql/graphql';
import { useEffect, useState } from 'react';

const GET_DONATIONS_BY_USER = gql`
  query DonationsByUserId {
    donationsByUserId {
      amount
    }
  }
`;

const MY_PROFILE = gql`
  query MyProfileDashboard {
    myProfile {
      firstName
      lastName
      id
    }
  }
`;

const Dashboard = () => {
  const { data: donationById, refetch } = useQuery<DonationsByUserIdQuery>(
    GET_DONATIONS_BY_USER
  );

  const { data: profilData } = useQuery<MyProfileQueryQuery>(MY_PROFILE);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    refetch();
  }, [profilData, refetch]);

  useEffect(() => {
    if (donationById) {
      const totalAmounts = donationById.donationsByUserId.reduce(
        (acc, donation) => acc + donation.amount,
        0
      );
      setTotalAmount(totalAmounts);
      refetch();
    }
  }, [donationById, refetch]);

  function capitalizeFirstNameLetter(firstName: any) {
    if (!firstName) return '';
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }

  return (
    <>
      <Title
        title="Mon tableau de bord"
        subtitle="Visualisez en temps réel ses depenses carbones"
      />

      <div className="flex justify-around mt-6 ">
        <p className="font-bold">
          {capitalizeFirstNameLetter(profilData?.myProfile.firstName)}{' '}
          {profilData?.myProfile.lastName.toUpperCase()}{' '}
        </p>
        <p className="font-bold">Donation: {totalAmount.toFixed(2)}€</p>
      </div>
      <div className="flex justify-center">
        <div className="h-0.5 w-3/4 bg-[#CAC5C5]"></div>
      </div>
      <DoughnutComponent />
    </>
  );
};

export default Dashboard;
