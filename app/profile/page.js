'use client'
import axios from 'axios'
import React, { useState } from 'react';
import Info from '../Components/Info/info'
import Post from '../Components/Post/Createpost'
import './profile.css'

export default function page() {

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    var id = localStorage.getItem('uid')
  }

  const [Userdata, setUser] = useState('')
  const [showpost, setShowpost] = useState(false)

async function authenticate() {
    const response = await axios.get(`http://localhost:3000/api/currentUser?uid=${id}`)
      setUser(response.data)

      if (response.data.verified === true) {
        setShowpost(true)
      }
}

authenticate()
  return (
    <>
    <div className='main_cont'>
    <div className='profile_cont'>
      <Info fname={Userdata.firstname} lname={Userdata.lastname} email={Userdata.email} rating={Userdata.rating} phone={Userdata.phone} img_url={Userdata.img_url}/>
    </div>
    <div>
    {showpost &&
    (
      <>
      <Post/>
      </>
    )}
    </div>
    </div>
    </>
  )
}
