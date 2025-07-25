import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify';


const DoctorProfile = () => {

  const { dToken, profileData, setProfileData, getProfileData, backendUrl  } = useContext(DoctorContext)
  const { currency} = useContext(AppContext)

  const [isEdit , setIsEdit] = useState(false)

  const updateProfile = async()=>{
    try{

      const updateData = {
        address: profileData.address,
        fees :profileData.fees,
        available:profileData.available
      }

      const {data} = await axios.post(backendUrl+'/api/doctor/update-profile',updateData,{headers:{dToken}})
      if(data.success){
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }

    }catch(error){

      toast.error(error.message)
      console.log((error));
      

    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  return profileData && (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row gap-8">

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileData.image}
            alt="Doctor"
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-100"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-2xl font-bold text-gray-800">{profileData.name}</p>
            <p className="text-gray-500 text-sm mt-1">
              {profileData.degree} - {profileData.speciality}
            </p>
            <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded mt-2">{profileData.experience}</button>
          </div>

          <div>
            <p className="font-semibold text-gray-700">About:</p>
            <p className="text-gray-600">{profileData.about}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Appointment Fee:</p>
            <p className="text-gray-800">
              <span className="font-medium">{currency}{isEdit?<input type="number" onChange={(e)=>setProfileData(prev=>({...prev,fees:e.target.value}))} value={profileData.fees}/>:profileData.fees}</span>
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Address:</p>
            <p className="text-gray-600">
              {isEdit?<input type="text" onChange={(e)=>setProfileData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} value={profileData.address.line1}/>:profileData.address.line1} <br />
              {isEdit?<input type="text" onChange={(e)=>setProfileData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} value={profileData.address.line2}/>:profileData.address.line2} 
            </p>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 mt-2">
            <input onChange={()=>isEdit && setProfileData(prev=>({...prev,available:!prev.available}))} type="checkbox" id="availability" checked={profileData.available} readOnly />
            <label htmlFor="availability" className="text-gray-700">Available</label>
          </div>

        {
  isEdit
    ? <button onClick={updateProfile} className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">Save</button>
    : <button onClick={() => setIsEdit(true)} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Edit</button>
}


          {/* Edit Button */}
          
        </div>

      </div>
    </div>
  )
}

export default DoctorProfile
