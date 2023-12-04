import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import Login from './components/Login'
export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthForm/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
