import React from 'react'
import frame from "../../public/images/Frame 43.svg"
import Image from 'next/image'
const Homesecton = () => {
  return (
    <>
    <div className=" linears heroScreen malnr">
    <div className=" lg:py-[120px] pt-[60px] lg:gap-[40px] w-full h-full flex lg:justify-between justify-center flex-col lg:flex-row items-center">
    <div className="imgs">
    <Image
    width={100}
    height={30}
    className=' lg:w-[644.74px] lg:h-[446px] w-[350.7px] h-[250px]'
    src={frame}
    />
    </div>
    <div className="lg:w-[557px] w-full mt-[40px]  h-[354.41px] lg:gap-[62px] gap-[22px] lg:block flex items-center flex-col">
    <p className='font-medium widthin text-[19px] lg:text-[23.44px] text-[#ffffff] leading-[34.11px] '>Are you an <span className=' text-black font-bold text-[23.44px] leading-[34.11px]'>SME</span> seeking investment opportunities, or an <span className=' text-black font-bold text-[23.44px] leading-[34.11px]'>investor</span> looking for promising ventures to support? Fund10X is here to connect you! Our user-friendly platform brings together Small and Medium Enterprises (SMEs) and investors in a secure and feature-rich environment.</p>
    <div className="flex items-center homebtn lg:mt-[40px] mt-[0px] mb-[10px] h-[71.41px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowed text-center ">
    <button className=' lg:text-[21.44px] ml-[20px] leading-[21.72px] font-medium text-[#fff]'>Join the waitlist</button>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Homesecton
