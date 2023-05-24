import Title from 'components/Title';
import CarbonSpending from 'components/carbon-spending/CarbonSpending';

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
