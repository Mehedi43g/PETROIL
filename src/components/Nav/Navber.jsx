import Container from '../HEADING/Container'
import logo from "../../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from 'react';

const Navber = () => {
  let [show, setShow] = useState(false)
  let handleSHow = () => {
    setShow(!show)

  }
  return (
    <div className="bg-navbgColor">
      <Container>
        <div className="flex items-center py-4">
          <div className="w-1/3">
            <img src={logo} alt="" />
          </div>
          <div className="w-2/3">
            <ul className={`justify-end items-center transition-all duration-500 ease-in-out ${show 
              ? 'top-[140px] opacity-100' 
              : 'top-[-300px] opacity-0'} absolute left-0 w-full z-30 bg-green-400 lg:static lg:flex lg:w-auto lg:opacity-100 lg:top-auto lg:bg-transparent`}>

              {/* {`justify-end items-center transition-all duration-500 ease-in-out
    ${show ? 'top-[140px] opacity-100' : 'top-[-300px] opacity-0'} 
    absolute left-0 w-full z-30 bg-green-400 
    lg:static lg:flex lg:w-auto lg:opacity-100 lg:top-auto lg:bg-transparent`} */}
              <li><a className='px-4 text-white font-pops hover:text-black' href="#">Home</a></li>
              <li><a className='px-4 text-white font-pops hover:text-black' href="#">About</a></li>
              <li><a className='px-4 text-white font-pops hover:text-black' href="#">Services</a></li>
              <li><a className='px-4 text-white font-pops hover:text-black' href="#">Gallery</a></li>
              <li><a className='px-4 text-white font-pops hover:text-black' href="#">Blog</a></li>
              <li><button className='px-2 py-2 border-2  border-white text-white font-pops ease-out duration-300 hover:bg-orange-500 shadow-lg shadow-orange-500/50 hover:text-black font-bold'>CONTACT</button></li>
            </ul>
          </div>
          <div className="lg:hidden" onClick={handleSHow}>
            {show
              ?
              <ImCross />
              :
              <FaBars />
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navber
