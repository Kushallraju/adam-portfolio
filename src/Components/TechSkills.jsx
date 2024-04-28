import React from 'react'

const TechSkills = () => {
  return (
    <section id='skills' className="bg-[#141414]">
    <div className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold text-white lg:text-5xl">Tech Skills</h1>
        <p className="mt-6 text-gray-500 dark:text-gray-300">
        Always Evolving, Forever Learning
        </p>
        
      </div>
      <div className="max-w-screen-xl mx-auto mt-20 ">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-7">
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src='/icons/1.png' className=' aspect-[1/1] w-24 ' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}}/>
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src='/icons/2.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src='/icons/3.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src='/icons/4.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src='/icons/5.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src='/icons/6.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src='/icons/7.png' className=' aspect-[1/1] w-24' style={{filter: 'brightness(200%) contrast(1000%) invert(100%)'}} />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TechSkills