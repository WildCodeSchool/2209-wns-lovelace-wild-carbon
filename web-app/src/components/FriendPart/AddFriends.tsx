// import React, { useState } from 'react';
// import nodemailer from 'nodemailer';

const AddFriends: React.FC = () => {
  //   const [email, setEmail] = useState('');

  //   const sendEmail = async () => {
  //     const transporter = nodemailer.createTransport({
  //       host: 'smtp.gmail.com',
  //       port: 465,
  //       secure: true,
  //       auth: {
  //         user: process.env.EMAILADDRESS,
  //         pass: process.env.PASSWORD,
  //       },
  //     });

  //     const mailOptions: nodemailer.SendMailOptions = {
  //       from: process.env.EMAILADDRESS,
  //       to: email,
  //       subject: 'Invitation à devenir amis',
  //       text: 'Bonjour, nous aimerions vous inviter à devenir amis sur notre application. Merci!',
  //     };

  //     await transporter.sendMail(mailOptions);
  //     alert('Email envoyé avec succès');
  //   };

  return (
    <div>
      <h1 className="text-center mt-[50px] text-xl">Ajouter un nouvel ami</h1>
      <div className="flex justify-center mt-5">
        <input
          className="bg-[#C3E9AC] rounded-sm p-[10px]"
          placeholder="Email"
          //   value={email}
          //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //     setEmail(e.target.value)
          //   }
        ></input>
      </div>
      <div className="flex justify-center mt-[25px]">
        <button
          className="text-[#fff] bg-[#5F62B1] p-[10px] rounded-[5px] font-bold text-xl"
          //   onClick={sendEmail}
        >
          Envoyer l'invitation
        </button>
      </div>
    </div>
  );
};

export default AddFriends;
