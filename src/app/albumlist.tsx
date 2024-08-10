import React from "react";
import albums from "./albumdata";
import Link from "next/link";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Album = ({ album }) => {
  return (
    <div className="flex items-center my-4">
      <Link
      
    href={{
        pathname: "/album",
        query: {
          id: album.id,
          artist: album.artist,
          album: album.album,
          cover: album.cover,
          type: album.type,
          year: album.year,
          explicit: album.isExplicit,
          tracks: JSON.stringify(album.tracks),
        },
      }}
    >
        <img
          src={album.cover}
          className="w-12 h-12 rounded-md ml-6"
          alt={`${album.album} cover`}
        />
      </Link>
      <div className="text-white ml-3">
        <div>
          <h4 className="font-bold text-sm">{album.album}</h4>
        </div>
        <div>
          <p className="text-neutral-500 flex items-center text-sm">
            {album.albumdesc}
            <FontAwesomeIcon icon={faCircleDot} className="w-1 h-1 mx-1" />
            {album.artist}
          </p>
        </div>
      </div>
    </div>
  );
};

const AlbumList = () => {
  return (
    <div className="album-list">
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;
