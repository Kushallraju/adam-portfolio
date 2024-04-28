import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import ResumeIntro from '../Components/ResumeIntro'
import Education from '../Components/Education'
import Certification from '../Components/Certification'
import Work from '../Components/Work'

const Resume = () => {
  return (
    <>
      <Navbar/>
      <ResumeIntro/>
      <Education/>
      <Certification/>
      <Work/>
      <Footer/>
    </>
  )
}

export default Resume