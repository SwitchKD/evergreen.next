'use client'
import React from 'react'
import './profile.css'
import Stats from '../component/stats';
import Admin from '../component/admindashboard'
import { useState } from 'react';
import axios from 'axios';

export default function page() {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');
  const [order, setOrder] = useState('');
  const [sold, setSold] = useState('');

  
  async function fetchData() {
      const response = await axios.get('http://localhost:3000/api/currentUser',
      {
        headers: {
          'Cache-Control': 'no-store',
        },
      });
      const data = response.data;

      setFname(data.fname)
      setLname(data.lname)
      setEmail(data.email)
      setFname(data.fname)
      setSold(data.sold)
      setOrder(data.order)
      setImg(data.img)
      setRole(data.role)
      // console.log(data.role);
  }
  
  // Call the function to fetch and store the data
  fetchData();

  return (
    <>
    <div className='data_container'>
      <div className='profile_data'>
        <div className='user_cont'>
          <img src={img} className='profile_img'></img>
        </div>
        <div className='user_details'>
          <h1>{fname} {lname}</h1>
          <p className='user_p'>{email}</p>
        </div>
      </div>

      <div className='tempdiv'>
      <Stats order = {order} sold = {sold}/>
      <Admin role = {role}/>
      </div>
    </div>
    </>
  )
}
