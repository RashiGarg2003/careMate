import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()

  const [relDoc, setRelDocs] = useState([])

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      )
      setRelDocs(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-semibold tracking-tight'>Explore More Experts</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-500'>
        Meet other professionals with excellence in <span className="font-medium">{speciality}</span>
      </p>

      <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 pt-6 px-3 sm:px-0'>
        {relDoc.length > 0 ? (
          relDoc.slice(0, 5).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`)
                scrollTo(0, 0)
              }}
              key={index}
              className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-white hover:shadow-xl transition-all duration-300'
            >
              <img
                src={item.image}
                alt=""
                className='w-full h-48 object-cover rounded-t-xl'
              />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available?' text-green-500':'text-gray-500'}`}>
                        <p className={`w-2 h-2 ${item.available ?  ' bg-green-500' : 'bg-gray-500'} rounded-full`}></p><p>{item.available?'Available':'Not Available'}</p>
                    </div>
                <p className='text-lg font-semibold text-gray-800 mt-1'>{item.name}</p>
                <p className='text-sm text-gray-500'>{item.speciality}</p>
                <div className='flex gap-1 mt-2'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 col-span-full text-center py-10">No other doctors found in this category.</p>
        )}
      </div>

      <button
        onClick={() => navigate(`/doctors`)}
        className='bg-blue-100 text-blue-800 font-medium px-10 py-2 rounded-full mt-10 hover:bg-blue-200 transition'
      >
        View All Doctors
      </button>
    </div>
  )
}

export default RelatedDoctors
