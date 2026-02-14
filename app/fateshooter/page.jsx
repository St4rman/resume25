"use client";

import ProjGallery from "@/components/ProjGallery";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import SoulsGallery from "@/components/SoulsGallery";
import Zimage from "@/components/zimage";
import Dialog from "@/components/ui/dialog";
import { WordsPullUp } from "@/components/word-pull-up";
import { TextFade } from "@/components/TextFade";
import FateGallery from "@/components/FateGallery";
import QuoteSVG from "@/components/QuoteMark";

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
        <Image
          alt=""
          fill
          objectFit="cover"
          src="/assets/fateShooter/Backdrop.png"
        />
      </div>
      <section className="flex flex-col justify-center py-12 xl:py-6 xl:px-6">
        <div className="container mx-auto lg:px-20 px-10">
          <div className="flex flex-row items-center">
            <span className=" flex justify-center items-center lg:text-5xl text-2xl">
              <GiSevenPointedStar />
            </span>
            <WordsPullUp
              text="Fate Shooter"
              className={`${myfont.className} lg:text-7xl text-4xl font-extrabold leading-none text-off-white px-4`}
            ></WordsPullUp>
          </div>
          <TextFade>
            <p className="my-4 text-accent-hover">
              Multiplayer FPS built in unreal engine with Steam session support.
              1v1 game mode, multiple type of weapons.
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
                  This one v one multiplayer game was built as a way to push my
                  limits with Mulitplayer, and Networked prorgamming in UNreal
                  Engine. The main goals I've kept in mind while building this
                  project are; to develop systems and create tech architecture
                  thats optimized in multiplayer and working with steam
                  sessions.
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
                  * Build a fully functional server-client architecture working
                  with steam sessions.
                </p>
                <p className="my-4 ml-6 text-sm text-off-white/80">
                  * Have this server client architecture work with steam
                  sessions plugin, and allow players to create rooms for
                  multiplayer games, and have people across the globe join.
                </p>
                <p className="my-4 ml-6 text-sm text-off-white/80">
                  * Build a Weapon system with some movement ability built into
                  each weapons
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
                    Unreal Engine,Multiplayer, C++
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
                    Geplication concepts, NetNotifies, RPC, Replication
                    concepts, Steam Sessions Plugin
                  </span>
                </p>
              </TextFade>
            </div>
          </div>
          <div className="min-h-20"></div>

          <div className="flex flex-row items-center my-5">
            <TextFade>
              <span className="flex justify-center items-center lg:text-2xl text-1xl">
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
                  * A multiplayer 1v1 FPS, with a focus on{" "}
                  <span className="text-accent">
                    movement techinques like rocket jumping
                  </span>
                  , tight movement and fun gameplay.
                </p>
                <p className="my-5">
                  * Built in Unreal 5 with{" "}
                  <span className="text-accent">steam sessions</span> and server
                  creation setup support.
                </p>

                <p className="my-5">
                  * Featuring a 1v1 first to 10 game mode, with respawns with{" "}
                  <span className="text-accent">server side shooting</span> and
                  physics with additional client side effects.
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

          <p className="my-5 text-justify text-off-white/80 text-sm">
            Intital planning stage for this game was a bit different from the
            planning for others; but i still picked a main driving quote for it
          </p>

          <div className="flex my-15 mx-10 flex-row align-top">
            <p className="-my-15 -mx-8">
              <QuoteSVG
              color={"#f6224c"}
              size={"100px"}/></p>
            <p className=" text-justify">
            The players are put in arenas with a bunch of{" "}
            <span className="text-accent">unique weapons</span> and must use
            their skills and{" "}
            <span className="text-accent">high octane movement</span> to battle
            their way out.
          </p>
          </div>

          <p className="my-5 text-justify ">
            In pre-production, some of the challenges I believed I would face
            pre-emptively would be;
          </p>
          <p className="my-5 mx-10 text-justify text-sm text-off-white/80 lg:max-w-150">
            * Player lobbies - The main draw of our game is the fact that you
            1v1, so we have to find a way for players to join across the world,
            with steam if possible.
          </p>
          <p className="my-5 mx-10 text-justify text-sm text-off-white/80 lg:max-w-150">
            * Managing game state - Since this would be a networked game,
            managing game state is extremely important for the game flow to
            function without desync
          </p>
          <p className="my-5 mx-10 text-justify text-sm text-off-white/80 lg:max-w-150">
            * Add fun and unique weapons to the game
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
                MULTIPLAYER LOBBIES
              </p>
            </TextFade>
          </div>
          <TextFade>
            <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
              How do I connect with my friends? Magic or just good networking?
            </h4>
            <p className="my-5 text-justify text-sm">
              * We have to find a way for our players to host "rooms" that other
              players can join, and load up on the same state and be on the same
              "map" as to say. This involves finding a way or some sort of
              joining code.
            </p>
            <div className="my-2 mx-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-50">
              <div className="flex flex-col justify-center align-center">
                <p className="text-justify text-2xl text-accent">THE PROBLEM</p>
                <p className="my-2 text-justify text-sm">
                  Using Unreal engine's inbuilt steam sessions are fine, but
                  only provide us with a certain small amount of details. We
                  need a lot more information if we want our lobby and ingame
                  online systems to be a bit more flexible/robust. This is a
                  limitation of the inbuilt sessions.
                </p>
              </div>

              <div className="flex flex-col justify-center align-center">
                <p className="text-justify text-2xl text-accent">
                  THE SOLUTION
                </p>
                <p className="my-2 text-justify text-sm">
                  Researching and figuring out that a plugin like <span className="text-accent">
                   advanced steam
                  sessions </span>  is an industry standard, and this provides us with
                  many functions and methods to use. We still have to setup the
                  server browser and the game logic ourselves, but we will have
                  a bunch more information to work with.
                  
                  
                </p>
                <p className="my-2 text-justify text-sm">The user that wants to
                  be the server host requests to create a game, and then the
                  players can join up after they search and find the hosted
                  session.</p>
              </div>
            </div>
            
          </TextFade>
          <TextFade>
            <div className="flex flex-col justify-center items-center">
              <Zimage
                src="/assets/code/SteamSessions.png"
                alt={"Image of a flowchart showing steam sessions"}
              />

              <p className="text-off-white/50 font-thin">
                Our flow for steam sessions, and hosting a multiplayer game,
                going from the hoster (top player)
              </p>
              <p className="text-off-white/50 font-thin">
                to the client (bottom icon).
              </p>
            </div>
          </TextFade>

          <p className="my-5 text-justify text-sm">
              This allows us to have finer control over things like player counts, what maps to load, over the network arguements, and use Steam for our multiplayer rather than having to set up everything manually.  
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
                MANAGING GAME FLOW
              </p>
            </TextFade>
          </div>

          <TextFade>

            <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
              Optimizing the flow of game information, like we're building aquaducts
            </h4>
            <p className="my-5 text-justify text-sm">
              * Our game state needs to be centralized, since flow of information is extremely important for kill notifs, score counts, and timer. Initially all of this was handled by the gamestate class but I quickly found an issue with it. 
            </p>
          </TextFade>

          <div className="my-2 mx-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-50">
              <div className="flex flex-col justify-center align-center">
                <p className="text-justify text-2xl text-accent">THE PROBLEM</p>
                <p className="my-2 text-justify text-sm">
                  Since Game state is server sided, accessing data on it was a bit difficult. Players having to do GetGameState().GetScore count was unreliable and client authoritative, which we dont want for many reasons.
                </p>
              </div>

              <div className="flex flex-col justify-center align-center">
                <p className="text-justify text-2xl text-accent">
                  THE SOLUTION
                </p>
                <p className="my-2 text-justify text-sm">
                  This was a problem that I was surprised to solve preemptively, because I ended up going with a server authoritative design that most of my information was always authenticated, or checked by the server before being committed on the game state.   
                  
                  
                </p>
                <p className="my-2 text-justify text-sm">OnPlayerDeath for example, is what happens when someone dies, runs on the server, which is then responsible for updating the other players and the game state etc. </p>
              </div>
            </div>
          <TextFade>
            <div className="flex flex-col justify-center items-center">
              <Zimage
                src="/assets/code/gameflow.png"
                alt={"Image of a flowchart showing steam sessions"}
              />
            </div>
            <p className="my-5 text-justify text-sm">
              * This allows for us, as developer to integrate with steams backend and allow to use Spacewar as our sort of "test server" to host and use. 

            </p>

            
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
                WEAPON TIME
              </p>
            </TextFade>
          </div>
            <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
              Weapons and Guns
            </h4>
            <p className="my-5 text-justify text-sm">
              * To start off, I worked on 2 wepaon acrchtypes, one hitscan (ray
              based), the other projectile. The only thing I made sure that was consistent was that each weapon had a unique/interesting game mechanic related to it. Ill talk about 2 of them now.
            </p>

                <div className="my-2 mx-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-10">
              <div className="flex flex-col justify-center align-center">
                <img 
                className="h-auto max-w-full rounded-lg"
                src="/assets/fateShooter/nullblaster.png"
                alt=""/>
                <p className="font-thin text-sm">Hitscan weapon; null blaster</p>
              </div>

              <div className="flex flex-col justify-center align-center">
                <img 
                className="h-auto max-w-full rounded-lg"
                src="/assets/fateShooter/impfl.png"
                alt=""/>
                <p className="font-thin text-sm">Projectile weapon; Improvised Firework Launcher</p>
                </div>
            </div>



            <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
              Hitscan Weapon
            </h4>
            <p className="my-5 text-justify text-sm">
              * The shooting itself happens on the server. When the player calls
              the shoot method, on a hitscan weapon, the server is told to so.
              The server fires off a ray trace, taking in the gun barrell
              location, the weapon range.
            </p>
            <p className="my-5 text-justify text-sm">
              * OnHit, we notify all the clients, and then tell the players to
              replicate a hit effect, dust, hit reg, etc. Our gun also spawns a
              blackhole projectile every 6th bullet so we check fo that, and
              spawn that as well.
            </p>
          </TextFade>
          <TextFade>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/assets/code/HitScanShot.png"
                alt={"Image of a flowchart showing steam sessions"}
              />

              <p className="text-off-white/50 font-thin">
                The fire effect for the HitScan weapon, firing a ray cast, and
                then on hit, populating
              </p>
              <p className="text-off-white/50 font-thin">
                OutHit data struct (custom struct that holds data for hit).
              </p>
            </div>
          </TextFade>
            <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
              Projectile Weapon
            </h4>
            <p className="my-5 text-justify text-sm">
              * Since our projectile is replicated, as it needs to follow the
              same path in each game, all we have to do is spawn it and then let
              it handle the rest.
            </p>
            <p className="my-5 text-justify text-sm">
              * Our projectile lets you rocket jump (like in quake) which runs a
              check on collision with players, and if you are the shooter, it
              launches you in a direction away from the projectile.
            </p>

          {/* <h3 className="my-3 text-1xl">Devlog:</h3>
          <div className="flex items-center">
            <div className="w-1/2 m-1 bg-black/50 rounded-lg">
              <iframe
                className="w-full p-4 aspect-video"
                src="https://www.youtube.com/embed/aRxZbhFGuqA?si=1YGiHC-xiuQuTMB4"
              ></iframe>
            </div>
          </div> */}
          <div className=" pt-7 flex flex-col lg:flex-row justify-center items-center">
              <Link
                href="https://github.com/St4rman/FateShooter"
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
          <div className="flex justify-items-center align-items-center min-w-vw">
            <FateGallery />
          </div>
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
      <source src="assets/videos/fateshooter.mp4" type="video/mp4" />
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
