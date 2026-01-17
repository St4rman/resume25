"use client";
import Link from "next/link";
import Image from "next/image";
import { GiSevenPointedStar } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "motion/react";
import localFont from "next/font/local";
import { TextFade } from "@/components/TextFade";
import TExp from "../training/page";

const myfont = localFont({
  src: "../head.otf",
});

const TechStack = () => {
  return (
    <>
      <section className="flex flex-col justify-center xl:py-3 xl:px-6">
        <div className="container mx-auto h-full lg:px-20 px-10">
          <div className="flex flex-row items-center py-4">
            <TextFade className="flex flex-row items-center py-4">
                          <span className=" flex justify-center items-center lg:text-5xl text-2xl">
                            <GiSevenPointedStar />
                          </span>
                          <p
                            className={`${myfont.className} lg:text-4xl text-2xl font-extrabold leading-none text-off-white px-4`}
                          >
                            Technical Skills
                          </p>
                          </TextFade>
                        </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.001, duration: 0.2, ease: "easeIn" },
            }}>
                <h2 className="lg:text-xl font-extrabold leading-none">Languages and Engines</h2>
                <div className="ml-10">
                    <span class="inline-flex items-center m-3 px-2 py-1 ring-1 ring-inset ring-default text-heading text-sm font-medium rounded bg-neutral-primary-soft">Unreal Engine</span>
                    <span class="inline-flex items-center m-3 px-2 py-1 ring-1 ring-inset ring-default text-heading text-sm font-medium rounded bg-neutral-primary-soft">C++</span>
                    <span class="inline-flex items-center m-3 px-2 py-1 ring-1 ring-inset ring-default text-heading text-sm font-medium rounded bg-neutral-primary-soft">Blueprinting</span>
                    <span class="inline-flex items-center m-3 px-2 py-1 ring-1 ring-inset ring-default text-heading text-sm font-medium rounded bg-neutral-primary-soft">C#</span>
                    <span class="inline-flex items-center m-3 px-2 py-1 ring-1 ring-inset ring-default text-heading text-sm font-medium rounded bg-neutral-primary-soft">Tool Porgramming</span>
                </div>

                <h2 className="lg:text-xl font-extrabold leading-none">Extras</h2>
                <div className="ml-10">
                    <span class="inline-flex items-center m-3 px-2 py-1 ring-1 ring-inset ring-default text-heading text-sm font-medium rounded bg-neutral-primary-soft">Gameplay Ability System</span>
                    <span class="inline-flex items-center m-3 px-2 py-1 ring-1 ring-inset ring-default text-heading text-sm font-medium rounded bg-neutral-primary-soft">Multiplayer Programming</span>
                    <span class="inline-flex items-center m-3 px-2 py-1 ring-1 ring-inset ring-default text-heading text-sm font-medium rounded bg-neutral-primary-soft">Unity</span>
                    <span class="inline-flex items-center m-3 px-2 py-1 ring-1 ring-inset ring-default text-heading text-sm font-medium rounded bg-neutral-primary-soft">Shader Graph</span>
                </div>
                
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
