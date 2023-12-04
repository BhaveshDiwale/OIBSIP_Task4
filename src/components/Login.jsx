import React from 'react'
import {auth} from './Firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        auth.signOut().then(()=>{
            toast.success('Logout Successful');
            localStorage.clear()
            setTimeout(()=>{
                navigate("/")
            },1000)
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className='flex justify-center items-center h-screen flex-col' >
      <h1 className='text-5xl md:text-6xl mb-4'>Welcome User!</h1>
      <h3 className='text-xl mb-12'>To your Login Page</h3>
      <button className='text-2xl bg-[#614BC3] text-white px-8 py-2 rounded' onClick={handleClick}>Logout</button>
    </div>
  )
}
