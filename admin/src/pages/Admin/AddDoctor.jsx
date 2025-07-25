import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'

import axios from 'axios'

const AddDoctor = () => {
  const[docImg,setDocImg] = useState(false)
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[experience,setExperience] = useState('')
  const[fees,setFees] = useState('')
  const[about,setAbout] = useState('')
  const[speciality,setSpeciality] = useState('')
  const[degree,setDegree] = useState('')
  const[address1,setAddress1] = useState('')
  const[address2,setAddress2] = useState('')
  
  const {backendUrl , aToken} = useContext(AdminContext)
  const onSubmitHandler = async (event) => {
    event.preventDefault()
  

    try{
        if(!docImg){
          return toast.error('Image not Selected!')
        }

        const formData = new FormData()
        formData.append('image',docImg)
        formData.append('name',name)
        formData.append('email',email)
        formData.append('password',password)
        formData.append('experience',experience)
        formData.append('fees',Number(fees))
        formData.append('about',about)
        formData.append('speciality',speciality)
        formData.append('degree',degree)
        formData.append('address',JSON.stringify({line1:address1,line2:address2}))

        formData.forEach((value,key)=>{
          console.log(`${key} : ${value}`);
          
        })

        const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData,{headers :{aToken}})
        console.log("API Response: ", data);

        if(data.success){
          toast.success(data.message)
          setDocImg(false)
          setName('')
          setPassword('')
          setEmail('')
          setAddress1('')
          setAddress2('')
          setDegree('')
          setAbout('')
          setFees('')
        } else {
          toast.error(data.message)
        }
    } catch(error){
        toast.error(error.message)
        console.log(error);
        
    }
    
  }
 
  return (
    <form onSubmit={onSubmitHandler}className="min-h-screen bg-gray-100 px-6 py-10 w-full">
      <div className="bg-white shadow-md rounded-xl p-10 w-full">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Register New Doctor
        </h1>

        {/* Image Upload */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 px-4">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img src={docImg ? URL.createObjectURL(docImg) :assets.upload_area} alt="Upload" className="w-36 h-36 rounded-full object-cover border-2 border-blue-300" />
          </label>
          <input onChange={(e)=>setDocImg(e.target.files[0])}type="file" id="doc-img" hidden />
          <p className="text-gray-600 text-center sm:text-left">Click the image to upload doctor's photo</p>
        </div>

        {/* Form Fields Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
          {/* Left Column */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Full Name</label>
              <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Dr. Neena Pandey" className="w-full border px-4 py-2 rounded-lg" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Email Address</label>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="doctor@example.com" className="w-full border px-4 py-2 rounded-lg" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Password</label>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="********" className="w-full border px-4 py-2 rounded-lg" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Experience</label>
              <select onChange={(e)=>setExperience(e.target.value)} value={experience} className="w-full border px-4 py-2 rounded-lg">
                <option>1 - 2 Years</option>
                <option>3 - 5 Years</option>
                <option>6 - 10 Years</option>
                <option>10+ Years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Fees (₹)</label>
              <input onChange={(e)=>setFees(e.target.value)} value={fees}  type="number" placeholder="e.g. 500" className="w-full border px-4 py-2 rounded-lg" required />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Specialization</label>
              <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} className="w-full border px-4 py-2 rounded-lg">
                <option>General Physician</option>
                <option>Gynecologist</option>
                <option>Dermatologist</option>
                <option>Pediatrician</option>
                <option>Neurologist</option>
                <option>Gastroenterologist</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Qualifications</label>
              <input onChange={(e)=>setDegree(e.target.value)} value={degree} type="text" placeholder="e.g. MBBS, MD" className="w-full border px-4 py-2 rounded-lg" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Address Line 1</label>
              <input onChange={(e)=>setAddress1(e.target.value)} value={address1} type="text" placeholder="Street, Building" className="w-full border px-4 py-2 rounded-lg" required />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Address Line 2</label>
              <input onChange={(e)=>setAddress2(e.target.value)} value={address2} type="text" placeholder="City, State" className="w-full border px-4 py-2 rounded-lg" required />
            </div>
          </div>
        </div>

        {/* About Doctor */}
        <div className="px-4 mt-10">
          <label className="block text-sm font-semibold text-gray-700 mb-2">About the Doctor</label>
          <textarea
          onChange={(e)=>setAbout(e.target.value)} value={about} 
            rows={5}
            placeholder="Share a short bio, approach, or any extra details..."
            className="w-full border px-4 py-2 rounded-lg"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-10 px-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddDoctor
