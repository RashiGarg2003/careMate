import React, { useState } from 'react'
import { useContext } from 'react'

import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext'
//import { loginDoctor } from '../../../backend/controllers/doctorController.js'

const Login = () => {
  const [state, setState] = useState('Admin')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const {setAToken,backendUrl} = useContext(AdminContext)
  const{setDToken} = useContext(DoctorContext)
  const onSubmitHandler = async(event) =>{
      event.preventDefault()

      try{
         if(state === 'Admin'){
            const {data} = await axios.post(backendUrl+'/api/admin/login',{email,password})
            if(data.success){
              localStorage.setItem('aToken',data.token)
              setAToken(data.token);
            } else {
              toast.error(data.message)
            }
         } else {
            
          const{data} = await axios.post(backendUrl+'/api/doctor/login',{email,password})
          if(data.success){
              localStorage.setItem('dToken',data.token)
              setDToken(data.token);
              console.log(data.token);
              
            } else {
              toast.error(data.message)
            }

         }
      } catch(error){

      }
  }
  
  return (
    <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md relative">
        <p className="text-3xl font-bold text-center text-gray-800 mb-6">
          {state} <span className="text-blue-600">Login</span>
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            value = {email}
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
          <input
            onChange={(e)=>setPassword(e.target.value)}
            value = {password}
            type="password"
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        {/* Toggle Text */}
        <p className="text-center text-sm mt-6 text-gray-600">
          {
            state === 'Admin'
              ? (
                <>
                  Doctor Login?{' '}
                  <span
                    className="text-blue-600 font-medium cursor-pointer hover:underline"
                    onClick={() => setState('Doctor')}
                  >
                    Click Here
                  </span>
                </>
              )
              : (
                <>
                  Admin Login?{' '}
                  <span
                    className="text-blue-600 font-medium cursor-pointer hover:underline"
                    onClick={() => setState('Admin')}
                  >
                    Click Here
                  </span>
                </>
              )
          }
        </p>
      </div>
    </form>
  )
}

export default Login
