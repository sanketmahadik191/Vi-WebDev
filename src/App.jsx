
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'

import { shouldHideHeaderFooter } from './utils/shouldHideHederFooter'
import Forgot from './pages/Forgot'
import ForgotPassword from './pages/ForgotPassword'
import Selection from './pages/Selection'
import SignUpIntern from './pages/SignUpIntern'
import SignUpEmployer from './pages/SignUpEmployer'
import ProfileCreation from './pages/ProfileCreation'
import ProfileIntern from './pages/ProfileIntern'
import Scrolling from './pages/Scrolling';
import InternHome from './pages/InternHome'

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
        <Route path='/forgot' element={<Forgot />}></Route>
        <Route path='/forgot' element={<ForgotPassword />}></Route>
        <Route path='/createprofile' element={<ProfileCreation />}></Route>
        <Route path='/createprofileintern' element={<ProfileIntern />}></Route>
        <Route path='/test' element={<Scrolling />}></Route>
        <Route path='/intern' element={<InternHome />}></Route>
        
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default App
