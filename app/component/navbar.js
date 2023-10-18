'use client'
import './navbar.css'
import { useState, useEffect } from 'react'
import { IoSettingsOutline, IoSettings } from 'react-icons/io5';
import { saveUid } from './saveuid';

export default function Navbar() {

  //Handle Login/Signup Logic (UI) 
  const [current, setCurrent] = useState(localStorage.getItem('username'))
  if (!current) {
    setCurrent('Signup')
  }


  //Handle Logged in user Data fetch paramaters and Auth
  // const uidObject = localStorage.getItem('uid')
  const encrypt = {userid:localStorage.getItem('uid')}
  saveUid(encrypt)


  //Show and hide Navbar Extra
  const [setting, setIsContentVisible] = useState(false);
  const toggleContent = () => {
    setIsContentVisible(!setting);
  }


  //Clears the cache for logout operation
  function logout()
  {
    localStorage.setItem('username', "")
    localStorage.setItem('age', "")
    localStorage.setItem('uid', "")
    localStorage.setItem('lastname', "")
    localStorage.setItem('email', "")
    localStorage.setItem('pincode', "")
    localStorage.setItem('address', "")
    localStorage.setItem('img', "")
    localStorage.setItem('order', "")
    localStorage.setItem('sold', "")
    localStorage.clear();
    window.location.href='/'
  }

  //Hide Profile option if user is not logged in
  const [isDivVisible, setIsDivVisible] = useState(false);
  const storedUsername = localStorage.getItem('username');
  useEffect(() => {
    if (storedUsername) {
      setIsDivVisible(true);
    } else {
      setIsDivVisible(false);
    }
  }, [storedUsername]);


//RENDER////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
      <div className='temp69'>
          <div className='hidden_stuff'>
            {isDivVisible && (
              <div>
                <a className='setting_link' href='/profile'>Profile</a>
              </div>
            )}
            <button onClick={logout} className='setting_link' href='/profile'>Logout</button>
          </div>
      </div>
          )}
    </>
  )
}
