import React from "react";
import LeftSidebar from "../LeftSideBar";
import '@fontsource/montserrat';
import AlbumDetail from "./[albumid]/page";
import Sidebar from "./[albumid]/sidebar";
import MusicPlayer from "../musicplayer";

export default function display() {
  return (
    <section className="font-montserrat max-h-screen">
      <div className="flex h-screen bg-black flex-shrink-0">
        <Sidebar />
        <div className="mt-2 mr-2 flex-grow">
          <AlbumDetail />
        </div>
      </div>
      <MusicPlayer />
    </section>
  );
}

