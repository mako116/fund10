import React from 'react'
import Heads from '../header/Heads'
import Image from 'next/image'
import happy from "../../../public/images/happymix.svg"
import Footer from '../footer/footer'
const Abouts = () => {
  return (
    <>
      <div className="bg-linear2 w-full h-full">
     
      <div className="flex justify-center">
      <div className="shadowhite borderu bg-gradient-to-r from-linear1 to-linear2 border-[2.78px] relative w-[380.27px] border-[#fff] h-[78.2px]" >
     <h2 className="w-[237px] h-[67px] font-bold text-[45.22px] leading-[66.83px] text-whiting">About Us</h2>
     </div>
      </div>
     <div className="flex justify-center w-full h-full py-[80px]">
     <div className="">
     <Image width={100} height={30} src={happy} className='w-[886px] h-[590.74px] rounded-[10px] '/>
     </div>
     </div>
     <div className=" text-[#ffffff] px-[182px]">
     <h2 className='font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]'><span className='font-bold leading-[132.1px] tracking-[1%] text-[84.13px] '>At</span><b>Fund10X</b>, we are driven by a singular mission - to bridge the gap between Small and Medium Enterprises (SMEs) with innovative ideas and the investors who are seeking viable business opportunities. We understand the challenges faced by SMEs in securing the necessary funding to turn their entrepreneurial dreams into reality. Simultaneously, we recognize that investors are on the lookout for promising ventures with the potential for growth and success. 
     </h2>
    <p className='font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]'>
     <span className=' underline font-bold'>Fund10X is not just a platform;</span> it's a dynamic ecosystem where business aspirations meet financial resources. We are committed to creating an environment where SMEs and investors can connect, collaborate, and thrive. Here's what sets us apart:</p>
     <p className='font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]'>
     <span className=' underline font-bold'>Connecting Visionaries with Capital:</span>  We serve as the conduit that brings together visionaries - the SMEs with groundbreaking ideas - and the capital they need to bring those ideas to fruition.</p> 
     <p className='font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]'>
     <span className=' underline font-bold'>Empowering Entrepreneurs:</span>  For SMEs, Fund10X is the stage where they can showcase their innovation, share investment opportunities, and attract the right investors. It's a platform where creativity is recognized and rewarded.</p> 
     <p className='font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]'>
     <span className=' underline font-normal'>Facilitating Informed Investment:</span> Investors gain access to a curated pool of SMEs seeking investment. They can browse through detailed SME profiles, discover ventures that align with their interests, and connect with the next big thing in the business world.</p> 
     <p className='font-normal leading-[37.89px] ]mb-[50px] tracking-[1%] text-[24.13px]'>
     <span className=' underline font-bold'>Fund10X is more than a website;</span> it's a dynamic marketplace for ideas, resources, and opportunities. We are passionate about fostering collaboration, supporting innovation, and ultimately driving economic growth through the success of our SMEs and the satisfaction of our investors. Join us on this exciting journey, and let's unlock the potential for success, together. </p>
       <p className='font-normal leading-[37.89px] mb-[50px] tracking-[1%] text-[24.13px]'>
       <span className=' underline font-bold'>Our Mission ;</span> At Fund10X, our mission is to bridge the gap between SMEs with innovative ideas and investors seeking viable business opportunities. We aim to create a thriving ecosystem where businesses and investors can connect, collaborate, and grow together.</p>
     </div>
     <div className="flex justify-center p-[50px]">
     <div className="flex items-center w-[233.21px] mt-[40px] h-[71.41px] rounded-[11.44px] border-[0.67px] border-white p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowhite text-center ">
     <button className=' text-[21.44px] ml-[40px] leading-[21.72px] font-medium text-[#fff]'>Join the waitlist</button>
     </div>
     </div>
     <div className="">
     <Footer/>
     </div>
      </div>
    </>
  )
}

export default Abouts
