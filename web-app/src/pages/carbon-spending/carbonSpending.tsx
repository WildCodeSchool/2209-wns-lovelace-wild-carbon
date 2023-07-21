import CarbonSpendingComponents from '../../components/carbon-spending/CarbonSpending';

import Title from '../../components/Title';

function CarbonSpending() {
  return (
    <>
      <Title
        title={'Ma depense carbone'}
        subtitle={'Entrez une dépense (en deux clics)'}
      />
      <div className="bg-[#fefaea]md:h-[100vh] mt-[50px]  mb-[100px]">

        <CarbonSpendingComponents />

      </div>
    </>
  );
}

export default CarbonSpending;
