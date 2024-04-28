import React from 'react'
import './timeline.css'

const Education = () => {
  return (
    <>
{/* component */}
<section id='education' className="bg-[#141414]">

<div className="md:container mx-auto w-full h-full">
<div className='py-10' data-aos="fade-up"
     data-aos-anchor-placement="top-center">

        <p className="mt-4 text-center uppercase text-slate-300">
        What I have Studied so far
        </p>
        <h1 className="text-4xl font-bold text-center text-white capitalize lg:text-6xl ">Education
        </h1>

</div>

  <div className="relative w-full wrap overflow-hidden p-10 h-full">
    <div className="border-2-2  absolute border-opacity-20 border-white h-full border md:left-[50%]"  />
    {/* right Education */}
      
    <div className="mb-8 mt-1 flex justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#252A2F] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div className=" px-1 pb-2 text-left md:absolute right-time">
        <span className="block text-xl font-bold text-slate-200" tabIndex={0} role="link">2022-present</span>
        <span className="text-sm text-slate-300">Learnt, unlearnt and transformed</span>
    </div>
      <div data-aos="fade-left"
     data-aos-duration="500" className="w-full py-3 px-3 overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className=" text-left">
      <h2 className='block text-3xl font-bold text-white'>
      Honours Computer Science (H. BSc)
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-300">Ontario Tech University, Oshawa, ON
</p>
    </div>
  {/* <img className="object-cover w-full h-62" src="/timeline/uni.jpeg" alt="avatar" /> */}
  <ul className=" text-left px-2">
    <li className="text-md list-disc text-gray-300">
Courses undertaken: Data Structures and Algorithms, Object-Oriented Programming, REST API Development and Integration, Software Design UML, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, Database Systems, Software Engineering.</li>
  </ul>
</div>

      </div>
    </div>
    <div className="mb-8 mt-1 flex md:flex-row-reverse justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#252A2F] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div className=" px-1 pb-2 text-left md:absolute left-time">
        <span className="block text-xl font-bold text-slate-200" tabIndex={0} role="link">2019-2021</span>
        <span className="text-sm text-slate-300">Navigating disputes, championing growth</span>
    </div>
      <div data-aos="fade-right"
     data-aos-duration="500" className="w-full py-4 px-3 overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className=" px-2 text-left">
      <h2 className='block text-3xl font-bold text-white'>
      High School
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-300">Ontario Tech Richmond Hill High School, ON
</p>
    </div>
  {/* <img className="object-cover w-full h-54 aspect-square" src="/timeline/law.jpg" alt="avatar" /> */}
  <div className=" text-left">
  <ul className=" text-left px-2">
    <li className="text-md list-disc text-gray-300">
    Achievements: Valedictorian, Ontario Scholar</li>
    <li className="text-md list-disc text-gray-300">
    Percentage: 96%</li>
  </ul>
  </div>
</div>

      </div>
    </div>
    
  </div>
</div>
</section>


    </>
  )
}

export default Education