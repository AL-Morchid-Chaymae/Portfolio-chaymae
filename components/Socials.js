// links
import Link from "next/link";

// icons
import {RiYoutubeLine,
        RiInstagramLine, 
        RiFacebookLine, 
        RiDribbbleLine,
        RiLinkedinLine, 
        RiPinterestLine,
        RiGithubLine,
        RiTwitterLine,

 } from 'react-icons/ri'

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiYoutubeLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiInstagramLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiFacebookLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiDribbbleLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/chaymae-al-morchid-2a0128163/'} className='hover:text-accent transition-all duration-300'>
    <RiLinkedinLine />
    </Link>
    <Link href={'https://github.com/AL-Morchid-Chaymae/'} className='hover:text-accent transition-all duration-300'>
    <RiGithubLine />
    </Link>
    <Link href={'https://twitter.com/al_chaymae1'} className='hover:text-accent transition-all duration-300'>
    <RiTwitterLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiPinterestLine />
    </Link>
  </div>
  );
};

export default Socials;
