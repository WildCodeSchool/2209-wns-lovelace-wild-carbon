import React, { useState } from "react";
import Slider from "react-slider";
import "./carbon-spending.css";

interface Value {
  value: number;
  setValue: any;
  min: number;
  max: number;
  idicon: number;
}

function SliderComponent({ value, setValue, min, max, idicon }: Value) {
  const roundedValue =
    idicon === 2
      ? value * 0.1482
      : idicon === 1
      ? value * 0.3
      : idicon === 3
      ? value * 0.014
      : idicon === 4
      ? value * 0.05
      : idicon === 5
      ? value * 0.185
      : 0;

  return (
    <>
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
          min={min}
          max={max}
        />
        <p className="value">
          {value} {idicon === 3 ? "kWh" : "km"}
        </p>
      </div>
      <div className="consumeForm">
        <h3 className="labelName">Consommation:</h3>
        <p className="consumeTitle">
          {roundedValue.toFixed(0)}
          KG CO2
        </p>
      </div>
    </>
  );
}

export default SliderComponent;
