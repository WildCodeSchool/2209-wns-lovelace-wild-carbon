import React from 'react';
import Slider from 'react-slick';
import { Get_SpendingQuery } from 'gql/graphql';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SpendingCarouselComponentProps {
  spendingData?: Get_SpendingQuery;
}

const SpendingCarouselComponent: React.FC<SpendingCarouselComponentProps> = ({
  spendingData,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(spendingData);

  return (
    <div className="mt-6  mb-8 px-8">
      <Slider {...settings}>
        {spendingData?.spendings.map((spending) => {
          return (
            <div className="bg-green-500 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <p className="text-gray-800 font-semibold text-lg mb-2">
                  {spending.title}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {spending.localizedDate} Pour un trajet de {spending.unit}
                </p>
                <div className="flex items-center">
                  <p className="text-gray-700 text-sm">
                    {spending.weight}kg de Co2 rejeté dans l'athmosphere
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SpendingCarouselComponent;
