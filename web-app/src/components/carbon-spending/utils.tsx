import React from 'react';
import './carbon-spending.css';
import { AiFillCar } from 'react-icons/ai';
import { MdTrain } from 'react-icons/md';
import { MdConnectedTv, MdAirplanemodeActive } from 'react-icons/md';
import { IoMdBus } from 'react-icons/io';

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
    category: 'Avion',
    icon: <MdAirplanemodeActive className="icon" />,
    min: 0,
    max: 15000,
  },
  {
    id: 2,
    category: 'Voiture',
    icon: <AiFillCar className="icon" />,
    min: 0,
    max: 1000,
  },
  {
    id: 3,
    category: 'Multimédia',
    icon: <MdConnectedTv className="icon" />,
    min: 0,
    max: 1500,
  },
  {
    id: 4,
    category: 'Train',
    icon: <MdTrain className="icon" />,
    min: 0,
    max: 5000,
  },
  {
    id: 5,
    category: 'Bus',
    icon: <IoMdBus className="icon" />,
    min: 0,
    max: 3000,
  },
];
