import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface FormData {
  name: string;
  firstname: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [userInfo, setUserInfo] = useState<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    setUserInfo(data);
    console.log(data);
  };
  return (
    <>
      <div className="flex justify-center mt-[50px] items-center  h-[60vh] mx-[5%] bg-[#fff] rounded-xl shadow-2xl">
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div></div>
          <div className="flex flex-col text-center mb-5">
            <label>Nom</label>
            <input
              className="bg-[#C3E9AC] rounded-[5px] p-[10px]"
              type="text"
              placeholder="Nom"
              {...register('name')}
            ></input>
          </div>
          <div className="flex flex-col text-center mb-5">
            <label>Prénom</label>
            <input
              className="bg-[#C3E9AC] rounded-[5px] p-[10px]"
              type="text"
              placeholder="Prénom"
              {...register('firstname')}
            ></input>
          </div>
          <div className="flex flex-col text-center mb-5">
            <label>Email</label>
            <input
              className="bg-[#C3E9AC] rounded-[5px] p-[10px]"
              type="text"
              placeholder="Email"
              {...register('email')}
            ></input>
          </div>
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="flex flex-col text-center mb-5"
          >
            <label>Mot de passe</label>
            <input
              className="bg-[#C3E9AC] rounded-[5px] p-[10px]"
              type={showPassword ? 'text' : 'password'}
              placeholder="Mot de passe"
              {...register('password')}
            ></input>
            <div className="absolute ml-[65%] mt-[10%] cursor-pointer">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="flex flex-col items-center mt-5">
            <button
              className="bg-[#484B8A] w-full py-[15px] rounded-[5px] text-[#fff] font-bold text-[20px]"
              type="submit"
            >
              S'inscrire
            </button>
            <div className="mt-5 underline  text-[#609F39]">
              <button className="underline">Déjà un compte?</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
