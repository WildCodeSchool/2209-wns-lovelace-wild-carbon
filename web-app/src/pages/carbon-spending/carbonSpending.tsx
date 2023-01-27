import CarbonSpending from 'components/carbon-spending/carbon-spending';

function carbonSpending() {
  return (
    <>
      <div className="title">
        <h2 className="h3title">Ma depense carbone</h2>
        <p className="subTitle">Entrez une dépense (en deux clics)</p>
      </div>
      <CarbonSpending />
    </>
  );
}

export default carbonSpending;
