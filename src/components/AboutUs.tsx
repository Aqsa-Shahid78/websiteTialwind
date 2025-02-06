import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Button } from "./ui/button";

function AboutUs() {
  return (
    <>
      <section className="w-full py-[48px] xsm:py-[112px] text-center bg-headerColor">

        <h1 className='my_heading1 mb-[24px]'>Our team</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

        {/* Our cards div */}
        <div className='w-full h-[723px] xsm:h-auto grid grid-cols-1 xsm:grid-cols-3 xsm:grid-rows-2 gap-x-[48px] gap-y-[48px] xsm:gap-y-[64px] mt-[48px] xsm:mt-[80px] overflow-y-auto'>

          {/* Array of image sources for each card */}
          {[
            '/cardpic1.png', 
            '/cardpic2.png', 
            '/cardpic3.png', 
            '/cardpic4.png', 
            '/cardpic5.png', 
            '/cardpic6.png'
          ].map((imageSrc, index) => (
            <div className='flex flex-col justify-center' key={index}>
              <div className='inline-block m-auto mb-[24px]'>
                {/* Dynamic image source for each card */}
                <Image src={imageSrc} alt={`cardpic ${index + 1}`} width={80} height={80} />
              </div>
              <h1 className='text-[20px] leading-[150%] font-semibold'>James Nduku</h1>
              <p className='text-[18px] leading-[150%] mb-[24px]'>Marketing coordinator</p>

              <div className='flex gap-[14px] justify-center m-auto'>
                <FaLinkedin size={24} />
                <FaTwitter size={24} />
                <CiGlobe size={24} />
              </div>
            </div>
          ))}
        </div>

        <Button variant="myBtn" className='mt-[48px] xsm:hidden'>View All</Button>
      </section>
    </>
  );
}

export default AboutUs;
