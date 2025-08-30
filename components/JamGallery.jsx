"use client";
import { usePathname } from 'next/navigation';
import React from 'react'

const JamImages = [
    {
        src: "/assets/pk1.png",
        desc: "Knight and an unsespecting enemy"
    },
    {
        src: "/assets/pk2.png",
        desc: "Level two with multiple enemies"
    },
    {
        src: "/assets/pk3.png",
        desc: "Boss...scary..."
    },
    
];

const JamGallery = () => {
    const currentPath = usePathname();
        return(
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
    </div>
    )
    
    
}

export default JamGallery