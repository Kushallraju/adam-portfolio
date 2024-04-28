import React from 'react'

const ContactForm = () => {
  return (
    <section className="bg-black">
  <div className="container px-6 py-12 mx-auto z-30 relative">
        {/* <h1 className="text-2xl text-center font-semibold capitalize text-white lg:text-3xl">
          Contact us for more info
        </h1> */}
    <div className="lg:flex lg:items-center lg:-mx-6">
      <div className="lg:w-[40%] lg:mx-6">
        <div className="mt-6 space-y-8 md:mt-8">
        <div className="p-4 rounded-lg md:p-6 bg-gray-800" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-easing="ease-out">
        <span className="inline-block p-3 text-[#ffde5a] rounded-lg bg-blue-100/80 bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </span>
        <h2 className="mt-4 text-base font-medium text-white">Chat to sales</h2>
        <p className="mt-2 text-sm text-gray-400">Speak to our friendly team.</p>
        <p className="mt-2 text-sm text-[#ffde5a]"><a href='mailto://hello@dgtlinfluence.com'>hello@dgtlinfluence.com</a></p>
      </div>

      <div className="p-4 rounded-lg md:p-6 bg-gray-800" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out">
        <span className="inline-block p-3 text-[#ffde5a] rounded-lg bg-blue-100/80 bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </span>
        <h2 className="mt-4 text-base font-medium text-white">Call us</h2>
        <p className="mt-2 text-sm text-[#ffde5a]">Toronto: +1 (705) 440-0578</p>
        <p className="mt-2 text-sm text-[#ffde5a]">
Bali: +62 812 3775 2373</p>
      </div>
        </div>
       
      </div>
      <div className="mt-8 lg:w-[80%] lg:mx-6" data-aos="fade-down"
     data-aos-anchor-placement="top-bottom" data-aos-delay="1500" data-aos-easing="ease-out">
        <div className="w-full px-8 py-4 mx-auto overflow-hidden rounded-lg shadow-2xl bg-gray-800 lg:max-w-4xl shadow-black/50">
          {/* <h1 className="text-lg font-medium text-gray-700">What do you want to ask</h1> */}
          <form className="mt-1 w-full">
          <div className='flex gap-2'>
            <div className="flex-1 w-1/2">
              <label className="block mb-2 text-sm text-gray-200">Full Name</label>
              <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 border rounded-md placeholder-gray-600 bg-gray-800 text-gray-300 border-gray-600 focus:border-[#ffde5a] focus:ring-[#ffde5a] focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="flex-1 w-1/2">
              <label className="block mb-2 text-sm text-gray-200">Email address</label>
              <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 border rounded-md placeholder-gray-600 bg-gray-800 text-gray-300 border-gray-600 focus:border-[#ffde5a] focus:ring-[#ffde5a] focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            </div>
            <div className="w-full mt-6">
              <label className="block mb-2 text-sm text-gray-200">Message</label>
              <textarea className="block w-full h-32 px-5 py-3 mt-2 border rounded-md md:h-48 placeholder-gray-600 bg-gray-800 text-gray-300 border-gray-600  focus:border-[#ffde5a] focus:ring-[#ffde5a] focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message" defaultValue={""} />
            </div>
            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-[#ffde5a] rounded-md hover:bg-[#e8aa00] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              get in touch
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>



  )
}

export default ContactForm