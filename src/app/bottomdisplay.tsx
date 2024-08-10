import React from "react";
import albums from "./albumdata";
import Link from "next/link";

const Display = ({ album }) => {
  return (
    <section className="flex flex-col items-center">
      <Link href={{
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
          className="w-36 h-36 rounded mb-2"
          alt={`${album.album} cover`}
        />
      </Link>
      <div className="text-neutral-500 w-36 text-center">
        <h3 className="text-white font-bold flex align-left">{`An ${album.albumdesc} for you`}</h3>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {`Only the best from ${album.artist}`}
        </p>
      </div>
    </section>
  );
};

const shuffleArray = (arr) => {
  let currentIndex = arr.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
};

const AlbumDrop = () => {
  const shuffledAlbums = shuffleArray([...albums]);

  const selectedAlbums = shuffledAlbums.slice(0, 7);

  return (
    <div className="grid grid-cols-7 gap-4">
      {selectedAlbums.map((album) => (
        <Display key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumDrop;
