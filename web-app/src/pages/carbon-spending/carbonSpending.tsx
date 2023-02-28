import CarbonSpending from '../../components/carbon-spending/carbon-spending';
// import "../../components/carbon-spending/carbon-spending.css";
import React from 'react';
import Title from 'components/Title';

function carbonSpending() {
  return (
    <>
      <div className="bg-[#fefaea] mt-[50px] mb-[100px]">
        <Title
          title={'Ma depense carbone'}
          subtitle={'Entrez une dépense (en deux clics)'}
        />
        <CarbonSpending />
      </div>
    </>
  );
}

export default carbonSpending;
