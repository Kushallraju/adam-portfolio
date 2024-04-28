import React, { useState,useEffect } from 'react'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'

 
const Portfolio = () => {
  const [data,setData] = useState([])
  const [country,setCountry] = useState([])

  const [filter,setFilter] = useState({
    title:'',
    country:'',
    date:'',
    status:true
  })

  const FetchWork = async()=>{
     const res = await fetch('https://662e129ba7dda1fa378bf721.mockapi.io/api/v1/mywork')
     const work = await res.json()
     setData(work)
  }


  // Reset Filter
  const ResetFilter=(e)=>{
    e.preventDefault();

    setFilter({
      title:'',
      country:'',
      date:'',
      status:false
    })
  }

  // Update Values
  const HandleInput =(e)=>{
      setFilter({...filter,[e.target.name]:e.target.value})
  }
  
  const SubmitFilter = (e) => {
    e.preventDefault();

    // Filter data based on filter criteria
    const filtered = data.filter(item => {
      return (
        (item.title.toLowerCase().includes(filter.title.toLowerCase()) || filter.title === '') &&
        (item.Country.toLowerCase().includes(filter.country.toLowerCase()) || filter.country === '') && 
        (item.createdAt.includes(filter.date) || filter.date === '') &&
        (item.status === filter.status) 
        // Add more conditions for other filter criteria if needed
      );
    });
    setData(filtered);
  };
  

  const GetCountry = async()=>{
    const res = await fetch('https://662e129ba7dda1fa378bf721.mockapi.io/api/v1/mywork')
    const cate = await res.json();
    const filterCat = [];
    cate?.forEach((item)=>{
      if(!filterCat.includes(item.Country))
          filterCat.push(item.Country)
    })
    console.log(filterCat)
    setCountry(filterCat)
   
  }

  useEffect(() => {
    
      FetchWork()
      GetCountry()
  }, [filter]);

  

  return (
    <>
  <Navbar/>
    <section id='portfolio' className="bg-[#141414]">
    <div className="container px-2 py-10 mx-auto">
      <div>
      <h1 className="text-2xl font-semibold text-center capitalize lg:text-5xl text-white">My Portfolio</h1>
      <p className="max-w-2xl mx-auto my-6 text-center text-gray-300">
      I believe in getting my hands dirty to build out of the ordinary.
      </p>
      </div>
      <div className="m-10 flex">
    <div className="flex flex-col justify-center items-center w-full">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
        <form className="flex flex-col justify-center items-center w-full">
          <div className="relative mb-10 w-full flex items-center justify-between rounded-md">
            <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx={11} cy={11} r={8} className />
              <line x1={21} y1={21} x2="16.65" y2="16.65" className />
            </svg>
            <input type="text" name="title" onChange={HandleInput} className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search by name, type, manufacturer, etc" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">

            <div className="flex flex-col">
              <label htmlFor="manufacturer" className="text-sm font-medium text-stone-600">Country</label>
              <select onChange={HandleInput} id="manufacturer" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option value="">All</option>
                {country.map((item)=><option key={item}>{item}</option>)}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm font-medium text-stone-600">Date Joined</label>
              <input type="date" name='date' onChange={HandleInput} className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="status" className="text-sm font-medium text-stone-600">Status</label>
              <select onChange={HandleInput} id="status" className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option value="">None</option>
                <option value="true">Active</option>
                <option value="false">In-Active</option>
              </select>
            </div>
          </div>
          <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button onClick={ResetFilter} className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset</button>
            <button onClick={SubmitFilter} className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
          </div>
        </form>
      </div>
    </div>
  </div>


      <div className="w-full items-center justify-center">
        {/* <div className="flex w-full overflow-scroll scroll-m-0 justify-center items-center p-1 md:gap-5 gap-2 rounded-xl">
          <button onClick={()=>{FilterData('wireframe')}} className={`px-4 py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button.wireframe && 'bg-blue-600'} md:py-2 rounded-md md:px-6 w-full`}>Wireframe</button>
          <button onClick={()=>{FilterData('product')}} className={`px-4 md:py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button.product && 'bg-blue-600'} md:py-2 rounded-md md:px-6 w-full`}>Product Portfolio</button>
          <button onClick={()=>{FilterData('newsletter')}} className={`px-4 py-2 text-sm border border-blue-400 font-medium text-white capitalize hover:bg-blue-600 ${button.newsletter && 'bg-blue-600'} md:py-2 rounded-md md:px-6`}>Newsletters</button>
        </div> */}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-10 xl:grid-cols-3">
            {data? data.map((item)=>(
              <div className=' ' key={item.id}>
              <Link to={`/portfolio/${item.id}`} target='_blank'>
    <img className="object-fit object-center w-full h-64 lg:h-80 aspect-video" src={item.image} alt={item.image} />
    </Link>
    <div className="p-2 rounded-b-md bg-gray-600">
      <Link to={`/portfolio/${item.id}`} className=" text-xl font-semibold text-white">
        {item.title}
      </Link>
      <p className='text-white'>Joined At {format(parseISO(item.createdAt),'LLLL d, yyyy')}</p>
      <p className="mt-2 text-gray-400 line-clamp-2">
        {item.description}
      </p>
      
    </div>
  </div>
            )):<p className='text-white text-2xl'>Loading...</p>}

              </div>
              
    </div>
    </section>
  <Footer/>
    </>

  )
}

export default Portfolio