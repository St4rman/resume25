"use client";
import Link from "next/link";
import Image from "next/image";
import { GiSevenPointedStar } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "motion/react";
import localFont from "next/font/local";
import { TextFade } from "@/components/TextFade";
import TExp from "../training/page";
import { SiUnrealengine, SiCplusplus, SiUnity } from "react-icons/si";
import { FaPython, FaSlack , FaGitAlt, FaGithub, FaTrello ,FaCodeBranch, FaWindows,FaAndroid,FaPlaystation,FaXbox  } from "react-icons/fa";

const myfont = localFont({
  src: "../head.otf",
});


const ConfluenceSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={48}
    height={48}
    viewBox="0,0,256,256"
    {...props}
  >
    <g
      fill="#ffffff"
      fillRule="nonzero"
      stroke="none"
      strokeWidth={1}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      strokeDasharray=""
      strokeDashoffset={0}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <g transform="scale(5.33333,5.33333)">
        <path d="M44.412,12.968c0.453,-0.737 0.961,-1.593 1.393,-2.274c0.387,-0.652 0.179,-1.494 -0.467,-1.892l-9.057,-5.564c-0.638,-0.429 -1.504,-0.261 -1.934,0.377c-0.018,0.027 -0.035,0.054 -0.051,0.082c-0.362,0.605 -0.829,1.391 -1.338,2.233c-3.588,5.912 -7.197,5.189 -13.703,2.087l-8.952,-4.243c-0.695,-0.33 -1.526,-0.035 -1.857,0.658c-0.005,0.012 -0.011,0.024 -0.017,0.037l-4.312,9.738c-0.305,0.695 0.005,1.506 0.697,1.822c1.895,0.89 5.664,2.664 9.057,4.299c12.233,5.911 22.606,5.515 30.541,-7.36z" />
        <path d="M3.588,36.032c-0.453,0.737 -0.961,1.593 -1.393,2.274c-0.387,0.652 -0.179,1.494 0.467,1.892l9.057,5.564c0.638,0.429 1.504,0.261 1.934,-0.377c0.018,-0.027 0.035,-0.054 0.051,-0.082c0.362,-0.605 0.829,-1.391 1.338,-2.233c3.588,-5.912 7.197,-5.189 13.703,-2.087l8.952,4.243c0.695,0.33 1.526,0.035 1.857,-0.658c0.006,-0.012 0.012,-0.025 0.017,-0.037l4.312,-9.738c0.305,-0.695 -0.005,-1.506 -0.697,-1.822c-1.895,-0.89 -5.664,-2.664 -9.057,-4.299c-12.233,-5.911 -22.606,-5.515 -30.541,7.36z" />
      </g>
    </g>
  </svg>
);

const JIRASVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={50}
    height={50}
    viewBox="0,0,256,256"
    {...props}
  >
    <g
      fill="#ffffff"
      fillRule="nonzero"
      stroke="none"
      strokeWidth={1}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      strokeDasharray=""
      strokeDashoffset={0}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <g transform="scale(8.53333,8.53333)">
        <path d="M15,2.59375c-2.387,2.417 -2.402,6.33628 0,8.73828l3.66797,3.66797l-2.25391,2.25391c1.737,1.738 2.51756,4.09672 2.35156,6.38672l4.27148,-4.27148l3.67578,-3.67578c0.384,-0.383 0.383,-1.00372 0,-1.38672l-7.34375,-7.34375zM11.23438,6.35938l-4.27148,4.27148l-0.12305,0.125l-3.55078,3.54883c-0.383,0.384 -0.383,1.00467 0,1.38867l10.67773,10.67774l1.0332,1.03516c2.387,-2.417 2.402,-6.33628 0,-8.73828l-3.66797,-3.66797l2.25391,-2.25391c-1.737,-1.738 -2.51756,-4.09672 -2.35156,-6.38672z" />
      </g>
    </g>
  </svg>
);

const Tools = [
  {icon: <FaGithub className="m-2 lg:text-4xl text-4xl"/>, name:"Github"},
  {icon: <FaGitAlt className="m-2 lg:text-4xl text-4xl"/>, name:"Git"},
  {icon: <FaCodeBranch className="m-2 lg:text-4xl text-4xl"/>, name:"Perforce"},
  {icon: <FaTrello className="m-2 lg:text-4xl text-4xl"/>, name:"Trello"},
  {icon: <ConfluenceSVG className="m-2 lg:text-4xl text-4xl"/>, name:"Confluence"},
  {icon: <JIRASVG className="m-2 lg:text-4xl text-4xl"/>, name:"JIRA"},
  {icon: <FaSlack className="m-2 lg:text-4xl text-4xl"/>, name:"JIRA"},


]

