
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './Firebase'
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../../src/App.css'

function App() {
  const ref = useRef();
  const navigate = useNavigate();
  const [hasAccount, setHasAccount] = useState(true);

  const handleNotRegistered = ()=>{setHasAccount(false);}
  const handleAlreadyRegistered = ()=>{setHasAccount(true);}

  const [details,setDetails] = useState({})

  const handleChange = (e)=>{
    setDetails({...details,
      [e.target.name]:e.target.value
    })
  }

  const handleLogin = (e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(auth,details.Email,details.Password).then((userCredential)=>{
      toast.success("Login Successful")
      setTimeout(()=>{
        navigate('/login')
      },1000)
    }).catch((error)=>{
      toast.error("Invalid Credentials")
    })
  }

  const handleRegister = async(e)=>{
    e.preventDefault();
    ref.current.reset();
    await createUserWithEmailAndPassword(auth,details.Email,details.Password).then((userCredential)=>{
      toast.success("Registered Successfully")
    }).catch((error)=>{
      toast.error("Invalid");
    })
  }

  const handleSubmit = ()=>{
    if(details.Email==="" && details.Password===""){
      toast.warn("Fill all fields")
    }
  }



  return (
    <>
    {hasAccount===true?
      <div className='flex justify-center flex-col items-center h-screen'>
      <h1 className='text-5xl font-bold mb-8'>Login</h1>
      <form className='bg-[#33BBC5] md:w-96 w-80 flex justify-center flex-col items-center py-12 rounded' onSubmit={handleSubmit}>
      <input type="email" placeholder='Email ID' name='Email' onChange={handleChange} required/> <br />
      <input type="password" placeholder='Password' name='Password' minLength={6} onChange={handleChange} required/> <br />
      <button className='bg-[#614BC3] text-white px-4 py-2 rounded' onClick={handleLogin}>Submit</button> <br />
      <ToastContainer/>
      <p className='text-xs text-white' style={{cursor:'pointer'}} onClick={handleNotRegistered}>Not a registered user? Register here</p>

    </form>
    </div>
    :

    <div className='flex justify-center flex-col items-center h-screen'>
    <h1 className='text-5xl font-bold mb-8'>Register</h1>
    <form className='bg-[#33BBC5] w-96 flex justify-center flex-col items-center py-12 rounded' ref={ref}  onSubmit={handleSubmit} >
      <input type="email" placeholder='Email ID' name='Email' onChange={handleChange} required/> <br />
      <input type="password" placeholder='Password' minLength={6} name='Password' onChange={handleChange} required/> <br />
      <button className='bg-[#614BC3] text-white px-4 py-2 rounded' onClick={handleRegister}>Submit</button> <br />
      <ToastContainer/>
      <p className='text-xs text-white' style={{cursor:'pointer'}} onClick={handleAlreadyRegistered}>Already a registered user? Sign In</p>
    </form>
    </div>
    }
    

   

     
    </>
  )
}

export default App
