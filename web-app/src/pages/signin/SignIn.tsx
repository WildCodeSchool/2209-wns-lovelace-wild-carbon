import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SignInMutation, SignInMutationVariables } from '../../gql/graphql';
import { getErrorMessage } from '../../utils';
import { DASHBOARD_PATH, REGISTER_PATH } from '../paths';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
    }
  }
`;
const SignIn = ({ onSuccess }: { onSuccess: () => {} }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePassword = () => {
    setPasswordEye(!passwordEye);
  };

  const [signIn, { loading }] = useMutation<
    SignInMutation,
    SignInMutationVariables
  >(SIGN_IN);
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await signIn({
        variables: { email, password },
      });
      toast.success('Vous êtes bien connecté!');
      onSuccess();
      navigate(DASHBOARD_PATH);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center mt-[12%] font-bold text-[30px] text-[#609F39]">
          Wild Carbon
        </h1>
        <p className="text-center mb-5 italic text-[#609F39]">
          pour facilement suivre son empreinte carbone.
        </p>
      </div>
      <div className="flex justify-center items-center  h-[55vh] mx-[5%] bg-[#fff] rounded-xl shadow-2xl mt-[7%]">
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await submit();
          }}
        >
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
              className="bg-[#C3E9AC] rounded-[5px] p-[10px]"
            ></input>

            <div className=" cursor-pointer text-xl absolute right-16 top-[345px]">
              {passwordEye === false ? (
                <FaEyeSlash onClick={handlePassword} />
              ) : (
                <FaEye onClick={handlePassword} />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center mt-5">
            <button
              disabled={loading}
              className="bg-[#609F39] w-full py-[15px] rounded-[5px] text-[#fff] font-bold text-[20px]"
            >
              {loading ? <Loader /> : 'Se connecter'}
            </button>
          </div>
          <div className="border mx-[10px] mt-5"></div>
          <div className="flex justify-center mt-5">
            <Link
              to={REGISTER_PATH}
              className="bg-[#484B8A] w-full py-[15px] rounded-[5px] text-[#fff] font-bold text-[20px] text-center"
            >
              <button>Creer un compte</button>
            </Link>
          </div>
        </form>
      </div>
      <Link to="/whyCommit">
        <p className="text-center mt-5 underline text-[#609F39] font-bold text-[20px]">
          Pourquoi s'engager ?
        </p>
      </Link>

      <Footer />
    </>
  );
};

export default SignIn;
