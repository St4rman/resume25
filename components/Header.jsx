import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "@/components/Nav"
import localFont from 'next/font/local'
import ResponsiveNav from "./ResponsiveNav";

const myfont = localFont({
    src: './head.otf',
});


const Header = () => {
  return (
    <header className="py-4 xl:py-6 xl:px-6 text-white fixed mx-auto w-full z-10 custom-glass">
        <div className="container mx-auto flex justify-between items-center z-11">
            <Link href={"/"}>
                <h1 className="text-4xl front-semibold italic">
                    <span className={`${myfont.className} text-accent px-4`}>Idhant</span>. 
                </h1>
            </Link>

            {/* pc Nav bar */}

            <div className="hidden lg:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Work with me</Button>
                </Link>
            </div>

            {/* responsive */}
            <div className="lg:hidden">
                <ResponsiveNav />
            </div>
        </div>
    </header>
  )
}

export default Header;