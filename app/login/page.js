'use client'
import './login.css'
import axios from 'axios'

export default function page() {

//User Authentication
var email = null
var password = null

async function Auth(){

  const response = await axios.get(`http://localhost:3000/api/Auth?email=${email}&password=${password}`, {
        headers: {
          'Cache-Control': 'no-store',
        }
      });

  if (response.data) {
    localStorage.setItem('uid',response.data._id)
    localStorage.setItem('username',response.data.firstname)
    
    setTimeout(function() {
      window.location.href = '/';
    }, 500);
  }
}


  return (
    <>
    <div className="form_container">
        <h2>Login</h2>
        <div className="input_container">
            <label>email</label>
            <input
            onChange={(e) => email = e.target.value}
            className='signup_input' type="text" ></input>
        </div>

        <div className="input_container">
            <label>password</label>
            <input
            onChange={(e) => password = e.target.value}
            className='signup_input' type="password" ></input>
        </div>

        
        <div className="submit_container">
            <a onClick={Auth} className='signup_submit'>login</a>
        </div>
    </div>
    </>
  )
}
