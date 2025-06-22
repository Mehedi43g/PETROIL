import React from 'react'
import Container from '../HEADING/Container'
import bg1 from "../../assets/bg1.png"
import bg2 from "../../assets/bg2.png"
import bg3 from "../../assets/bg3.png"
const Section3 = () => {
  return (
    <div className='pb-[100px]'>
      <Container>
        <div className="flex">
          <div className="w-2/4">
            <div className="pl-[150px]">
              <h3 className='text-[64px] font-bold font-pops' >Our Services</h3>
              <p className='text-justify font-pops text-[16px]'>It is a long established fact that a reader will be <br /> distracted by the readable content of a page <br /> when looking at its layout.</p>
            </div>

          </div>
          <div className="w-2/4">
            <div className="relative">
              <img src={bg1} alt="" className="w-full h-auto" />

              <div className="absolute top-0 left-0  w-full h-full bg-black/60 text-white">
                <div className="pl-[30px] py-[60px]">
                  <h3 className="text-[26px] font-bold font-pops ">
                    Modern natural oil and gas refineries.
                  </h3>
                  <div className="pt-[30px]">
                    <a className=' text-white px-[5px] py-[10px] font-pops text-[12px]  bg-[#F40404] ' href="#">LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/4">
            <div className="relative">
              <img src={bg2} alt="" className="w-full h-auto" />

              <div className="absolute top-0 left-0  w-full h-full bg-black/60 text-white">
                <div className="pl-[30px] py-[60px]">
                  <h3 className="text-[26px] font-bold font-pops ">
                    Supply of national industries.
                  </h3>
                  <div className="pt-[30px]">
                    <a className=' text-white px-[5px] py-[10px] font-pops text-[12px]  bg-[#F40404] ' href="#">LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4">
            <div className="relative">
              <img src={bg3} alt="" className="w-full h-auto" />

              <div className="absolute top-0 left-0  w-full h-full bg-black/60 text-white">
                <div className="pl-[30px] py-[60px]">
                  <h3 className="text-[26px] font-bold font-pops ">
                    National fuel distribution and supply.
                  </h3>
                  <div className="pt-[30px]">
                    <a className=' text-white px-[5px] py-[10px] font-pops text-[12px]  bg-[#F40404] ' href="#">LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Section3

