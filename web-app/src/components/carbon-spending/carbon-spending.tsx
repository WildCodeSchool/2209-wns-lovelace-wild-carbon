import './carbon-spending.css';
import { ImAirplane } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import { MdTrain } from 'react-icons/md';
import { MdConnectedTv } from 'react-icons/md';
import { IoMdBus } from 'react-icons/io';

import React, { useState } from 'react';
import Slider from 'react-slider';

interface Icons {
  icon: JSX.Element;
}

const icons: Icons[] = [
  {
    icon: <ImAirplane className="icon" />,
  },
  {
    icon: <AiFillCar className="icon" />,
  },
  {
    icon: <MdConnectedTv className="icon" />,
  },
  {
    icon: <MdTrain className="icon" />,
  },
  {
    icon: <IoMdBus className="icon" />,
  },
];

function CarbonSpending() {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <form className="spendingForm">
        <div className="labelForm">
          <label>
            <div className="labelName">
              Libéllé
              <input className="nameInput" type="text" name="name" />
            </div>
            <div className="labelDate">
              Date
              <input className="dateInput" type="date" name="date" />
            </div>
          </label>
        </div>
        <div className="categoryForm">
          <h3 className="labelName">Catégories:</h3>
          <div className="categoriesIcons">
            {icons.map((icon) => {
              return (
                <button
                  className="iconBtn"
                  onClick={(event) => event.preventDefault()}
                >
                  {icon.icon}
                </button>
              );
            })}
          </div>
        </div>

        <div className="unitForm">
          <h3 className="labelName">Unités:</h3>
          <div className="slider">
            <Slider
              value={value}
              onChange={setValue}
              className="customSlider"
              trackClassName="customSlider-track"
              thumbClassName="customSlider-thumb"
              markClassName="customSlider-mark"
              marks={100}
              min={0}
              max={1000}
            />
            <p className="value">{value}Km</p>
          </div>
        </div>
        <div className="consumeForm">
          <h3 className="labelName">Consommation:</h3>
          <p className="consumeTitle">300KG CO2</p>
          <button className="addSpendingBtn">Ajouter ma dépense</button>
        </div>
      </form>
    </>
  );
}

export default CarbonSpending;
