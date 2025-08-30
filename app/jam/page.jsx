"use client"

import ProjGallery from "@/components/ProjGallery";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import SoulsGallery from "@/components/SoulsGallery";
import JamGallery from "@/components/JamGallery";

const myfont = localFont({
  src: "../head.otf",
});


const Gamejam = () => {
  return (
    <div>
      <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
        <Image alt="" fill objectFit="cover" src="/assets/pk.png" />
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
              Power Kills
            </p>
          </div>
          <p className="my-4 text-accent-hover">
            A top down Isometric action RPG made in unreal engine for the Kenney Jam 25, in 48 hours using Unreal Engine 5 and Blueprints. 
          </p>

          <div className="flex flex-row items-center">
            <span className=" flex justify-center items-center lg:text-2xl text-1xl">
              <GiSevenPointedStar />
            </span>
            <p
              className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
            >
              {" "}
              SoulsBorne Combat
            </p>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="my-3 px-4 lg:px-6 flex flex-col justify-center align-top">
              <p className="my-5">
                * A <span className="text-accent">Top Down Action RPG</span>{" "} created for the Kenney Jam in <span className="text-accent">72 hours</span>. Made for the theme "POWER" built with a team of another person.
              </p>
              <p className="my-5">
                * Featuring a top down isometric controller and {" "}
                <span className="text-accent">Combat based on power and its curroption</span>, built on blueprints and level based.{" "}
              </p>
              <p className="my-5">
                * <span className="text-accent">Data driven power </span>and stats, making it a puzzle as well as an action game. 
              </p>
            </div>
            <div className="px-5">
              <JamVideo />
            </div>
          </div>

          <div className=" pt-7 flex flex-col lg:flex-row justify-center items-center">
            <Link
              href="https://ishant4izard.itch.io/powerkills"
              target="_blank"
              className="w-full flex mx-3 px-3 my-y py-3 flex-row justify-center items-center"
            >
              <Button size={"xl"} shape={"round"}>
                {" "}
                Check out the Game! <BsArrowUpRight className="mx-1" />
              </Button>
            </Link>
          </div>
          <h3 className="my-3 text-1xl">Tech Used: </h3>
          <div className="my-3 px-4 lg:px-6">
            <p className="my-5">
              * Unreal Engine 5,{" "}
              <span className="text-accent">Blueprints</span>.
            </p>
            <p className="my-5">
              * Shader Programming, Anim notifies,  <span className="text-accent"> resource based weapon system. </span>{" "}
            </p>
            <p className="my-5">
              * <span className="text-accent">In universe UI</span> , and enemy spawns based on levels, <span className="text-accent">breakable environments </span>and multiple approaches to enemies. {" "}
            </p>
          </div>

          {/* <h3 className="my-3 text-1xl">Devlog:</h3>
          <div className="flex">
            <div className="w-1/2 m-1 bg-black/50 rounded-lg">
              <iframe
                className="w-full p-4 aspect-video"
                src="https://www.youtube.com/embed/aRxZbhFGuqA?si=1YGiHC-xiuQuTMB4"
              ></iframe>
            </div>
          </div> */}

          <h3 className="my-10 text-3xl">Gallery:</h3>
          <p className="text-off-white/50 font-thin">hover over the images!</p>

          <JamGallery />
        </div>
      </section>
    </div>
  )
}

export default Gamejam;


export function JamVideo() {
  return (
    <video
      width="auto"
      height="auto"
      autoPlay
      controls
      preload="auto"
      playsInline
      loop
      muted
    >
      <source src="assets/videos/PKS.mp4" type="video/mp4" />
    </video>
  );
}
