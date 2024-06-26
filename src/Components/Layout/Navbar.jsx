import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <>
    <header className="text-white md:block hidden bg-gradient-to-b via-[#090909] to-[#131313] from-[black] body-font">
  <div className="container md:w-[100%] w-[90%] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex text-white title-font font-medium items-center mb-4 md:mb-0">
      {/* <img src='/logo.png' className='w-52' /> */}
      Kushal Raju
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <HashLink to="/" className="mr-5 hover:text-gray-500">Home</HashLink>
      <HashLink to="/about" className="mr-5 hover:text-gray-500">About us</HashLink>
      {/* <HashLink to="/#milestone" className="mr-5 hover:text-gray-500">Milestone</HashLink> */}
      <HashLink to="/resume" className="mr-5 hover:text-gray-500">Resume</HashLink>
      <HashLink to="/portfolio" className="mr-5 hover:text-gray-500">Work</HashLink>
    </nav>
    <HashLink to="/contact" className="inline-flex items-center text-black bg-[#ffde5a] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact us
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </HashLink>
  </div>
</header>


    </>
  )
}

export default Navbar