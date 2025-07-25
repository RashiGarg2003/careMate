import React from 'react'
import { assets } from '../assets/assets/assets'

const Contact = () => {
  return (
    <div className="px-4 md:px-20 py-10 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-700 border-b-4 inline-block border-blue-500 pb-2">
          CONTACT US
        </h2>
        <p className="text-gray-500 mt-2">We’d love to hear from you</p>
      </div>

      {/* Image + Form Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Image */}
        <img
          src={assets.contact_image}
          alt="Contact"
          className="w-full md:max-w-[400px] rounded-xl shadow-lg"
        />

        {/* Contact Form */}
        <form className="flex flex-col gap-4 w-full md:w-2/3">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      
      <div className="text-center text-sm text-gray-500 mt-10">
        <p>Email: support@caremate.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: New Delhi, India</p>
      </div>
    </div>
  )
}

export default Contact

