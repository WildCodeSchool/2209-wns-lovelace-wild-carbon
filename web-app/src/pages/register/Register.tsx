import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CreateUserMutation,
  CreateUserMutationVariables,
} from '../../gql/graphql';
import { getErrorMessage } from '../../utils';
import { SIGN_IN_PATH } from '../../pages/paths';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Loader from '../../components/Loader/Loader';

const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      lastName
      id
      firstName
      email
    }
  }
`;

const Register = ({ onSuccess }: { onSuccess: () => {} }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  useState(false);

  const [createUser, { loading }] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CREATE_USER);
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await createUser({
        variables: {
          firstName,
          lastName,
          email,
          password,
        },
      });
      toast.success(
        `Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.`
      );
      navigate(SIGN_IN_PATH);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center mt-[5%] font-bold text-[30px] text-[#609F39]">
          S'inscrire
        </h1>
        <p className="text-center mb-5 italic text-[#609F39]">
          c’est facile et rapide !
        </p>
      </div>
      <div className="flex justify-center items-center h-[65vh] mx-[5%] bg-[#fff] rounded-xl shadow-2xl">
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await submit();
          }}
        >
          <label>
            Prénom
            <br />
            <input
              type="text"
              required
              id="firstName"
              name="firstName"
              placeholder="Dave"
              className="bg-[#C3E9AC] rounded-[5px] p-[10px] mb-5"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Nom
            <br />
            <input
              type="text"
              required
              id="lastName"
              name="lastName"
              placeholder="Lopper"
              className="bg-[#C3E9AC] rounded-[5px] p-[10px] mb-5"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Adresse email
            <br />
            <input
              type="email"
              required
              autoComplete="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="dave.lopper@dev.com"
              className="bg-[#C3E9AC] rounded-[5px] p-[10px] mb-5"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <br />
          <div onClick={() => setShowPassword(!showPassword)}>
            <label>Mot de passe</label>
            <br />
            <input
              type={showPassword === false ? 'text' : 'password'}
              required
              autoComplete="new-password"
              id="password"
              name="password"
              placeholder="Votre mot de passe"
              className="bg-[#C3E9AC] rounded-[5px] p-[10px] mb-5"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <div className="absolute ml-[65%] cursor-pointer bottom-[35.7%]">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <br />
          <div className="flex flex-col items-center">
            <button
              disabled={loading}
              type="submit"
              className="bg-[#484B8A] py-[15px] w-full rounded-[5px] text-[#fff] font-bold text-[20px]"
            >
              {loading ? <Loader /> : "S'inscrire"}
            </button>

            <Link to={SIGN_IN_PATH}>
              <div className="mt-5 underline  text-[#609F39] font-bold">
                <button className="underline">Déjà un compte?</button>{' '}
              </div>
            </Link>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default Register;
