import Link from "next/link";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/St4rman'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/idhant-dabral/'},
    {icon: <FaBluesky />, path: 'https://bsky.app/profile/starmandev.bsky.social'},
]


const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((items, index)=>{
            return <Link target="_blank" key = {index} href={items.path} className={iconsStyles}>
                {items.icon}
            </Link>
        })}
    </div>
  )
}

export default Socials