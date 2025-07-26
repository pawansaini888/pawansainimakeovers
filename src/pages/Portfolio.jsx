import React from 'react'
import Navbar from '../components/Navbar'
import NavigationForPortfolio from '../components/NavigationForPortfolio'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import CreativeWorks from '../components/CreativeWorks'

export default function Portfolio() {
  return (
    <>
        <Navbar/>
    <NavigationForPortfolio/>
    <CreativeWorks/>
    <Footer/>
    </>
  )
}
