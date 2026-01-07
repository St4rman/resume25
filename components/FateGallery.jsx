"use client";
import { usePathname } from 'next/navigation';
import React from 'react'
import { TextFade } from './TextFade';

const JamImages = [
    {
        src: "/assets/fateShooter/mainmenu.png",
        desc: "Main menu"
    },
    {
        src: "/assets/fateShooter/sb.png",
        desc: "Server browser with game listings"
    },
    {
        src: "/assets/fateShooter/shooting.png",
        desc: "Shooting a rocket launcher"
    },
    {
        src: "/assets/fateShooter/wr.png",
        desc: "Waiting room, for people to join"
    },
    {
        src: "/assets/fateShooter/ffa.png",
        desc: "Free for all game creator"
    },
    {
        src: "/assets/fateShooter/gun.png",
        desc: "In game"
    },
    
];

const FateGallery = () => {
    const currentPath = usePathname();
        return(
            <div >
                <TextFade className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {JamImages.map((img, index)=>{
            return(
                
                <div className="flex flex-col justify-center items-center" key={index}>
                    <div className='
                    transition delay-150 duration-300
                    ease 
                    hover:opacity-100 opacity-0 
                    absolute bg-black/30 px-10 py-10 rounded-lg backdrop-blur-lg'> {img.desc} </div>
                    <img className="h-auto max-w-full rounded-lg" src={img.src} alt=""/>
                </div>
            )
        })}
        </TextFade>
    </div>
    )
    
    
}

export default FateGallery