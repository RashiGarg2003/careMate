import React from 'react'
import { assets } from '../assets/assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 rounded-2xl px-6 md:px-12 lg:px-20 py-10 shadow-lg overflow-hidden'>

      {/* Left Side */}
      <div className='md:w-1/2 flex flex-col justify-center gap-6 text-white'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Care That <span className='text-yellow-300'>Cares</span><br />
          Book Appointments with <span className='underline decoration-white'>Trusted Doctors</span>
        </h1>

        <p className='text-white/90 text-base'>
          Skip the queue! Find doctors by specialty, view profiles,<br className='hidden md:block' />
          and book instantly from the comfort of your home.
        </p>

        <a
          href="#speciality"
          className='inline-block w-fit bg-white text-blue-700 font-semibold px-6 py-3 mt-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300'
        >
          Book Appointment Now
        </a>
      </div>

      {/* Right Side */}
      <div className='md:w-1/2 mt-8 md:mt-0 flex justify-center items-center relative'>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
        <img
          src={assets.header_img}
          alt="Doctor Consultation"
          className='w-full max-w-md rounded-xl shadow-2xl'
        />
      </div>
    </div>
  )
}

export default Header
