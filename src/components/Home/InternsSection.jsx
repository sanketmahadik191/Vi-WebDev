import React from 'react'

function InternsSection() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center">
        <div className='md:w-3/5 text-center p-4 md:pr-20 flex flex-col gap-4'>
        <span className='tag-text w-fit mx-auto md:mx-0'>Interns</span>
        <h2 className="text-3xl font-bold text-gray-800 my-2">
          Explore internship offers that align with your terms
        </h2>
        <p className='my-2 text-lg text-gray-800'>
          Vorkinsta equips you with the tools to quickly find and filter jobs that align with your skills, experience, and career aspirations - empowering you to confidently choose your next role.
        </p>
        <button className='button-secondary w-fit my-4'>
          <a href="#">Create Profile</a>
        </button>
        </div>
        <div className='grow'>
          <img src="./src/assets/interns-img.png" alt="interns-img" />
        </div>
      </div>
    </section>
  )
}

export default InternsSection
