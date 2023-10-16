import React from 'react'
import {user, email, age, address, pincode, lname, img} from './data'
import './profile.css'

export default function page() {
  return (
    <>
    <div className='data_container'>
      <div className='profile_data'>
        <div className='user_cont'>
          <img src={img} className='profile_img'></img>
          <p>{user}</p>
        </div>
        <div className='user_details'>
          <p>Email: {email}</p>
          <p>Firstname: {user}</p>
          <p>Lastname: {lname}</p>
          <p>Age: {age}</p>
          <p>Address: {address}</p>
          <p>Pincode: {pincode}</p>
        </div>
      </div>
    </div>
    </>
  )
}
