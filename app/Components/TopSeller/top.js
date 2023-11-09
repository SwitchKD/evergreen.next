'use client'
import './top.css'
import { topseller } from './topdata'

export default function Top() {

  function product()
  {
    window.location.href='/products'
  }

  return (
    <>
    <div className='top_container'>
      <div className='top_left'>
        <p className='top_head'>Best selling Plants</p>
        <p className='top_desc'>Easiest way to healthy life by buying your favorite plant</p>
        
        <div className='button_cont'>
          <button onClick={product} className='seemore'>Browse</button>
        </div>
      </div>
    </div>
    </>
  )
}
