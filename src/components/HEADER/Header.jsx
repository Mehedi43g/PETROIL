import Container from "./Container";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Header = () => {
  return (
     <div className="bg-headerColor">
      <Container className="flex">
      <div className="w-1/4 flex items-center gap-3">
      <MdOutlineEmail className="text-white"/>
      <p className="text-white font-pops">react@gmail.com</p>
      </div>
      <div className="w-1/4 flex items-center gap-3 border-l-2 border-white justify-center">
      <FaPhoneAlt className="text-white"/>
      <p className="text-white font-pops">+8801994562</p></div>
      <div className="w-2/4 flex justify-end text-white gap-3">
      <div className="text-end"><FaFacebookSquare /></div>
      <div className="text-end"><FaFacebookSquare /></div>
      <div className="text-end"><FaFacebookSquare /></div>
      <div className="text-end"><FaFacebookSquare /></div>
      
      </div>
    </Container>
     </div>
  )
}

export default Header
