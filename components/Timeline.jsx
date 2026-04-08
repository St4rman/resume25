"use client";
import { TextFade } from "./TextFade";
import Link from "next/link";
import { GiSevenPointedStar } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";
import localFont from "next/font/local";

const myfont = localFont({
  src: "/head.otf",
});

const Timeline = () => {
  return (
    <>
        <div className="xl:py-3 xl:px-10">
            <div className="flex flex-row items-center py-4">
                        <TextFade className="flex flex-row items-center py-4">
                                      <span className=" flex justify-center items-center lg:text-5xl text-2xl">
                                        <GiSevenPointedStar />
                                      </span>
                                      <p
                                        className={`${myfont.className} lg:text-7xl text-4xl font-extrabold leading-none text-off-white px-4`}
                                      >
                                        Timeline
                                      </p>
                                      </TextFade>
                                    </div>
      <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-[#24ff0b] shadow-[#24ff0b]/50 shadow-2xl"></span>

            <div className="-mt-2">
              <time className="text-xs/none font-medium  text-off-white">
                Present, UK
              </time>
                
              <h3 className={`${myfont.className} text-2xl font-bold  text-accent`}>
                <Link href="/ebg" className="underline">
                EVIL BEAN GAMES
                </Link>
              </h3>
                

              <p className="mt-0.5 text-sm  text-off-white text-right ml-40">
                Working as an Unreal Engine 5 Developer on Project Crimson Dust. 
                
              </p>
              <p className="my-4 text-sm  text-off-white text-right ml-40">Responsibilties include - AI enemy programming, engine optimization, gameplay Programming
            </p></div>
          </div>

          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-accent"></span>
            
            <div className="-mt-2">
              <time className="text-xs/none font-medium  text-off-white">
                Mar 2025 - Mar 2026, UK
              </time>

               <h3 className={`${myfont.className} text-2xl font-bold  text-accent`}>
                <Link href="/limitbreak" className="underline">
                LIMIT BREAK
                </Link>
              </h3>

              <p className="mt-0.5 text-sm text-off-white text-left mr-40">
                Worked with Game industry professional for training in Unreal Engine 5.
              </p>
              <p className="my-4 text-sm text-off-white text-left mr-40">
                Tech: Gameplay Ability System, Networking, Steam Integration
              </p>
            </div>
          </div>

          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-accent"></span>

            <div className="-mt-2">
              <time className="text-xs/none font-medium  text-off-white">
                May 2024-January 2025, UK
              </time>
                
               <h3 className={`${myfont.className} text-2xl font-bold  text-accent`}>
                <Link href="/vr" className="underline">
                NEWCASTLE UNIVERSITY CLIENT
                </Link>
              </h3>
                

              <p className="mt-0.5 text-sm  text-off-white text-right ml-40">
                Worked with a team at Newcastle University on a VR title targeting Steam VR.
                
              </p>
              </div>
          </div>

          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-accent"></span>
            
            <div className="-mt-2">
              <time className="text-xs/none font-medium  text-off-white">
                Mar 2025 - Mar 2026, UK (remote) + India
              </time>

               <h3 className={`${myfont.className} text-2xl font-bold  text-accent`}>
                <Link href="/rockstar" className="underline">
                ROCKSTAR GAMES
                </Link>
              </h3>

              <p className="mt-0.5 text-sm text-off-white/50 text-left mr-40">
                I provided online QA support to devs targeting PS, XBX devkits and online titles.
              </p>
              <p className="my-4 text-sm text-off-white/50 text-left mr-40">
                Tech: Source builds, PSX, XBOX Devkits, Python
              </p>
            </div>
          </div>

          <div aria-hidden="true"></div>
        </li>


        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-accent"></span>

            <div className="-mt-2">
              <time className="text-xs/none font-medium  text-off-white">
                January 2022-August 2022, Global Remote
              </time>
                
               <h3 className={`${myfont.className} text-2xl font-bold  text-accent`}>
                <Link href="/vr" className="underline">
                JAMBOX GAMES
                </Link>
              </h3>
                

              <p className="mt-0.5 text-sm  text-off-white text-right ml-40">
               Gameplay Programmer for Indie company targeting Mobile on unity.
                
              </p>
              </div>
          </div>

          <div aria-hidden="true"></div>
        </li>



      </ol>{" "}
      </div>
    </>
    
  );
};
export default Timeline;
