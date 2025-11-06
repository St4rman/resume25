"use client";
import Link from "next/link";
import Image from "next/image";
import { GiSevenPointedStar } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "motion/react";
import localFont from "next/font/local";
import { TextFade } from "@/components/TextFade";

const myfont = localFont({
  src: "../head.otf",
});


const experience = [
  {
    title: "Rockstar Games",
    type: "Work Experience",
    description:
      "I provided online QA support to devs targeting PS, XBX devkits and online titles.",
    image: "/assets/lsdwwide.jpg",
    href: "/rockstar",
  },
  {
    title: "Jambox Games",
    type: "Work Experience",
    description:
      "Gameplay Programmer for Indie company targeting Mobile on unity.",
    image: "/assets/jbx.png",
    href: "/jambox",
  },
];

const PExp = () => {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-3 xl:px-6">
        <div className="container mx-auto h-full lg:px-20 px-10">
          <div className="flex flex-row items-center py-4">
            <TextFade className="flex flex-row items-center py-4">
                          <span className=" flex justify-center items-center lg:text-5xl text-2xl">
                            <GiSevenPointedStar />
                          </span>
                          <p
                            className={`${myfont.className} lg:text-7xl text-4xl font-extrabold leading-none text-off-white px-4`}
                          >
                            Experience
                          </p>
                          </TextFade>
                        </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.001, duration: 0.2, ease: "easeIn" },
            }}>
            <TextFade className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]" 
                        staggerChildren={0.25}> 
            {experience.map((project, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex-col justify-center gap-6 group"
                >
                  {/* Main top */}
                  <div>
                    <div
                      className="w-full flex justify-between items-center
                  mix-blend-lighten lg:h-60 h-50 relative"
                    >
                      <Image
                        src={project.image}
                        priority
                        quality={100}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        className="object-contain"
                      />
                    </div>
                    <div className="w-full flex justify-between items-center relative mt-3">
                      <h2 className="lg:text-4xl font-extrabold leading-none">
                        {project.title}
                      </h2>
                      <Link href={project.href} className="w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] rounded-full bg-off-white hover:bg-accent transition:colors duration-300 flex justify-center items-center">
                        <BsArrowUpRight className="text-primary text-3xl" />
                      </Link>
                    </div>
                  </div>
                  {/* Textual stuff */}
                  <p className="text-accent-hover"><span className="text-accent">* </span>{project.type}</p>
                  <p className="text-off-white/60">{project.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
            </TextFade>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PExp;
