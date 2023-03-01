import Register from '../../components/Register/Register';

const register = () => {
  return (
    <>
      <h1 className="text-center mt-[23%] font-bold text-[30px] text-[#609F39]">
        S'inscrire
      </h1>
      <p className="text-center mb-5 italic text-[#609F39]">
        c’est facile et rapide !
      </p>
      <Register />
    </>
  );
};

export default register;
