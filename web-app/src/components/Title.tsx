import React from "react";

interface Titles {
  title: string;
  subtitle: string;
}

function Title({ title, subtitle }: Titles) {
  return (
    <div className="flex flex-col items-center text-[#609f39] mb-10">
      <h2 className="font-semibold max-sm:text-[25px] text-[45px]">{title}</h2>
      <p className="max-sm:text-base text-[25px]">{subtitle}</p>
    </div>
  );
}

export default Title;
