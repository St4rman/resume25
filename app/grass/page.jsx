"use client";

import ProjGallery from "@/components/ProjGallery";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const myfont = localFont({
  src: "../head.otf",
});

const Grass = () => {
  return (
    <div>
      <div className="w-full relative overflow-hidden h-35 lg:h-70 display-block">
        <Image alt="" fill objectFit="cover" src="/assets/GrassRef.png" />
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
              Noise Based Grass System{" "}
            </p>
          </div>
          <p className="my-4 text-accent-hover">
            C++, Foliage System, GPU Optimization
          </p>
          <h3 className="my- 7 text-3xl">Description:</h3>
          <div className="my-3 px-4 lg:px-6">
            <p className="my-5">
              * A noise based,{" "}
              <span className="text-accent">
                {" "}
                procedurally generated grass system{" "}
              </span>
              , built in C++ and OpenGL.
            </p>
            <p className="my-5">
              * Focused on Artsit facing features that empower devs, toolage and
              GPU optimisation.
            </p>
          </div>

          <h3 className="my-7 text-3xl">My Role:</h3>
          <div className="my-3 px-4 lg:px-6">
            <p className="my-5">
              Core Graphics Programmer, GPU Optimzation, Shader Programming
            </p>
          </div>

          <h3 className="my-7 text-3xl">Video:</h3>
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/Eufx7EyKU48?si=Sq776CXZDCt_Z30S"
          ></iframe>

          <h3 className="my-10 text-3xl">My Work:</h3>
          <p>Here is a list of features I worked on: </p>

          <ul className='list-["*"] text-accent-hover mx-3 my-3'>
            <li className="mx-3 px-2"> Noise Generation</li>
            <li className="mx-3 px-2"> Compute Shader Optimizaton</li>
            <li className="mx-3 px-2">
              {" "}
              Individually Animated Grass Blades Colorization features:
              Contrast, Saturation, Gamma Correction
            </li>
            <li className="mx-3 px-2">Height Blending</li>
            <li className="mx-3 px-2">Distance based camera blending</li>
          </ul>

          <Link
            href="https://github.com/St4rman/ProceduralGrass"
            target="_blank"
            className="w-full flex mx-3 px-3 my-y py-3 flex-row justify-center items-center"
          >
            <Button size={"xl"} shape={"round"}>
              {" "}
              Check out the Source Code{" "}
            </Button>
          </Link>

          <h3 className="my-10 text-3xl">More Details:</h3>
          <p className="my-5">
            * Inspired from the grass from breath of the wild, this project for
            my dissertation features a scene with multiple million grass blades,
            each individually animated.{" "}
          </p>

          <p className="my-5">
            * The focus of this project was to implement a more simplified
            (albeit scalable) version of modern day foliage system. This project
            taught me a lot about{" "}
            <span className="text-accent">
              {" "}
              compute shaders, instancing on the GPU{" "}
            </span>
            and{" "}
            <span className="text-accent">
              {" "}
              tech art principles through shader writing{" "}
            </span>{" "}
            , general color correction and uv translation. Managing scope creep
            in a project like this was also essential, and it allowed me to
            finish a presentable demo on time that I was proud of.{" "}
          </p>
          <p className="my-5">
            * The final build features a scene with{" "}
            <span className="text-accent">
              millions of individually animated grass blades
            </span>
            , with a wind system with artist authored parameters. A tool to
            change the wind direction and speed built on ImGui is also present.
            Additional tech art features include: height-based color blending,
            brightness, contrast,saturation and gamma correction support, and a
            camera basedregion support.
          </p>
           <h3 className="my-10 text-3xl">Gallery:</h3>
           <p className="text-off-white/50 font-thin">hover over the images!</p>
          <ProjGallery />
        </div>
      </section>
    </div>
  );
};

export default Grass;
