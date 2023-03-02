import { useForm } from "react-hook-form";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

interface FormData {
  name: string;
  firstname: string;
  email: string;
  password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [userInfo, setUserInfo] = useState<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    setUserInfo(data);
    console.log(data);
  };
  return (
    <>
      <div className="flex justify-center mt-[20px] items-center  h-[70vh] mx-[5%] bg-[#fff] rounded-xl shadow-2xl">
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div></div>
          <div className="flex flex-col text-center mb-5">
            <label>Nom</label>
            <input
              className={`bg-[#C3E9AC] rounded-[5px] p-[10px] ${
                errors.name &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              type="text"
              placeholder="Nom"
              {...register("name", {
                required: "Le nom est requis",
              })}
            ></input>
            {errors.name && (
              <p className="text-sm text-red-500 text-center">
                {errors.name.message}*
              </p>
            )}
          </div>
          <div className="flex flex-col text-center mb-5">
            <label>Prénom</label>
            <input
              className={`bg-[#C3E9AC] rounded-[5px] p-[10px] ${
                errors.firstname &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              type="text"
              placeholder="Prénom"
              {...register("firstname", { required: "Le Prénom est requis" })}
            ></input>
            {errors.firstname && (
              <p className="text-sm text-red-500 text-center">
                {errors.firstname.message}*
              </p>
            )}
          </div>

          <div className="flex flex-col text-center mb-5">
            <label>Email</label>
            <input
              className={`bg-[#C3E9AC] rounded-[5px] p-[10px] ${
                errors.email &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              type="text"
              placeholder="dave.lopper@test.com"
              {...register("email", {
                required: "L'email est requis",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "L'email doit etre au bon format",
                },
              })}
            ></input>
            {errors.email && (
              <p className="text-sm text-red-500 text-center">
                {errors.email.message}*
              </p>
            )}
          </div>

          <div
            onClick={() => setShowPassword(!showPassword)}
            className="flex flex-col text-center mb-5"
          >
            <label>Mot de passe</label>
            <input
              className={`bg-[#C3E9AC] rounded-[5px] p-[10px] cursor-pointer ${
                errors.password &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              type={showPassword === false ? "text" : "password"}
              placeholder="Mot de passe"
              {...register("password", {
                required: "Le mot de passe est requis",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                  message:
                    "Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et au moins 6 caractères",
                },
                minLength: {
                  value: 6,
                  message:
                    "Le mot de passe doit contenir au moins 6 caractères",
                },
                maxLength: {
                  value: 10,
                  message: "Le mot de passe ne doit pas exceder 10 caracteres",
                },
              })}
            ></input>
            {errors.password && (
              <p className="text-sm text-red-500 mx-5 text-center">
                {errors.password.message}*
              </p>
            )}

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

            <Link to="/dashboard">
              <div className="mt-5 underline  text-[#609F39]">
                <button className="underline">Déjà un compte?</button>
              </div>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
