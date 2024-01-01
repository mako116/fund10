"use client"
import Image from 'next/image'
import React from 'react'
import FUND from "../../assests/FUND 10X_2 1.svg"
import  "../../css/styles.css"
import Link from 'next/link'
import Navs from '../SemiHeader'
const Heads = () => {
  
  return (
    <>
    <Navs className="showmore"/>
    <div className='headies bg-royal-blue w-[full] h-[200px]'>
   <div className="">
   <div className="flex  justify-between widths items-center
    bg-[#fff] relative top-[38px] rounded-[30px] h-[104px]">
 <Link href="/">  
 <div className="logo">
   <Image
   width={100}
   height={20}
   src={FUND}
   className='logos'
   />
   </div>
   </Link>
   <div className=" bg-[#fff]">
    
   <ul className='text-[17.95px] bg-[#fff] flex lg:gap-8'>
   <Link href="/about"><li className='text-base text-blacks font-medium leading-[21.72px] cursor-pointer'>About Fund 10X</li></Link>
    <li className='text-base text-blacks font-medium leading-[21.72px] cursor-pointer'>Get Funding</li>
    <li className='text-base text-blacks font-medium leading-[21.72px] cursor-pointer'>For Investors</li>
    <li className='text-base text-blacks font-medium leading-[21.72px] cursor-pointer'>Resources</li>
    </ul>
   </div>
   <Link href="/contacts">
   <div className="w-[123px] h-[58px] rounded-[10px] border p-padd bg-gradient-to-r from-linear1 to-linear2 gap-[10px] shadowed text-center ">
   <button className=' mt-[15px] text-[17.95px] leading-[21.72px] font-medium text-[#fff]'>Sign up</button>
   </div>
   </Link>

   </div>
   </div>
  </div>
    </>
  )
}

export default Heads
