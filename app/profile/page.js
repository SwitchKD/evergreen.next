'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Info from '../Components/Info/info'
import Post from '../Components/Post/Createpost'
import './profile.css'

export default function page() {

  // LOCAL STORAGE DATA RETRIVAL
  if (typeof window !== 'undefined') {
    var id = localStorage.getItem('uid')
  }

  // STATE DECLARE
  const [Userdata, setUser] = useState('')
  const [showpost, setShowpost] = useState(true)

  // DATA RETRIVAL FROM API
  useEffect(() => {
    async function fetchData() {
      var uid = null
      if (typeof window !== 'undefined') {
        uid = localStorage.getItem('uid')
      }

      if (uid) {
        const response = await axios.get(`https://plantio.vercel.app/api/currentUser?uid=${id}`, {
          headers: {
            'Cache-Control': 'max-age=120',
          },
        });

        setUser(response.data)

        if(response.data.verified === true){
          setShowpost(true)
        }
      }
    }
    fetchData(); // Call the fetchData function to initiate the data fetching
  }, []);


  return (
    <>
    <div className='main_cont'>
    <div className='profile_cont'>
      <Info fname={Userdata.firstname} lname={Userdata.lastname} email={Userdata.email} rating={Userdata.rating} phone={Userdata.phone}/>
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
