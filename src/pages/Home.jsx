import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import MakeupServices from '../components/MakeupServices'
import CreativeWorks from '../components/CreativeWorks'
import TestimonialSection from '../components/TestimonialSection'
import ContactForm from '../components/ContactForm'
import MakeupClasses from '../components/MakeupClasses'
import PricingCards from '../components/PricingCards'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutSection/>
    <MakeupServices/>
    <CreativeWorks/>
    {/* <MakeupClasses/> */}
    <PricingCards/>
    <ContactForm/>
    {/* <TestimonialSection/> */}
    <Footer/>
    </>
  )
}
