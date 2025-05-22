"use client";
import { usePathname } from 'next/navigation';
import React from 'react'

const HellImages = [
    {
        src: "/assets/hell1.png",
        desc: "4 players at the starting line before a race"
    },
    {
        src: "/assets/hell2.png",
        desc: "Lobby system before a race starts"
    },
    {
        src: "/assets/hell3.png",
        desc: "Medal depending on your time taken to finish"
    },
    {
        src: "/assets/hell4.png",
        desc: "Grapple in action"
    },
    {
        src: "/assets/hell5.png",
        desc: "Longer view of a stage"
    },
    {
        src: "/assets/hell6.png",
        desc: "Waiting lobby menu, and level select"
    },
];


const GrassImages =[
    {
        src: "/assets/grass1.png",
        desc: "Height based blending for variance"
    },
    {
        src: "/assets/grass2.png",
        desc: "Low v High Saturation"
    },
    {
        src: "/assets/grass3.png",
        desc: "Medium density scene"
    },
    {
        src: "/assets/grass4.png",
        desc: "Distance from camera based variance"
    },
    {
        src: "/assets/grass5.png",
        desc: "Larger density scene"
    },
    {
        src: "/assets/grassRef.png",
        desc: "Small density scene"
    },

];

const ProjGallery = () => {
    const currentPath = usePathname();

    if(currentPath=="/hellrunners"){
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
    else if(currentPath=="/grass"){
        return(
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {GrassImages.map((img, index)=>{
            return(
                
                <div className="flex flex-col justify-center items-center" key={index}>
                    <div className='
                    transition delay-150 duration-300
                    ease 
                    hover:opacity-100 opacity-0 
                    absolute bg-black/30 px-10 py-10 rounded-lg backdrop-blur-lg '> {img.desc} </div>
                    <img className="h-auto max-w-full rounded-lg" src={img.src} alt=""/>
                </div>
                
            )
        })}
        </div>
        )
    }
    
}

export default ProjGallery