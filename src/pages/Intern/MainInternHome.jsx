import React from 'react'
import Profile from '../../components/InternHomePage2/Profile'

import Insights from '../../components/MainInternHome/Insights'
import { useNavigate } from 'react-router-dom'
import posterImage from "../../assets/posterImage.png"
import Recommended from '../../components/MainInternHome/Recommended'

const MainInternHome = () => {
    const navigate = useNavigate();

    const handleViewInternships = () => {
        navigate('/intern2');
    };

    return (
        <div className="flex flex-col md:flex-row">

            <Profile />

            <div className="flex-1 pl-2 md:pl-6 pr-2 md:pr-12 ">
                <div className="text-center md:text-left  mt-16 md:mt-6">
                    <h1 className="text-2xl md:text-3xl font-bold  mb-2">Hi Sanjay Roy!</h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Welcome to the <span className="font-semibold text-orange-500">Vorkinsta Internship Hub</span>
                    </p>
                </div>
                {/* Inernshp poster */}


                <div className="bg-gradient-to-b from-orange-400   to-red-300 py-6 md:py-0 px-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between my-10">
                    <div className="flex-1   w-full md:w-3/5 px-4">
                        <h2 className="text-white text-xl md:text-3xl font-bold mb-4">Hey folks, just sit back and relax. <br />
                            <span className='text-gray-800'>Vorkinsta</span> handles everything for you
                        </h2>

                        <button className="bg-gray-800 text-white font-semibold py-2 px-4 my-2 hover:bg-gray-900
                        rounded-full"
                            onClick={handleViewInternships} >
                            View Internship
                        </button>
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-2/5">
                        <img
                            src={posterImage}
                            alt="Internship"
                            className="w-full  h-auto "
                        />
                    </div>
                </div>

                {/* Recommended internships component */}
                <Recommended />

                {/* Insights component */}
                <Insights />

            </div>
        </div>
    )
}

export default MainInternHome