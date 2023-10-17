'use client'
import './navbar.css'
import { useState, useEffect } from 'react'
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
    localStorage.setItem('img', "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg")
    localStorage.setItem('order', "")
    localStorage.setItem('sold', "")

    window.location.href='/'
  }

  const [isDivVisible, setIsDivVisible] = useState(false);

  // Fetch the username from local storage
  const storedUsername = localStorage.getItem('username');

  // Use the useEffect hook to set the visibility when the component mounts
  useEffect(() => {
    if (storedUsername) {
      setIsDivVisible(true);
    } else {
      setIsDivVisible(false);
    }
  }, [storedUsername]);



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
