import CarbonSpending from "../../components/carbon-spending/carbon-spending";
import "../../components/carbon-spending/carbon-spending.css";
import React from "react";
import Title from "components/Title";

function carbonSpending() {
  return (
    <>
      <div className="pageContainer">
        <Title
          title={"Ma depense carbone"}
          subtitle={"Entrez une dépense (en deux clics)"}
        />
        <CarbonSpending />
      </div>
    </>
  );
}

export default carbonSpending;
