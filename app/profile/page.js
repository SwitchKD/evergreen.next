import React from 'react'
import {user} from './data'
import './profile.css'

export default function page() {
  return (
    <>
    <div className='data_container'>
        {user}
    </div>
    </>
  )
}
