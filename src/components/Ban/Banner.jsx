import Container from '../HEADING/Container'
// import bannbg from "../../../public/Bannerbg.png"



const Banner = () => {
  return (
    <div className="relative bg-[url(../../../public/Bannerbg.png)] bg-no-repeat bg-center bg-cover lg:py-[150px] after:absolute after:left-0 after:top-0 after:content-[' '] after:h-full after:w-full after:bg-black after:opacity-60">
      <Container>
        <h1 className='relative z-10 pt-[40px] lg:pt-[100px] text-white text-[26px] lg:text-[64px] font-bold lg:leading-[64px] font-pops'>We exist since 1975 on the <br class="hidden sm:block" /> oil and gas industry.</h1>
        <div className="pt-[40px] pb-[200px]">
          <a className='absolute z-10 text-white px-[18px] py-[15px] font-pops  bg-[#F40404]' href="#">LEARN MORE</a>
        </div>
      </Container>
    </div>
    
  )
}

export default Banner
