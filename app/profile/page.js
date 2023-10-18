import React from 'react'
import './profile.css'
import Stats from '../component/stats';
import Admin from '../component/admindashboard'

export default function page() {

  return (
    <>
    <div className='data_container'>
      <div className='profile_data'>
        <div className='user_cont'>
          <img src="" className='profile_img'></img>
        </div>
        <div className='user_details'>
          <h1>NAME_HOLDER</h1>
          <p className='user_p'>EMAIL_HOLDER</p>
        </div>
      </div>

      <div className='tempdiv'>
      <Stats/>
      <Admin/>
      </div>
    </div>
    </>
  )
}
