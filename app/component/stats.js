'use client'
import React from 'react'
import './stats.css'

const sold = localStorage.getItem('sold')
const order = localStorage.getItem('order')


export default function Stats() {
  return (
    <>
    <div className='cont'>
        <div className='orders'>
            <div className='center'>
            <p className='stat_prop'>Order Placed</p>
            <h1 className='stat'>{order}</h1>
            </div>
        </div>
        <div className='orders'>
            <div className='center'>
            <p className='stat_prop'>Sold</p>
            <h1 className='stat'>{sold}</h1>
            </div>
        </div>
    </div>
    </>
  )
}
