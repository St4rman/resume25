import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"


const JBM = JetBrains_Mono({
  variable: "--font-JBM",
  weight: ["100", "200" , "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Idhant Dabral",
  description: "Idhant's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="absolute background-size:cover overflow-auto -z-10 inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:20px_20px]" > 
        <div />
        <Header />
        <div className="pt-20"></div>
        <div>
          {children}
          <div className="pt-25"></div>
          <Footer />
        </div>
        
        
        
      </body>
    </html>
  );
}
