import React from 'react'
import Profile from '../../components/InternHomePage2/Profile'
import InternNavBar from '../../components/InternHomePage2/InternNavbar'
import MainContent from '../../components/InternHomePage2/MainContent'

function InternHome2() {
  return (
    <div className="flex">
    <Profile />
    <div className="flex-1">
      <InternNavBar/>
      <MainContent />
    </div>
  </div>
  )
}

export default InternHome2