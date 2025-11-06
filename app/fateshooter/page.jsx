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
import  Dialog  from "@/components/ui/dialog";
import { WordsPullUp } from "@/components/word-pull-up";
import { TextFade } from "@/components/TextFade";

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
        <Image alt="" fill objectFit="cover" src="/assets/fateShooter/Backdrop.png" />
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
                        >
                        </WordsPullUp>
          </div>
          <TextFade>
          <p className="my-4 text-accent-hover">
            Multiplayer FPS built in unreal engine with Steam session support. 1v1 game mode, multiple type of weapons.
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
                * A multiplayer 1v1 FPS, with a focus on <span className="text-accent">movement techinques like rocket jumping</span>, tight movement and fun gameplay. 
              </p>
              <p className="my-5">
                * Built in Unreal 5 with  <span className="text-accent">steam sessions</span> and server creation setup support. 

              </p>
              <p className="my-5">
                * Featuring a 1v1 first to 10 game mode, with respawns with  <span className="text-accent">server side shooting</span> and physics with additional client side effects. 
              </p>
              </TextFade>
            </div>
            <div className="px-5">
              <TextFade>
              <Video />
              </TextFade>
            </div>
          </div>

          <TextFade>
            <h3 className="my-3 text-1xl">Tech Used:</h3>
          </TextFade>
          
          <div className="my-3 px-4 lg:px-6">
            <TextFade>
            <p className="my-5">
              * Unreal Engine 5,{" "}
              <span className="text-accent">Steam Sessions plugin</span>,
              Networked programming
            </p>
            <p className="my-5">
              * C++, Replication concepts, NetNotifies <span className="text-accent"> RPC (client, server, netmulticast) </span>{" "}
            </p>
            <p className="my-5">
              * <span className="text-accent">Full multiplayer game mode</span>,
              Free for all with tracked kills and Game mode, game state and player state networked state
            </p>
            </TextFade>
          </div>

          <TextFade>
          <h3 className="my-10 text-3xl">Details:</h3>
          </TextFade>
          <TextFade>
          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
           Networking and Sessions
          </h4>
          <p className="my-5 text-justify">
            * We use steam sessions with the advanced steam sessions plugin, to make the integration of steam more useful for us. One user acts like a listen server, and then other users join them. Reminisict of old COD lobbies. 
          </p>

          <p className="my-5 text-justify">
            * <span className="text-accent">Advanced Steam Sessions</span> offered a good
            system solution for this, allowing for more flexible and detailed control over our steam sessions. The user that wants to be the server host requests to create a game, and then the players can join up after they search and find the hosted session.
          </p>
          </TextFade>
          <TextFade>
          <div className="flex flex-col justify-center items-center">
            
            <Zimage src="/assets/code/SteamSessions.png" alt={"Image of a flowchart showing steam sessions"}/>

            <p className="text-off-white/50 font-thin">
              Our flow for steam sessions, and hosting a multiplayer game, going from the hoster (top player)
            </p>
            <p className="text-off-white/50 font-thin">
              to the client (bottom icon).
            </p>

          </div>
          </TextFade>

          <TextFade>
          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Weapons and Guns 
          </h4>
          <p className="my-5 text-justify">
            * To start off, I worked on 2 wepaon acrchtypes, one hitscan (ray based), the other projectile. 
          </p>

          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Hitscan Weapon
          </h4>
            <p className="my-5 text-justify">
            * The shooting itself happens on the server. When the player calls the shoot method, on a hitscan weapon, the server is told to so. The server fires off a ray trace, taking in the gun barrell location, the weapon range. 
          </p>
          <p className="my-5 text-justify">
            * OnHit, we notify all the clients, and then tell the players to replicate a hit effect, dust, hit reg, etc. Our gun also spawns a blackhole projectile every 6th bullet so we check fo that, and spawn that as well. 
          </p>
          </TextFade>
          <TextFade>
           <div className="flex flex-col justify-center items-center">
            
            <img src="/assets/code/HitScanShot.png" alt={"Image of a flowchart showing steam sessions"}/>

            <p className="text-off-white/50 font-thin">
              The fire effect for the HitScan weapon, firing a ray cast, and then on hit, populating
            </p>
            <p className="text-off-white/50 font-thin">
              OutHit data struct (custom struct that holds data for hit).
            </p>

          </div>
        </TextFade>
        <TextFade>
          <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Projectile Weapon
          </h4>
           <p className="my-5 text-justify">
            * Since our projectile is replicated, as it needs to follow the same path in each game, all we have to do is spawn it and then let it handle the rest.
            </p>
            <p className="my-5 text-justify">
                * Our projectile lets you rocket jump (like in quake) which runs a check on collision with players, and if you are the shooter, it launches you in a direction away from the projectile. 
            </p>

            <h4 className="text-xl underline underline-offset-8 decoration-text-accnet-hover/50 text-accent-hover flex lg:flex-col ">
            Game Flow
          </h4>
          <p className="my-5 text-justify">* After spawning, and after the 10 second countdown, the players are allowed control. They can pick up weapons and shoot each other. On death, the player sends a notify/signal that is picked up by the playerstate and the gamemode. The playerstate tracks their individual score, and the game mode checks if either has reached 10. 
          </p>
</TextFade> 
<TextFade>
          <div className="flex flex-col justify-center items-center">
            
            <Zimage src="/assets/code/gameflow.png" alt={"Image of a flowchart showing steam sessions"}/>
            </div>
          <p className="my-5 text-justify">
            * Built using behavior trees, EQS, pawn sensing, custom queries, services and tasks. Bosses have randomness, but also pattern based behaviors. This allows them to feel learnable but also vary up their strategies.
          </p>

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
          </TextFade>

           {/* <h3 className="my-3 text-1xl">Devlog:</h3>
          <div className="flex items-center">
            <div className="w-1/2 m-1 bg-black/50 rounded-lg">
              <iframe
                className="w-full p-4 aspect-video"
                src="https://www.youtube.com/embed/aRxZbhFGuqA?si=1YGiHC-xiuQuTMB4"
              ></iframe>
            </div>
          </div> */}
            

          <h3 className="my-10 text-3xl">Gallery:</h3>
          <div className="flex justify-items-center align-items-center min-w-vw">
            <p className="text-off-white/50 font-thin">
              Coming soon! 
            </p>
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
      <source src="assets/videos/FUpdate.mp4" type="video/mp4" />
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

