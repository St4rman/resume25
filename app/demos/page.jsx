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
import Zimage from "@/components/zimage";

const myfont = localFont({
  src: "../head.otf",
});

const code1 = [
  {
    src: "/assets/code/Attack1.png",
  },
  {
    src: "/assets/code/Attack2.png",
  },
];

const Demos = () => {
  return (
    <div>
      <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
        <Image alt="" fill objectFit="cover" src="/assets/banner.png" />
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
            ></WordsPullUp>
          </div>
          <TextFade>
            <p className="my-4 text-accent-hover">
              Action RPG built in Unreal 5, using Gameplay Ability System, and
              AI. Test your mettle against your jailor as you escape your
              eternal prison.
            </p>
          </TextFade>
          <div className="flex flex-row items-center">
            <TextFade>
              <span className=" flex justify-center items-center lg:text-2xl text-1xl">
                <GiSevenPointedStar />
              </span>
            </TextFade>
            <TextFade>
              <p
                className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
              >
                {" "}
                SUMMARY
              </p>
            </TextFade>
          </div>
          <div className="flex lg:flex-row flex-col justify-start align-top">
            <div className="my-3 px-4 lg:px-6 flex flex-col justify-top align-text-top flex-1">
              <TextFade>
                <p className="my-5 text-sm">
                  This game was built as an excercise to improve my expertise
                  with Gameplay Ability System and game programming with Unreal
                  Engine 5. The main ideas I've kept in mind while building this
                  project are; to write code that's flexible and Learn the in
                  and outs of GAS.
                </p>
              </TextFade>
              <TextFade>
                <p
                  className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white`}
                >
                  {" "}
                  Project Goals
                </p>
                <p className="my-4 ml-6 text-sm text-off-white/80">
                  * Build a robust combat system similar to the soulsborne games
                  made by Fromsoftware.
                </p>
                <p className="my-4 ml-6 text-sm text-off-white/80">
                  * Building an extensible weapon system that works with
                  Unreal's Gameplay Ability System, and the stat values,
                  Resueable in future projects.
                </p>
                <p className="my-4 ml-6 text-sm text-off-white/80">
                  * Build a Boss AI that's reactive and has a bunch of attack
                  trees and combos.
                </p>
              </TextFade>
            </div>

            <div className="my-3 px-4 lg:px-6 flex flex-col justify-center align-top flex-1">
              <TextFade>
                <p
                  className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white`}
                >
                  {" "}
                  Project Specifications
                </p>
                <p className="my-2">
                  * Engine:{" "}
                  <span className="text-off-white/80">
                    Unreal Engine, GAS, C++
                  </span>
                </p>
                <p className="my-2">
                  * Time:{" "}
                  <span className="text-off-white/80">1 month (6h/day)</span>
                </p>
                <p className="my-2">
                  * Platform: <span className="text-off-white/80">PC </span>
                </p>
                <p className="my-2">
                  * Team Size:{" "}
                  <span className="text-off-white/80">1 (programmer)</span>
                </p>
                <p className="my-2">
                  * Plugins and Technologies:{" "}
                  <span className="text-off-white/80">
                    Gameplay Ability System, Niagara, UMG, EQS, Pawn Sensing,
                    Behavior Tree, AIServices, Decorators, Tasks
                  </span>
                </p>
              </TextFade>
            </div>
          </div>
          <div className="min-h-20"></div>
          <div className="flex flex-row items-center my-5">
            <TextFade>
              <span className=" flex justify-center items-center lg:text-2xl text-1xl">
                <GiSevenPointedStar />
              </span>
            </TextFade>
            <TextFade>
              <p
                className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
              >
                {" "}
                GAME OVERVIEW
              </p>
            </TextFade>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="my-3 px-4 lg:px-6 flex flex-col justify-center align-top">
              <TextFade>
                <p className="my-5">
                  * Project Borne is a{" "}
                  <span className="text-accent">SoulsBorne inspired</span>{" "}
                  combat system game, where you play as a prisoner battling his
                  way out of his prison cell fighting his jailer. Rise,{" "}
                  <span className="text-accent">prisoned</span> and choose from
                  multitude of weapons and battle out the jail.
                </p>
                <p className="my-5">
                  * Pick heavy weapon that pack a punch, or a lighter weapon
                  that have status effects{" "}
                  <span className="text-accent">like bleed</span>, and learn the
                  bosses pattern, and reach out to victory.{" "}
                </p>
              </TextFade>
            </div>
            <TextFade>
              <div className="px-5">
                <Video />
                <div className=" pt-7 flex flex-col lg:flex-row justify-center items-center">
                  <Link
                    href="https://youtu.be/uZJSgVE78dY?si=m0Ge9__9uSW3vYx9&t=165"
                    target="_blank"
                    className="w-full flex mx-3 px-3 my-y py-3 flex-row justify-center items-center"
                  >
                    <Button size={"xl"} shape={"round"}>
                      {" "}
                      Detailed Video <BsArrowUpRight className="mx-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TextFade>
          </div>
          <div className="min-h-20"></div>
          <div className="flex flex-row items-center my-5">
            <TextFade>
              <span className=" flex justify-center items-center lg:text-2xl text-1xl">
                <GiSevenPointedStar />
              </span>
            </TextFade>
            <TextFade>
              <p
                className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
              >
                {" "}
                INITIAL DESIGN
              </p>
            </TextFade>
          </div>
          <p className="my-5 text-justify text-off-white/80">
            To start off, I ended up analyzing what makes games like these fun,
            and why I kept going back to the genre.
          </p>
          <p className="my-5 mx-10 text-justify">
            The player is placed in an seemingly hurculean yet possible task,
            where they have a{" "}
            <span className="text-accent">myriad of tools </span>in their
            arsenal to target each{" "}
            <span className="text-accent">difficult enemy</span>, with a high
            focus on agency, and{" "}
            <span className="text-accent">skill expression.</span>
          </p>
          <p className="my-5 text-justify ">
            While planning, and designing the tech-architecture of my weapon
            system there were a few challenges I identified;
          </p>
          <p className="my-5 mx-10 text-justify text-sm text-off-white/80 lg:max-w-150">
            * Each action needed to have a "Cost" associated with it, to make
            sure that the player is cognizant of their available resources of
            all times, and think about actions.
          </p>
          <p className="my-5 mx-10 text-justify text-sm text-off-white/80 lg:max-w-150">
            * The boss needed to have multiple "combos" so it feels like its
            reading the players moves.
          </p>
          <p className="my-5 text-justify">
            Each of these issues were targeted and fixed with many architectural
            decisions, which I will describe in the following sections.
          </p>
          <div className="min-h-20"></div>
          <div className="flex flex-row items-center my-5">
            <TextFade>
              <span className=" flex justify-center items-center lg:text-2xl text-1xl">
                <GiSevenPointedStar />
              </span>
            </TextFade>
            <TextFade>
              <p
                className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
              >
                {" "}
                THE PLAYER
              </p>
            </TextFade>
          </div>
          <TextFade>
            <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
              Gameplay Ability System, Gameplay Attributes and GAS
            </h4>

            <p className="my-5 text-justif text-sm">
              To make my features resueable for both the player and the boss, I
              decided early on to invest in writing a stat system. The player
              would contain a "StatContianer" that would house the myriad of
              stats.
            </p>

            <div className="my-2 mx-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-50">
              <div className="flex flex-col justify-center align-center">
                <p className="text-justify text-2xl text-accent">THE PROBLEM</p>
                <p className="my-2 text-justify text-sm">
                  But as I decided to scale it, for checks on different
                  abilities having different cost, I started to realize that
                  this would scale too easily. Since The attributes like
                  "Vigor", "Dex", "Strength" etc would be used for almost every
                  action in the game, scaling these would be a little difficult.
                </p>
              </div>

              <div className="flex flex-col justify-center align-center">
                <p className="text-justify text-2xl text-accent">THE SOLUTION</p>
                <p className="my-2 text-justify text-sm">
                  The solution was to take a more <span className="text-accent">Interface like approach </span> with
                  these stat values and use Unreal Engine's<span className="text-accent "> GAS</span> that does a lot
                  of the initial setup for us. The C++ version of GAS allows us
                  to get into the details and define every little bell and
                  whistles we want.
                </p>
              </div>
            </div>
            <p className="my-5 text-justif text-sm">
              Now we have a <span className="text-accent">"Ability System Component"</span> that we can attach to
              both our players and our bosses. All our stats are setup at
              construction, with their default values, and our abilities each
              have an <span className="text-accent">ActivateAbility</span> method that checks to see if you have the
              stats available of the action you want to perform, this allows it
              to be very flexible.
            </p>
          </TextFade>
          <TextFade>
            <div className="flex flex-col justify-center items-center">
              <Zimage
                src="/assets/code/DodgeAbility.png"
                alt={"Code of dodge ability"}
              ></Zimage>
              <p className="text-off-white/50 font-thin">
                ActivateAbility method that gets called when you press the dodge
                button,
              </p>
              <p className="text-off-white/50 font-thin">
                executed on the Gameplay Ability Component
              </p>
            </div>
          </TextFade>
          <div className="min-h-20"></div>
          <TextFade>
            <div className="flex flex-row items-center my-5">
              <TextFade>
                <span className=" flex justify-center items-center lg:text-2xl text-1xl">
                  <GiSevenPointedStar />
                </span>
              </TextFade>
              <TextFade>
                <p
                  className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
                >
                  {" "}
                  THE WEAPONS
                </p>
              </TextFade>
            </div>
            <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
              Weapon System working in Tandem with the player Stats
            </h4>
            <p className="my-5 text-justify text-sm">
              I wanted the weapon system to be flexible enough so that once you
              create a type of weapon, you don't need to interface with code to
              make many of its types. Weapons would be categorized in weight
              types like "Heavy" and "Light", which change how much stamina each
              attack take, and "Sword", "Knives" which change what type of
              attack combos are played.
            </p>

            <p className="my-5 text-justify text-sm">
              Further, I also wanted functionality for status effects like
              "Bleed", "Poison" and additional effects like "Stance breaking" on
              heavy weapons once a stance system was created for the boss.
            </p>
          </TextFade>
          <div className="flex lg:flex-row flex-col">
            <div className="px-2">
              <WeaponsVideo />
            </div>
            <div className="px-4 lg:px-6 flex flex-col justify-center align-top">
              <TextFade>
                <p className="my-2 text-justify text-sm">
                  * To solve this issue, I relied on a classic <span className="text-accent">OOP approach</span>. One
                  base weapon class for each type, that allows us to define base
                  parameters which each weapon can define its own values for.
                </p>

                <p className="my-2  text-justify text-sm">
                  * Enums like <span className="text-accent">DamageType </span>(for status effects like bleed),
                  <span className="text-accent">WeaponClass</span> (for animation data and recovery speeds), and
                  <span className="text-accent"> ComboType </span>allow us to mix and match any type of light, medium
                  and heavy weapon with different animations
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
          <p className="text-off-white/50 font-thin">
            Click for a closer look!!{" "}
          </p>
          <div className="flex flex-col items-center">
            <div className="flex flex-col lg:flex-row ">
              <TextFade>
                <Code1 />
              </TextFade>
            </div>
            <p className="text-off-white/50 font-thin">
              Attack function, an ability taking in the stats, and the cost and
              speed of the weapons
            </p>
            <p className="text-off-white/50 font-thin">
              to determine if you can attack and with how much damage
            </p>
          </div>
          <div className="min-h-20"></div>
          <TextFade>
            <div className="flex flex-row items-center my-5">
              <TextFade>
                <span className=" flex justify-center items-center lg:text-2xl text-1xl">
                  <GiSevenPointedStar />
                </span>
              </TextFade>
              <TextFade>
                <p
                  className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
                >
                  {" "}
                  THE BOSS
                </p>
              </TextFade>
            </div>
            <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
              The Main Villian, the Sauce of the game
            </h4>
            <p className="my-5 text-justify text-sm">
              The bosses are the main draw of fromsoft games, so I had to make
              sure that mine was good too. Using Behavior trees, EQS, and pawn
              sensing, allowed me to make a basic behavior tree, allowing the
              boss to walk, attack and chase the player. But like almsot
              everything in game programming, I ran into a problem.
            </p>

            <div className="my-2 mx-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-50">
              <div className="flex flex-col justify-center align-center">
                <p className="text-justify text-2xl text-accent">THE PROBLEM</p>
                <p className="my-2 text-justify text-sm">
                  The bosses "moveset" felt quite static if the behavior tree was just 
                  run as it was made. Run up to the player, and attack them. Some randomness 
                  did help add to the variety, but not enough.
                </p>
              </div>

              <div className="flex flex-col justify-center align-center">
                <p className="text-justify text-2xl text-accent">THE SOLUTION</p>
                <p className="my-2 text-justify text-sm">
                  I ended up doing something called <span className="text-accent">"State Reading"</span>. Before picking an action, the boss AI makes a few
                  checks to see if the <span className="text-accent">player is in a certain state</span>. Wether theyre "far away", "close", "have just attacked etc" 
                  and takes that into account before picking an action.
                </p>
              </div>
            </div>
          </TextFade>

          <TextFade>
          <div className="flex flex-col justify-center items-center">
            
            <Zimage src="/assets/code/boss.png" alt={"Image of a flowchart showing steam sessions"}/>

            <p className="text-off-white/50 font-thin">
              A basic flow explaining "State Reading"
            </p>
            

          </div>
          </TextFade>

          <p className="my-5 text-justify text-sm">
              This allowed for the boss to be more <span className="text-accent">"reactive"</span>. Allowing him to pounce at the player when the player expects him to throw his knives.
              The bosses also has a close distance increasing attack that pushes the player back, all that mixed up with randomness make him feel more like an
              enemy rather than an AI. 3 combos, leading into each other, with different <span className="text-accent">recovery frames </span>
              between each, allowing the player to punish if they dodge properly and learn his moveset.
            </p>

 <div className="min-h-20"></div>
            <div className="flex flex-row items-center my-5">
              <TextFade>
                <span className=" flex justify-center items-center lg:text-2xl text-1xl">
                  <GiSevenPointedStar />
                </span>
              </TextFade>
              <TextFade>
                <p
                  className={`${myfont.className} lg:text-3xl text-2xl font-extrabold leading-none text-off-white px-4`}
                >
                  {" "}
                  CLOSING THOUGHTS
                </p>
              </TextFade>
            </div>

            <p className="my-5 text-justify text-sm">
              This project pushed me past my limits, and then more. I learnt so much about system design, boss AI programming, and how to manage scope while also
              making something cool that I want to make. Though this project is not without things I wanted to do more:
              </p>
            <p className="my-5 mx-10 text-justify text-sm text-off-white/80 lg:max-w-200">
            * Plan tech architecture/milestones more effective; a lot of features ended up taking more dev time than required, because appropriate planning and 
            documentation wasn't done before tackling them. 
          </p>

            <p className="my-5 mx-10 text-justify text-sm text-off-white/80 lg:max-w-200">
            * Extend the stat system; the current stat system, although being quite extensible still is somewhat "basic" for my tastes. Some potential addtions that would
            ask for littel dev time but help with making the game feel better would be; attacks that limit stats (max health/max stamina), animation speed/invulerabilty frames based on 
            stats rather than equip load etc. 
          </p>

          <p className="my-5 mx-10 text-justify text-sm text-off-white/80 lg:max-w-200">
            * Optimization; this is an never ending pursuit, though one I try and strive towards. I have a few ideas on how to optimize my code, especially for the boss AI.
            As it is right now, it's not too bad, however, the checks can defintely be done at a smaller amount, and can be based on player action rather than 
            time.
          </p>

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
      <source src="assets/videos/Souls-compressed.mp4" type="video/mp4" />
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
      <source src="assets/videos/WeaponUpdateShowcase.mp4" type="video/mp4" />
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
            <Zimage
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
