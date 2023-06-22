import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import { gql, useQuery } from '@apollo/client';
import { Get_SpendingQuery } from 'gql/graphql';

export interface IAppProps {}

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

export default function CompareChart(props: IAppProps) {
	const { data } = useQuery<Get_SpendingQuery>(GET_SPENDING);
	console.log(data, 'datas');
	const datas = {
		labels: ['Mes dépenses', 'Jean Clenche'],
		datasets: [
			{
				label: 'Ventes mensuelles',
				data: [220, 100],
				backgroundColor: 'rgba(75, 192, 192, 0.6)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1,
			},
		],
	};

	const options = {
		plugins: {
			datalabels: {
				display: true,
				color: 'black',
			},
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
					lineWidth: 0.5,
				},
			},
			y: {
				display: false,
			},
		},
	};
	return (
		<div className="m-8">
			<Bar data={datas} options={options} />
		</div>
	);
}
