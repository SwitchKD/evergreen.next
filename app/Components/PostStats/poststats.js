import React from 'react'
import './poststats.css'

export default function Poststats(props) {
  return (
    <>
    <div className='stat_container'>
        <div className='post_info_plate'>
            <p className='post_stat_data'>Items Listed</p>
            <p className='post_stat_data'>{props.postCount}</p>
        </div>
    </div>
    </>
  )
}
