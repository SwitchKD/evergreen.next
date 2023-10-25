'use client'
import './signup.css'
import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import {Create} from '../Components/CreateUser/create_user'; // Ensure the correct import path

export default function SignupPage() {
  const [userdata, setUserdata] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    address: '',
    zipcode: '',
    age: '',
    role: 'User',
    img_url: 'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg',
    rating: 3,
    order: 0,
    phone: '',
  });

  const [errorFlag, setErrorFlag] = useState([]);

  const validate = async () => {
    const newErrors = [];

    // Check if email already exists
    const response = await axios.get(`https://plantio.vercel.app/api/validateEmail?email=${userdata.email}`, {
        headers: {
          'Cache-Control': 'no-store',
        }
      });

      if (response.data) {
        newErrors.push('Email already exists.');
      }

    // Check for empty fields and other validation checks
    if (!userdata.firstname.trim() || userdata.firstname.length < 2 || userdata.firstname.length > 20) {
      newErrors.push('Invalid Firstname');
    }

    if (!userdata.lastname.trim() || userdata.lastname.length < 4 || userdata.lastname.length > 20) {
      newErrors.push('Invalid Lastname');
    }

    if (!userdata.age.trim() || userdata.age < 18 || userdata.age > 120) {
      newErrors.push('Invalid Age (above 18)');
    }

    if (!userdata.phone.trim() || userdata.phone.length !== 10) {
      newErrors.push('Invalid Phone Number');
    }

    if (!validator.isEmail(userdata.email) || !userdata.email.trim()) {
      newErrors.push('Invalid Email');
    }

    if (!userdata.password.trim() || userdata.password.length < 8 || userdata.password.length > 30) {
      newErrors.push('Password too short (8-30 characters)');
    }

    if (!userdata.address.trim() || userdata.address.length > 100) {
      newErrors.push('Address is empty');
    }

    if (!userdata.zipcode.trim() || userdata.zipcode.length !== 6) {
      newErrors.push('Invalid Zipcode');
    }

    // Set errors in the state
    setErrorFlag(newErrors);

    // If there are errors, do not proceed with registration
    if (newErrors.length === 0) {
      Create(userdata);
      setTimeout(function() {
        window.location.href = '/';
      }, 3000);
    }
  };

  return (
    <div className='form_container'>
      <div className='box_shadow'>
        <div className='input_right_container'>
        <div>
              <p className='input_label'>Email</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
              type='text' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>Password</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, password: e.target.value })}
              type='password' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>First name</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, firstname: e.target.value })}
              type='text' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>Last name</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, lastname: e.target.value })}
              type='text' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>Age</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, age: e.target.value })}
              type='Number' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>Phone</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, phone: e.target.value })}
              type='Number' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>Address</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, address: e.target.value })}
              type='text' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>Zipcode</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, zipcode: e.target.value })}
              type='number' className='input_fields'></input>
              </div>
          
          {/* Error logging */}
          <div className='error'>
            {errorFlag.length > 0 && (
              <div>
                {errorFlag.map((error, index) => (
                  <p key={index} className='use_errors'>{error}</p>
                )
                )}
              </div>
            )}
          </div>
          <div>
            <p className='warning'>Please do not share your username or password with anyone</p>
          </div>
          <div>
            <button onClick={validate} className='submit_button'>
              Signup
            </button>
          </div>
          <br />
          <p className='warning'>Already a User?</p>
          <a href='/login' className='submit_button'>
            Login
          </a>
        </div>
      </div>
    </div>
  );
}