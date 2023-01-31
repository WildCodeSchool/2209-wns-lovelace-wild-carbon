import React from "react";
import "./carbon-spending.css";
import { ImAirplane } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { MdTrain } from "react-icons/md";
import { MdConnectedTv } from "react-icons/md";
import { IoMdBus } from "react-icons/io";

interface Icons {
  id: number;
  icon: JSX.Element;
  min: number;
  max: number;
}

export const TRANSPORTS_PARAMS: Icons[] = [
  { id: 1, icon: <ImAirplane className="icon" />, min: 0, max: 15000 },
  {
    id: 2,
    icon: <AiFillCar className="icon" />,
    min: 0,
    max: 1000,
  },
  {
    id: 3,
    icon: <MdConnectedTv className="icon" />,
    min: 0,
    max: 1500,
  },
  {
    id: 4,
    icon: <MdTrain className="icon" />,
    min: 0,
    max: 5000,
  },
  {
    id: 5,
    icon: <IoMdBus className="icon" />,
    min: 0,
    max: 3000,
  },
];
