import PlatformIcon from "@/components/PlatformIcon";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Link from "next/link";

const myfont = localFont({
  src: "../components/head.otf",
});

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between lg:pt-8 lg:pb-24 lg:px-50">
          {/* main heading */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="flex justify-center">
              <h1 className={`${myfont.className} text-accent flex flex-row`}>Idhant  
              <span className="lg:block hidden"><Sparkle className="star"/></span>
               Dabral
              </h1>
              </div>
            <span className="text-xl italic text-accent-hover/80">
              Gameplay Programmer
            </span>
            <p className="max-w-[500px] mb-9 text-off-white/80">
              Specialised in player facing features and enabling teams. Excited
              to bring your gameplay Ideas to life.
            </p>
            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/IDabralResume2025.pdf"
                  alt="A pdf version of Idhant's resume"
                  target="_blank"
                  rel="noopener noreferrer">
              
              <Button
                variant="outline"
                size="xl"
                className="uppercase flex items-center gap-2"
              >
                <span>Resume</span>
              </Button>
              </a>
              <a href="https://starman.hashnode.dev/"
                  alt="A pdf version of Idhant's resume"
                  target="_blank"
                  rel="noopener noreferrer">
              
              <Button
                variant="outline"
                size="xl"
                className="uppercase flex items-center gap-2"
              >
                <span>Blog</span>
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconsStyles="w-15 h-12 border border-accent rounded-lg flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-colors duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <PlatformIcon />
          </div>
        </div>
        <Projects />
        </div>
    </section>
    
  );
};

export default Home;


function Sparkle(){
    return(
        <svg className="star" 
        x='0'
        y='0'
        width={100}
        height={100}
        viewBox="0 0 100 100"
        
        >
            <path 
            d = "M86.67,50c0,.25-.18,.46-.43,.49-28.21,4.19-31.55,7.54-35.74,35.74-.04,.24-.25,.43-.49,.43s-.46-.18-.49-.43c-4.19-28.21-7.54-31.55-35.74-35.74-.24-.04-.43-.25-.43-.49s.18-.46,.43-.49c28.21-4.19,31.55-7.54,35.74-35.74,.04-.24,.25-.43,.49-.43s.46,.18,.49,.43c4.19,28.21,7.54,31.55,35.74,35.74,.24,.04,.43,.25,.43,.49Z"
            fill = "#EAEAEA"/>
        </svg>
    );
}
