'use client'
import { useState, useEffect } from 'react';
import './navbar.css'
import axios from 'axios';
import { CgMenuGridO } from 'react-icons/cg'

export default function Navbar() {
  const [showuser, setShowuser] = useState(false)
  const [user, setUser] = useState('Signup')
  const [showUserOptions, setShowUserOptions] = useState(false)


  useEffect(() => {
    async function fetchData() {
      var uid = null
      if (typeof window !== 'undefined') {
        uid = localStorage.getItem('uid')
        if (uid) {
          setShowuser(true)
        }
      }

      if (uid) {
        const response = await axios.get(`http://localhost:3000/api/currentUser?uid=${uid}`, {
          headers: {
            'Cache-Control': 'max-age=300',
          },
        });

        setUser(response.data.firstname)
      }
    }

    fetchData(); // Call the fetchData function to initiate the data fetching

  }, []);

  function ShowuserOptions()
  {
    setShowUserOptions(!showUserOptions)
  }

  function logout(){
    localStorage.clear();

    setTimeout(function() {
      window.location.href = '/'
    }, 100);
  }

  function profile()
  {
    window.location.href = '/profile'
  }

return (
    <>
    <div className='navbar'>
      <div className='lr_parent'>
        <div className='nav_left'>
          <a className='main_link' href='/'>EVERGREEN</a>
        </div>
        <div className='nav_right'>
          <a className='link' href='/signup'>{user}</a>
          {showuser &&
          (<>
          <button onClick={ShowuserOptions} className='link_but'><CgMenuGridO className='react_icon'/></button>
          </>)}
        </div>
      </div>
      <div>
          {showUserOptions &&
          (
            <>
            <div className='extra_options'>
              <button onClick={logout} className='link_but'>Logout</button>
              <button onClick={profile} className='link_but'>Profile</button>
            </div>
            </>
          )}
        </div>
    </div>
    </>
  )
}
