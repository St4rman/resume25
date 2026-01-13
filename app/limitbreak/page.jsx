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
import { TextFade } from "@/components/TextFade";
import { WordsPullUp } from "@/components/word-pull-up";

const myfont = localFont({
  src: "../head.otf",
});


const LimitBreak = () => {
  return (
    <div>
      <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
        <Image alt="" fill objectFit="cover" src="/assets/lmbbg.png" />
      </div>
      <section className="flex flex-col justify-center py-12 xl:py-6 xl:px-6">
        <div className="container mx-auto lg:px-20 px-10">
          <div className="flex flex-row items-center">
            <span className=" flex justify-center items-center lg:text-5xl text-2xl">
              <GiSevenPointedStar />
            </span>
            <WordsPullUp
                        text="Limit Break Mentorship"
                        className={`${myfont.className} lg:text-7xl text-4xl font-extrabold leading-none text-off-white px-4`}
                        >
                        </WordsPullUp>
          </div>
          <TextFade>
          <p className="my-4 text-accent-hover">
            Details coming soon.
          </p>
          </TextFade >
        </div>
      </section>
    </div>
  )
}

export default LimitBreak;


