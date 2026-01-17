import PlatformIcon from "@/components/PlatformIcon";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Link from "next/link";
import ShowcaseVideo from "@/components/ShowcaseVideo";
import { FaLink } from "react-icons/fa";
import PExp from "./pexp/page";
import { TextFade } from "@/components/TextFade";
import TExp from "./training/page";
import TechStack from "./techStack/page";
import { FaMapMarkerAlt,FaCalendarAlt } from "react-icons/fa";

const myfont = localFont({
  src: "../components/head.otf",
});

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between lg:pt-8 lg:px-50">
          {/* main heading */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <TextFade>
              <div className="flex justify-left bg-color">
                <h1 className={`${myfont.className} text-accent flex flex-row`}>
                  Idhant
                  <span className="lg:block hidden">
                    <Sparkle className="star" />
                  </span>
                  Dabral
                </h1>
              </div>

              <span className="text-xl italic text-accent-hover/80">
                Gameplay Programmer
              </span>
              <div className="max-w-[500px] m-1 min-w-full xl:pr-40 text-off-white/90 text-center xl:text-left">
                <div className="flex flex-row items-center text-accent/70">
                  <FaMapMarkerAlt className="m-1" />{" "}
                  <span className="pr-3">Newcastle Upon Tyne, UK</span>
                  <FaCalendarAlt className="m-1"/>
                  <span className="pr-3">2 years of exp.</span>
                </div>
              </div>
              <p className="max-w-[900px] mb-9 min-w-full xl:pr-2 text-off-white/90 text-center xl:text-left">
                Hi! Im available for work. I've helped make
                games and written code with {" "}
                <Link href="/rockstar" className="text-accent-hover/70 underline decoration-wavy ml-1">Rockstar Games</Link>, 
                <Link href="/vr" className="text-accent-hover/70 underline decoration-wavy ml-1">Newcastle University</Link>
                {" "} & <Link href="/jambox" className="text-accent-hover/70 underline decoration-wavy ml-1">Jambox Games</Link>. Working with a cross disciplinary team and bringing it
                all together is what keeps me building. Currently building a 3D
                speedrun platformer.
              </p>

              
            </TextFade>

            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <TextFade>
                <a
                  href="/assets/IDabralResume2025.pdf"
                  alt="A pdf version of Idhant's resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="xl"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                  </Button>
                </a>
              </TextFade>
              {/* <TextFade>
                <a
                  href="https://starman.hashnode.dev/"
                  alt="An external link to Idhant's blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="xl"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Blog</span>
                  </Button>
                </a>
              </TextFade> */}
              <div>
                <TextFade>
                  <div className=" mb-8 xl:mb-0 min-w-full">
                    <Socials
                      containerStyles="flex gap-6"
                      iconsStyles="z-10 w-15 h-12 bg-[#131212] border border-accent rounded-lg flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-colors duration-500"
                    />
                  </div>
                </TextFade>
              </div>
            </div>

            <TextFade>
              {/* <div className="mt-8 text-accent-hover text-xl">
                <a
                  className="underline decoration-wavy ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="An external link to a post"
                  href="https://www.youtube.com/watch?v=uZJSgVE78dY"
                >
                  * Check out my 2025 Retrospective Video here{" "}
                  <FaLink className="inline" />{" "}
                </a>
              </div> */}
            </TextFade>
          </div>

          <div className="order-1 xl:order-none mb-0 xl:mb-0">
            {/* <PlatformIcon /> */}
            <div className="min-w-l xl:-ml-50 -z-10">
              {/* <ShowcaseVideo /> */}
            </div>
          </div>
          <div></div>
        </div>
        <TechStack />
        <Projects />
        <PExp />
      </div>
    </section>
  );
};

export default Home;

function Sparkle() {
  return (
    <svg
      className="star"
      x="0"
      y="0"
      width={100}
      height={100}
      viewBox="0 0 100 100"
    >
      <path
        d="M86.67,50c0,.25-.18,.46-.43,.49-28.21,4.19-31.55,7.54-35.74,35.74-.04,.24-.25,.43-.49,.43s-.46-.18-.49-.43c-4.19-28.21-7.54-31.55-35.74-35.74-.24-.04-.43-.25-.43-.49s.18-.46,.43-.49c28.21-4.19,31.55-7.54,35.74-35.74,.04-.24,.25-.43,.49-.43s.46,.18,.49,.43c4.19,28.21,7.54,31.55,35.74,35.74,.24,.04,.43,.25,.43,.49Z"
        fill="#EAEAEA"
      />
    </svg>
  );
}
