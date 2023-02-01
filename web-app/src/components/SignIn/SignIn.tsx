import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import ReCAPTCHA from 'react-google-recaptcha';

import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SignInMutation, SignInMutationVariables } from '../../gql/graphql';
import { getErrorMessage } from '../../utils';
import { HOME_PATH } from '../../pages/paths';

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
    }
  }
`;
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordEye, setPasswordEye] = useState(false);
  // const [passwordConfirmEye, setPasswordConfirmEye] = useState(false);

  // const [captcha, setCaptcha] = useState(false);
  // const key = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;
  // const captchakey = '6LforD4kAAAAAM-bTit1LOEvKeeoW5rlL2d-qktV';
  // const onChange = () => {
  //   console.log('changed');
  //   setCaptcha(true);
  // };

  const handlePassword = () => {
    setPasswordEye(!passwordEye);
  };

  // const handleConfirmPassword = () => {
  //   setPasswordConfirmEye(!passwordConfirmEye);
  // };

  const [signIn] = useMutation<SignInMutation, SignInMutationVariables>(
    SIGN_IN
  );
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await signIn({
        variables: { email, password },
      });
      toast.success(`Vous vous êtes connecté avec succès.`);
      navigate(HOME_PATH);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <>
      <div className="flex justify-center items-center  h-[65vh] mx-[5%] bg-[#fff] rounded-xl shadow-2xl mt-[7%]">
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await submit();
          }}
        >
          <div></div>
          <div className="flex flex-col  mb-5">
            <input
              className="bg-[#C3E9AC] rounded-[5px] p-[10px]"
              type="email"
              placeholder="dave.lopper@test.com"
              required
              autoComplete="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
            ></input>
          </div>
          <div className="flex flex-col  mb-5">
            <input
              type={passwordEye === false ? 'password' : 'text'}
              placeholder="Mot de passe"
              required
              autoComplete="current-password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/"
              className="bg-[#C3E9AC] rounded-[5px] p-[10px]"

              // {...register('password', {
              //   required: 'Le mot de passe est requis',
              //   pattern: {
              //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
              //     message:
              //       'Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et au moins 6 caractères',
              //   },
              //   minLength: {
              //     value: 6,
              //     message:
              //       'Le mot de passe doit contenir au moins 6 caractères',
              //   },
              // })}
              // className={`bg-[#C3E9AC] rounded-[5px] p-[10px] cursor-pointer ${
              //   errors.password &&
              //   'focus:border-red-500 focus:ring-red-500 border-red-500'
              // }`}
            ></input>

            <div className=" cursor-pointer text-xl absolute right-16 top-[355px]">
              {passwordEye === false ? (
                <FaEyeSlash onClick={handlePassword} />
              ) : (
                <FaEye onClick={handlePassword} />
              )}
            </div>
          </div>
          {/* <div className="flex flex-col  mb-5">
            <input
              type={passwordConfirmEye === false ? 'password' : 'text'}
              className="bg-[#C3E9AC] rounded-[5px] p-[10px]"
              placeholder="dave.lopper@test.com"
              required
              id="passwordConfirmation"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(event) => {
                setPasswordConfirmation(event.target.value);
              }}

              // className={`bg-[#C3E9AC] rounded-[5px] p-[10px] ${
              //   errors.confirmPassword &&
              //   'focus:border-red-500 focus:ring-red-500 border-red-500'
              // }`}
              // {...register('confirmPassword', {
              //   required: 'Champs requis',
              //   validate: (value) =>
              //     value === password || "Le mot de passe n'est pas identique",
              // })}
            ></input>

            <div className="cursor-pointer text-xl absolute right-16 top-[387px]">
              {passwordConfirmEye === false ? (
                <FaEyeSlash onClick={handleConfirmPassword} />
              ) : (
                <FaEye onClick={handleConfirmPassword} />
              )}
            </div>
          </div> */}
          {/* <ReCAPTCHA sitekey={captchakey} onChange={onChange} />, */}
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
