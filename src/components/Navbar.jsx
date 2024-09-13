import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>Navbar
 <Link to='/login'>
 <button className='p-4 bg-slate-300'>Login</button>
 </Link>

 <Link to='/signup'>
 <button className='p-4 bg-slate-400'>Signup</button>
 </Link>
       
    </div>
  )
}

export default Navbar