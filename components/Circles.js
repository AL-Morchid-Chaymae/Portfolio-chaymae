// next image
import Image from "next/image";

const Circles = () => {
  return (
  <div>
    <Image
      src={'/circles.png'}
       width={260} 
       height={260} 
       className='w-full'
        alt='Cercles colorés'
    
    />
    </div>
    );
};

export default Circles;
