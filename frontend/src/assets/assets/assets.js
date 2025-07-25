import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
   {
    _id: 'doc1',
    name: 'Dr. Rajesh Kumar',
    image: doc1,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '5 Years',
    about: 'Dr. Rajesh Kumar is dedicated to providing comprehensive primary care with an emphasis on preventive medicine and early diagnosis.',
    fees: 1000,
    address: {
      line1: 'B-12, MG Road',
      line2: 'Bangalore, Karnataka'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Anjali Sharma',
    image: doc2,
    speciality: 'Pediatrician',
    degree: 'MBBS, DCH',
    experience: '4 Years',
    about: 'Dr. Anjali Sharma specializes in child health, focusing on preventive care and timely interventions to promote healthy growth.',
    fees: 1200,
    address: {
      line1: 'Plot 45, Sector 3',
      line2: 'Noida, Uttar Pradesh'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Suresh Reddy',
    image: doc3,
    speciality: 'Neurologist',
    degree: 'MBBS, MD',
    experience: '8 Years',
    about: 'Dr. Suresh Reddy offers expert cardiology services using state-of-the-art diagnostics and treatment for heart-related conditions.',
    fees: 3000,
    address: {
      line1: '10-2-3, Residency Area',
      line2: 'Hyderabad, Telangana'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Priya Singh',
    image: doc4,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '6 Years',
    about: 'Dr. Priya Singh is passionate about skin health and provides personalized treatment solutions for a variety of dermatological conditions.',
    fees: 1500,
    address: {
      line1: '12, Gandhi Marg',
      line2: 'Lucknow, Uttar Pradesh'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Deepak Mehta',
    image: doc5,
    speciality: 'General Physician',
    degree: 'MBBS, MS',
    experience: '10 Years',
    about: 'Dr. Deepak Mehta brings extensive experience in musculoskeletal health, ensuring effective treatments for bone and joint disorders.',
    fees: 900,
    address: {
      line1: 'Plot 23, Residency Park',
      line2: 'Chandigarh'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Shreya Patel',
    image: doc6,
    speciality: 'Gynecologist',
    degree: 'MBBS, DGO',
    experience: '7 Years',
    about: 'Dr. Shreya Patel provides compassionate women’s healthcare, focusing on reproductive health and prenatal care.',
    fees: 800,
    address: {
      line1: 'House 45, Lake View Colony',
      line2: 'Ahmedabad, Gujarat'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Vikram Gupta',
    image: doc7,
    speciality: 'Neurologist',
    degree: 'MBBS, MD (Neurology)',
    experience: '9 Years',
    about: 'Dr. Vikram Gupta specializes in the management of neurological disorders using advanced diagnostic techniques and personalized care plans.',
    fees: 1500,
    address: {
      line1: '31, Nehru Road',
      line2: 'Mumbai, Maharashtra'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Neha Desai',
    image: doc8,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Neha Desai offers quality primary care with a focus on overall well-being and preventive health strategies.',
    fees: 900,
    address: {
      line1: '15, Satellite Colony',
      line2: 'Surat, Gujarat'
    }
  },
  {
    _id: 'doc9',
    name: 'Dr. Arjun Rao',
    image: doc9,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '5 Years',
    about: 'Dr. Arjun Rao is committed to delivering timely and effective general healthcare, emphasizing prevention and early intervention.',
    fees: 1100,
    address: {
      line1: '22, Residency Road',
      line2: 'Chennai, Tamil Nadu'
    }
  },
  {
    _id: 'doc10',
    name: 'Dr. Kavita Nair',
    image: doc10,
    speciality: 'Pediatrician',
    degree: 'MBBS, DCH',
    experience: '6 Years',
    about: 'Dr. Kavita Nair provides exceptional care for children, focusing on holistic growth and development with personalized treatment.',
    fees: 1300,
    address: {
      line1: '18, Lakshmi Nagar',
      line2: 'Kochi, Kerala'
    }
  },
  {
    _id: 'doc11',
    name: 'Dr. S.P. Tiwari',
    image: doc11,
    speciality: 'General Physician',
    degree: 'MBBS, MD',
    experience: '12 Years',
    about: 'Dr. S.P. Tiwari is committed to delivering timely and effective general healthcare, emphasizing prevention and early intervention.',
    fees: 600,
    address: {
      line1: '5, Sector 10',
      line2: 'Prayagraj, Uttar Pradesh'
    }
  },
  {
    _id: 'doc12',
    name: 'Dr. Shruti Shukla',
    image: doc12,
    speciality: 'Gynecologist',
    degree: 'MBBS, DGO',
    experience: '4 Years',
    about: 'Dr. Shruti Shukla provides specialized women’s healthcare in a compassionate and supportive environment, with a focus on reproductive health.',
    fees: 1600,
    address: {
      line1: '12, Shanti Nagar',
      line2: 'Farukkahbad, Uttar Pradesh'
    }
  },
  {
    _id: 'doc13',
    name: 'Dr. Rakesh Sharma',
    image: doc13,
    speciality: 'Pediatrician',
    degree: 'MBBS, MS',
    experience: '11 Years',
    about: 'Dr. Rakesh Sharma is renowned for his expertise in orthopedics, effectively treating bone, joint, and muscle conditions with modern techniques.',
    fees: 2000,
    address: {
      line1: '46, Vikas Nagar',
      line2: 'Delhi'
    }
  },
  {
    _id: 'doc14',
    name: 'Dr. Meera Joshi',
    image: doc14,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '7 Years',
    about: 'Dr. Meera Joshi focuses on skin health, offering personalized treatments and cosmetic dermatology procedures tailored to each patient.',
    fees: 1000,
    address: {
      line1: '8, Shalimar Bagh',
      line2: 'Hyderabad, Telangana'
    }
  },
  {
    _id: 'doc15',
    name: 'Dr. Amitabh Prasad',
    image: doc15,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '5 Years',
    about: 'Dr. Amitabh Prasad provides holistic general care, promoting preventive measures and early intervention strategies for overall health.',
    fees: 950,
    address: {
      line1: '23, Cantonment Area',
      line2: 'Kolkata, West Bengal'
    }
  }
]