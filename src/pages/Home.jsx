import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import TrustedBySection from '../components/Home/TrustedBySection'
import FutureSection from '../components/Home/FutureSection'
import ForBusinessesSection from '../components/Home/ForBusinessesSection'
import InternsSection from '../components/Home/InternsSection'
import BrowseJobSection from '../components/Home/BrowseJobSection'
import Employers from '../components/Home/Employers'
import AboutUs from '../components/Home/AboutUs'
import GetInTouchSection from '../components/Home/GetInTouchSection'
import Opportunity from '../components/Home/Opportunity'

function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <HeroSection />
      <TrustedBySection />
      <FutureSection />
      <ForBusinessesSection />
      <InternsSection />
      <BrowseJobSection />
      <Employers />
      <AboutUs />
      <Opportunity />
      <GetInTouchSection />
    </div>
  )
}

export default Home
