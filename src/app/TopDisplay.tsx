import React from "react";
import albums from "./albumdata";
import Link from "next/link";
import album from "./album/page";
import { URLSearchParams } from "url";

const Display = ({ album }) => {
  return (
    <section className="flex items-start">
      <div
        key={album.id}
        className="bg-neutral-700 rounded-lg flex items-center h-12 w-full pt-2 border border-opacity-50 hover:bg-neutral-600"
      >
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
          <img src={album.cover} className="w-12 h-12 rounded-l-lg mr-4 mb-2" />
        </Link>

        <div className="text-white mr-1 mb-2">
          <h4 className="font-extrabold text-xs break-words overflow-hidden text-ellipsis">
            {album.album}
          </h4>
        </div>
      </div>
    </section>
  );
};

const shuffleArray = (album) => {
  let currentIndex = albums.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [album[currentIndex], album[randomIndex]] = [
      album[randomIndex],
      album[currentIndex],
    ];
  }

  return album;
};

const AlbumList = () => {
  const shuffledAlbums = shuffleArray([...albums]);

  const selectedAlbums = shuffledAlbums.slice(0, 8);

  return (
    <div className="grid grid-cols-4 gap-2">
      {selectedAlbums.map((album) => (
        <Display key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;
