import React from 'react'
import { assets } from '../assets/assets/assets'

const About = () => {
  return (
    <div className="px-4 md:px-20 py-10 bg-gray-50">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 border-b-4 inline-block border-blue-500 pb-2">
          ABOUT US
        </h2>
      </div>

      {/* About Content */}
      <div className="my-12 flex flex-col md:flex-row gap-12 items-center">
        {/* Image */}
        <img
          className="w-full md:max-w-[400px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src={assets.about_image}
          alt="CareMate About"
        />

        {/* Text */}
        <div className="flex flex-col justify-center gap-6 md:w-2/3 text-base text-gray-700 leading-relaxed">
          <p>
            At <strong>CareMate</strong>, we believe that accessing quality healthcare should be simple, fast, and stress-free. Our platform connects patients with trusted doctors across specialties, allowing them to book appointments anytime, from anywhere.
          </p>
          <p>
            Whether you're seeking a routine check-up or specialized care, CareMate empowers you to make informed decisions by offering verified doctor profiles, real-time availability, and a seamless booking experience.
          </p>
          <p className="text-blue-600 font-semibold">
            Join us on our mission to make healthcare more accessible — one appointment at a time.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-8 my-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-600">500+</h3>
          <p className="text-gray-600">Verified Doctors</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-600">10,000+</h3>
          <p className="text-gray-600">Appointments Booked</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-600">100+</h3>
          <p className="text-gray-600">Cities Served</p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg mt-14 max-w-4xl mx-auto text-center">
        <p className="text-xl italic text-gray-700">
          "Booking an appointment with CareMate was so quick and easy. I found a great doctor near me in seconds. Highly recommended!"
        </p>
        <p className="mt-4 text-blue-600 font-semibold">– Priya Sharma, Delhi</p>
      </div>
    </div>
  )
}

export default About
