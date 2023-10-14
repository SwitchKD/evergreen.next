'use client'
import React, { useState } from 'react';
import './signup.css';
import {saveData} from '../component/create';

export default function Page() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fname: '',
    lname: '',
    age: '',
    address: '',
    pincode: '',
  });

  const encdata = formData;

  return (
    <>
      <div className='data_container'>
        <div className='form_container'>
          <div className='container'>
            <label>email</label>
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
          <button onClick={() => saveData(encdata)}>Signup</button>
          <p>Do not share your password or username with anyone.</p>
          <p>already a user?</p>
          <a href='/login'><button>Click here</button></a>
        </div>
      </div>
    </>
  );
}
