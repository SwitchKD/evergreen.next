'use client'
import {useState} from 'react'
import './login.css'
import axios from 'axios'

export default function page() {

  const [passwordFlag, setPasswordflag] = useState(false)
  const [logindata, setLogindata] = useState(
    {
      email:'',
      password:'',
    }
  )

  

  async function authenticate() {
    const response = await axios.get(`https://plantio.vercel.app/api/Auth?email=${logindata.email}&password=${logindata.password}`, {
        headers: {
          'Cache-Control': 'no-store',
        }
      });

      if (response.data) {
        localStorage.setItem('uid', response.data._id)
        setTimeout(function() {
          window.location.href = '/'
        }, 100);
      }
      else{
        setPasswordflag(true)
      }
  }

  return (
    <>
    <div className='form_container'>
          <div className='box_shadow'>
            <div className='input_right_container'>
              <div>
              <p className='input_label'>Email</p>
              <input
              onChange={(e) => setLogindata({ ...logindata, email: e.target.value })}
              type='text' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>Password</p>
              <input
              onChange={(e) => setLogindata({ ...logindata, password: e.target.value })}
              type='password' className='input_fields'></input>
              </div>
              <div className='button_space'>
                <button onClick={authenticate} className='submit_button'>Login</button>
              </div>
              <div>
                {passwordFlag &&
                (
                  <>
                  <p className='error'>Password or email is invalid</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        </>
  )
}
