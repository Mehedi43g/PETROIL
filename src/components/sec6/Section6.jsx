import React from 'react'
import Container from '../HEADING/Container'
import cr1 from '../../assets/cr1.png'
import cr2 from '../../assets/cr2.png'
import cr3 from '../../assets/cr3.png'
import { FaAngleRight } from "react-icons/fa";
const Section6 = () => {
    return (
        <section className='py-[100px]'>
            <Container>
                <div className="flex justify-center gap-3">
                    <div className="w-3/12 relative">
                        <img src={cr1} alt="" />
                        <div className="opacity-0 hover:opacity-100 duration-1000 absolute top-0 left-0 bg-[#00000065] px-[10px] h-full">
                            <h3 className='text-white text-[24px] font-bold font-pops py-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                            <div className="">
                                <a className='px-[10px] py-[7px] bg-[#ffffff8f] text-white text-[16px] font-bold font-pops' href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                     <div className="w-3/12 relative">
                        <img src={cr2} alt="" />
                        <div className="opacity-0 hover:opacity-100 duration-1000 absolute top-0 left-0 bg-[#00000065] px-[10px] h-full">
                            <h3 className='text-white text-[24px] font-bold font-pops py-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                            <div className="">
                                <a className='px-[10px] py-[7px] bg-[#ffffff8f] text-white text-[16px] font-bold font-pops' href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                     <div className="w-3/12 relative">
                        <img src={cr3} alt="" />
                        <div className="opacity-0 hover:opacity-100 duration-1000 absolute top-0 left-0 bg-[#00000065] px-[10px] h-full">
                            <h3 className='text-white text-[24px] font-bold font-pops py-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                            <div className="">
                                <a className='px-[10px] py-[7px] bg-[#ffffff8f] text-white text-[16px] font-bold font-pops' href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className=" pr-[250px] pt-[20px] ">
                        <div className="flex justify-end items-center">
                            <a className='text-[14px] font-bold font-pops ' href="#">MORE FROM THE BLLOG</a>
                            <FaAngleRight />
                        </div>
                    </div>
            </Container>
        </section>
    )
}

export default Section6
