import React from "react";

interface Titles {
  title: string;
  subtitle: string;
}

function Title({ title, subtitle }: Titles) {
  return (
    <div className="flex flex-col items-center text-[#609f39]">
      <h2 className="font-semibold text-[25px]">{title}</h2>
      <p className="text-base">{subtitle}</p>
    </div>
  );
}

export default Title;
