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

const projects = [
  
  {
    title: "Project Fate",
    type: "Project - C++ UE5, Multiplayer, Networked",
    description:
      "1v1 Movement FPS, UE5, using steam sessions.",
    image: "/assets/fateShooter/mainmenu.png",
    href: "/fateshooter",
  },
  {
    title: "Project Borne",
    type: "Project - C++ Unreal Engine 5, GAS, AI",
    description:
      "Soulslike Combat recreated in Unreal engine using GAS. Extensible weapon system.",
    image: "/assets/soulsborneThumb.png",
    href: "/demos",
  },
  {
    title:"Power Kills",
    type: "Project - Blueprints, Unreal Engine 5",
    description:
      "Top down isometric action game built for the Kenney Game Jam using Blueprints",
    image: "/assets/pkthumb.png",
    href:"/jam",
  },
  {
    title: "Hellrunners",
    type: "Project - C++ Lead Programmer",
    description:
      "Multiplayer FPS speedrunning game in C++ and OpenGL. Physics and Tech Programming.",
    image: "/assets/hellrunners.png",
    href: "/hellrunners",
  },
  {
    title: "Grass System",
    type: "Project - C++ OpenGL Rendering",
    description:
      "Noise based foliage system using GPU Instancing  in C++ and OpenGL.",
    image: "/assets/grassRef.png",
    href: "/grass",
  },
];

const Projects = () => {
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
                            Projects
                          </p>
            </TextFade>
                        </div>
                        
                     
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.001, duration: 0.2, ease: "easeIn" },
            }}
            className=""
          >
            <TextFade className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]" 
            staggerChildren={0.25}> 
            {projects.map((project, index) => {
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
                      <Link href={project.href}><Image
                        src={project.image}
                        priority
                        quality={100}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        className="object-contain"
                      /></Link>
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
                  <p className="text-off-white/60 min-h-25">{project.description}</p>
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

export default Projects;
