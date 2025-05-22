"use client";
import { GiSevenPointedStar } from "react-icons/gi";
import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local';

const myfont = localFont({
  src: "../head.otf",
});

const Rockstar = () => {
  return (
    <div>
      <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
        <Image alt="" fill objectFit="cover" src="/assets/lsdwwide.jpg" />
      </div>
      <section className="flex flex-col justify-center py-12 xl:py-6 xl:px-6">
        <div className="container mx-auto lg:px-20 px-10">
          <div className="flex flex-row items-center">
            <span className=" flex justify-center items-center lg:text-5xl text-2xl">
              <GiSevenPointedStar />
            </span>
            <p
              className={`${myfont.className} lg:text-7xl text-4xl font-extrabold leading-none text-off-white px-4`}
            >
              Rockstar Games QA
            </p>
          </div>
          <p className="my-4 text-accent-hover">Dev QA, Online QA</p>
          <h3 className="my- 7 text-3xl">Description:</h3>
          <div className="my-3 px-4 lg:px-6">
            <p className="my-5">
              * Provided <span className="text-accent">Support QA </span> for
              many <span className="text-accent"> Online Rockstar </span>{" "}
              titles.
            </p>
            <p className="my-5">
              * Built games on many dev environments on{" "}
              <span className="text-accent">
                Playsation Dev Kit, XBX Dev Kit, PC
              </span>
              , VR and Mobile.
            </p>
            <p className="my-5">
              * Provided <span className="text-accent">Dev Support</span> with
              doubling back on exitsing bugs and providing new test cases for
              new bugs.
            </p>
          </div>
          <h3 className="my-10 text-3xl">Details:</h3>
          <div className="my-3 px-4 lg:px-6">
            <p className="my-5">
              * Provided Quality Assurance on the services, updates, live events
              on{" "}
              <span className="text-accent">
                GTA-VI, GTA-V, Read Dead Online
              </span>{" "}
              and many more. Worked with the Rockstar Lincoln team for synced
              QA, helped follow up on bugs, and test cases. Logged bugs and
              supported devs, providing clarity and test cases on persisting and
              new bugs.{" "}
            </p>
            <p className="my-5">
              * Worked with <span className="text-accent">PC</span> and current
              and last gen <span className="text-accent">Xbox</span> and
              <span className="text-accent"> PlayStation</span> console builds
              alongside mobile environments.
            </p>
            <p className="my-5">
              * Brought a technical outside the box thinking to the team and
              being a talented all-rounder that can be relied upon. Bought an
              in-depth understanding of the technical side of things that
              allowed different approaches to QA testing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rockstar