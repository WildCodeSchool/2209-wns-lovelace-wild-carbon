import { gql, useMutation } from '@apollo/client';
import {
	DeleteSpendingMutation,
	DeleteSpendingMutationVariables,
} from 'gql/graphql';
import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

type PropType = {
	id: any,
	closeModal: () => void;
	onRefetch: () => void;
};

const DELETE_SPENDING = gql`
	mutation DeleteSpending($deleteSpendingId: String!) {
		deleteSpending(id: $deleteSpendingId) {
			id
		}
	}
`;

const DeleteMessage = ({ id, closeModal, onRefetch }: PropType) => {
	const [deleteSpending] = useMutation<
		DeleteSpendingMutation,
		DeleteSpendingMutationVariables
	>(DELETE_SPENDING);
	console.log(id, "id")

	const onDeleteConfirmation = async (deleteSpendingId: string) => {
		try {
			await deleteSpending({ variables: { deleteSpendingId } });
			onRefetch()
			closeModal()
		} catch (error) {
			closeModal()
			console.error('erreur');
		}
	};
	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
			style={{ backdropFilter: 'blur(3px)' }}
		>

			<div className="bg-white   min-h-[150px] mx-auto rounded-lg shadow-lg p-6 flex justify-center  flex-col">

				<h1 className='text-[18px] text-center '>
					Êtes-vous sûr de vouloir supprimer cette dépense ?
				</h1>
				<div className="flex justify-around mt-6">
					<button
						onClick={closeModal}
						className=" hover:bg-[red] bg-[#FFA07A] rounded-lg p-0 min-w-[150px] min-h-[35px] border-transparent "
					>
						Annuler
					</button>

					<button
						onClick={() => onDeleteConfirmation(id)}
						className=" hover:bg-[#609f39] bg-[#c3e9ac] rounded-lg p-0 min-w-[150px] min-h-[35px] border-transparent "
					>
						Supprimer
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteMessage;
