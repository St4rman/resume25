"use client";
import { SiUnrealengine } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { motion } from "motion/react"
import { TextFade } from "./TextFade";

const PlatformIcon = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
      className="flex flex-row"
        initial = {{opacity: 0}}
        animate = {{
          opacity:1,
          transition: {delay:0.1, duration: 0.2, ease:"easeIn"}
        }}
      >
        <TextFade className="flex flex-row">
        <SiUnrealengine className="w-20 h-20 xl:w-25 xl:h-25 justify-center items-center mix-blend-lighten m-10"/>
        <FaUnity className="w-20 h-20 xl:w-25 xl:h-25 justify-center items-center mix-blend-lighten m-10" />
        </TextFade>
      </motion.div>
      </div>
  )
}

export default PlatformIcon