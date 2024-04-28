import React from 'react'
import './timeline.css'

const Certification = () => {
  return (
    <>
{/* component */}
<section id='certification' className="bg-[#141414]">

<div className="md:container mx-auto w-full h-full">
<div className='py-10'>

        <p className="mt-4 text-center text-slate-300">
        Explore my Credentials below
        </p>
        <h1 className="text-4xl font-bold text-center text-white capitalize lg:text-6xl ">Certification
        </h1>

</div>

  <div className="relative w-full wrap overflow-hidden p-10 h-full">
    <div className="border-2-2  absolute border-opacity-20 border-white h-full border md:left-[50%]"  />
    {/* right Certification */}
      
    <div className="mb-8 mt-1 flex justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#252A2F] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div className=" px-1 pb-2 text-left md:absolute right-time">
        <span className="block text-xl font-bold text-slate-200" tabIndex={0} role="link">2014-2019</span>
        <span className="text-sm text-slate-300">Learnt, unlearnt and transformed</span>
    </div>
    <div data-aos="fade-left"
     data-aos-duration="500" className="w-full py-4 px-3 overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className=" px-2 text-left">
      <h2 className='block text-2xl font-bold text-white'>
      Google IT Automation With Python
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-300">Professional Certificate (600+ hours)
</p>
    </div>
  {/* <img className="object-cover w-full h-54 aspect-square" src="/timeline/law.jpg" alt="avatar" /> */}
  <div className=" text-left">
  <ul className=" text-left px-2">
    <li className="text-md list-disc text-gray-300">
    Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM&apos;s, Version Control Tools, Automation.
    </li>
    <li className="text-md list-disc text-gray-300">
    <a href='#' className='text-blue-600 underline'>See Credentials</a></li>
  </ul>
  </div>
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
      <h2 className='block text-2xl font-bold text-white'>
      Google IT Automation With Python
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-300">Professional Certificate (600+ hours)
</p>
    </div>
  {/* <img className="object-cover w-full h-54 aspect-square" src="/timeline/law.jpg" alt="avatar" /> */}
  <div className=" text-left">
  <ul className=" text-left px-2">
    <li className="text-md list-disc text-gray-300">
    Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM&apos;s, Version Control Tools, Automation.
    </li>
    <li className="text-md list-disc text-gray-300">
    <a href='#' className='text-blue-600 underline'>See Credentials</a></li>
  </ul>
  </div>
</div>

      </div>
    </div>
    <div className="mb-8 mt-1 flex justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#252A2F] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div className=" px-1 pb-2 text-left md:absolute right-time">
        <span className="block text-xl font-bold text-slate-200" tabIndex={0} role="link">2021-2023</span>
        <span className="text-sm text-slate-300">My Zero to One Journey</span>
    </div>
    <div data-aos="fade-left"
     data-aos-duration="500" className="w-full py-4 px-3 overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className=" px-2 text-left">
      <h2 className='block text-2xl font-bold text-white'>
      Google IT Automation With Python
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-300">Professional Certificate (600+ hours)
</p>
    </div>
  {/* <img className="object-cover w-full h-54 aspect-square" src="/timeline/law.jpg" alt="avatar" /> */}
  <div className=" text-left">
  <ul className=" text-left px-2">
    <li className="text-md list-disc text-gray-300">
    Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM&apos;s, Version Control Tools, Automation.
    </li>
    <li className="text-md list-disc text-gray-300">
    <a href='#' className='text-blue-600 underline'>See Credentials</a></li>
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

export default Certification