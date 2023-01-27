import React from 'react';
import './carbon-spending.css';
import { ImAirplane } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import { MdTrain } from 'react-icons/md';
import { MdConnectedTv } from 'react-icons/md';
import { IoMdBus } from 'react-icons/io';

interface Icons {
  icon: JSX.Element;
}

export const icons: Icons[] = [
  {
    icon: <ImAirplane className="icon" />,
  },
  {
    icon: <AiFillCar className="icon" />,
  },
  {
    icon: <MdConnectedTv className="icon" />,
  },
  {
    icon: <MdTrain className="icon" />,
  },
  {
    icon: <IoMdBus className="icon" />,
  },
];
