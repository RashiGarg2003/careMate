import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const Doctorslist = () => {
  const { doctors, aToken, getAllDoctors,changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">All Registered Doctors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
            <img
              src={item.image}
              alt="Doctor"
              className="w-24 h-24 rounded-full object-cover border-2 border-blue-300"
            />

            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>

              <div className="mt-2 flex items-center gap-2">
                <input
                 onChange={()=>changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                  readOnly
                  className="accent-blue-600 w-4 h-4"
                />
                <p className="text-sm text-gray-700">Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctorslist
