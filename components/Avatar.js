// image
import Image from "next/image";

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image 
     src={'/avatar1.png'} 
     width={600} 
     height={178} 
     alt=''
     className='translate-z-0 w-full h-full' />
  </div>;
};

export default Avatar;
