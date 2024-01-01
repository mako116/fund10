import React from 'react'
import Testimonials from './TestSldes'
  
const Testimonialed = () => {
  return (
    <>
    <div className="bg-img test_height">
    <div className="malnr">
    <div className="flex justify-center pt-[50px] pb-[100px]"> 
    <div className=" shadowed borderu bg-gradient-to-r from-linear1 w-[280px] h-[54px] to-linear2 border-[2.78px] relative lg:w-[425px] lg:h-[78px]" >
    <h2 className="lg:w-[237px] w-[137px] h-[23px]  lg:h-[67px] font-bold text-[28px] lg:text-[55.22px] leading-[66.83px] text-whiting">Testimonials</h2>
    </div>
    </div>
    
    <div className="text-white">
    <Testimonials/>
     </div> 
    </div> 
    <div className="flex justify-center pb-[50px] ">
    <div className="flex items-center lg:w-[233.21px] w-[190px] mt-[40px] h-[50px] lg:h-[71.41px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowed text-center ">
    <button className='text-[16px] lg:text-[21.44px] ml-[40px] leading-[21.72px] font-medium text-[#fff]'>Join the waitlist</button>
    </div>
    </div>
    
   </div> 
    </>
  )
}

export default Testimonialed
