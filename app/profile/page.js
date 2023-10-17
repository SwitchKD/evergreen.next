import React from 'react'
import {user, email, age, address, pincode, lname, img} from './data'
import './profile.css'
import Stats from '../component/stats';
import Admin from '../component/admindashboard'

export default function page() {

  return (
    <>
    <div className='data_container'>
      <div className='profile_data'>
        <div className='user_cont'>
          <img src={img} className='profile_img'></img>
        </div>
        <div className='user_details'>
          <h1>{user} {lname}</h1>
          <p className='user_p'>{email}</p>
          <p className='user_p'>{age}</p>
          <p className='user_p'>{address}</p>
          <p className='user_p'>{pincode}</p>
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
