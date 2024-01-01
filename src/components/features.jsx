import Image from 'next/image'
 import feature from "../../public/images/Vector 8.svg"
import Banner3 from './banner3'
const Features = () => {
  return (
    <>
     <div className="bg-linear2 ">
     <div className=" heroScreen malnr">
     <div className="flex justify-center pt-[80px]">
     <div className="shadowed borderu bg-gradient-to-r from-linear1 to-linear2 border-[2.78px] relative lg:w-[380.27px] lg:h-[78.2px] w-[280px] h-[54px]" >
     <h2 className="lg:w-[237px] w-full ml-[20px] h-[23px] lg:h-[67px] font-bold lg:text-[55.22px] text-[26px] leading-[66.83px] text-whiting">Features</h2>
     </div>
     </div>
     <Banner3/>
     </div>
     </div> 
    </>
  )
}

export default Features
