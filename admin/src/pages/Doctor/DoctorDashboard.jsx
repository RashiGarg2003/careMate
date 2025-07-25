import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {

  const {dashData,setDashData,getDashData,dToken,completeAppointment,cancelAppointment} = useContext(DoctorContext)
  const {currency} = useContext(AppContext)

  useEffect(()=>{
    if(dToken){
      getDashData()
    }
  },[dToken])
  return dashData && (
    <div className='m-5'>

        <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
                  <img className="w-14" src={assets.earning_icon} alt="" />
                  <div>
                    <p className="text-xl font-semibold text-gray-600">{currency}{dashData.earnings}</p>
                    <p className="text-gray-400">Doctors</p>
                  </div>
                </div>
        
                <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
                  <img className="w-14" src={assets.appointment_icon} alt="" />
                  <div>
                    <p className="text-xl font-semibold text-gray-600">{dashData.appointments}</p>
                    <p className="text-gray-400">Appointments</p>
                  </div>
                </div>
        
                <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
                  <img className="w-14" src={assets.patients_icon} alt="" />
                  <div>
                    <p className="text-xl font-semibold text-gray-600">{dashData.patients}</p>
                    <p className="text-gray-400">Patients</p>
                  </div>
                </div>
              </div>

              {/* Latest Bookings Title */}
                    <div className="bg-white">
                      <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border border-b-0 bg-gray-50">
                        <img className="w-5" src={assets.list_icon} alt="" />
                        <p className="font-semibold text-gray-700">Latest Bookings</p>
                      </div>
                    </div>
              
                    {/* Latest Bookings List */}
                    <div className="pt-4 border border-t-0 rounded-b bg-white">
                      {dashData.latestAppointments.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-4 px-4 py-3 border-t hover:bg-gray-50 transition"
                        >
                          {/* Doctor Info */}
                          <div className="flex items-center gap-3">
                            <img
                              src={item.userData.image}
                              alt=""
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium text-gray-800">{item.userData.name}</p>
                              <p className="text-sm text-gray-500">{item.slotDate}</p>
                            </div>
                          </div>
              
                          {/* Appointment Status or Cancel Button */}
                          <div className="text-right">
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
                            
                          </div>
                        </div>
                      ))}
                    </div>
        
      
    </div>
  )
}

export default DoctorDashboard
