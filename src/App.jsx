import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Learn from './pages/Learn'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import Pricing from './pages/Pricing'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import SocialMenu from './components/SocialMenu'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/Learn' element={<Learn/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
        {/* <FloatingWhatsApp/> */}
        <SocialMenu/>
      </BrowserRouter>
    </>
  )
}
