"use client";
import localFont from 'next/font/local';
import Model from "@/components/Model.jsx";

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
              * I am a UK based Gameplay Programmer, currently looking for work. I'm driven and skilled with Unity, and Unreal.
              </div>
              <div className='text-left my-3'>
              * During the past 3+ years of my career (that I spent between jambox games, Rockstar games, and as  VR gameplay programmer) I specialized in player facing features, gameplay programming & game design.
              </div>
              <div className='text-left my-3'>
              * During my offtime, I enjoy art, TTRPGs and going on deep dives about coffee on wikipedia at 5AM. 
              </div>
          </div>
        </div>
    

     
    </>
  )
}

export default AboutMe;
