"use client";
import { GiSevenPointedStar } from "react-icons/gi";
import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local';
import { WordsPullUp } from "@/components/word-pull-up";
import { TextFade } from "@/components/TextFade";

const myfont = localFont({
  src: "../head.otf",
});

const VRexp = () => {
  return (
    <div>
      <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
        <Image alt="" fill objectFit="cover" src="/assets/UnityVR.jpg" />
      </div>
      <section className="flex flex-col justify-center py-12 xl:py-6 xl:px-6">
        <div className="container mx-auto lg:px-20 px-10">
          <div className="flex flex-row items-center">
            <span className=" flex justify-center items-center lg:text-5xl text-2xl">
              <GiSevenPointedStar />
            </span>
             <WordsPullUp
                          text="VR GAME PROGRAMMER"
                          className={`${myfont.className} lg:text-7xl text-4xl font-extrabold leading-none text-off-white px-4`}
                        ></WordsPullUp>
          </div>
          <TextFade>
          <p className="my-4 text-accent-hover">Core Tech Programmer</p>
          <h3 className="my- 7 text-3xl">Description:</h3>
          </TextFade>
          <div className="my-3 px-4 lg:px-6">
            <TextFade>
              
             <p className="my-5">
              * Worked as the <span className="text-accent">Core tech Programmer</span> for
              Newcastle University for a VR title <span className="text-accent"> Targeting Meta Quest VR </span>{" "}
              built on Unity and SteamVR.
            </p> 
             <p className="my-5">
              * Built the stucture and systems from ground up including {" "}
              <span className="text-accent">
                Gameflow, Player Controller, Event Triggering
              </span>
              , to be extensible and Modular. 
            </p> 
            </TextFade>
          </div>
          <TextFade>
          <h3 className="my-10 text-3xl">Details:</h3></TextFade>
          <div className="my-3 px-4 lg:px-6">
            <TextFade>
            <p className="my-5">
              * Developed a modular <span className="text-accent">Data Driven Game Event system</span> for in game responses to character movement and interactions
              on which allowed future development by both code and non-code teammates.
            </p>
            <p className="my-5">
              * Implemented full VR 3D <span className="text-accent">character movement, with a both Discrete and Continuous movement mode</span>, with the Meta controllers, allowing for
a tight and intuitive player controls.
            </p>
            <p className="my-5">
              * Developed <span className="text-accent">Player Interaction like clicking buttons</span>, interacting with physics objects in VR allowing for dynamic gameplay events to trigger.
Allowed for non programmers to add content 2x fast
            </p>
            <p className="my-5">
              * Optimized HDRP rendering for Meta Quest 3, enhancing performance and visual quality for VR experiences.
            </p>
            <p className="my-5">
              * Wrote and maintained Tech Documentation for building and code analysis
            </p>
            
            </TextFade> 
          </div> 
        </div>
      </section>
    </div>
  );
}

export default VRexp