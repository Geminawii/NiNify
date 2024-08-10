'use client'

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faVolumeUp,
  faVolumeMute,
  faShuffle,
  faRepeat,
  faBars,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import albums from "./albumdata";
import { useSearchParams } from "next/navigation";

const MusicPlayer = ({ }) => {
  
   
  return (
    <section className="bg-black rounded-md flex justify-between items-center px-4 -mt-20 font-montserrat">
      <div className="relative flex items-center">
        <img className="w-14 h-14 mt-2" src={albums[3].cover} />
        <div className="ml-4 text-sm pt-2">
          <p className="font-bold">{albums[3].tracks[0].name}</p>
          <p className="text-gray-400">{albums[3].artist}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto mt-4">
        <div className="flex gap-5 mr-10">
          <FontAwesomeIcon icon={faShuffle} className="w-6 text-gray-400" />
          <FontAwesomeIcon icon={faBackward} className="w-6 text-gray-400" />
          <div className="flex items-center justify-center rounded-full bg-white w-8 h-8 -mt-2">
          <FontAwesomeIcon icon={faPlay} className="text-black w-6" /> </div>
          <FontAwesomeIcon icon={faForward} className="w-6 text-gray-400" />
          <FontAwesomeIcon icon={faRepeat} className="w-6 text-gray-400" />
        </div>
        <div className="flex items-center gap-5 mr-10 mt-2">
          <p className="text-xs">1:06</p>
          <div className=" w-[40vw] bg-gray-300 rounded full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-green-800 rounded full"></hr>
          </div>
          <p className="text-xs">2:30</p>
        </div>
      </div>
      <div className="flex items-center gap-3 text-gray-400">
      <div className="flex items-center justify-center border-2 border-gray-400 p-1 rounded-md">
        <FontAwesomeIcon icon={faPlay} className="w-2" /> </div>
        <FontAwesomeIcon icon={faBars} className="w-4" />
        <FontAwesomeIcon icon={faVolumeHigh} className="w-4" />
        <div className=" w-[5vw] bg-gray-300 rounded full cursor-pointer">
          {" "}
          <hr className="h-1 border-none w-0 bg-green-800 rounded full"></hr>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
