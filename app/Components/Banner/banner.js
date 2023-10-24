import React from 'react'
import './banner.css'
import Image from 'next/image';

export default function Banner() {
  return (
    <>
    <div className='banner'>
        <div className='banner_left'>
        <p className='hero_text'>Buy your dream plants</p>
        <div className='sub'>
            <div className='sub_left'>
            <p className='text_title'>100+</p>
            <p className='text'>Plant species</p>
            </div>

            <div className='devide'></div>
            
            <div className='sub_right'>
            <p className='text_title'>50+</p>
            <p className='text'>Customers</p>
            </div>
        </div>
        </div>
        <div className='banner_right'>
          <div>
          <Image className='hero_img' src="/plant.png" alt='' width={400} height={400} priority={true} quality={50}/>
          </div>
        </div>
    </div>
    </>
  )
}
