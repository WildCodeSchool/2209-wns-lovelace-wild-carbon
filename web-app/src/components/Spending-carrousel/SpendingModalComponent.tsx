import { Get_SpendingQuery } from 'gql/graphql';
import React from 'react';

interface SpendingModalDetails {
  spendingData?: Get_SpendingQuery;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpendingModalComponent: React.FC<SpendingModalDetails> = ({
  setShowModal,
  spendingData,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      style={{ backdropFilter: 'blur(3px)' }}
    >
      <div className="bg-white w-full max-w-2xl mx-auto rounded-lg shadow-lg">
        <div className="p-6">
          {spendingData?.spendings.map((spending) => {
            return (
              <>
                <div>{spending.title}</div>
                <div>{spending.category.categoryName}</div>
                <div>{spending.localizedDate}</div>
                <div>{spending.unit}</div>
                <div>{spending.weight}</div>
              </>
            );
          })}
        </div>
        <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={() => setShowModal(false)}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpendingModalComponent;
