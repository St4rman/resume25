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


const Jambox = () => {
  return (
    <div>
          <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
            <Image alt="" fill objectFit="cover" src="/assets/jbx.png" />
          </div>
          <section className="flex flex-col justify-center py-12 xl:py-6 xl:px-6">
            <div className="container mx-auto lg:px-20 px-10">
              <div className="flex flex-row items-center">
                <span className=" flex justify-center items-center lg:text-5xl text-2xl">
                  <GiSevenPointedStar />
                </span>
                <WordsPullUp
                                          text="Jambox Games"
                                          className={`${myfont.className} lg:text-7xl text-4xl font-extrabold leading-none text-off-white px-4`}
                                        ></WordsPullUp>
              </div>
              <TextFade>
              <p className="my-4 text-accent-hover">Gameplay Programmer, C#, Unity</p>
              <h3 className="my- 7 text-3xl">Description:</h3></TextFade>
              <div className="my-3 px-4 lg:px-6">
                <TextFade>
                <p className="my-5">
                  * Acted as a <span className="text-accent">Gameplay Programmer</span> at an Indie company On Unity targeting mobile. 
                </p>
                <p className="my-5">
                  * Worked on <span className="text-accent"> Asynchoronous PVP Multiplayer Gameplay features </span>, incudling: Powerups, Currency System and Sound System.
                </p>
                <p className="my-5">
                  * Worked on Tools for devs using our SDKs.
                </p></TextFade>
              </div>
              <TextFade>
              <h3 className="my-10 text-3xl" >My Work:</h3>
              <p>Here is a list of features I worked on- </p></TextFade>

              <ul className='list-["*"] text-accent-hover mx-3 my-3'>
                <TextFade>
                  <li className='mx-3 px-2'> Player Powerups</li>
                  <li className='mx-3 px-2'> Data Based Level Generation</li>
                  <li className='mx-3 px-2'> Sound System</li>
                  <li className='mx-3 px-2'> Player Reward generation</li>
                  <li className='mx-3 px-2'> Gameplay Prototyping</li></TextFade>
                </ul>
                <TextFade>
              <h3 className="my-10 text-3xl">Details:</h3></TextFade>
              <div className="my-3 px-4 lg:px-6">
                <TextFade>
                 <p className="my-5">
                    * Worked on a{" "}
                    <span className="text-accent">
                      flexible content generation{" "}
                    </span>{" "}
                    system that allowed for a 100% increase in content creation
                    efficiency for our game.
                  </p>

                  <p className="my-5">
                    * Personally went through every stage of SDLC for two company
                    products.
                  </p>

                  <p className="my-5">
                    * Wrote{" "}
                    <span className="text-accent">
                      unit tests, helper classes and performed regression{" "}
                    </span>
                    testing on many of our flagship tools. Performed Regression,
                    Smoke and Various other types of testing. Wrote{" "}
                    <span className="text-accent">gameplay features </span> that
                    derived off existing content, and wrote an audio player
                    class to allow for sound management in game.
                  </p>

                  <p className="my-5">
                    * Pitched multiple game ideas to product head and got feedback
                    and design critique, and designed the core gameplay loop of
                    the latest game.
                  </p></TextFade>
              </div>
            </div>
          </section>
        </div>
  )
}

export default Jambox