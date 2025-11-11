import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutCSC from './components/AboutCSC'
import MeetOfficers from './components/MeetOfficers'
import AboutUniversity from './components/AboutUniversity'
import MissionVision from './components/MissionVision'
import MeetCSOA from './components/MeetCSOA'
import MeetCSOAOfficers from './components/MeetCSOAOfficers'
import ProgressSlideshow from './components/ProgressSlideshow'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navbar />
      <Hero />
      <AboutCSC />
      <MeetOfficers />
      <AboutUniversity />
      <MissionVision />
      <MeetCSOA />
      <MeetCSOAOfficers />
      <ProgressSlideshow />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App

