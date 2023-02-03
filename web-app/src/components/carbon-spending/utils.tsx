<<<<<<< HEAD
import React from 'react';
import './carbon-spending.css';
import { AiFillCar } from 'react-icons/ai';
import { MdTrain } from 'react-icons/md';
import { MdConnectedTv, MdAirplanemodeActive } from 'react-icons/md';
import { IoMdBus } from 'react-icons/io';
=======
import React from "react";
import "./carbon-spending.css";
import { AiFillCar } from "react-icons/ai";
import { MdTrain } from "react-icons/md";
import { MdConnectedTv, MdAirplanemodeActive } from "react-icons/md";
import { IoMdBus } from "react-icons/io";
>>>>>>> dev

interface Categories {
  id: number;
  category: string;
  icon: JSX.Element;
  min: number;
  max: number;
}

export const TRANSPORTS_PARAMS: Categories[] = [
  {
    id: 1,
<<<<<<< HEAD
    category: 'Avion',
=======
    category: "Avion",
>>>>>>> dev
    icon: <MdAirplanemodeActive className="icon" />,
    min: 0,
    max: 15000,
  },
  {
    id: 2,
<<<<<<< HEAD
    category: 'Voiture',
=======
    category: "Voiture",
>>>>>>> dev
    icon: <AiFillCar className="icon" />,
    min: 0,
    max: 1000,
  },
  {
    id: 3,
<<<<<<< HEAD
    category: 'Multimédia',
=======
    category: "Multimédia",
>>>>>>> dev
    icon: <MdConnectedTv className="icon" />,
    min: 0,
    max: 1500,
  },
  {
    id: 4,
<<<<<<< HEAD
    category: 'Train',
=======
    category: "Train",
>>>>>>> dev
    icon: <MdTrain className="icon" />,
    min: 0,
    max: 5000,
  },
  {
    id: 5,
<<<<<<< HEAD
    category: 'Bus',
=======
    category: "Bus",
>>>>>>> dev
    icon: <IoMdBus className="icon" />,
    min: 0,
    max: 3000,
  },
];
