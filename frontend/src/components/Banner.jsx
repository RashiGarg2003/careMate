import React from 'react'
import { assets } from '../assets/assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='relative flex flex-col md:flex-row bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 rounded-2xl overflow-hidden my-20 mx-4 md:mx-10 shadow-md'>

      {/* Background Accent */}
      <div className='absolute -top-10 -left-10 w-48 h-48 bg-blue-300 rounded-full blur-3xl opacity-20'></div>

      {/* Left Side */}
      <div className='flex-1 p-6 sm:p-10 lg:pl-14 flex flex-col justify-center z-10'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
          Hassle-Free Healthcare Starts Here
        </h2>
        <p className='mt-4 text-gray-600 text-sm sm:text-base'>
          Join 100+ trusted doctors and patients who rely on CareMate for seamless consultations. Book anytime, from anywhere.
        </p>
        <button
          onClick={() => {
            navigate('/login')
            scrollTo(0, 0)
          }}
          className='mt-6 w-fit bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-6 py-3 rounded-full transition-transform hover:scale-105'
        >
          Create Your Free Account
        </button>
      </div>

      
    </div>
  )
}

export default Banner
