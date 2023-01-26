import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>S'inscrire</h1>
        <p>c’est facile et rapide !</p>
        <div></div>
        <div>
          <label>Nom</label>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            ref={register({ required: 'Votre nom est requis' })}
          ></input>
        </div>
        <p>{errors.name?.message}</p>
        <div>
          <label>Prénom</label>
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            ref={register({ required: 'Votre prénom est requis' })}
          ></input>
        </div>
        <p>{errors.firstname?.message}</p>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            ref={register({
              required: 'Votre email est requis',
              pattern: { value: /^\S+@\S+$/i, message: 'Email non valide' },
            })}
          ></input>
        </div>
        <p>{errors.email?.message}</p>
        <div>
          <label>Mot de passe</label>
          <input
            type="text"
            name="password"
            placeholder="Mot de passe"
            ref={register({
              required: 'Votre mot de passe est requis',
              minLength: {
                value: 6,
                message: 'Le mot de passe doit contenir au moins 6 caractères',
              },
              maxLength: {
                value: 10,
                message:
                  'Le mot de passe ne doit pas contenir plus de 10 caractères',
              },
            })}
          ></input>
        </div>
        <p>{errors.password?.message}</p>
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default Register;
