import React from 'react'
import './top.css'
import {BsArrowRight} from 'react-icons/bs'
import { topseller } from './topdata'

export default function Top() {

  const top3 = []

  function top()
  {
    for (let index = 0; index < topseller.length; index++) {
      top3.push(
        <div className='frame'>
          <img className='top_img' src={topseller[index].img}></img>
          <div className='top_info'>
          <p className='top_name'>{topseller[index].name}</p>
          <p className='top_price'>${topseller[index].price}</p>
          </div>
        </div>
      )
    }
    return top3
  }

  return (
    <>
    <div className='top_container'>
      <div className='top_left'>
        <p className='top_head'>Best selling Plants</p>
        <p className='top_desc'>Easiest way to healthy life by buying your favorite plant</p>
        
        <div className='button_cont'>
          <a className='seemore'>See more <BsArrowRight/></a>
        </div>
      </div>
      <div className='top_right'>
          {top()}
      </div>
    </div>
    </>
  )
}
