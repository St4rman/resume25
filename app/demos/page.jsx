"use client";

import ProjGallery from "@/components/ProjGallery";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import SoulsGallery from "@/components/SoulsGallery";
import { TextFade } from "@/components/TextFade";
import { WordsPullUp } from "@/components/word-pull-up";

const myfont = localFont({
  src: "../head.otf",
});

const code1 =[
      {
        src: "/assets/code/Attack1.png",
    },
    {
        src: "/assets/code/Attack2.png",

    },]

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
            <WordsPullUp
            text="Project Borne"
            className={`${myfont.className} lg:text-7xl text-4xl font-extrabold leading-none text-off-white px-4`}
            >
            </WordsPullUp>
          </div>
          <TextFade>
          <p className="my-4 text-accent-hover">
            Page for all of my gameplay demos, primarily made on UE5, using C++
            and minimal blueprinting.
          </p>
          </TextFade>
          <div className="flex flex-row items-center">
            <TextFade>
            <span className=" flex justify-center items-center lg:text-2xl text-1xl">
              <GiSevenPointedStar />
            </span>
            </TextFade>
            <TextFade>
            <p className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
            >
              {" "}
              SoulsBorne Combat
            </p>
            </TextFade>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="my-3 px-4 lg:px-6 flex flex-col justify-center align-top">
              <TextFade>
              <p className="my-5">
                * A <span className="text-accent">SoulsBorne inspired</span>{" "}
                combat system game, built in Unreal Engine 5 and gameplay
                Ability system.
              </p>
              <p className="my-5">
                * Featuring a modular data-based{" "}
                <span className="text-accent">Weapons System</span>, built to be
                extensible and Scalable.{" "}
              </p>
              <p className="my-5">
                * <span className="text-accent">State-tree based </span>boss
                behavior using EQS pawn sensing and more
              </p>
              </TextFade>
            </div>
            <TextFade>
            <div className="px-5">
              <Video />
            </div>
            </TextFade>
          </div>

          <div className=" pt-7 flex flex-col lg:flex-row justify-center items-center">
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
            <TextFade>
            <p className="my-5">
              * Unreal Engine 5,{" "}
              <span className="text-accent">Gameplay Ability System</span>,
              State and Behavior Tree
            </p>
            <p className="my-5">
              * State Trees, EQS, Pawn Sensing, AITasks, AIDecorators,
              AIServices for <span className="text-accent"> Boss AI </span>{" "}
            </p>
            <p className="my-5">
              * <span className="text-accent">Modular Weapon System</span> ,
              Inventory components, Gameplay Ability Tags, Gameplay Cues,
              Attribute Sets{" "}
            </p>
            </TextFade>
          </div>

         

          <h3 className="my-10 text-3xl">Details:</h3>
          <TextFade>
          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Gameplay Ability System, Gameplay Attributes and GAS
          </h4>
          <p className="my-5 text-justify">
            * Like in other souls games, players have{" "}
            <span className="text-accent">attributes</span> like stamina,
            health. These are hooked up to wepaons and abilities, taking in and
            getting damaged, with passives allowing build up. This allows each
            weapon to ask for different stats, like heavy weapons swing slower
            and ask for more stamina, etc. This makes each weapon more unique.
          </p>

          <p className="my-5 text-justify">
            * <span className="text-accent">Unreal GAS </span> offered a good
            system solution for this, allowing for easy but detailed solutions,
            for abilities, and attributes. For example, the dodge is an ability,
            which provides us with a gameplay attribute pre check, to{" "}
            <span className="text-accent">
              {" "}
              check if we have the stamina to execute the dodge
            </span>
            , and can do that based on different conditions.
          </p>
          </TextFade>
          <TextFade>
          <div className="flex flex-col justify-center items-center">
            
            <img
              className="h-auto lg:max-w-7/10 rounded-lg"
              src="/assets/code/DodgeAbility.png"
              alt=""
            />
            <p className="text-off-white/50 font-thin">
              ActivateAbility method that gets called when you press the dodge
              button,
            </p>
            <p className="text-off-white/50 font-thin">
              executed on the Gameplay Ability Component
            </p>
          </div>
          </TextFade>
            <TextFade>
          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Stat based Weapon System
          </h4>
          <p className="my-5 text-justify">
            * Weapons are categorised in many different categories, and making
            new weapons is easy. Theyre based on a base wepaon class which
            allows each weapon to define its own set of parameters and allows us
            to decouple the requirements and damage from the GAS and have the
            weapons define it.
          </p>
          </TextFade>


         <div className="flex lg:flex-row flex-col">
              <div className="px-2">
                <WeaponsVideo />
              </div>
            <div className="my-3 px-4 lg:px-6 flex flex-col justify-center align-top">
              <TextFade>
              <p className="my-5  text-justify">
                * Different weapons can have a different <span className="text-accent">Stamina, Damage</span>{" "}
                Stat values that changes how you play.
              </p>
              <p className="my-5  text-justify">
                * Since all of these are esentially children of a same base weapon these are{" "}
                <span className="text-accent">easily extensible</span>, built to be
                scalable.{" "}
              </p>
              </TextFade>
            </div>
          </div>
         
          
          <TextFade>
          <p className="my-5 text-justify">
            * This lets us create varied weapons based on different animations
            and stat requirements and damage. It gives weapons unique movesets
            but also make the core functionality easy.
          </p>
          </TextFade>
          <div className="flex flex-col items-center">
            <div className="flex flex-col lg:flex-row ">
              <TextFade>
              <Code1 />
              </TextFade>
            </div>
            <p className="text-off-white/50 font-thin">
              Attack function, an ability taking in the stats, and the cost and speed of the weapons
            </p>
            <p className="text-off-white/50 font-thin">
              to determine if you can attack and with how much damage
              </p>
          </div>

          <TextFade>
          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Enemy AI, EQS, and State Machine
          </h4>
          <p className="my-5 text-justify">
            * Built using behavior trees, EQS, pawn sensing, custom queries, services and tasks. Bosses have randomness, but also pattern based behaviors. This allows them to feel learnable but also vary up their strategies.
          </p>
          </TextFade>
          <TextFade>
           <h3 className="my-3 text-1xl">Devlog:</h3>
          <div className="flex items-center">
            <div className="w-1/2 m-1 bg-black/50 rounded-lg">
              <iframe
                className="w-full p-4 aspect-video"
                src="https://www.youtube.com/embed/aRxZbhFGuqA?si=1YGiHC-xiuQuTMB4"
              ></iframe>
            </div>
          </div>
          </TextFade>

          <TextFade>
          <h3 className="my-10 text-3xl">Gallery:</h3>
          <div className="flex justify-items-center align-items-center min-w-vw">
            <p className="text-off-white/50 font-thin">
              hover over the images!
            </p>
          </div>
          </TextFade>

          <SoulsGallery />
        </div>
      </section>
    </div>
  );
};

export default Demos;

export function Video() {
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
      <source src="assets/videos/FinShow.mp4" type="video/mp4" />
    </video>
  );
}

export function WeaponsVideo() {
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
      <source src="assets/videos/WeaponShowcase.mp4" type="video/mp4" />
    </video>
  );
}


const Code1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {code1.map((img, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
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