import React from 'react'
import { assets } from '../assets/assets/assets'

const Footer = () => {
  return (
    <footer className='bg-white md:mx-10 mt-32 shadow-sm rounded-t-xl'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-12 px-6 sm:px-10 text-sm'>

        {/* Brand Info */}
        <div>
          <img className='mb-4 w-40' src={assets.logo} alt="CareMate Logo" />
          <p className='text-gray-600 leading-6'>
            Simplifying healthcare with trust, technology, and compassion.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>Company</h3>
          <ul className='space-y-2 text-gray-600'>
            <li className='hover:text-primary cursor-pointer'>Home</li>
            <li className='hover:text-primary cursor-pointer'>About Us</li>
            <li className='hover:text-primary cursor-pointer'>Contact</li>
            <li className='hover:text-primary cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>Contact Us</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>📞 +1 223 456</li>
            <li>📧 contact@caremate.com</li>
            
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className='bg-gray-100 text-center py-4 border-t'>
        <p className='text-xs text-gray-500'>
          © 2025 CareMate. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
