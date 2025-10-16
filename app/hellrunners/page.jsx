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
          <div className="my-3 px-4 lg:px-6">
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
          </div>

          <h3 className="my-7 text-3xl">My Role:</h3>
          <div className="my-3 px-4 lg:px-6">
            <p className="my-5">Team Lead, Gameplay Programmer</p>
          </div>

          <h3 className="my-7 text-3xl">Video:</h3>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/FiafzASCHR8?si=T-wE75eOZbZDcCFw&amp;start=29"
          ></iframe>

          <h3 className="my-10 text-3xl">My Work:</h3>
          <p>Here is a list of features I worked on: </p>

          <ul className='list-["*"] text-accent-hover mx-3 my-3'>
            <li className="mx-3 px-2"> Core Physics</li>
            <li className="mx-3 px-2"> Level Generation Systems</li>
            <li className="mx-3 px-2">Core Gameflow System</li>
            <li className="mx-3 px-2">Input Manager, Player Locomotion</li>
            <li className="mx-3 px-2">Shaders, Post Processing</li>
            <li className="mx-3 px-2">Debug Features</li>
          </ul>

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

            <Link
              href="https://starman.hashnode.dev/hellrunners-post-mortem"
              target="_blank"
              className="w-full flex mx-3 px-3 my-y py-3 flex-row justify-center items-center"
            >
              <Button size={"xl"} shape={"round"}>
                {" "}
                Read About it in a blog <BsArrowUpRight className="mx-1" />
              </Button>
            </Link>
          </div>

          <h3 className="my-10 text-3xl">More Details:</h3>
          <p className="my-5">
            * This project done for a university group project had me wearing a
            fair few hats in terms of roles. As a core physics programmer, I{" "}
            <span className="text-accent">implemented collisions</span> for
            capsules, OBBs and the core player movement.
          </p>
          <p className="my-5">
            * Ground detection was also written by me. As a tools dev, I wrote a{" "}
            <span className="text-accent">unity tool</span> to export our levels
            into JSON which our C++ game then reads, and loads into itself.
          </p>

          <p className="my-5">
            * On the graphics side of things, all most all of the{" "}
            <span className="text-accent">shader work</span> in this project was
            written by me. UI, fire, speed lines and the lava are some
            standouts. Alongside that, general bug fixes and adding debug mode,
            there is a lot of meat of work on this project.{" "}
          </p>
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
    // <video
    //   width="auto"
    //   height="auto"
    //   autoPlay
    //   controls
    //   preload="auto"
    //   playsInline
    //   loop
    //   muted
    // >
    //   <source src="assets/videos/FinShow.mp4" type="video/mp4" />
    // </video>
    <iframe 
    src="https://www.youtube.com/embed/FiafzASCHR8?si=T-wE75eOZbZDcCFw&amp;start=29"
    loading="lazy"
    
    >

    </iframe>
  );
}