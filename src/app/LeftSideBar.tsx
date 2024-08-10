import React from "react";
import { Link } from "react-router-dom";
import albums from "@/app/albumdata";
import AlbumList from "@/app/albumlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBars, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import "@/app/icons.css";


export default function Sidebar() {
  return (
    <section className="w-1/4 p-2 pt-2 font-montserrat">
      
      <div className="h-28 bg-neutral-900 rounded-lg font-bold">
        <div className="flex pt-2">
          <a href="#">
            <FontAwesomeIcon
              icon={faHouse}
              className="text-neutral-500 w-6 h-6 ml-5 pt-4 hover-effect"
            />
          </a>
          <a
            href="/"
            className="ml-3 mt-4 hover-effect text-gray-400 font-ubuntu"
          >
            Home
          </a>
        </div>
        <div className="flex">
          <a href="#">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-neutral-500 w-6 h-6 ml-5 pt-4 hover-effect resize-none"
            />
          </a>
          <a href="#" className="ml-3 mt-5 hover-effect text-gray-400">
            Search
          </a>
        </div>
      </div>

      <div className="w-full bg-neutral-900 rounded-lg mt-2 h-[525px] custom-scrollbar overflow-x-hidden sticky top-0">
      
        <div className="flex pt-2">
          <a href="#">
            <FontAwesomeIcon
              icon={faRecordVinyl}
              className="text-neutral-500 w-6 h-6 ml-5 pt-5 hover-effect resize-none"
            />
          </a>
          <a
            href="#"
            className="ml-3 mt-5 hover-effect text-gray-400 font-bold"
          >
            Your Library
          </a>
          <div className="flex-grow"></div>
          <div className="flex">
            <a href="#">
              <FontAwesomeIcon
                icon={faPlus}
                className="text-neutral-500 w-6 h-6 pt-5 hover-effect ml-10 resize-none"
              />
            </a>
            <div className="w-[15px]"></div>
            <a href="#">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-neutral-500 w-6 h-6 pt-5 hover-effect mr-4 resize-none"
              />
            </a>
          </div>
        </div>

        <div className="pt-10 text-white w-full h-10 ml-5 flex space-x-2 items-center font-bold">
  <a
    href="#"
    className="hover-effect text-xs bg-neutral-700 rounded-full px-2 py-2 hover:bg-neutral-600"
  >
    Playlists
  </a>
  <a
    href="#"
    className="hover-effect text-xs bg-neutral-700 rounded-full px-2 py-2 hover:bg-neutral-600"
  >
    Albums
  </a>
  <a
    href="#"
    className="hover-effect text-xs bg-neutral-700 rounded-full px-2 py-2 hover:bg-neutral-600"
  >
    Artists
  </a>
  <a
    href="#"
    className="hover-effect text-xs bg-neutral-700 rounded-full px-2 py-2 hover:bg-neutral-600"
  >
    Downloaded
  </a>



</div>
<div></div>
        <div className="flex ">
        
          <a
            href="#"
            className="ml-6 hover-effect text-gray-400 flex justify-start mt-8"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4 resize-none" />
          </a>
          <div className="flex-grow"></div>
          <a
            href="#"
            className="flex items-center hover-effect text-gray-400 mr-4 mt-8"
          >
            <FontAwesomeIcon icon={faBars} className="w-4 h-4 mr-2 resize-none" />
            Recents
          </a>
        </div>
        <div >
        <AlbumList />
        </div>
      </div>
    </section>
  );
}
