import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments,cancelAppointment } = useContext(AdminContext)
  const { calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-semibold">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] py-3 px-6 border-b font-semibold text-gray-700">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {/* Table Rows */}
        {appointments.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between max-sm:gap-4 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-600 py-3 px-6 border-b hover:bg-gray-50"
          >
            {/* Index */}
            <p className="font-medium">{index + 1}</p>

            {/* Patient Info */}
            <div className="flex items-center gap-2">
              <img
                src={item.userData.image}
                alt="patient"
                className="w-8 h-8 rounded-full object-cover"
              />
              <p>{item.userData.name}</p>
            </div>

            {/* Age */}
            <p>{calculateAge(item.userData.dob)}</p>

            {/* Date & Time */}
            <p>
              {item.slotDate}, <br className="sm:hidden" />
              {item.slotTime}
            </p>

            {/* Doctor Info */}
            <div className="flex items-center gap-2">
              <img
                src={item.docData.image}
                alt="doctor"
                className="w-8 h-8 rounded-full object-cover"
              />
              <p>{item.docData.name}</p>
            </div>

            {/* Fees */}
            <p>
              {currency}
              {item.amount}
            </p>

            {
            item.cancelled
            ?<p className='text-red-400 text-xs font-medium'>Cancelled</p>
            : item.isCompleted
            ?<p className='text-green-400 text-xs font-medium'>Completed</p>:<img
              onClick={()=>cancelAppointment(item._id)}
              src={assets.cancel_icon}
              alt="cancel"
              className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100 transition"
              title="Cancel"
            />
            }

            
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointments
