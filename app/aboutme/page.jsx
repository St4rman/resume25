"use client";
import localFont from 'next/font/local';

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
      <div className='flex flex-col justify-end items-end my-10'>
        <div className='max-w-3/4 lg:max-w-3/5 text-left my-3 px-5 lg:mx-20 lg:px-20'>
          I am a UK based Indian Gameplay Programmer, currently looking for work. I'm driven and skilled with Unity, and Unreal.
        </div>
        <div className='max-w-3/4 lg:max-w-3/5 text-left my-3 px-5 lg:mx-20 lg:px-20'>
          During the past 3+ years of my career (that I spent between jambox games, Rockstar games, and as  VR gameplay programmer) I specialized in player facing features, gameplay programming & game design.
        </div>
        <div className='max-w-3/4 lg:max-w-3/5 text-left my-3 px-5 lg:mx-20 lg:px-20'>
          During my offtime, I enjoy art, TTRPGs and going on deep dives about coffee on wikipedia at 5AM. 
        </div>
      </div>
    </>
  )
}

export default AboutMe;
