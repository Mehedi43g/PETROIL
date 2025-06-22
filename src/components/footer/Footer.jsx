import Container from '../HEADING/Container'
import lggg from '../../assets/lggg.png'
import { TbMailStar } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocalLibrary } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import crt1 from "../../assets/crt1.png"
import crt2 from "../../assets/crt2.png"
const Footer = () => {
    return (
        <section className='pt-[50px] bg-[#1F1F1F]'>
            <Container>
                <div className="py-[150px] flex">
                    <div className="w-3/12">
                        <div className="lg">
                            <img src={lggg} alt="" />
                        </div>
                        <div className="contract pt-[30px]">
                            <div className="flex items-center gap-2 text-white ">
                                <TbMailStar />
                                <p className='text-[12px] py-[10px] font-pops'>mail@yourcompany.com</p>
                            </div>
                            <div className="flex items-center gap-2 text-white ">
                                <FaPhoneVolume />
                                <p className='text-[12px] py-[10px] font-pops'>+896 120 5889 (Toll free)</p>
                            </div>
                            <div className="flex items-center gap-2 text-white ">
                                <MdLocalLibrary />
                                <p className='text-[12px] py-[10px] font-pops'>101 Baker Street, New York, USA, 12345</p>
                            </div>
                        </div>
                        <div className="icons flex gap-3 pt-[20px] ">
                            <a className='text-[#F40404]' href="#"><FaFacebook /></a>
                            <a className='text-[#F40404]' href="#"><AiFillTwitterCircle /></a>
                            <a className='text-[#F40404]' href="#"><TbBrandLinkedinFilled /></a>
                            <a className='text-[#F40404]' href="#"><AiFillInstagram /></a>
                        </div>
                    </div>
                    <div className="w-1/12"></div>
                    <div className="w-2/12  ">
                        <div className="text-white font-bold font-pops text-[16px]">
                            <h3>Company</h3>
                        </div>
                        <div className="">
                            <div className="text-white  pt-[20px] text-[12px] font-pops">
                            <a href="#">Home</a>
                        </div>
                        <div className="text-white  pt-[20px] text-[12px] font-pops">
                            <a href="#">About</a>
                        </div>
                        <div className="text-white  pt-[20px] text-[12px] font-pops">
                            <a href="#">Services</a>
                        </div>
                        <div className="text-white  pt-[20px] text-[12px] font-pops">
                            <a href="#">Gallery</a>
                        </div>
                        </div>

                    </div>
                    <div className="w-1/12"></div>
                    <div className="w-3/12  ">
                        <div className="text-white font-bold font-pops text-[16px]">
                            <h3>Others</h3>
                        </div>
                        <div className="">
                            <div className="text-white  pt-[20px] text-[12px] font-pops">
                            <a href="#">Blog</a>
                        </div>
                        <div className="text-white  pt-[20px] text-[12px] font-pops">
                            <a href="#">Contact</a>
                        </div>
                        <div className="text-white  pt-[20px] text-[12px] font-pops">
                            <a href="#">Terms & Conditions</a>
                        </div>
                        <div className="text-white  pt-[20px] text-[12px] font-pops">
                            <a href="#">Privacy Policy</a>
                        </div>
                        </div>
                    </div>
                    <div className="w-1/12"></div>
                    <div className="w-3/12  ">
                        <div className="text-white font-bold font-pops text-[16px]">
                            <h3>Certificate</h3>
                        </div>
                        <div className="flex gap-2 pt-[20px]">
                            <div className="">
                                <a href="#"><img src={crt1} alt="" /></a>
                            </div>
                            <div className="">
                                <a href="#"><img src={crt2} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <section className='w-full py-[30px] bg-[#282828]'>
                <Container>
                    <div className=" text-[#6C6C6C]">
                    <a href="#">© Copyright 2022 by AltDesain Studio – All right reserved.</a>
                </div>
                </Container>
            </section>
        </section>
    )
}

export default Footer
