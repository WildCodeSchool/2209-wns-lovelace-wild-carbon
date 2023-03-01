import Title from 'components/Title';
import ArticlesRaw from 'components/whyCommit/ArticlesRaw';

const WhyCommit = () => {
  return (
    <div>
      <div className="mt-[100px] mb-[30px]">
        <Title
          title={"Pourquoi s'engager ?"}
          subtitle={"C'est simple et rapide !"}
        />
      </div>
      <ArticlesRaw />
    </div>
  );
};

export default WhyCommit;
