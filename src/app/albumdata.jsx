
const albums = [
    {
      id: 1,
      artist: "Beyonce",
      album: "Renaissance",
      cover: "./beyonce.png",
      type: 'Album',
      albumdesc: 'Album',
      year: '2022',
      isExplicit: true,
      tracks: [
        { number: 1, name: "Heated", duration: "3:45", isExplicit: true, },
        { number: 2, name: "Energy", duration: "4:05", isExplicit: false, },
        { number: 3, name: "Pure/Honey", duration: "4:05", isExplicit: true, },
        { number: 4, name: "Summer Renaissance", duration: "4:05", isExplicit: true, },
        { number: 5, name: "Break My Soul", duration: "4:05" },
      ]
    },
    {
      id: 2,
      artist: "BTS",
      album: "Love Yourself: Tear",
      cover: "./bts.jpeg",
      type: 'Album',
      albumdesc: 'EP',
      year: '2019',
      
      tracks: [
        { number: 1, name: "Intro: Singularity", duration: "3:50", isExplicit: false, },
        { number: 2, name: "134340", duration: "4:15", isExplicit: false, },
        { number: 3, name: "Paradise", duration: "4:15", isExplicit: false, },
        { number: 4, name: "Love Maze", duration: "4:15", isExplicit: false, },
        { number: 5, name: "Outro: Tear", duration: "4:15", isExplicit: false, },
        
      ]
    },
    {
        id: 3,
        artist: "Asa",
        album: "Bed Of Stone",
        cover: "./asa.jpg",
        type: 'Album',
        albumdesc: 'Album',
        year: '2013',
        isExplicit: false,
        tracks: [
          { number: 1, name: "Satan Be Gone", duration: "3:50", isExplicit: false, },
          { number: 2, name: "Society", duration: "4:15", isExplicit: false, },
          { number: 3, name: "New Year", duration: "4:15", isExplicit: false,  },
          { number: 4, name: "Moving On", duration: "4:15", isExplicit: false, },
          { number: 5, name: "Situation", duration: "4:15", isExplicit: false, },
         
        ]
      },
      {
        id: 4,
        artist: "Asake",
        album: "Work Of Art",
        cover: "./asake.jpg",
        type: 'Album',
        albumdesc: 'Album',
        year: '2023',
      
        tracks: [
          { number: 1, name: "Mogbe", duration: "3:50", isExplicit: true, path: "/public/songs/Mogbe.mp3" },
          { number: 2, name: "Remember", duration: "4:15", isExplicit: false, },
          { number: 3, name: "2:30", duration: "4:15", isExplicit: false, },
          { number: 4, name: "Sunshine", duration: "4:15", isExplicit: false, },
          { number: 5, name: "Lonely At The Top", duration: "4:15", isExplicit: true, },
          
        ]
      },
      {
        id: 5,
        artist: "Red Velvet",
        album: "Summer Magic",
        cover: "./rv.jpg",
        type: 'Album',
        albumdesc: 'EP',
        year: '2019',
        isExplicit: false,
        tracks: [
          { number: 1, name: "Hit It!", duration: "3:50", isExplicit: false, },
          { number: 2, name: "Power Up", duration: "4:15", isExplicit: false, },
          { number: 3, name: "Mr. E", duration: "4:15", isExplicit: false, },
          { number: 4, name: "Blue Lemonade", duration: "4:15", isExplicit: false, },
          { number: 5, name: "With You", duration: "4:15", isExplicit: false, },
        ]
      },

      {
        id: 6,
        artist: "Raye",
        album: "21st Century Blues",
        cover: "./raye.jpg",
        type: 'Album',
        albumdesc: 'EP',
        year: '2023',
        isExplicit: true,
        tracks: [
          { number: 1, name: "Black Mascara", duration: "3:50", isExplicit: true, },
          { number: 2, name: "Hard Out Here", duration: "4:15", isExplicit: true, },
          { number: 3, name: "Escapism", duration: "4:15", isExplicit: true, },
          { number: 4, name: "Flip A Switch", duration: "4:15", isExplicit: true, },
          { number: 5, name: "Five Star Hotel", duration: "4:15", isExplicit: true, },
        ]
      },
      
      {
        id: 7,
        artist: "Rema",
        album: "Raves & Roses",
        cover: "./rema.jpeg",
        type: 'Album',
        albumdesc: 'Album',
        year: '2022',
        isExplicit: true,
        tracks: [
          { number: 1, name: "Wine", duration: "3:50", isExplicit: true, },
          { number: 2, name: "Addicted", duration: "4:15", isExplicit: true, },
          { number: 3, name: "Jo", duration: "4:15", isExplicit: false, },
          { number: 4, name: "Charm", duration: "4:15", isExplicit: true, },
          { number: 5, name: "Are You There?", duration: "4:15", isExplicit: true, },
        ]
      },

      {
        id: 8,
        artist: "Olivia Rodrigo",
        album: "Guts",
        cover: "./olivia.png",
        type: 'Album',
        albumdesc: 'Album',
        year: '2023',
        isExplicit: true,
        tracks: [
          { number: 1, name: "All-American BITCH", duration: "3:50", isExplicit: true, },
          { number: 2, name: "Bad Idea, Right?", duration: "4:15", isExplicit: true, },
          { number: 3, name: "Lacy", duration: "4:15", isExplicit: false, },
          { number: 4, name: "Love Is Embarrassing", duration: "4:15", isExplicit: true, },
          { number: 5, name: "Get Him Back!", duration: "4:15", isExplicit: false, },
        ]
      },

      {
        id: 9,
        artist: "Ariana Grande",
        album: "Sweetener",
        cover: "./ariana.png",
        type: 'Album',
        albumdesc: 'EP',
        year: '2018',
        isExplicit: false,
        tracks: [
          { number: 1, name: "no tears left to cry", duration: "3:50", isExplicit: false, },
          { number: 2, name: "goodnight n go", duration: "4:15", isExplicit: false, },
          { number: 3, name: "REM", duration: "4:15", isExplicit: false, },
          { number: 4, name: "an angel cried", duration: "4:15", isExplicit: false, },
          { number: 5, name: "Pete Davidson", duration: "4:15", isExplicit: false, },
        ]
      },
      
      {
        id: 10,
        artist: "Twice",
        album: "Formula Of Love: O+T=<3 ",
        cover: "./twice.jpg",
        type: 'Album',
        albumdesc: 'Album',
        year: '2021',
        isExplicit: false,
        tracks: [
          { number: 1, name: "Scientist", duration: "3:50", isExplicit: false, },
          { number: 2, name: "Cruel", duration: "4:15", isExplicit: false, },
          { number: 3, name: "Last Waltz", duration: "4:15", isExplicit: false, },
          { number: 4, name: "Moonlight", duration: "4:15", isExplicit: false, },
          { number: 5, name: "Icon", duration: "4:15", isExplicit: false, },
        ]
      },
      {
        id: 11,
        artist: "Chappel Roan",
        album: "The Rise and Fall of a Princess",
        cover: "./roan.jpg",
        type: 'Album',
        albumdesc: 'Album',
        year: '2023',
        isExplicit: true,
        tracks: [
          { number: 1, name: "Red Wine Supernova", duration: "3:50", isExplicit: true, },
          { number: 2, name: "Pink Pony", duration: "4:15", isExplicit: false, },
          { number: 3, name: "Casual", duration: "4:15", isExplicit: false, },
          { number: 4, name: "After Midnight", duration: "4:15", isExplicit: true, },
          { number: 5, name: "HOT TO GO!", duration: "4:15", isExplicit: false, },
        ]
      },
      {
        id: 12,
        artist: "Odeal",
        album: "Sundays At Zuri's",
        cover: "./saz.jpg",
        type: 'Album',
        albumdesc: 'EP',
        year: '2024',
        isExplicit: false,
        tracks: [
          { number: 1, name: "Sondela", duration: "3:50", isExplicit: false, },
          { number: 2, name: "Soh Soh", duration: "4:15", isExplicit: false, },
          { number: 3, name: "Onome", duration: "4:15", isExplicit: false, },
          { number: 4, name: "Free Me", duration: "4:15", isExplicit: false, },
        ]
      },
      {
        id: 13,
        artist: "Lisa",
        album: "Rockstar",
        cover: "./lisa.png",
        type: 'Album',
        albumdesc: 'EP',
        year: '2024',
        isExplicit: true,
        tracks: [
          { number: 1, name: "Rockstar", duration: "3:50", isExplicit: true, },
          { number: 2, name: "Rockstar (Extended Verson)", duration: "4:15", isExplicit: true, },
          { number: 3, name: "Rockstar (Sped Up)", duration: "4:15", isExplicit: true, },
          { number: 4, name: "Rockstar (Slowed Down)", duration: "4:15", isExplicit: true, },
          { number: 5, name: "Rockstar (Instrumental)", duration: "4:15", isExplicit: false, },
        ]
      },
      {
        id: 14,
        artist: "IVE",
        album: "Switch",
        cover: "./ive.png",
        type: 'Album',
        albumdesc: 'EP',
        year: '2024',
        isExplicit: false,
        tracks: [
          { number: 1, name: "HEYA!", duration: "3:50", isExplicit: false, },
          { number: 2, name: "Accendio", duration: "4:15", isExplicit: false, },
          { number: 3, name: "WOW", duration: "4:15", isExplicit: false, },
          { number: 4, name: "RESET", duration: "4:15", isExplicit: false, },
          { number: 5, name: "Blue Heart", duration: "4:15", isExplicit: false },
        ]
      },
      {
        id: 15,
        artist: "Harry Styles",
        album: "Fine Line",
        cover: "./harry.jpg",
        type: 'Album',
        albumdesc: 'Album',
        year: '2020',
        isExplicit: false,
        tracks: [
          { number: 1, name: "Watermelon Sugar", duration: "3:50", isExplicit: false, },
          { number: 2, name: "Golden", duration: "4:15", isExplicit: false, },
          { number: 3, name: "Sunflower Vol. 4", duration: "4:15", isExplicit: false, },
          { number: 4, name: "Adore You", duration: "4:15", isExplicit: false, },
          { number: 5, name: "Falling You", duration: "4:15", isExplicit: false, },
        ]
      },
      {
        id: 16,
        artist: "Red Velvet",
        album: "Cosmic",
        cover: "./cosmic.webp",
        type: 'Album',
        albumdesc: 'EP',
        year: '2024',
        isExplicit: false,
        tracks: [
          { number: 1, name: "Cosmic", duration: "3:50", isExplicit: false, },
          { number: 2, name: "Sunflower", duration: "4:15", isExplicit: false, },
          { number: 3, name: "Arcade", duration: "4:15", isExplicit: false, },
          { number: 4, name: "Night Drive", duration: "4:15", isExplicit: false, },
          { number: 5, name: "Bubble", duration: "4:15", isExplicit: false, },
        ]
      },
      {
        id: 17,
        artist: "RM",
        album: "Right Place, Wrong Person",
        cover: "./rm.png",
        type: 'Album',
        albumdesc: 'Album',
        year: '2024',
        isExplicit: true,
        tracks: [
          { number: 1, name: "LOST!", duration: "3:50", isExplicit: true, },
          { number: 2, name: "Nuts", duration: "4:15", isExplicit: true, },
          { number: 3, name: "Domodachi feat Little Simz", duration: "4:15" },
          { number: 4, name: "Groin", duration: "4:15", isExplicit: true, },
          { number: 5, name: "Around the world in a day feat Moses Sumney", duration: "4:15", isExplicit: false,},
        ]
      },
      {
        id: 18,
        artist: "Tems",
        album: "Born In The Wild",
        cover: "./tems.jpg",
        type: 'Album',
        albumdesc: 'Album',
        year: '2024',
        isExplicit: true,
        tracks: [
          { number: 1, name: "Love Me Jeje", duration: "3:50", isExplicit: false,},
          { number: 2, name: "Burning", duration: "4:15", isExplicit: false,},
          { number: 3, name: "Wickedest", duration: "4:15", isExplicit: false, },
          { number: 4, name: "You in My Face", duration: "4:15", isExplicit: false, },
          { number: 5, name: "T-Unit", duration: "4:15", isExplicit: false, },
        ]
      },
      {
        id: 19,
        artist: "Sza",
        album: "SOS",
        cover: "./sza.png",
        type: 'Album',
        albumdesc: 'Album',
        year: '2022',
        isExplicit: true,
        tracks: [
          { number: 1, name: "Nobody Gets Me", duration: "3:50", isExplicit: false, },
          { number: 2, name: "Kill Bill", duration: "4:15", isExplicit: true, },
          { number: 3, name: "Ghost In The Machine (feat Phoebe Bridgers)", duration: "4:15", isExplicit: false, },
          { number: 4, name: "Forgiveless feat Dirty Ol' Bastard", duration: "4:15", isExplicit: true, },
          { number: 5, name: "F2F", duration: "4:15", isExplicit: true, },
        ]
      },
      {
        id: 20,
        artist: "Day6",
        album: "Moonrise",
        cover: "/day6.jpg",
        type: 'Album',
        albumdesc: 'Album',
        year: '2017',
        isExplicit: false,
        tracks: [
          { number: 1, name: "Better Better", duration: "3:50", isExplicit: false, },
          { number: 2, name: "I like you", duration: "4:15", isExplicit: false, },
          { number: 3, name: "What can I Do", duration: "4:15", isExplicit: false, },
          { number: 4, name: "I'll try", duration: "4:15", isExplicit: false, },
          { number: 5, name: "I Need Somebody", duration: "4:15", isExplicit: false, },
        ]
      }
];
  
  
  export default albums;
  