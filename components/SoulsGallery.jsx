"use client";
import { usePathname } from 'next/navigation';
import React from 'react'

const HellImages = [
    {
        src: "/assets/SB1.png",
        desc: "Weapon System with attributes UI"
    },
    {
        src: "/assets/SB2.png",
        desc: "Fog gate portal just before the boss fight"
    },
    {
        src: "/assets/SB3.png",
        desc: "Boss swinging his weapon"
    },
    {
        src: "/assets/SB4.png",
        desc: "Jump attack"
    },
    {
        src: "/assets/SB5.png",
        desc: "Training range and damage values"
    },
];

const SoulsGallery = () => {
    const currentPath = usePathname();
        return(
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {HellImages.map((img, index)=>{
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
    </div>
    )
    
    
}

export default SoulsGallery