import Image from 'next/image'
import swift from "../../public/images/Frame 2389.svg"
 import ai from "../../public/images/Frame 57.svg"
 import fintech from "../../public/images/Frame 58.svg"
 import energy from "../../public/images/Frame 59.svg"
 import proptech from "../../public/images/Frame 60.svg"
 import ecommerce from "../../public/images/Frame 61.svg"
 import blockcha from "../../public/images/Frame 62.svg"
 import "../css/styles.css"
  const Banner2 = () => {
  return (
    <>
      <div className="w-full h-full bg-img">
      <div className="malnr lg:mt-[160px] mt-[0px] flexm items-center">     
      <div className="w-[600px] widthin h-[366.73px] gap-[32px] lg:mt-[0px] mt-[70px] items-center">
      <h3 className=' font-normal lg:text-[24.44px] leading-[35.57px]'>Explore the financial revolution by backing innovative fintech solutions and shape the future of banking..</h3>
      <div className="flex gap-[13.07px] screned w-[60px] lg:w-[100px] my-[20px]">
       <Image width={100} height={30} src={ai} className="w-[94px] h-[42px] aibt"/>
       <Image width={100} height={30} src={fintech} className="w-[94px] h-[42px] "/>
      <Image width={100} height={30} src={energy} className="w-[94px] h-[42px] "/>
      <Image width={100} height={30} src={proptech}  className="w-[94px] h-[42px] "/>
      <Image width={100} height={30} src={ecommerce} className="w-[94px] h-[42px] "/>
      <Image width={100} height={30} src={blockcha} className="w-[94px] h-[42px] screned"/>
      </div>
     <div className="lg:flex lg:justify-center">
     <div className="flex items-center  mt-[40px] investbtn rounded-[11.44px] border-[0.67px] border-black p-ban-pad gap-[24.37px] bg-gradient-to-r from-linear2 to-linear2 shadowed text-center ">
     <button className='text-[15px] lg:text-[21.44px] ml-[5px] lg:ml-[40px] leading-[21.72px] font-medium text-[#fff]'>Join the waitlist</button>
     </div>
     </div>
      </div>

       <div className="lght  lg:w-[550.33px] lg:h-[593.47px] lg:mb-[0px] w-[250px] h-[200px] mb-[190px]">
      <Image width={100} height={34} src={swift} className="w-[550.33px] h-[593.47px]"/>
      </div>
      </div>
      </div>
    </>
  )
}

export default Banner2
