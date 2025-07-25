import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality = '' } = useParams();
  const lowerSpeciality = speciality.toLowerCase();

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (!doctors || doctors.length === 0) return;

    if (speciality) {
      setFilterDoc(
        doctors.filter(
          doc =>
            doc.speciality &&
            doc.speciality.toLowerCase() === lowerSpeciality
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      applyFilter();
    }
  }, [doctors, speciality]);

  const specialties = [
    'General Physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ];

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? 'bg-primary text-white' : ''
          }`}
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filters
        </button>

        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? 'flex' : 'hidden sm:flex'
          }`}
        >
          {specialties.map((spec, idx) => (
            <p
              key={idx}
              onClick={() =>
                lowerSpeciality === spec.toLowerCase()
                  ? navigate('/doctors')
                  : navigate(`/doctors/${spec}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                lowerSpeciality === spec.toLowerCase()
                  ? 'bg-indigo-100 text-black'
                  : ''
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.length === 0 ? (
            <p className='text-gray-500'>No doctors found for "{speciality}"</p>
          ) : (
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                key={index}
              >
                <img className='bg-blue-50' src={item.image} alt='' />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm text-center ${item.available?' text-green-500':'text-gray-500'}`}>
                        <p className={`w-2 h-2 ${item.available ?  ' bg-green-500' : 'bg-gray-500'} rounded-full`}></p><p>{item.available?'Available':'Not Available'}</p>
                    </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

