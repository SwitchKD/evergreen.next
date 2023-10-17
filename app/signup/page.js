'use client'
import React, { useEffect, useState } from 'react';
import './signup.css';
import { saveData } from '../component/create_user';
import { updateuserid } from '../component/update_userid';

const axios = require('axios');

export default function Page() {


  const [formData, setFormData] = useState({
    user_id: 0,
    email: '',
    password: '',
    fname: '',
    lname: '',
    age: '',
    address: '',
    pincode: '',
    rating: 1,
    role: 'User',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg',
    order: 0,
    sold: 0
  });

  const encdata = formData;
  // console.log(encdata)

  useEffect(() => {
    axios.get('http://localhost:3000/api/server')
      .then(response => {
        // console.log(response.data);
        const userCount = response.data[0].userid_count
        setFormData({ ...formData, user_id: userCount})
      })
      .catch(error => {
        console.error('Error fetching userid_count:', error)
      });
  }, []);

  const handleSignup = () => {
        updateuserid(formData.user_id+1)
        saveData(encdata)
        window.location.reload()
  };

  return (
    <>
      <div className='data_container'>
        <div className='form_container'>
          <div className='container'>
            <label>Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className='container'>
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div className='container'>
            <label>First name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              required
              value={formData.fname}
              onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
            />
          </div>
          <div className='container'>
            <label>Last name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              required
              value={formData.lname}
              onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
            />
          </div>
          <div className='container'>
            <label>Age</label>
            <input
              type="text"
              id="age"
              name="age"
              required
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
          <div className='container'>
            <label>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <div className='container'>
            <label>Pincode</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              required
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            />
          </div>
          <button className='buttonu' onClick={handleSignup}>Signup</button>
          <p>Do not share your password or username with anyone.</p>
          <p>Already a user?</p>
          <a href='/login'><button className='buttonu'>Login</button></a>
        </div>
      </div>
    </>
  );
}
