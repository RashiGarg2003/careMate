import React from 'react'
import { specialityData } from '../assets/assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-16 px-4 text-gray-800 bg-gradient-to-b from-white via-slate-50 to-white" id="speciality">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-primary">
        Explore Top Specialities
      </h2>
      <p className="text-center text-sm text-gray-500 max-w-md">
        Choose from a wide range of medical specialists and book your appointment with ease.
      </p>

      <div className="flex gap-5 w-full overflow-x-auto sm:justify-center py-4 px-2 scrollbar-hide">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 min-w-[100px] sm:min-w-[120px] text-center cursor-pointer flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-full object-cover border-2 border-primary"
            />
            <p className="text-xs sm:text-sm font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SpecialityMenu
