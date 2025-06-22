import React from 'react'
import Container from '../HEADING/Container'
// import maps from "../../../public/Maps.png"
const Section7 = () => {
  return (
    <section className=' pb-[100px] '>
        <Container>
            <div className="w-full bg-[url(../../../public/Maps.png)] py-[180px] "></div>
            <div className="w-full bg-red-600 py-[20px] flex gap-3 justify-center items-center">
                <div className="">
                    <h3 className='text-[36px] text-white font-bold font-pops'>Want to join as member branch in your area?</h3>
                </div>
                <div className="">
                    <a className='text-[16px] text-white font-semibold font-pops border-1 border-white p-[10px]' href="#">CONTACT</a>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Section7
