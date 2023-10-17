import React from 'react'
import {user, email, age, address, pincode, lname, img} from './data'
import './profile.css'
import axios from 'axios';
// import { useState } from 'react';

export default function page() {


  // axios.get('http://localhost:3000/api/userAuth')
  // .then((response) => {
  //   // Handle the successful response here
  //   const data = response.data;
  // })
  // .catch((error) => {
  //   // Handle any errors here
  //   console.error(error);
  // });

  return (
    <>
    <div className='data_container'>
      <div className='profile_data'>
        <div className='user_cont'>
          <img src={img} className='profile_img'></img>
          <p>{user}</p>
        </div>
        <div className='user_details'>
          <h1>User details</h1>
          <p>Email: {email}</p>
          <p>Name: {user} {lname}</p>
          <p>Age: {age}</p>
          <p>Address: {address}</p>
          <p>Pincode: {pincode}</p>
        </div>
      </div>

      <div className='tempdiv'>

      </div>
    </div>
    </>
  )
}
