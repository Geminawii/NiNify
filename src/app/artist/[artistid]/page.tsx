"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBell,
  faUserGroup,
  faN,
  faPlus,
  faPlay,
  faEllipsis,
  faBars,
  faClock,
  faE,
} from "@fortawesome/free-solid-svg-icons";



export default function ArtistDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const cover = searchParams.get("cover");
  const name = searchParams.get("name");
  

  return (
    <section className="w-full p-4 bg-neutral-900 rounded-lg font-montserrat h-[645px] custom-scrollbar">
      <div className="flex justify-between items-center mt-1 sticky top-0">
        <div className="flex items-center">
          <a href="#">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="rounded-full text-white w-4 h-4 bg-neutral-950 p-2"
            />
          </a>
          <a href="#" className="ml-2">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="rounded-full text-white w-4 h-4 bg-neutral-950 p-2"
            />
          </a>
        </div>
        <div className="flex items-center">
          <a href="#" className="mr-2">
            <FontAwesomeIcon
              icon={faBell}
              className="rounded-full text-white w-4 h-4 bg-neutral-950 p-2 hover-effect"
            />
          </a>
          <a href="#" className="mr-2">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="rounded-full text-white w-4 h-4 bg-neutral-950 p-2 hover-effect"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faN}
              className="rounded-full text-sky-500 w-4 h-4 bg-neutral-950 p-2 hover-effect"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col pt-10">
        <div className="flex items-start">
          <img className="rounded-lg w-40 h-70 mr-4" src={cover} />
          <div className="pt-8">
            <h2 className="text-sm mb-1 font-semibold">Public Playlist</h2>
            <h2 className="text-7xl font-black mb-2">This is {name}</h2>
            <h3 className="font-bold mr-2 text-gray-400">
              This is {name}. The essential tracks, all in one playlist
            </h3>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-10 ml-2 space-x-4">
        <a className="bg-green-500 rounded-full p-4 flex items-center justify-center w-12 h-12">
          <FontAwesomeIcon
            icon={faPlay}
            className="text-black w-6 h-6 hover-effect"
          />
        </a>
        <a className="flex items-center justify-center w-12 h-12 hover-effect">
          <FontAwesomeIcon icon={faPlus} className="w-6 h-6 text-gray-400" />
        </a>
        <a className="flex items-center justify-center w-12 h-12">
          <FontAwesomeIcon
            icon={faEllipsis}
            className="w-6 h-6 hover-effect text-gray-400"
          />
        </a>
        <div className="flex-grow"></div>
        <div className="flex">
          <a className="flex items-center space-x-2">
            <p className="text-gray-400 font-medium hover-effect">List</p>
            <FontAwesomeIcon
              icon={faBars}
              className="w-6 h-6 text-gray-400 hover-effect"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center pt-10 pb-4">
          <div className="flex items-center space-x-6 ml-6 text-gray-400">
            <p>#</p>
            <p className="ml-40">Title</p>
          </div>
          <div className="flex-grow"></div>
        
          <div className="mr-14">
            <a>
              <FontAwesomeIcon icon={faClock} className="text-gray-400" />
            </a>
          </div>
        </div>

        <hr className="bg-gray-300" />

        
      </div>
    </section>
  );
}
