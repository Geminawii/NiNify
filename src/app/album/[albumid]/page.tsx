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

// Function to generate a random number between 0 and 1,000,000
const getRandomPlays = () => Math.floor(Math.random() * 1000000);

export default function AlbumDetail() {
  const searchParams = useSearchParams();
  const album = searchParams.get("album");
  const cover = searchParams.get("cover");
  const year = searchParams.get("year");
  const artist = searchParams.get("artist");
  const type = searchParams.get("type");
  const tracks = JSON.parse(searchParams.get("tracks") || "[]");

  return (
    <section className="w-full px-4 pb-4 bg-neutral-900 rounded-md font-montserrat h-[645px] custom-scrollbar">
      <div className="flex justify-between items-center mt-3 sticky top-3">
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
          <img className="rounded-lg w-40 h-70 mr-4" src={cover} alt={album} />
          <div className="pt-8">
            <h2 className="text-sm mb-1 font-semibold">{type}</h2>
            <h2 className="text-7xl font-black mb-2 sticky">{album}</h2>
            <h3 className="font-bold mr-2">
              {artist} • {year}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-10 ml-2 space-x-4">
        <a href="#" className="bg-green-500 rounded-full p-4 flex items-center justify-center w-12 h-12">
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
          <p className="mr-40 text-gray-400">Plays</p>
          <div className="mr-14">
            <a>
              <FontAwesomeIcon icon={faClock} className="text-gray-400" />
            </a>
          </div>
        </div>

        <hr className="bg-gray-300" />

        <div className="tracks-container">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="flex items-center ml-6 py-2 font-semibold"
            >
              
              <p className="w-12 text-gray-400">{track.number}</p>
              <div className="flex-grow flex flex-col cursor-po">
                <a href="#"> <p>{track.name}</p> </a>
                <div className="flex items-center">
                  {/* this shit ugly af mehn {track.isExplicit && (
                    <div className="bg-gray-400 text-black rounded-sm w-4 h-4 flex items-center justify-center mr-2 fa-thin fa-e">
                      <FontAwesomeIcon icon={faE} />
                    </div>
                  )} */}
                  <a className="text-gray-500">{artist}</a>
                 
                </div>
                
              </div>
              <p className="w-24 text-right mr-40">{getRandomPlays()}</p>
              <p className="mr-14">{track.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
