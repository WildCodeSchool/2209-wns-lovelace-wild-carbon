import CarbonSpending from 'components/carbon-spending/carbon-spending';
import '../../components/carbon-spending/carbon-spending.css';

function carbonSpending() {
  return (
    <>
      <div className="pageContainer">
        <div className="title">
          <h2 className="h3title">Ma depense carbone</h2>
          <p className="subTitle">Entrez une dépense (en deux clics)</p>
        </div>
        <CarbonSpending />
      </div>
    </>
  );
}

export default carbonSpending;