const Platforms = [
  {icon: <FaWindows className="m-2 lg:text-4xl text-4xl"/>, name: "Windows" },
  {icon: <FaPlaystation className="m-2 lg:text-4xl text-4xl"/>, name: "Playstation (Deployment)" },
  {icon: <FaAndroid className="m-2 lg:text-4xl text-4xl"/>, name: "Android" },
  {icon: <FaXbox className="m-2 lg:text-4xl text-4xl"/>, name: "XBox (Deployment)" },

]


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
            }}
          >
            <div className="flex flex-row items-center justify-items-center">
              <h2 className="lg:text-xl font-extrabold leading-none text-base my-2">
                LANGUAGES:{" "}
              </h2>
              <div className="flex flex-row items-center justify-items-center mx-2">
                <SiCplusplus className="m-2 lg:text-4xl text-4xl" />
                C++
              </div>
              <div className="flex flex-row items-center justify-items-center mx-2">
                <SVGComponent className="m-2 lg:text-4xl text-4xl" />
                C#
              </div>

              <div className="flex flex-row items-center justify-items-center mx-2">
                <FaPython className="m-2 lg:text-4xl text-4xl" />
                Python
              </div>

              <div className="flex flex-row items-center justify-items-center mx-2">
                HLSL/GLSL
              </div>
            </div>
            <div className="my-2 flex flex-row items-center justify-items-center">
              <h2 className="lg:text-xl font-extrabold leading-none text-base">
                ENGINES:{" "}
              </h2>

              <div className="flex flex-row items-center justify-items-center mx-2">
                <SiUnrealengine className="m-2 text-4xl" />
                Unreal Engine 5
              </div>
              <div className="flex flex-row items-center justify-items-center mx-2">
                <SiUnity className="m-2 text-4xl" />
                Unity
              </div>
            </div>

            <div className="flex flex-row items-center justify-items-center">
              <h2 className="lg:text-xl font-extrabold leading-none text-base">
                TOOLS:{" "}
              </h2>

              <div className="my-2 mx-1 grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-">
              {Tools.map((tool, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row items-center justify-items-center">
                      {tool.icon} 
                      {tool.name}
                    </div>
                  </div>
                )
              })}

            </div>
            </div>

            <div className="flex flex-row items-center justify-items-center">
              <h2 className="lg:text-xl font-extrabold leading-none text-base">
                PLATFORMS:{" "}
              </h2>

              <div className="my-2 mx-1 grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {Platforms.map((platform, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row items-center justify-items-center">
                      {platform.icon} 
                      {platform.name}
                    </div>
                  </div>
                )
              })}

            </div>
            </div>
      
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TechStack;

const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={40}
    height={40}
    viewBox="0,0,256,256"
    {...props}
  >
    <g
      fill="#ffffff"
      fillRule="nonzero"
      stroke="none"
      strokeWidth={1}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      strokeDasharray=""
      strokeDashoffset={0}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <g transform="scale(5.12,5.12)">
        <path d="M25,2c-0.71484,0 -1.42969,0.17969 -2.06641,0.53906l-16.84375,9.46484c-1.28906,0.72266 -2.08984,2.07813 -2.08984,3.53125v18.92969c0,1.45313 0.80078,2.80859 2.08984,3.53125l16.84375,9.46484c0.63672,0.35938 1.35156,0.53906 2.06641,0.53906c0.71484,0 1.42969,-0.17969 2.06641,-0.53906l16.84375,-9.46094c1.28906,-0.72656 2.08984,-2.08203 2.08984,-3.53516v-18.92969c0,-1.45312 -0.80078,-2.80859 -2.08984,-3.53125l-16.84375,-9.46484c-0.63672,-0.35937 -1.35156,-0.53906 -2.06641,-0.53906zM25,13c3.78125,0 7.27734,1.75391 9.54297,4.73828l-4.38281,2.53906c-1.31641,-1.44141 -3.1875,-2.27734 -5.16016,-2.27734c-3.85937,0 -7,3.14063 -7,7c0,3.85938 3.14063,7 7,7c1.97266,0 3.84375,-0.83594 5.16016,-2.27734l4.38281,2.53906c-2.26562,2.98438 -5.76172,4.73828 -9.54297,4.73828c-6.61719,0 -12,-5.38281 -12,-12c0,-6.61719 5.38281,-12 12,-12zM35,20h2v2h2v-2h2v2h2v2h-2v2h2v2h-2v2h-2v-2h-2v2h-2v-2h-2v-2h2v-2h-2v-2h2zM37,24v2h2v-2z" />
      </g>
    </g>
  </svg>
);

