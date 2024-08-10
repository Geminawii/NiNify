import React from "react";
import artists from "./artistdata";
import albums from "./albumdata";
import Link from "next/link";

const ArtistCard = ({ artist, album }) => {
  return (
    <section className="flex flex-col items-center">
      <Link
          href={{
            pathname: "/artist",
            query: {
              id: artist.id,
              name: artist.name,
              cover: artist.cover,
              
            },
          }}
    >
        <img
          src={artist.cover}
          className="w-36 h-36 rounded mb-2"
          alt={`Cover of ${artist.name}`}
        />
      </Link>
      <div className="text-neutral-500 w-36 text-center">
        <h3 className="text-white font-bold flex align-left">{`This is ${artist.name}`}</h3>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {`Only the best from ${artist.name}`}
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

const ArtistDisplay = () => {
  const shuffledArtists = shuffleArray([...artists]);

  const selectedArtists = shuffledArtists.slice(0, 7);

  return (
    <div className="grid grid-cols-7 gap-4">
      {selectedArtists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistDisplay;
