import React from 'react'

const ResumeIntro = () => {
  return (
    <section id='about' className="bg-[#141414]" >
  <div className="container pt-20 mx-auto" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
    <div className="items-center lg:flex">
      <div className="w-full xl:w-[70%]">
        <div className="">
        <p className="mb-2 text-gray-200 font-extrabold text-xl whitespace-no-wrap">Introduction</p>

        {/* <h1 className="text-3xl font-semibold text-white lg:text-8xl">HELLO</h1> */}
        <div>
  <h1 className="text-5xl font-extrabold text-left lg:text-6xl 2xl:text-7xl">
    <span className="text-white ">
    Overview.

    </span>
  </h1>
</div>

  <p className="text-gray-200 text-xl mt-4 leading-relaxed break-before-page whitespace-no-wrap">Sunny Patel is a seasoned computer science and software development professional, bringing over four years of industry expertise to the table. With a solid academic foundation in computer science and a passion for problem-solving, Sunny is committed to delivering top-tier solutions to intricate challenges. His portfolio showcases a diverse range of projects and accomplishments, highlighting his dedication to excellence in every endeavor.
</p>
<div className='flex flex-wrap gap-5 mt-5 text-white'>
    <button className="inline-flex items-center bg-gray-800 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 hover:text-black hover:scale-110 scale-100 transition-all rounded-xl text-base mt-4 md:mt-0">Resume
    </button>
    <button className="inline-flex items-center bg-blue-700 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 hover:text-black hover:scale-110 scale-100 transition-all rounded-xl text-base mt-4 md:mt-0">Linkden
     
     </button>
     <button className="inline-flex items-center bg-blue-700 border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 hover:text-black hover:scale-110 scale-100 transition-all rounded-xl text-base mt-4 md:mt-0">Github
     
     </button>
    </div>
          
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ResumeIntro