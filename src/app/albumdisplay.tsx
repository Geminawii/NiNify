import React from "react";
import albums from "./albumdata";

const Album = ({ album }) => {
  return (
    <div className="flex items-center my-4">
      <a href="#">
        <img
          src={album.cover}
          className="w-8 h-8 rounded-md ml-6"
          alt={`${album.album} cover`}
        />
      </a>
      <div className="text-white ml-3">
        <div>
          <h4 className="font-bold">{album.album}</h4>
        </div>
        <div>
          <p className="text-neutral-500">
            {album.type} . {album.artist}
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
