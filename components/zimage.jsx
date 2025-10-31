import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'
import Image from "next/image";

const Zimage = ({src, alt}) => {
  return (
    <>
    <Dialog>
        <DialogTitle className="sr-only"> {alt} </DialogTitle>
        <DialogTrigger asChild>
            <img
              className="h-auto lg:max-w-7/10 rounded-lg"
              src={src}
              alt=""
            />
        </DialogTrigger>
        <DialogContent className= "min-w-[75vw] border-0 p-0 flex items-center justify-center bg-transperent">
        <div className="relative h-[75vh] w-[75vw] rounded-md bg-transperent shadow-md">
          <Image src={src} fill alt={alt || ''} className="h-full w-full object-contain" />
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}

export default Zimage