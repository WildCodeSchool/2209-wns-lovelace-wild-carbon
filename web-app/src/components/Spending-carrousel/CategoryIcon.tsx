import { AiFillCar } from 'react-icons/ai';
import { MdTrain } from 'react-icons/md';
import { MdConnectedTv, MdAirplanemodeActive } from 'react-icons/md';
import { IoMdBus } from 'react-icons/io';

const CategoryIcon = ({ categoryName }: { categoryName: string }) => {
  if (categoryName === 'Train') {
    return (
      <p>
        <MdTrain className="w-8 h-8" />
      </p>
    );
  }
  if (categoryName === 'Voiture') {
    return (
      <p>
        <AiFillCar className="w-8 h-8" />
      </p>
    );
  }
  if (categoryName === 'Avion') {
    return (
      <p>
        <MdAirplanemodeActive className="w-8 h-8" />
      </p>
    );
  }
  if (categoryName === 'Bus') {
    return (
      <p>
        <IoMdBus className="w-8 h-8" />
      </p>
    );
  }
  if (categoryName === 'Multimedia') {
    return (
      <p>
        <MdConnectedTv className="w-8 h-8" />
      </p>
    );
  }
  return null;
};

export default CategoryIcon;
