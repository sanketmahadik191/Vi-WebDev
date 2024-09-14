
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { shouldHideHeaderFooter } from './utils/shouldHideHederFooter'
import Forgot from './pages/Forgot'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  const location = useLocation();

  const hideHeaderFooter = shouldHideHeaderFooter(location.pathname)
  
  return (
    <>
     {!hideHeaderFooter && <Navbar />}
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>
        <Route path='/forgot' element={<ForgotPassword />}></Route>
     </Routes>
     {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default App
