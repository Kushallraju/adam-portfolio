import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import {AboutVariable} from '../Constant'
import MobileNavbar from '../Components/Layout/MobileNavbar'

const About = () => {
  return (
    <>
    <Navbar />
    <MobileNavbar/>
   <section className=" bg-gradient-to-b to-[black] via-[#090909] from-[#131313]">
  <div className="container md:px-16 py-16 mx-auto text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-white lg:text-4xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-easing="ease-out">{AboutVariable.title}</h1>
      <p className="mt-6 text-white text-lg" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out">{AboutVariable.shortDescription}</p>

    </div>
    <div className="flex justify-center mt-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1500" data-aos-easing="ease-out">
      <img className="object-cover w-full h-96 rounded-xl" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
    </div>
  </div>
</section>

   <section className="bg-black">
  <div className="lg:flex container md:px-6 md:w-[90%] py-16 mx-auto text-left">
    <div className="flex items-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
      <div className="max-w-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-easing="ease-out">
        <h2 className="text-3xl font-semibold text-white lg:text-4xl">{AboutVariable.whatwedo.title1} <span className="text-[#ffde5a]">{AboutVariable.whatwedo.title2}</span></h2>
        <p className="mt-4 text-sm text-white lg:text-lg">{AboutVariable.whatwedo.detail1}</p>
<p className="mt-4 text-sm text-white lg:text-lg">
{AboutVariable.whatwedo.detail2}
</p>
        <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
          <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-black hover:text-white transition-colors duration-300 transform bg-[#ffde5a] rounded-md hover:bg-gray-700">Contact Now</a>
        </div>
      </div>
    </div>
    <div className="w-full h-64 lg:w-1/2 lg:h-auto relative z-20">
      <div className="w-full h-full bg-cover" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)'}} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out">
        <div className="w-full h-full bg-black opacity-25" />
      </div>
    </div>
  </div>
  <svg id="sw-js-blob-svg" className='md:block z-0 absolute hidden w-[24em] top-[50rem] right-[0rem]' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>                            <stop id="stop1" stopColor="rgba(255, 222, 90, 1)" offset="0%" />                            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" />                      </linearGradient>                  </defs>                <path fill="url(#sw-gradient)" d="M20.5,-23.4C27.9,-18.2,36.2,-13,38.8,-5.7C41.4,1.6,38.4,11,33.4,18.9C28.4,26.9,21.4,33.3,13.9,34.6C6.3,35.8,-1.9,31.9,-10.8,29C-19.7,26.1,-29.2,24.2,-34.5,18.3C-39.8,12.5,-40.8,2.5,-38.4,-6C-36,-14.5,-30,-21.6,-23.1,-26.9C-16.1,-32.3,-8,-35.8,-0.8,-34.9C6.5,-34,13.1,-28.7,20.5,-23.4Z" width="100%" height="100%" transform="translate(50 50)" style={{transition: 'all 0.3s ease 0s'}} strokeWidth={0} />            </svg>
</section>


    <Footer />
    </>
  )
}

export default About