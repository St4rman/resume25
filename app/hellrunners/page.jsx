"use client";

import ProjGallery from "@/components/ProjGallery";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const myfont = localFont({
  src: "../head.otf",
});

const Hellrunners = () => {
  return (
    <div>
      <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
        <Image alt="" fill objectFit="cover" src="/assets/hellrunners.png" />
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
              Hellrunners{" "}
            </p>
          </div>
          <p className="my-4 text-accent-hover">C++, FPS, Tech Lead</p>
          <h3 className="my- 7 text-3xl">Description:</h3>
          <div className="my-3 px-4 lg:px-6 flex flex-col lg:flex-row justify-center">
            <div className="basis-1/3 px-3">
              <div className="flex flex-col justify-center">
                <p className="my-5">
                  * A <span className="text-accent">multiplayer FPS</span>{" "}
                  speedrunning game, built in C++ and OpenGL in 8 weeks.
                </p>
                <p className="my-5">
                  * Built with an emphasis on{" "}
                  <span className="text-accent">movement, tight controls</span>,
                  responsive gameplay and smooth multiplayer upto{" "}
                  <span className="text-accent">8 players</span>.
                </p>
                <p className="my-5">
                  * <span className="text-accent">Data Driven </span> level
                  generation.
                </p>
                <Link
                  href="https://starman.hashnode.dev/hellrunners-post-mortem"
                  target="_blank"
                  className="w-full flex mx-3 px-3 my-y py-3 flex-row justify-center items-center"
                >
                  <Button size={"xl"} shape={"round"}>
                    {" "}
                    Hellrunners Post Mortem <BsArrowUpRight className="mx-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="basis-2/3">
              <HellVideo />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div>
              <h3 className="my-10 text-3xl">My Work:</h3>
              <div className="flex flex-row">
                <ul className='list-["*"] text-accent-hover mx-3 my-3'>
                  <li className="mx-3 px-2"> Core Physics</li>
                  <li className="mx-3 px-2"> Level Generation Systems</li>
                  <li className="mx-3 px-2">Core Gameflow System</li>
                </ul>
                <ul className='list-["*"] text-accent-hover mx-3 my-3'>
                  <li className="mx-3 px-2">
                    Input Manager, Player Locomotion
                  </li>
                  <li className="mx-3 px-2">Shaders, Post Processing</li>
                  <li className="mx-3 px-2">Debug Features</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="my-7 text-3xl">My Role:</h3>
              <div className="my-3 px-4 lg:px-6">
                <p className="my-5"><span className="text-accent">Team Lead, Gameplay Programmer</span></p>
              </div>
            </div>
          </div>
          <h3 className="my-10 text-3xl flex lg:flex-col">More Details:</h3>
          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Physics, Collisions, Player Controller
          </h4>
          <p className="my-5 text-justify">
            * This project done for a university group project had me wearing a
            fair few hats in terms of roles. As a core physics programmer, I{" "}
            <span className="text-accent">implemented collisions</span> for
            capsules, OBBs and the core player movement.
          </p>

          <p className="my-5 text-justify">
            * I decided our player was going to be a <span className="text-accent">capsule</span>, and that our
            platforms would be require to be rotated, so they would be <span className="text-accent">OBBs</span>. So
            deciding this earlier meant that I could add support for these early
            on, and make sure the collisions were working well. Since all our
            <span className="text-accent"> collisions were over the server</span>, I did not need to many adjustments
            for player vs player collision. <span className="text-accent">Ground detection</span> was also written by
            me.
          </p>

          <div className="flex flex-col justify-center items-center">
            <img
              className="h-auto lg:max-w-7/10 rounded-lg"
              src="/assets/code/CapvsObb.png"
              alt=""
            />
            <p className="text-off-white/50 font-thin">
              The capsule vs OBB interaction, we move the OBB into local space
            </p>
            <p className="text-off-white/50 font-thin">
              and then call a Capsule AABB test on that
            </p>
          </div>
          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Tools, Level Generation
          </h4>
          <p className="my-5 text-justify">
            * To make level design easier, I wrote a <span className="text-accent">data driven level
            generation system</span> that allows us to load in levels easily from a
            tool. We decided that using unity as a visual tool to allow people
            to easily generate levels and have them show up on our project.
          </p>
          <p className="my-5 text-justify">
            * As shown on the chart below, we take the level data from the unity
            scene where we place our cubes, traps, obstacles and such, and then
            move it to a massive struct that is then exported out to a JSON.
            Since the more flexibility you give your Designers the better, we
            essentially take every single detail of object and track it in the
            JSON. Then the relatively non required and non replicated things can
            be sorted out from C++ side.
          </p>

          <div className="flex flex-col justify-center items-center">
            <img
              className="h-auto lg:max-w-6/10 rounded-lg"
              src="/assets/code/LevelGen.png"
              alt=""
            />
            <p className="text-off-white/50 font-thin">
              Data flow from unity scene to our in-game scene for level
              generation
            </p>
          </div>
          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Shader Work
          </h4>
          <p className="my-5">
            * On the graphics side of things, all most all of the{" "}
            <span className="text-accent">shader work</span> in this project was
            written by me. UI, fire, speed lines and the lava are some
            standouts. Alongside that, general bug fixes and adding debug mode,
            there is a lot of meat of work on this project.{" "}
          </p>

          <div className="flex flex-col justify-center items-center">
            <iframe
              className="aspect-video"
              width="60%"
              allow="autoplay"
              height="auto"
              src="https://www.youtube.com/embed/FiafzASCHR8?si=T-wE75eOZbZDcCFw&amp;start=29?autoplay=1&showinfo=0"
              loading="lazy"
            ></iframe>
          </div>

          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Additional Tooling
          </h4>
          <p className="my-5">
            * Half-way through the project, we were experiencing a lot of
            micro-stutters and low FPS. We did not know if this was a networking
            bottleneck, a memory one, or a graphics one.
          </p>

          <p className="my-5">
            * To help with that, I ended up implementing a Debug tool, with the following features; FPS count, Level Generation & Physics Update, Current CPU, GPU usage, Collision Counts, and Camera Debug info. 
          </p>

           <div className="flex flex-col justify-center items-center">
            <img
              className="h-auto lg:max-w-6/10 rounded-lg"
              src="/assets/code/DebugInfo.png"
              alt="Debug Information being displayed on the screen"
            />
            <p className="text-off-white/50 font-thin">
              Debug Information being displayed on the screen
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Link
              href="https://github.com/The-Newcastle-Gang/SpeedFun"
              target="_blank"
              className="w-full flex mx-3 px-3 my-y py-3 flex-row justify-center items-center"
            >
              <Button size={"xl"} shape={"round"}>
                {" "}
                Check out the Source Code <BsArrowUpRight className="mx-1" />
              </Button>
            </Link>
          </div>

          <h3 className="my-10 text-3xl">Gallery:</h3>
          <p className="text-off-white/50 font-thin">hover over the images!</p>
          <ProjGallery />
        </div>
      </section>
    </div>
  );
};

export default Hellrunners;

export function HellVideo() {
  return (
    <iframe
      className="aspect-video"
      width="85%"
      allow="autoplay"
      height="auto"
      src="https://www.youtube.com/embed/FiafzASCHR8?si=T-wE75eOZbZDcCFw&amp;start=29?autoplay=1&showinfo=0"
      loading="lazy"
    ></iframe>
  );
}



const Code1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      {code1.map((img, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <div
              className="
                    transition delay-150 duration-300
                    ease 
                    hover:opacity-100 opacity-0 
                    absolute bg-black/30 px-10 py-10 rounded-lg backdrop-blur-lg"
            >
              {" "}
            </div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img.src}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};
