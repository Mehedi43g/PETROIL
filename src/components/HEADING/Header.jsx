import Container from "./Container";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
     <div className="bg-headerColor">
      <Container className="lg:flex">
      <div className="w-full lg:w-1/4 flex items-center justify-center lg:justify-start gap-3">
      <MdOutlineEmail className="text-white"/>
      <p className="text-white font-pops text-[12px] lg:text-[16px] ">react@gmail.com</p>
      </div>
      <div className="w-full lg:w-1/4 flex items-center gap-3 lg:border-l-2 lg:border-white justify-center py-2 lg:py-0">
      <FaPhoneAlt className="text-white"/>
      <p className="text-white font-pops text-[12px] lg:text-[16px]">+8801994562</p></div>
      <div className="w-full lg:w-2/4 flex lg:justify-end justify-center py-2 lg:py-0 text-white gap-5">
      <div className="text-end text-[12px] lg:text-[16px]"><a href="#"><FaFacebookSquare /></a></div>
      <div className="text-end text-[12px] lg:text-[16px]"><a href="#"><FaTwitter /></a></div>
      <div className="text-end text-[12px] lg:text-[16px]"><a href="#"><FaLinkedin /></a></div>
      <div className="text-end text-[12px] lg:text-[16px]"><a href="#"><FaInstagram /></a></div>
      
      </div>
    </Container>
     </div>
  )
}

export default Header
