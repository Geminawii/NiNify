import React from "react";
import Sidebar from "./sidebar";
import '@fontsource/montserrat';
import ArtistDetail from "./[artistid]/page";
import MusicPlayer from "../musicplayer";

export default function display() {
  return (
    <section className="font-montserrat max-h-screen">
      <div className="flex h-screen bg-black flex-shrink-0">
        <Sidebar />
        <div className="mt-2 mr-2 flex-grow">
          <ArtistDetail />
        </div>
      </div>
      <MusicPlayer />
    </section>
  );
}
