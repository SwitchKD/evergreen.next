'use client'
import './signup.css'
import { useState } from 'react'
import { Create } from '../Components/CreateUser/create_user'
import axios from 'axios'

export default function page() {

  const[userdata, setUserdata] = useState(
    {
      email:'',
      password:'',
      firstname:'',
      lastname:'',
      address:'',
      zipcode:'',
      age: '',
      role:'User',
      img_url:'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg',
      rating:3,
      order:0,
      sold:0,
    }
  )



  const [errors, setErrors] = useState([]);

  function validate() {
    const newErrors = []; // Create a new array to store errors

  const url = `https://plantio.vercel.app/api/validateEmail?email=${userdata.email}`;
  axios.get(url,
    {
      headers: {
        'Cache-Control': 'no-cache',
      },
    })
  .then((response) => {
    // Check the response data for the "error email already used" condition
    const getdata = response.data
    console.log(getdata);

    if (getdata === 'USER FOUND') {
      newErrors.push('Email already taken');
      window.alert('Email already taken. Please choose a different email.')
      setErrors(newErrors);
      return;
    }
  });

    // Check for empty fields and other validation checks
    if (userdata.firstname === '' || userdata.firstname.length < 2) {
      newErrors.push('Invalid Firstname')
    }

    if (userdata.lastname === '' || userdata.lastname.length < 4) {
      newErrors.push('Invalid Lastname')
    }

    if (userdata.lastname === '' || userdata.lastname < 18) {
      newErrors.push('Invalid Age')
    }

    if (userdata.email === '') {
      newErrors.push('Invalid Email')
    }

    if (userdata.password === '' || userdata.password.length < 8) {
      newErrors.push('Invalid Password')
    }

    if (userdata.address === '' || userdata.address.length > 100) {
      newErrors.push('Invalid Address')
    }

    if (userdata.zipcode === '' || userdata.zipcode.length !== 6) {
      newErrors.push('Invalid Zipcode')
    }

    // You can add more validation checks here

    if (newErrors.length === 0) {
      // If no errors, proceed with registration
      Create(userdata);
      window.location.href = "/";
    } else {
      // If there are errors, set them in the state
      setErrors(newErrors);
    }
  }

  //RENDER
  return (
    <>
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
              <p className='input_label'>Address</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, address: e.target.value })}
              type='text' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>Pincode</p>
              <input
              onChange={(e) => setUserdata({ ...userdata, zipcode: e.target.value })}
              type='number' className='input_fields'></input>
              </div>

              {/* error logging */}
              <div className='error'>
              {errors.length > 0 && (
                <div>
                  {errors.map((error, index) => (
                    <p key={index} className='use_errors'>{error}</p>
                  ))}
                </div>
              )}
              </div>
              <div>
                <p className='warning'>Please do not share your ussername or password with anyone</p>
              </div>
              <div>
              <button onClick={validate} className='submit_button'>Signup</button>
              </div>
              <br/>
              <p className='warning'>Already a User?</p>
              <a href='/login' className='submit_button'>Login</a>
            </div>
          </div>
        </div>
    </>
  )
}
