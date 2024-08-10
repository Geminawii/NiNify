import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBell,
  faUserGroup,
  faN,
} from "@fortawesome/free-solid-svg-icons";
import "./icons.css";
import AlbumList from "./TopDisplay";
import AlbumDrop from "./bottomdisplay";
import ArtistDisplay from "./artistdisplay";

const MainContent = () => {
  return (
    <section className="w-full px-4 pb-4 bg-neutral-900 rounded-md font-montserrat h-[645px] custom-scrollbar">
  <div className="bg-neutral-900 rounded-none w-full sticky top-0 border-gray-300">
      <div className="flex justify-between items-center mt-3 sticky top-2">
        <div className="flex items-center ">
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
      
      <div className="flex items-center pt-5 font-bold pb-8">
        <a
          href="#"
          className="hover-effect text-xs bg-neutral-700 rounded-full p-2 hover:bg-neutral-600 mr-2"
        >
          All
        </a>
        <a
          href="#"
          className="hover-effect text-xs bg-neutral-700 rounded-full p-2 hover:bg-neutral-600 mr-2"
        >
          Music
        </a>
        <a
          href="#"
          className="hover-effect text-xs bg-neutral-700 rounded-full p-2 hover:bg-neutral-600 mr-2"
        >
          Podcasts
        </a>
      </div>
      </div>

      <AlbumList />

      <div className="bg-neutral-900">
        <h3 className="text-2xl font-bold mt-12 mb-8">Made For Nini</h3>
       <AlbumDrop/>

        <h3 className="text-2xl font-bold mt-12 mb-8">Best of artists</h3>
       <ArtistDisplay />
      </div>
    </section>
  );
};

export default MainContent;
