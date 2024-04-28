import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import MobileNavbar from '../Components/Layout/MobileNavbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <MobileNavbar/>
    <section id='about' className="bg-[#141414]">
  <div className="container h-[90vh] py-8 mx-auto">
    <div className="items-center lg:flex">
      <div className="w-full lg:w-[55%]">
        <div className="">
        <p className="mb-7 text-gray-200 font-extrabold text-2xl ">I am Adam</p>

        {/* <h1 className="text-3xl font-semibold text-white lg:text-8xl">HELLO</h1> */}
        <div>
  <h1 className="text-5xl font-extrabold text-left lg:text-6xl 2xl:text-7xl">
    <span className="text-transparent bg-gradient-to-tl bg-clip-text from-blue-500 to-pink-500 ">
      Developer & Designer

    </span>
  </h1>
</div>

  <p className="text-white text-2xl mt-4 leading-relaxed">Freelance frontend developer with a background in graphics programming, animation & UI/UX. 
</p>
          
        </div>
      </div>
      <div className="flex relative items-center justify-center w-full mt-6 lg:mt-0 lg:w-[45%]">
                   <svg data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='xl:w-full xl:h-full xl:p-4 rotate-45' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         
                   <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>                            
                   <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%" />                            
                   <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" />                      </linearGradient>                 
                    </defs>                
                   <path fill="url(#sw-gradient)" d="M22.3,-25.6C28.7,-21.2,33.4,-14,34.3,-6.5C35.1,1.1,32,8.9,27.4,14.8C22.8,20.7,16.6,24.7,9,29.7C1.4,34.6,-7.8,40.5,-16.3,39.6C-24.8,38.7,-32.6,31.1,-34.7,22.5C-36.8,13.9,-33.1,4.3,-31.7,-5.9C-30.3,-16.2,-31.2,-27.2,-26.3,-31.9C-21.4,-36.5,-10.7,-34.8,-1.4,-33.1C8,-31.5,15.9,-30,22.3,-25.6Z" width="100%" height="100%" transform="translate(50 50)" style={{transition: '0.3s'}} strokeWidth={0} />            
                   </svg>

        <img data-aos="fade-left"
     data-aos-duration="1500" className="xl:w-full -mt-1 lg:py-10 xl:px-10 lg:px-2 absolute h-full lg:max-w-sm" src="/user.png" alt="hero.png" />
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>

  )
}

export default Home