'use client'
import React, { useState, useEffect } from 'react';
import './login.css';
import axios from 'axios';


export default function page() {
    const [data, setData] = useState([]);

    useEffect(() => {
    async function fetchdata() {
        const response = await axios.get('http://localhost:3000/api/userAuth');
        setData(response.data);
    }
    fetchdata();}, []);

    // console.log(data);
    

    function verifylogin() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
    
      let userFound = false;  // Initialize a flag to track if the user is found
    
      // Assuming data is an array of user objects with 'username' and 'password' properties
      for (let index = 0; index < data.length; index++) {
        if (username === data[index].email && password === data[index].password) {
          const uname = data[index].fname
          localStorage.setItem('username',uname)
          console.log("success")
          userFound = true;  // Set the flag to true if a matching user is found
          window.location.reload()
          break;  // Exit the loop when a match is found
        }
      }
    
      if (userFound) {
        console.log("User found")
      } else {
        console.log("User not found");
      }
    }

  return (
    <>
    <div className='data_container'>
      <div className='form_container'>
        <div className='container'>
        <label>Email</label>
        <input type="text" id="username" name="username" required></input>
        </div>
        <div className='container'>
        <label>Password</label>
        <input type="password" id="password" name="password" required></input>
        </div>
        <button onClick={verifylogin}>Login</button>
        <p>Do not share your password or username with anyone.</p>
    </div>
    </div>
    </>
  )
}
