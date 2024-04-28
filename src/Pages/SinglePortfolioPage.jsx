import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import MobileNavbar from '../Components/Layout/MobileNavbar';

const SinglePortfolioPage = () => {
  const [data,setData] = useState({})

    let { userId } = useParams();

    const FetchWork = async()=>{
        const res = await fetch(`https://662e129ba7dda1fa378bf721.mockapi.io/api/v1/mywork/${userId}`)
        const work = await res.json()
        setData(work)
     }

    useEffect(()=>{
        FetchWork()
    },[])
  return (
    <>
    <Navbar/>
    <MobileNavbar/>
    <section className=" bg-gradient-to-b to-[black] via-[#090909] from-[#131313]">
  <div className="container md:px-16 py-16 mx-auto text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-white lg:text-4xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500" data-aos-easing="ease-out">{data.title}</h1>
      <p className="mt-6 text-white text-lg" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out">{data.detail}</p>

    </div>
    <div className="flex justify-center mt-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1500" data-aos-easing="ease-out">
      <img className="object-cover w-full h-96 rounded-xl" src={data.image} />
    </div>
  </div>
</section>
    <Footer/>
    </>
  )
}

export default SinglePortfolioPage