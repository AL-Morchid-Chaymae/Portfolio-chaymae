// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from '../components/Socials';


const Header = () => {
  return (
  <header 
  className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-18 py-18'>
        {/* logo */}
        <Link href={'/'}>
        <Image
          src={'/logo2.svg'}
           width={228}
           height={180} 
           alt=''
           priority={true}
        />  
        </Link>
             { /*social */}
             <Socials />
      </div>
    </div>
    
  </header>



  );
};

export default Header;
