import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormData {
  name: string;
  firstname: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [userInfo, setUserInfo] = useState<FormData>();

  const onSubmit = (data: any) => {
    setUserInfo(data);
    console.log(data);
  };
  return (
    <div>
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>S'inscrire</h1>
        <p>c’est facile et rapide !</p>
        <div></div>
        <div>
          <label>Nom</label>
          <input type="text" placeholder="Nom" {...register('name')}></input>
        </div>
        <div>
          <label>Prénom</label>
          <input
            type="text"
            placeholder="Prénom"
            {...register('firstname')}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" placeholder="Email" {...register('email')}></input>
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="text"
            placeholder="Mot de passe"
            {...register('password')}
          ></input>
        </div>
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default Register;
