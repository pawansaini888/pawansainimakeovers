import React from 'react'
import Navbar from '../components/Navbar'
import NavigationForServices from '../components/NavigationForServices'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import MakeupServices from '../components/MakeupServices'
import ServicesInDetail from '../components/ServicesInDetail'

export default function Services() {
  return (
    <>
    <Navbar/>
    <NavigationForServices/>
    <MakeupServices/>
    <ServicesInDetail/>
    <Footer/>
    </>
  )
}
