'use client'
import './navbar.css'
import { useState } from 'react'
import { IoSettingsOutline, IoSettings } from 'react-icons/io5';

export default function Navbar() {

  let current = localStorage.getItem('username')

  if (!current) {
    current = "Signup"
  }

  const [setting, setIsContentVisible] = useState(false);
  const toggleContent = () => {
    setIsContentVisible(!setting);
  };

  function logout()
  {
    localStorage.setItem('username', "")
    localStorage.setItem('age', "")
    localStorage.setItem('uid', "")
    localStorage.setItem('lastname', "")
    localStorage.setItem('email', "")
    localStorage.setItem('pincode', "")
    localStorage.setItem('address', "")
    
    window.location.href='/'
  }

  return (
    <>
    <div className='navbar'>
        <div className='navleft'>
            <a href='/' className='main_link'>Evergreen</a>
        </div>
        <div className='navright'>
            <a href='/about' className='link'>About</a>
            <a href='/browse' className='link'>Browse</a>
            <a  href='/signup' className="dropbtn">{current}</a>
            <button className='button' onClick={toggleContent}>{setting ? <IoSettings/> : <IoSettingsOutline/>}</button>
        </div>
    </div>
    {setting && (
      <div className='temp2'>
          <div className='hidden_stuff'>
            <a className='setting_link' href='/profile'>Profile</a>
            <button onClick={logout} className='setting_link' href='/profile'>Logout</button>
          </div>
      </div>
          )}
    </>
  )
}
