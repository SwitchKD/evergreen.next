import React from 'react'
import './login.css'

export default function page() {
  return (
    <>
    <div className='form_container'>
          <div className='box_shadow'>
            <div className='input_right_container'>
              <div>
              <p className='input_label'>Email</p>
              <input
              type='text' className='input_fields'></input>
              </div>

              <div>
              <p className='input_label'>Password</p>
              <input
              type='password' className='input_fields'></input>
              </div>
              <div className='button_space'>
                <button className='submit_button'>Login</button>
              </div>
            </div>
          </div>
        </div>
        </>
  )
}
