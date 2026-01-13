"use client";
import { motion } from "motion/react"
import { TextFade } from "./TextFade";

const ShowcaseVideo = () =>{
    return(
         <div className="w-full h-full relative">
      <motion.div
      className="flex flex-row"
        initial = {{opacity: 0}}
        animate = {{
          opacity:1,
          transition: {delay:0.1, duration: 0.2, ease:"easeIn"}
        }}
      >
        <TextFade className="flex flex-row -z-10">    
            <SourceVideo />
        </TextFade>
      </motion.div>
      </div>
    )
} 

export default ShowcaseVideo;


export function SourceVideo() {
  return (
    <video
      width="auto"
      height="auto"
      autoPlay
      preload="auto"
      playsInline
      loop
      muted
      className="brightness-80"
    >
      <source src="assets/videos/quickshowcase.mp4" type="video/mp4" />
    </video>
  );
}