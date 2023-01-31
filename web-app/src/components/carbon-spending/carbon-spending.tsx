import "./carbon-spending.css";
import React, { useState } from "react";
import { TRANSPORTS_PARAMS } from "./utils";
import SliderComponent from "./slider";

function CarbonSpending() {
  const [selectedIcon, setSelectedIcon] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  const handleSelectIcons = (id: number) => {
    setSelectedIcon(id);
    setValue(0);
  };

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
            {TRANSPORTS_PARAMS.map((el) => {
              return (
                <div>
                  <button
                    className="iconBtn"
                    onClick={(event) => {
                      event.preventDefault();
                      handleSelectIcons(el.id);
                    }}
                    key={el.id}
                  >
                    {el.icon}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {selectedIcon ? (
          <div className="unitForm">
            {TRANSPORTS_PARAMS.filter((item) => item.id === selectedIcon).map(
              (el) => {
                return (
                  <SliderComponent
                    value={value}
                    setValue={setValue}
                    min={el.min}
                    max={el.max}
                    idicon={selectedIcon}
                  />
                );
              }
            )}
          </div>
        ) : (
          ""
        )}

        <button className="addSpendingBtn">Ajouter ma dépense</button>
      </form>
    </>
  );
}

export default CarbonSpending;
