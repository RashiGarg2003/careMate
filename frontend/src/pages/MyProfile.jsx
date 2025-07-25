import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {
  const{userData,setUserData,token,backendUrl,loadUserProfileData} = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [image,setImage] = useState(false)

  const updateUserProfileData = async()=>{
      try{
          const formData = new FormData()

          formData.append('name',userData.name)
          formData.append('phone',userData.phone)
          formData.append('address',JSON.stringify(userData.address))
          formData.append('gender',userData.gender)
          formData.append('dob',userData.dob)

          image && formData.append('image',image)

          const {data} = await axios.post(backendUrl+'/api/user/update-profile',formData,{headers:{token}})
          if(data.success){
            toast.success(data.message)
            await loadUserProfileData()
            setIsEdit(false)
            setImage(false)
          } else {
            toast.error(data.message)
          }
      }catch(error){
           console.log(error);
           toast.error(error.message)
           
      }
  }

  const handleSave = () => {
    setIsEdit(false)
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return userData &&(
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 px-4 py-10 relative">
      
      {showToast && (
        <div className="absolute top-4 right-2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md transition-opacity duration-300">
          Profile updated successfully!
        </div>
      )}

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          {
            isEdit
            ?<label htmlFor='image'>
                <div className='inline-block relative cursor-pointer'>
                  <img className='w-36 rounded opacity-75'src={image ? URL.createObjectURL(image):userData.image} alt=""/>
                  <img className='w-10 absolute bottom-12 right-12'src={image ? '':assets.upload_icon} alt=""/>
                </div>
                <input onChange={(e)=>setImage(e.target.files[0])}type="file" id="image" hidden/>
            </label>
            :<img
            src={userData.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-300 shadow"
          />
          }
          
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
              className="mt-4 text-center border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ) : (
            <p className="text-xl font-semibold mt-4 text-gray-700">{userData.name}</p>
          )}
        </div>

        {/* Personal Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-600 border-b pb-1">Personal Details</h3>

          <div>
            <p className="text-sm text-gray-500">Email ID:</p>
            {isEdit ? (
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <p className="text-base text-gray-700">{userData.email}</p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <p className="text-base text-gray-700">{userData.phone}</p>
            )}
          </div>

          <div>
  <p className="text-sm text-gray-500">Address:</p>
  {isEdit ? (
    <input
      type="text"
      value={`${userData.address?.line1 || ''}, ${userData.address?.line2 || ''}`}
      onChange={(e) => {
        const [line1, line2 = ''] = e.target.value.split(',').map((str) => str.trim());
        setUserData((prev) => ({
          ...prev,
          address: { line1, line2 },
        }));
      }}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  ) : (
    <p className="text-base text-gray-700">
      {userData.address?.line1}, {userData.address?.line2}
    </p>
  )}
</div>


          <div>
            <p className="text-sm text-gray-500">Gender:</p>
            {isEdit ? (
              <select
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                value={userData.gender}
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-base text-gray-700">{userData.gender}</p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-500">Date of Birth:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <p className="text-base text-gray-700">{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Edit / Save Button */}
        <div className="text-center">
          {isEdit ? (
            <button
              onClick={updateUserProfileData}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyProfile
