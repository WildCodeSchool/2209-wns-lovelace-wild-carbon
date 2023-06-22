import Title from 'components/Title';
import CompareChart from 'components/compare/CompareChart';
import * as React from 'react';

export interface CompareProps {
}

export function Compare (props: CompareProps) {
  return (
    <div className="bg-[#fefaea] mt-[50px] mb-[100px]">
    <Title
      title={'Me comparer'}
      subtitle={'Êtes-vous meilleurs que vos amis ?'}
    />

    <h1 className='text-[30px] font-bold text-center mt-6'>Dave Lopper</h1>
    <div className='border-[1px] border-solid ml-8 mr-8'></div>
<CompareChart />
  </div>
  );
}
