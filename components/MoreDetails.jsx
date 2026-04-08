"use client";
import localFont from "next/font/local";


const myfont = localFont({
  src: "/head.otf",
});

const MoreDetails = () => {
  return (
    <div className="w-full h-full flex flex-row justify-items-stretch">
        <div className="lg:warning-label warning-label-res w-full">
            
        </div>

        <div className={`${myfont.className} lg:text-5xl text-3xl font-extrabold leading-none text-accent-hover px-4`} >
            MORE DETAILS SOON. 
        </div>
        <div className="lg:warning-label warning-label-res w-full">
            
        </div>
      </div>
  )
}

export default MoreDetails