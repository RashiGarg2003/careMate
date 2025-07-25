import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import {useNavigate} from 'react-router-dom'

const MyAppointments = () => {
  const { backendUrl, token,getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  const navigate = useNavigate()
  

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
        headers: { token },
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async(appointmentId)=>{
    try{

      const {data} = await axios.post(backendUrl+'/api/user/cancel-appointment',{appointmentId},{headers:{token}})
      if(data.success){
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }

    }catch(error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const initPay = (order)=>{
    const options ={
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency:order.currency,
      name: 'Appointment Payment',
      description : 'Appointment Payment',
      order_id:order.id,
      receipt: order.receipt,
      handler : async(response)=>{
          console.log((response));

          try{
              const {data} = await axios.post(backendUrl+'/api/user/verifyRazorpay',respons,{headers:{token}})
              if(data.success){
                getUserAppointments()
                navigate('/my-appointments')
              }
          }catch(error){
             console.log(error);
             toast.error(error.message)
             
          }
          
      }

    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const appointmentRazorpay = async(appointmentId)=>{
      try{
           const {data} = await axios.post(backendUrl+'/api/user/payment-razorpay',{appointmentId},{headers:{token}})

           if(data.success){
               initPay(data.order)
            
           }
      } catch(error){

      }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="p-6 md:px-20">
      <p className="text-3xl font-semibold text-center text-blue-600 mb-8">My Appointments</p>

      {appointments.length === 0 && (
        <p className="text-center text-gray-500 mt-10">You have no appointments yet.</p>
      )}     

      <div className="space-y-6">
        {appointments.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 border">
            <div className="md:w-1/4">
              <img
                src={item.docData?.image}
                alt=""
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            <div className="flex-1 space-y-2">
              <p className="text-xl font-bold text-gray-800">{item.docData?.name}</p>
              <p className="text-gray-500">{item.docData?.speciality}</p>

              <div className="text-sm text-gray-600">
                <p className="font-medium mt-2">Address:</p>
                <p>{item.docData?.address?.line1}</p>
                <p>{item.docData?.address?.line2}</p>
              </div>

              <p className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Date & Time:</span> {item.slotDate} | {item.slotTime}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 md:items-end">
              {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-500'>Paid</button>}
              {!item.cancelled && !item.payment && !item.isCompleted && <button onClick={()=>appointmentRazorpay(item._id)} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Pay Online
              </button>}
              {!item.cancelled && !item.isCompleted &&  <button onClick={()=>cancelAppointment(item._id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                Cancel Appointment </button>}
              {item.cancelled && !item.isCompleted &&  <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
              {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
