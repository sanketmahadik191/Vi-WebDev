import React from 'react'

const JobsCard = ({icon, title, number}) => {
  return (
    <main className='flex flex-col items-center md:w-1/4'>
        <div className='w-fit p-4 pl-3 border-l-8 border-[#0d3553] rounded shadow-[3px_5px_10px_#6b7280] bg-gray-50 w-full'>
        <div className='flex items-center  gap-7'>
            <span className=''>{icon}</span>
            <span className='text-6xl text-[#0d3553] opacity-80 font-black'>{number}</span>
        </div>
        <p className='text-left text-lg font-bold my-4 text-[#0d3553] px-1 mt-2'>{title}</p>
        </div>
        <div className='triangle rounded bg-gray-50 border'></div>
    </main>
  )
}

export default JobsCard