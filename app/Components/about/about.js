import React from 'react'
import './about.css'
import { PiPlantDuotone } from 'react-icons/pi';
import { BsBoxSeam } from 'react-icons/bs';


export default function About() {
  return (
    <>
    <div className='about_cont'>
        <div className='about_title_cont'>
            <h1 className='header'>About us</h1>
            <p className='about_desc_text'>Order now and appreciate the beauty of nature</p>
        </div>
        <div className='frame_cont'>
            <div className='frame1'>
                <PiPlantDuotone className='icons'/>
                <h3 className='about_head_text'>Large Assortment</h3>
                <p className='about_desc_text'>We offer many diffrent types of products with fewer variations in each category</p>
            </div>
            <div className='frame1'>
                <BsBoxSeam className='icons'/>
                <h3 className='about_head_text'>Fast & Free shipping</h3>
                <p className='about_desc_text'>4-days or less delivery time, free shipping and an expedited delivery option</p>
            </div>
            <div className='frame1'>
                <BsBoxSeam className='icons'/>
                <h3 className='about_head_text'>24/7 Support</h3>
                <p className='about_desc_text'>answer to any business related inquiry 24/7 and in real-time</p>
            </div>
        </div>
    </div>  
    </>
  )
}
