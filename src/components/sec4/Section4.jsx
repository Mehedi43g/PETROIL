import React from 'react'
import Container from '../HEADING/Container'
import b1 from "../../assets/b1.png"
const Section4 = () => {
    return (
        <section className='p-[100px] bg-[#F0F0F0] '>
            <Container>
                <div className=" flex justify-center items-center max-w-[1200px] mx-auto w-full">
                    <div className="w-1/4  flex justify-end">
                        <div className="">
                            <div className="p-[10px] py-[94px] px-[70px] bg-red-500 inline-block max-w-full">
                                <h3 className="text-[20px] font-bold font-pops text-white">Learn more <br /> about our <br /> company</h3>
                            </div>
                        </div>
                    </div>

                    <div className="w-2/4">
                        <div className="relative ">
                            <img className='' src={b1} alt="" />
                            <div className="">
                                <a className=' absolute top-[150px] left-[220px] text-red-500 font-bold px-[5px] py-[10px] font-pops text-[16px]  bg-[#ffffff] ' href="#">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Section4
