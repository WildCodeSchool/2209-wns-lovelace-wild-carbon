import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onTouched' });
  const [userInfo, setUserInfo] = useState<FormData>();
  const [passwordEye, setPasswordEye] = useState(false);
  const [passwordConfirmEye, setPasswordConfirmEye] = useState(false);

  const handlePassword = () => {
    setPasswordEye(!passwordEye);
  };

  const handleConfirmPassword = () => {
    setPasswordConfirmEye(!passwordConfirmEye);
  };

  const onSubmit = (data: any) => {
    setUserInfo(data);
    console.log(data);
  };

  const password = watch('password');

  return (
    <>
      <div className="flex justify-center items-center  h-[65vh] mx-[5%] bg-[#fff] rounded-xl shadow-2xl mt-[7%]">
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div></div>

          <div className="flex flex-col  mb-5">
            <input
              className={`bg-[#C3E9AC] rounded-[5px] p-[10px] ${
                errors.email &&
                'focus:border-red-500 focus:ring-red-500 border-red-500'
              }`}
              type="text"
              placeholder="dave.lopper@test.com"
              {...register('email', {
                required: "L'email est requis",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "L'email doit etre au bon format",
                },
              })}
            ></input>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}*</p>
            )}
          </div>
          <div className="flex flex-col  mb-5">
            <input
              type={passwordEye === false ? 'password' : 'text'}
              placeholder="Mot de passe"
              {...register('password', {
                required: 'Le mot de passe est requis',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                  message:
                    'Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et au moins 6 caractères',
                },
                minLength: {
                  value: 6,
                  message:
                    'Le mot de passe doit contenir au moins 6 caractères',
                },
              })}
              className={`bg-[#C3E9AC] rounded-[5px] p-[10px] cursor-pointer ${
                errors.password &&
                'focus:border-red-500 focus:ring-red-500 border-red-500'
              }`}
            ></input>
            {errors.password && (
              <span className="text-sm text-red-500 ">
                {errors.password.message}*
              </span>
            )}{' '}
            <div className=" cursor-pointer text-xl absolute right-16 top-[324px]">
              {passwordEye === false ? (
                <FaEyeSlash onClick={handlePassword} />
              ) : (
                <FaEye onClick={handlePassword} />
              )}
            </div>
          </div>

          <div className="flex flex-col  mb-5">
            <input
              type={passwordConfirmEye === false ? 'password' : 'text'}
              placeholder="Confirm Password"
              className={`bg-[#C3E9AC] rounded-[5px] p-[10px] ${
                errors.confirmPassword &&
                'focus:border-red-500 focus:ring-red-500 border-red-500'
              }`}
              {...register('confirmPassword', {
                required: 'Champs requis',
                validate: (value) =>
                  value === password || "Le mot de passe n'est pas identique",
              })}
            ></input>
            {errors.confirmPassword && (
              <span className="text-sm text-red-500 ">
                {errors.confirmPassword.message}*
              </span>
            )}{' '}
            <div className="cursor-pointer text-xl absolute right-16 top-[387px]">
              {passwordConfirmEye === false ? (
                <FaEyeSlash onClick={handleConfirmPassword} />
              ) : (
                <FaEye onClick={handleConfirmPassword} />
              )}
            </div>
          </div>

          <div className="flex flex-col items-center mt-5">
            <button
              className="bg-[#609F39] w-full py-[15px] rounded-[5px] text-[#fff] font-bold text-[20px]"
              type="submit"
            >
              Se connecter
            </button>

            <div className="mt-5 font-bold  text-[#609F39]">
              <button>Mot de passe oublié ?</button>
            </div>
          </div>
          <div className="border mx-[10px] mt-5"></div>
          <div className="flex justify-center mt-5">
            <Link
              to="/register"
              className="bg-[#484B8A] w-full py-[15px] rounded-[5px] text-[#fff] font-bold text-[20px] text-center"
            >
              <button>Creer un compte</button>
            </Link>
          </div>
        </form>
      </div>
      <p className="text-center mt-5 underline text-[#609F39] font-bold text-[20px]">
        Pourquoi s'engager ?
      </p>

      <Footer />
    </>
  );
};

export default SignIn;
