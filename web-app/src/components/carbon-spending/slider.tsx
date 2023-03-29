import Slider from 'react-slider';

interface Value {
  value: number;
  setValue: any;
  min: number;
  max: number;
  result: number;
  idicon: number;
}

function CarbonValue({ value, setValue, min, max, result, idicon }: Value) {
  return (
    <>
      <h3 className="flex flex-col text-[#609f39] mb-3 font-medium text-[18px]">
        Unités:
      </h3>
      <div className="flex flex-col items-center">
        <Slider
          value={value}
          onChange={setValue}
          className="m-auto w-[300px]"
          trackClassName="h-[10px] rounded bg-[#c3e9ac] top-[8px]"
          thumbClassName="cursor-pointer w-[23px] h-[23px] outline-none bg-[#6875d9] rounded-full  hover:shadow-[0_0_0_8px_#6875d933]"
          markClassName="cursor-pointer"
          marks={100}
          min={min}
          max={max}
        />
        <p className="value">
          {value} {idicon === 3 ? 'kWh' : 'km'}
        </p>
      </div>
      <div className="flex flex-col mt-[30px]">
        <h3 className="flex flex-col text-[#609f39] mb-3 font-medium text-[18px]">
          Consommation:
        </h3>
        <p className="text-center text-[22px] font-black text-red-600">
          {result.toFixed(0)}
          KG CO2
        </p>
      </div>
    </>
  );
}

export default CarbonValue;
