"use client";

import ProjGallery from "@/components/ProjGallery";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import SoulsGallery from "@/components/SoulsGallery";
import JamGallery from "@/components/JamGallery";
import { TextFade } from "@/components/TextFade";
import { WordsPullUp } from "@/components/word-pull-up";

const myfont = localFont({
  src: "../head.otf",
});

const LimitBreak = () => {
  return (
    <div>
      <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
        <Image alt="" fill objectFit="cover" src="/assets/lmbbg.png" />
      </div>
      <section className="flex flex-col justify-center py-0 xl:py-6 xl:px-6">
        <div className="container mx-auto lg:px-20 px-10">
          <div className="flex flex-row items-center">
            <span className=" flex justify-center items-center lg:text-5xl text-2xl">
              <GiSevenPointedStar />
            </span>
            <WordsPullUp
              text="Limit Break Mentorship"
              className={`${myfont.className} lg:text-7xl text-4xl font-extrabold leading-none text-off-white px-4`}
            ></WordsPullUp>
          </div>
          <TextFade>
            <p className="my-4 text-accent-hover">
              Worked with limit break as a Programmer mentee. Over the course of
              6+ months, learning and improving my tech programmer skills in
              unreal, and my tech lead soft skills.
            </p>
          </TextFade>

          <div className="flex flex-row items-center">
            <TextFade className="flex flex-row items-center">
              <span className=" flex justify-center items-center lg:text-2xl text-1xl">
                <GiSevenPointedStar />
              </span>
              <p
                className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
              >
                {" "}
                Summary
              </p>
            </TextFade>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="my-3 px-4 lg:px-6 flex flex-col justify-center align-top">
              <TextFade>
                <p className="my-5">
                  * Worked with Game Industry Veterans {" "}
                  <span className="text-accent">
                    as a Gameplay Programming Mentee
                  </span>
                  , working on hard skills like {" "}
                  <span className="text-accent">
                     C++, Unreal Engine,
                  </span> and soft skills like {" "}
                  <span className="text-accent">
                    Tech Architecture, and milestone management. 
                  </span>
                </p>
                <p className="my-5">
                  * Held monthly review calls with my mentor to analyse {" "}
                  <span className="text-accent">technical milestones</span> and futher upskilling.
                </p>
              </TextFade>

              <TextFade>
              <h3 className="my-10 text-3xl">Technical Skills:</h3>
              </TextFade>

              <div className="flex flex-row">
                <ul className='list-["*"] text-accent-hover mx-3 my-3'>
                  <TextFade>
                  <li className="mx-3 px-2"> Unreal Engine, C++ and Blueprints</li>
                  <li className="mx-3 px-2"> Gameplay Ability System</li>
                  <li className="mx-3 px-2"> Multiplayer Gameplay programming</li>
                  </TextFade>
                </ul>
                <ul className='list-["*"] text-accent-hover mx-3 my-3'>
                  <TextFade>
                  <li className="mx-3 px-2">
                    Replicated code, RPC, OnRep etc
                  </li>
                  <li className="mx-3 px-2">Gameplay Tags, Events, Abilities</li>
                  <li className="mx-3 px-2">UI Programming</li>
                  </TextFade>
                </ul>
              </div>



              <TextFade>
              <h3 className="my-10 text-3xl">Additional Skills:</h3>
              </TextFade>

              <div className="flex flex-row">
                <ul className='list-["*"] text-accent-hover mx-3 my-3'>
                  <TextFade>
                  <li className="mx-3 px-2"> Personal Milestone Management</li>
                  <li className="mx-3 px-2"> Prototype Analysis </li>
                  </TextFade>
                </ul>
                <ul className='list-["*"] text-accent-hover mx-3 my-3'>
                  <TextFade>
                  <li className="mx-3 px-2">
                    Tech System Architecture
                  </li>
                  <li className="mx-3 px-2">Project Planning</li>
                  </TextFade>
                </ul>
              </div>





            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LimitBreak;
