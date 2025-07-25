import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const DoctorAppointment = () => {
  const { dToken, appointments, getAppointments,completeAppointment, cancelAppointment } = useContext(DoctorContext);
  const { calculateAge, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="p-5 w-full max-w-6xl">
      <p className="text-2xl font-semibold mb-4 text-blue-700">All Appointments</p>

      <div className="bg-white border rounded shadow text-sm overflow-x-auto">
        {/* Header Row */}
        <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_2fr_1fr_1fr] gap-3 px-6 py-3 border-b font-semibold text-gray-700 text-xs tracking-wide uppercase bg-gray-50">
            <p>#</p>
            <p>Patient</p>
            <p>Payment</p>
            <p>Date & Time</p>
            <p>Fees</p>
            <p>Action</p>
        </div>


        {/* Appointment Rows */}
        {appointments.reverse().map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap sm:grid sm:grid-cols-[0.5fr_2fr_1fr_2fr_1fr_1fr] gap-3 items-center px-6 py-4 border-b text-gray-600 hover:bg-gray-50 text-sm"

          >
            <p>{index + 1}</p>

            <div className="flex items-center gap-2">
              <img
                src={item.userData.image}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <p>{item.userData.name}</p>
            </div>

            <p>{item.payment ? 'Online' : 'Cash'}</p>
            

            <p>
              {item.slotDate},<br className="sm:hidden" />
              {item.slotTime}
            </p>

            <p>
              {currency}
              {item.amount}
            </p>

            {
              item.cancelled
              ?<p className='text-red-400 text-xs font-medium'>Cancelled</p>
              :item.isCompleted
               ?<p className='text-green-500 text-xs font-medium'>Completed</p>
               :<div className="flex items-center gap-3">
              <img
                onClick={()=>cancelAppointment(item._id)}
                src={assets.cancel_icon}
                alt="Cancel"
                className="w-5 h-5 cursor-pointer hover:scale-110 transition"
              />
              <img
                onClick={()=>completeAppointment(item._id)}
                src={assets.tick_icon}
                alt="Done"
                className="w-5 h-5 cursor-pointer hover:scale-110 transition"
              />
            </div>

            }

            <div className="flex items-center gap-3">
              <img
                onClick={()=>cancelAppointment(item._id)}
                src={assets.cancel_icon}
                alt="Cancel"
                className="w-5 h-5 cursor-pointer hover:scale-110 transition"
              />
              <img
                onClick={()=>completeAppointment(item._id)}
                src={assets.tick_icon}
                alt="Done"
                className="w-5 h-5 cursor-pointer hover:scale-110 transition"
              />
            </div>
          </div>
        ))}

        {appointments.length === 0 && (
          <p className="text-center text-gray-500 py-8">No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointment;

