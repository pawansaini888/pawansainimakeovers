import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MakeupClasses from '../components/MakeupClasses'
import NavigationFormForLearn from '../components/NavigationForLearn'
import MasterClassesCards from '../components/MasterClassesCards'
export default function Learn() {
    return (
        <>
            <Navbar />
            <NavigationFormForLearn/>
            {/* <MakeupClasses/> */}
            <MasterClassesCards/>
            <Footer />
        </>
    )
}
