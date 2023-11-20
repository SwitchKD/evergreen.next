'use client'
import './signup.css'
import { useState } from "react"
import axios from 'axios'

export default function page() {

    const [showError, setshowError] = useState(false)

    const [userData, setuserData] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        address: '',
        verified: false,
        phone: null,
        role: 'User'
    })

    async function validate() {
        const pattern = /@(gmail\.com|outlook\.com|yahoo\.com)$/;
        const errors = [];

        if (!userData.email || userData.email.trim() === '') {
            errors.push("email");
        }

        if (!pattern.test(userData.email)) {
            errors.push("Invalid email pattern");
        }

        const response = await axios.get(`http://localhost:3000/api/validateEmail?email=${userData.email}`, {
            headers: {
                'Cache-Control': 'no-store',
            }
        });

        if (response.data) {
            errors.push("Email already exists");
        }

        if (!userData.password || userData.password.trim() === '' || userData.password.length < 8 || userData.password.length > 30) {
            errors.push("password");
        }

        if(userData.firstname.trim() === '' || userData.firstname.trim() === null || userData.firstname.length < 3 || userData.firstname.length > 30){
          errors.push("firstname");
      }

        if(userData.lastname.trim() === '' || userData.lastname.trim() === null || userData.lastname.length < 3 || userData.lastname.length > 30){
          errors.push("lastname");
      }

        if(userData.address.trim() === '' || userData.address.trim() === null || userData.address.length < 7 || userData.address.length > 100){
          errors.push("address");
      }

      if (userData.phone === null || String(userData.phone).length !== 10) {
          errors.push("phone");
      }

        // Add similar checks for other fields

        if (errors.length > 0) {
            setshowError(true);
            console.log(errors);
            return;
        }

        try {
            const postResponse = await axios.post('http://localhost:3000/api/postUser', userData);
            console.log("Post request successful:", postResponse.data);
            setTimeout(() => {
                window.location.href = '/login';
            }, 1000);
        } catch (error) {
            console.error("Error posting user:", error);
        }
    }

  return (
    <>
    <div className="form_container">
        <h2>Signup</h2>
        <div className="input_container">
            <label>email</label>
            <input
            onChange={(e) => setuserData({ ...userData, email: e.target.value })}
            className='signup_input' type="text" ></input>
        </div>

        <div className="input_container">
            <label>password</label>
            <input
            onChange={(e) => setuserData({ ...userData, password: e.target.value })}
            className='signup_input' type="password" ></input>
        </div>

        <div className="input_container">
            <label>first name</label>
            <input
            onChange={(e) => setuserData({ ...userData, firstname: e.target.value })}
            className='signup_input' type="text" ></input>
        </div>

        <div className="input_container">
            <label>last name</label>
            <input
            onChange={(e) => setuserData({ ...userData, lastname: e.target.value })}
            className='signup_input' type="text" ></input>
        </div>

        <div className="input_container">
            <label>address</label>
            <input
            onChange={(e) => setuserData({ ...userData, address: e.target.value })}className='signup_input' type="text" ></input>
        </div>

        <div className="input_container">
            <label>phone</label>
            <input
            onChange={(e) => setuserData({ ...userData, phone: e.target.value })}
            className='signup_input' type="number" ></input>
        </div>

        {showError && (
            <p className='error'>ERROR</p>
        )}

        <div className="submit_container">
            <a onClick={validate} className='signup_submit'>Signup</a>
        </div>
        <label>Already have an account?</label>
        <div className="submit_container">
            <a href='/login' className='signup_submit'>login</a>
        </div>
    </div>
    </>
  )
}
