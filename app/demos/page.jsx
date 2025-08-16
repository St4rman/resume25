"use client";

import ProjGallery from "@/components/ProjGallery";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import SoulsGallery from "@/components/SoulsGallery";

const myfont = localFont({
  src: "../head.otf",
});

const Demos = () => {
  return (
    <div>
      <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
        <Image alt="" fill objectFit="cover" src="/assets/BannerSB.png" />
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
              Gameplay Demos
            </p>
          </div>
          <p className="my-4 text-accent-hover">Page for all of my gameplay demos, primarily made on UE5, using C++ and minimal blueprinting.</p>

            <div className="flex flex-row items-center">
            <span className=" flex justify-center items-center lg:text-2xl text-1xl">
              <GiSevenPointedStar />
            </span>
            <p
              className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
            > SoulsBorne Combat
            </p>
          </div>
          <div className="my-3 px-4 lg:px-6">
            <p className="my-5">
              * A <span className="text-accent">SoulsBorne inspired</span>{" "}
              combat system game, built in Unreal Engine 5 and gameplay Ability system.
            </p>
            <p className="my-5">
              * Featuring a modular data-based {" "}
              <span className="text-accent">Weapons System</span>,
              built to be extensible and Scalable.{" "}
            </p>
            <p className="my-5">
              * <span className="text-accent">State-tree based </span>boss behavior using EQS pawn sensing and more
            </p>
          </div>

           <div className="flex flex-col lg:flex-row justify-center items-center">
            <Link
              href="https://github.com/St4rman/Soulsborne"
              target="_blank"
              className="w-full flex mx-3 px-3 my-y py-3 flex-row justify-center items-center"
            >
              <Button size={"xl"} shape={"round"}>
                {" "}
                Check out the Source Code <BsArrowUpRight className="mx-1" />
              </Button>
            </Link>
          </div>
          <h3 className="my-3 text-1xl">Tech Used: </h3>
          <div className="my-3 px-4 lg:px-6">
             <p className="my-5">
              * Unreal Engine 5, Gameplay Ability System, State Based Enemy AI
            </p>
            <p className="my-5">* State Trees, EQS, Pawn Sensing, AITasks, AIDecorators, AIServices </p>
            <p className="my-5">* Modular Weapon System, Inventory components, Gameplay Ability Tags, Gameplay Cues, Attribute Sets </p>
            
          </div>

          <h3 className="my-3 text-1xl">Video:</h3>
          <div className="flex">
            <div className="w-1/2 m-1 bg-black/50 rounded-lg">
            <iframe className="w-full p-4 aspect-video" src="https://www.youtube.com/embed/luivj8L2OSE?si=f6J3FYejPao4hAmO"></iframe>
            </div>
          <div className="w-1/2 m-1 bg-black/50 rounded-lg">
            <iframe
            className="w-full p-4 aspect-video"
            src="https://www.youtube.com/embed/aRxZbhFGuqA?si=1YGiHC-xiuQuTMB4"></iframe>
            </div>
          
          </div>

         <h3 className="my-10 text-3xl">Gallery:</h3>
          <p className="text-off-white/50 font-thin">hover over the images!</p>
          
            <SoulsGallery />
        </div>
      </section>
    </div>
  );
};

export default Demos;
