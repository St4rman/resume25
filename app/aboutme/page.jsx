"use client";
import localFont from 'next/font/local';
import Model from "@/components/Model.jsx";

import { FaDiceD20 } from 'react-icons/fa';
import { FaPaintBrush } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { SiUnrealengine } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { FaNetworkWired } from 'react-icons/fa';
import { FaPeopleArrows } from 'react-icons/fa';
import { FaGun } from 'react-icons/fa6';

const test = [
"1", "2", "3"
];


const myfont = localFont({
  src: "../head.otf",
});



const AboutMe = () => {
  return (
    <>
      <div className={`${myfont.className} flex flex-col mt-10 mx-3 lg:mx-15 justify-center`}>
        <div className='text-3xl lg:text-7xl'>I AM A </div>
        <div className='text-5xl lg:text-9xl text-accent italic' >GAME PROGRAMMER</div>
      </div>
      
        <div className='flex justify-center align-top flex-col lg:flex-row mx-15'>
         <div className='min-w-l lg:min-w-xl'>
          <Model /> 
         </div>
          <div className='flex flex-col lg:px-1'>
              <div className='text-left my-3 '>
              * I am a UK based Gameplay Programmer, currently looking for work. I'm driven and skilled with Unreal <SiUnrealengine className='inline text-accent'/> and Unity <FaUnity className='inline text-accent'/>.
              </div>
              <div className='text-left my-3'>
              * During the past 3+ years of my career (that I spent between jambox games, Rockstar games, and as  VR gameplay programmer) I specialized in player facing features, gameplay programming & game design.
              </div>
              <div className='text-left my-3'>
              * During my offtime, I enjoy art <FaPaintBrush className='inline mb-2 text-accent'/>, TTRPGs and going on deep dives about coffee<FaCoffee className='inline mx-1 text-accent'/> on wikipedia. I also run a D&D <FaDiceD20 className='inline mb-2 text-accent'  />  campaign for a group of friends, which acts like a creative outlet and helps build community for myself. 
              </div>

               <div className='text-left my-3 '> * Currently Exploring:
              <ul className='list-["*"] text-accent-hover mx-3 my-3'>
                  <li className="mx-3 px-2">Networking and Steam integration in Unreal <FaNetworkWired className='inline'/> </li>
                  <li className="mx-3 px-2">Leadership and Effective Communication Skills <FaPeopleArrows className='inline'/></li>
                  <li className="mx-3 px-2">Fast Snappy physics based movement for FPS <FaGun className='inline'/></li>
                </ul>
              </div>
          </div>
        </div>
    

     
    </>
  )
}

export default AboutMe;
