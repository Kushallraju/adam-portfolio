import React, { useEffect } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Aos from 'aos'
import "aos/dist/aos.css"
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume'
import SinglePortfolioPage from './Pages/SinglePortfolioPage'



const App = () => {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/portfolio/:userId' element={<SinglePortfolioPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App