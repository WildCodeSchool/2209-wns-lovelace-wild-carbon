import SignIn from '../../components/SignIn/SignIn';

const signin = () => {
  return (
    <>
      <h1 className="text-center mt-[12%] font-bold text-[30px] text-[#609F39]">
        Wild Carbon
      </h1>
      <p className="text-center mb-5 italic text-[#609F39]">
        pour facilement suivre son empreinte carbone.{' '}
      </p>
      <SignIn />
    </>
  );
};

export default signin;
