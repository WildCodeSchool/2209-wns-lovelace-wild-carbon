import React from 'react';
import { Spending } from './SpendingCarrouselComponent';
import { RiCloseCircleLine } from 'react-icons/ri';
import CategoryIcon from './CategoryIcon';

type PropType = Spending & {
  closeModal: () => void;
};

const SpendingModalComponent = ({
  title,
  localizedDate,
  weight,
  unit,
  category,
  closeModal,
}: PropType) => {
  const unitDetail = () => {
    if (category.categoryName === 'Multimédia') {
      return <div>Donnée renseignée: {unit} Killowatt</div>;
    } else {
      return <div>Donnée renseignée: {unit}Km</div>;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      style={{ backdropFilter: 'blur(3px)' }}
    >
      <div className="bg-white w-full max-w-2xl mx-auto rounded-lg shadow-lg">
        <div className="flex justify-between mt-8">
          <h2 className="ml-2 font-bold">{title}</h2>
          <button
            onClick={closeModal}
            className="ml-2 mr-4 hover:bg-[#609f39] bg-[#c3e9ac] rounded-lg p-0 w-[21px] h-[21px] flex justify-center items-center border-transparent "
          >
            <RiCloseCircleLine />
          </button>
        </div>
        <div className="ml-2 mt-2">Date: {localizedDate}</div>
        <div className="flex justify-between ">
          <div className="ml-2 mt-2">Catégorie: {category.categoryName}</div>
          <div className="ml-2 mt-2 mr-4 bg-[#c3e9ac] rounded p-0 w-[41px] h-[41px] flex justify-center items-center border-transparent ">
            <CategoryIcon categoryName={category.categoryName} />
          </div>
        </div>

        <div className="ml-2 mt-2">{unitDetail()}</div>
        <div className="ml-2 mt-2 mb-8">
          Quantité de Co2 rejeté dans l'atmosphère: {weight}Kg
        </div>
      </div>
    </div>
  );
};

export default SpendingModalComponent;
