import React, { useState, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets/assets'

const Navbar = () => {
  const navigate = useNavigate()
  const { token, setToken, userData } = useContext(AppContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <header className="flex justify-between items-center border-b border-gray-300 py-2 px-4 md:px-10 bg-white shadow-sm relative">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="CareMate"
        className="w-40 cursor-pointer"
        onClick={() => navigate('/')}
      />

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex gap-6 font-medium text-gray-600">
        <NavLink to="/" className="hover:text-primary transition">Home</NavLink>
        <NavLink to="/doctors" className="hover:text-primary transition">Doctors</NavLink>
        <NavLink to="/about" className="hover:text-primary transition">About</NavLink>
        <NavLink to="/contact" className="hover:text-primary transition">Contact</NavLink>
        <a
          href="http://localhost:5173/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition shadow-md"
        >
          Admin
        </a>
      </nav>

      {/* User Options */}
      <div className="flex items-center gap-4 relative">
        {token && userData ? (
          <div
            className="cursor-pointer"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex items-center gap-2">
              <img src={userData.image} className="w-8 h-8 rounded-full" alt="Profile" />
              <img src={assets.dropdown_icon} className="w-3" alt="Dropdown" />
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md z-50 p-3 w-48 text-sm">
                <p onClick={() => navigate('/my-profile')} className="py-2 hover:text-primary cursor-pointer">My Profile</p>
                <p onClick={() => navigate('/my-appointment')} className="py-2 hover:text-primary cursor-pointer">My Appointments</p>
                <p onClick={logout} className="py-2 hover:text-primary cursor-pointer">Logout</p>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="bg-primary text-white px-5 py-2 rounded-full text-sm hidden md:block">
            Sign In / Register
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-6 md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white p-6 flex flex-col gap-5 text-lg font-medium md:hidden">
          <div className="flex justify-between items-center mb-4">
            <img src={assets.logo} className="w-36" alt="CareMate" />
            <img
              src={assets.cross_icon}
              className="w-6 cursor-pointer"
              onClick={toggleMobileMenu}
              alt="Close"
            />
          </div>
          <NavLink to="/" onClick={toggleMobileMenu}>Home</NavLink>
          <NavLink to="/doctors" onClick={toggleMobileMenu}>Doctors</NavLink>
          <NavLink to="/about" onClick={toggleMobileMenu}>About</NavLink>
          <NavLink to="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
          <a
            href="care-mate-ci9f-37kxe99q8-rashi-gargs-projects.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
            className="bg-red-500 text-white px-4 py-2 rounded-full text-center hover:bg-red-600 transition"
          >
            Admin
          </a>
          {!token && (
            <button
              onClick={() => {
                navigate('/login')
                toggleMobileMenu()
              }}
              className="bg-primary text-white px-5 py-2 rounded-full text-center w-full"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar
