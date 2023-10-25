'use client'
import './signup.css'
import { useState } from 'react'
import { Create } from '../Components/CreateUser/create_user'
import axios from 'axios'

export default function Page() {
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
    sold: 0,
    phone:''
  });

  const [error_flag, setErrors] = useState([]);

  async function validate() {
    const newErrors = []; // Create a new array to store errors

    const response = await axios.get(`https://plantio.vercel.app/api/validateEmail?email=${userdata.email}`, {
      // Disable caching
      headers: {
        'Cache-Control': 'no-store',
      }}
      );
    // console.log(response);
    if (response.data) {
      newErrors.push('Email already exists');
      setErrors(newErrors);
      // console.log("HAPPY HAPPY HAPPY");
    }
    else{
      Create(userdata);
      window.location.href = '/';
    }

    // Check for empty fields and other validation checks
    if (userdata.firstname === '' || userdata.firstname.length < 2 || userdata.firstname.length > 20) {
      newErrors.push('Invalid Firstname');
    }

    if (userdata.lastname === '' || userdata.lastname.length < 4 || userdata.lastname.length > 20) {
      newErrors.push('Invalid Lastname');
    }

    if (userdata.age === '' || userdata.age < 18 || userdata.age > 120) {
      newErrors.push('Invalid Age (above 18)');
    }

    if (userdata.phone === '' || userdata.phone < 9999999999) {
      newErrors.push('Invalid Phone Number');
    }

    if (userdata.email === '') {
      newErrors.push('Email empty');
    }

    if (userdata.password === '' || userdata.password.length < 8 || userdata.password.length > 30) {
      newErrors.push('Password too short (above 8 characters)');
    }

    if (userdata.address === '' || userdata.address.length > 100) {
      newErrors.push('Address empty');
    }

    if (userdata.zipcode === '' || userdata.zipcode.length !== 6) {
      newErrors.push('Invalid Zipcode');
    }

    // Set errors in the state
    setErrors(newErrors);

    // If there are errors, do not proceed with registration
  }

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
            {error_flag.length > 0 && (
              <div>
                {error_flag.map((error, index) => (
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