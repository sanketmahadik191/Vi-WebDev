import React from 'react'
import Profile from '../../components/InternHomePage2/Profile'
import Recommended from '../../components/MainInternHome/Recommended'
import Insights from '../../components/MainInternHome/Insights'
import { useNavigate } from 'react-router-dom'


const MainInternHome = () => {
    const navigate = useNavigate();

    const handleViewInternships = () => {
        navigate('/intern2');
    };

    return (
        <div className="flex flex-col md:flex-row">

            <Profile />

            <div className="flex-1">
            <button onClick={handleViewInternships}>View Internships</button>


                {/* Recommended internships component */}
                <Recommended />

                {/* Insights component */}
                <Insights />

            </div>
        </div>
    )
}

export default MainInternHome