import React from 'react'
import Container from '../HEADING/Container'
import lg1 from "../../assets/lg1.png"
import lg2 from "../../assets/lg2.png"
import lg3 from "../../assets/lg3.png"
import lg4 from "../../assets/lg4.png"
const Section5 = () => {
  return (
    <section className='p-[100px]'>
        <Container>
                <div className="flex">
                    <div className="w-1/4">
                <img src={lg1} alt="" />
                </div>
                <div className="w-1/4">
                <img src={lg2} alt="" />
                </div>
                <div className="w-1/4">
                <img src={lg3} alt="" />
                </div>
                <div className="w-1/4">
                <img src={lg4} alt="" />
                </div>
                </div>
        </Container>
    </section>
  )
}

export default Section5
