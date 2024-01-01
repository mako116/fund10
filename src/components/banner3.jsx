 import arrowed from "../../public/images/Vector (1).svg"
import framed from "../../public/images/Frame 84.svg"
import packet from "../../public/images/Frame 79.svg"
import headsing from "../../public/images/Startup Profile.svg"
import lighting from "../../public/images/arrowsss.png" 
import Image from 'next/image'
import investment from "../../public/images/Investment Showcase.svg"
import advance from "../../public/images/Advanced Search.svg"
import spanin from "../../public/images/arrow, hand drawn, scribble, doodle, thick, up, right, 52.svg"
import framh from "../../public/images/Frame 86.svg"
const Banner3 = () => {
  return (
    <>
    <div className="w-full h-full dflexd">
    <div className=" lg:mt-[80px] sm:mt-[30px] mt-[10px] flexm lg:items-center">
    
    <div className=" lg:w-[600px] w-full h-[366.73px] gap-[32px] ">
    <div className=' lg:w-[503px] h-[54px] '>
    <Image width={100} height={30} src={headsing} className="lg:w-[303px] w-[230px] h-[54px]" />
    </div>
   <p className="lg:w-[498px] w-full aibted h-[181px] text-[#fff] font-medium text-[18px] lg:text-[22.44px] leading-[32.66px]">Create your account, complete your profile with relevant information and join the waitlist. Let others know about your business or investment objectives.</p>
   <div className="paddtop">
   <div className="flex items-center w-[233.21px]  h-[71.41px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowed text-center ">
    <button className=' text-[21.44px] ml-[40px] leading-[21.72px] font-medium text-[#fff]'>Join the waitlist</button>
    </div>
   </div>
    </div>
     <div className="flex flex-col">
     <div className="lght justify-end ml-[270px]">
     <Image width={100} height={34} src={lighting} className=" lght z-[-1000px] "/>
     </div>
      <div className="w-[550.33px] h-[593.47px] lght ">
     <Image width={100} height={34} src={packet} className=" w-[629px]  h-[463.04px] "/>
     </div>
     </div>
    </div>
     <div className="  lg:mt-[80px]  mt-[0px] w-full flexm lg:items-center">
   <div className="flex flex-col ">
   <div className="sm:flex sm:items-center justify-end ml-[270px] lght z-[1000px]">
   <Image width={100} height={30} src={arrowed} className=""/>
   </div>
    <div className="lght">
   <Image
   width={100}
   height={30}
   className=' w-[644.74px] h-[446px] lght'
   src={framed}
   />
   </div>
   </div>
    <div className="lg:w-[557px] w-full mt-[43px] h-[354.41px] lg:gap-[62px] gap-[22px]  items-center">
    <Image width={100} height={30} src={advance} className="lg:w-[360px] w-[230px] h-[54px]" />
    <p className="aibted w-full lg:w-[498px] h-[210px] text-[#fff] font-medium text-[18px] lgtext-[22.44px] leading-[32.66px]">
    Our advanced search functionality helps you find the perfect match. Use specific criteria to discover potential connections. Our matching algorithms suggest relevant profiles, making your search easier
    </p>
    <div className="paddtop">
   <div className="flex items-center w-[233.21px]  h-[71.41px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowed text-center ">
    <button className=' text-[21.44px] ml-[40px] leading-[21.72px] font-medium text-[#fff]'>Join the waitlist</button>
    </div>
   </div>
    </div>
    </div>
    <div className=" lg:mt-[80px] mt-[0px] flexm lg:items-center">
    
    <div className="lg:w-[600px] w-full h-[366.73px] gap-[32px]">
    <div className=' lg:w-[503px] w-full h-[54px]'>
    <Image width={100} height={30} src={investment} className="lg:w-[452px] w-[230px] h-[54px]" />
    </div>
    <p className="lg:w-[498px] w-full aibted h-[181px] text-[#fff] font-medium text-[18px] lg:text-[22.44px] leading-[32.66px]">SMEs, it's your time to shine. Showcase your business ideas, investment opportunities, and potential returns in a dedicated section. Upload business plans, presentations, and financial documents to attract investors.</p>
   <div className="paddtop">
   <div className="flex items-center w-[233.21px]  h-[71.41px] rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowed text-center ">
    <button className=' text-[21.44px] ml-[40px] leading-[21.72px] font-medium text-[#fff]'>Join the waitlist</button>
    </div>
   </div>
    
    </div>
   
     <div className="flex flex-col">
     <div className="w-[550.33px] h-[593.47px] lght">
    <Image width={100} height={34} src={framh} className="lg:w-[629px] w-full h-[463.04px] lght"/>
    </div>
    <div className="z-[-1000px] flex justify-end mr-[270px]">
    <Image width={100} height={30} src={spanin} className="w-[136.18px] h-[135px] z-[-1000px] lght"/>
   </div>
     </div>
    
    </div>
    
    </div>
     </>
  )
}

export default Banner3
