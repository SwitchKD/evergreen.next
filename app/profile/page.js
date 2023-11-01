'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Info from '../Components/Info/info'
import Post from '../Components/Post/Createpost'
import Poststats from '../Components/PostStats/poststats'
import UserPost from '../Components/UserPost/userpost'
import './profile.css'

export default function page() {

  // LOCAL STORAGE DATA RETRIVAL
  if (typeof window !== 'undefined') {
    var id = localStorage.getItem('uid')
  }

  // STATE DECLARE
  const [Userdata, setUser] = useState('')
  const [showpost, setShowpost] = useState(false)
  const [Userposts, setPost] = useState('')


  // DATA RETRIVAL FROM API
  useEffect(() => {
    async function fetchData() {

      if (id) {
        const USERresponse = await axios.get(`https://plantio.vercel.app/api/currentUser?uid=${id}`, {
          headers: {
            'Cache-Control': 'no-store',
          },
        });
        setUser(USERresponse.data)


        const POSTSresponse = await axios.get(`http://localhost:3000/api/userPost?uid=${id}`, {
          headers: {
            'Cache-Control': 'max-age=120',
          },
        });
        setPost(POSTSresponse.data)

        if(USERresponse.data.verified === true){
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
        <Poststats postCount={Userposts.length}/>
        <UserPost postdata={Userposts}/>
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
