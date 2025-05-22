"use client"; 

import { usePathname } from "next/navigation";
import Contact from "@/app/contact/page";

const Footer = () => {
    const currentPath = usePathname();

    if(currentPath=="/contact"){
        return(<></>);
    } else{
     return (
        <div className={`w-full bg-black/50 flex flex-col justify-center items-center`}>
            <div className="w-8/10 border-b border-white/50 h-10"></div>
            <Contact />
        </div>
    )
    }
   
}

export default Footer