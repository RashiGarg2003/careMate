import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {backendUrl , token , setToken} = useContext(AppContext)
  const navigate = useNavigate()
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try{
      if(state === 'Sign Up'){
        const {data} = await axios.post(backendUrl+'/api/user/register' , {name,password,email})
        if(data.success){
            localStorage.setItem('token',data.token)
             setToken(data.token)
        } else {
           toast.error(data.message)
        }
      } else {
        const {data} = await axios.post(backendUrl+'/api/user/login' , {password,email})
        if(data.success){
            localStorage.setItem('token',data.token)
             setToken(data.token)
        } else {
           toast.error(data.message)
        }
      }

    } catch(error){
         toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
       navigate('/')
    }
  })

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[100vh] flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-green-50 px-4"
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 space-y-6 animate-fade-in">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700">
            {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointments
          </p>
        </div>

        {/* Name Field */}
        {state === 'Sign Up' && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Rashi Garg"
            />
          </div>
        )}

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="********"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-primary text-white font-semibold py-3 rounded-xl shadow-md hover:opacity-90 transition duration-300"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle */}
        <p className="text-sm text-center text-gray-600">
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </form>
  )
}

export default Login

