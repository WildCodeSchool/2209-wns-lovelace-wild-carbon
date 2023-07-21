import { AiFillCar } from 'react-icons/ai';
import { MdTrain } from 'react-icons/md';
import { MdConnectedTv, MdAirplanemodeActive } from 'react-icons/md';
import { IoMdBus } from 'react-icons/io';

const CategoryIcon = ({ categoryName }: { categoryName: string }) => {
  if (categoryName === 'Train') {
    return <MdTrain className="w-8 h-8" />;
  }
  if (categoryName === 'Voiture') {
    return <AiFillCar className="w-8 h-8" />;
  }
  if (categoryName === 'Avion') {
    return <MdAirplanemodeActive className="w-8 h-8" />;
  }
  if (categoryName === 'Bus') {
    return <IoMdBus className="w-8 h-8" />;
  }
  if (categoryName === 'Multimédia') {
    return <MdConnectedTv className="w-8 h-8" />;
  }
  return null;
};

export default CategoryIcon;
