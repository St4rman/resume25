"use client";
import { GiSevenPointedStar } from "react-icons/gi";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { motion } from "motion/react";
import localFont from "next/font/local";

const myfont = localFont({
  src: "../../components/head.otf",
});

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "i.dabral26@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Newcastle Upon Tyne, UK",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.001, duration: 0.2, ease: "easeIn" },
      }}
      className="py-6 px-12 xl:px-6"
    >
      <div className="container mx-auto lg:px-20">
        <div className="flex flex-col w-full lg:flex-row gap-[50px]">
          <div className="order-3 flex-1 flex xl:order-none xl:justify-center flex-col">
            <div className="flex flex-row">
              <div>
                <motion.div
                  animate={{ rotate: 250 }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  <GiSevenPointedStar size={30} />{" "}
                </motion.div>
              </div>
              <div className="text-xl font-bold pl-5">VER 3.0.1</div>
            </div>
            <div className="text-sm text-justify text-off-white/80 font-semibold py-3">
              * I am an Game Developer specializing in
              Gameplay Programming, Graphics, Feature programming and leading
              teams. With a knack for creating distict gameplay experiences, my
              work spans different platforms, seamlessly blending strategic
              thinking with cross-team solutions.
            </div>

            <div className="text-off-white/60">
              <div>NEWCASTLE UPON TYNE 5.12.2025 </div>
              <div className="flex flex-row item-center">
                <FaCopyright size={20} className="mr-4"/> IDHANT DABRAL
              </div>
              <div>ALL RIGHTS RESERVED </div>

            </div>
          </div>
          <div className="order-2 flex-1 flex items-center xl:order-none xl:justify-center">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent flex justify-center items-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl text-off-white">{item.title}</p>
                      <h3 className="text-xl text-accent">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="order-1 flex-1 flex xl:order-none xl:justify-center flex-col justify-start">
            <div className={`${myfont.className} italic`}>
              <h1 className="text-4xl">Building a game?</h1>
            </div>
            <div className="text-4xl italic text-accent">
              <h2 className="text-4xl">Lets Chat.</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
