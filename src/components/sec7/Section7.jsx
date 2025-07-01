import React from 'react'
import Container from '../HEADING/Container'
// import maps from "../../../public/Maps.png"
const Section7 = () => {
  return (
    <section className=''>
      <div className="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58410.67134376286!2d90.37306978716003!3d23.79487106805263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1751364290604!5m2!1sen!2sbd" width={`100%`} height="550"></iframe>
      </div>
      <div className="w-full bg-red-600 py-[20px] flex gap-3 justify-center items-center">
        <div className="">
          <h3 className='text-[36px] text-white font-bold font-pops'>Want to join as member branch in your area?</h3>
        </div>
        <div className="">
          <a className='text-[16px] text-white font-semibold font-pops border-1 border-white p-[10px]' href="#">CONTACT</a>
        </div>
      </div>
    </section>
  )
}

export default Section7
