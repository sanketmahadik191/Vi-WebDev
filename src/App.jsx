
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'


import { shouldHideHeaderFooter } from './utils/shouldHideHederFooter'

import ProfileCreation from './pages/ProfileCreation'
import Forgot from './pages/Auth/Forgot'
import Login from './pages/Auth/Login'
import SignUpIntern from './pages/Auth/SignUpIntern'
import SignUpEmployer from './pages/Auth/SignUpEmployer'
import InternHome from './pages/Intern/InternHome'
import Scrolling from './pages/Others/Scrolling'
import Selection from './pages/Auth/Selection'
import InternHome2 from './pages/Intern/InternHome2'
import Internship from './pages/Intern/Internship'
import JobApply from './pages/JobApply'
import ProfileDetails from './pages/ProfileDetails'

function App() {
  const location = useLocation();

  const hideHeaderFooter = shouldHideHeaderFooter(location.pathname)

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/selection' element={<Selection />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup/intern' element={<SignUpIntern />}></Route>
        <Route path='/signup/employer' element={<SignUpEmployer />}></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>
        <Route path='/createprofile' element={<ProfileCreation />}></Route>
        <Route path='/test' element={<Scrolling/>}></Route>
        <Route path='/intern' element={<InternHome />}></Route>
        <Route path='/intern2' element={<InternHome2 />}></Route>
        <Route path='/internship' element={<Internship />}></Route>
        <Route path='/apply' element={<JobApply/>}></Route>
        <Route path='/profileDetails' element={<ProfileDetails />} />

      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default App
