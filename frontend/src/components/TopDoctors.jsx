import React from 'react'
import { doctors } from '../assets/assets/assets'
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center gap-6 my-20 text-gray-900 md:mx-10 px-4">
            <h1 className="text-4xl font-bold text-blue-800 tracking-wide">Meet Our Expert Doctors</h1>
            <p className="text-center text-sm sm:w-2/5 text-gray-600">
                Get personalized care and advice from our top medical professionals.
            </p>

            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 pt-8">
                {
                    doctors.slice(0, 10).map((item, index) => (
                        <div
                            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                            key={index}
                            className="border border-gray-200 shadow-md rounded-2xl overflow-hidden bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            <img className="w-full h-48 object-cover bg-blue-50" src={item.image} alt="" />
                            <div className="p-4 space-y-1">
                                <div className={`flex items-center gap-2 text-xs ${item.available ? 'text-green-600' : 'text-red-400'}`}>
                                    <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-600' : 'bg-red-400'}`}></span>
                                    <span>{item.available ? 'Available' : 'Not Available'}</span>
                                </div>
                                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                                <p className="text-sm text-gray-600">{item.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button
                onClick={() => navigate(`/doctors`)}
                className="mt-10 px-10 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
            >
                View All Doctors
            </button>
        </div>
    )
}

export default TopDoctors
