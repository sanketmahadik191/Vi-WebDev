import React from 'react'
import { Link } from 'react-router-dom'

function Selection() {
  return (
    <div>   
    <Link to='/signup/intern'><button className='p-4 bg-blue-200 m-2'>intern</button></Link>
    <Link to='/signup/employeer'><button className='p-4 bg-blue-200'>employeer</button></Link>
    </div>
  )
}

export default Selection;