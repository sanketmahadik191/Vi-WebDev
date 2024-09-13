import React from 'react'
import JobsCard from '../JobsCard'
import { MdBusinessCenter } from "react-icons/md"
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { TbDeviceDesktopStar } from "react-icons/tb";

function BrowseJobSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl text-gray-700 font-bold mb-6">Browse Jobs by Category</h2>
        <p className="text-lg text-gray-500">
          Looking for work? <a href="#" className='text-blue-500 underline'>Browse jobs</a>
        </p>

        <div className='flex justify-center gap-4 my-10'>
          <JobsCard icon={<MdBusinessCenter fontSize={80} color='#0d3553' />} title="Business" number='01'/>
          <JobsCard icon={<TbDeviceDesktopCode fontSize={80} color='#0d3553'/>} title='Software Development' number='02' />
          <JobsCard icon={<FaSackDollar fontSize={80} color='#0d3553' />} title='Finance' number='03' />
          <JobsCard icon={<TbDeviceDesktopStar fontSize={80} color='#0d3553' />} title='Design' number='04' />
        </div>

      </div>
    </section>
  )
}

export default BrowseJobSection
