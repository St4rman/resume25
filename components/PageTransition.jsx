"use client";

import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation";



const PageTransition = ({children}) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
        <motion.div
            key= {pathname}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration: 0.2}}
        >
            {children}
        </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition