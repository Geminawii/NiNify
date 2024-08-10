import React from 'react';
import Sidebar from './LeftSideBar';
import LeftSideBar from './LeftSideBar';
import './icons.css';
import '@fontsource/montserrat'; 
import MainContent from './MainContent';
import MusicPlayer from './musicplayer';



const Home = () => {
  return (
    <div className='max-h-screen'>
    <div className="flex bg-black h-screen">
      <Sidebar />
      <div className="mt-2 pr-2">
        <MainContent />
      </div>
      
    </div>
    <div>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Home;

