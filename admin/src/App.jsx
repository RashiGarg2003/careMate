import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import Doctorslist from './pages/Admin/Doctorslist';
import { DoctorContext } from './context/DoctorContext';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {
  const { aToken,setAToken } = useContext(AdminContext)
  const{dToken} = useContext(DoctorContext)

  return (
  <>
    <ToastContainer />
    {aToken || dToken ? (
      <div className='bg-[#F8F9FD]'>
        <Navbar />
        <div className='flex items-start'>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<></>}/>
            <Route path='/admin-dashboard' element={<Dashboard/>}/>
            <Route path='/all-appointments' element={<AllAppointments/>}/>
            <Route path='/add-doctor' element={<AddDoctor/>}/>
            <Route path='/doctor-list' element={<Doctorslist/>}/>


            <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
            <Route path='/doctor-appointments' element={<DoctorAppointment/>}/>
            <Route path='/doctor-profile' element={<DoctorProfile/>}/>
          </Routes>
        </div>
      </div>
    ) : (
      <>
        <Login />
        <ToastContainer />
      </>
    )}
  </>
)

}

export default App
