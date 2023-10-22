'use client'
import React from 'react'
import './stats.css'

export default function Stats(props) {
  return (
    <>
    <div className='cont'>
        <div className='orders'>
            <div className='center'>
            <p className='stat_prop'>Order Placed</p>
            <h1 className='stat'>{props.order}</h1>
            </div>
        </div>
        <div className='orders'>
            <div className='center'>
            <p className='stat_prop'>Sold</p>
            <h1 className='stat'>{props.sold}</h1>
            </div>
        </div>
    </div>
    </>
  )
}
