import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {
  const { aToken,setAToken} = useContext(AdminContext)
  const {dToken,setDToken} = useContext(DoctorContext)

  const navigate = useNavigate()

   const logout =() =>{
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
  }

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left: Logo & Title */}
      <div className="flex items-center gap-4">
        <img src={assets.admin_logo} alt="Admin Logo" className="w-10 h-10 object-contain" />
        <p className="text-lg font-semibold text-gray-700">
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>

      {/* Right: Logout */}
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        onClick={logout}
      >
        Logout
      </button>
    </nav>
  )
}

export default Navbar
