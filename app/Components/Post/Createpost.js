import React from 'react'
import './post.css'

export default function post() {
  return (
    <div className='post_container'>
    <div><p className='post_title'>Create Post</p></div>
    <div className='post_input'>

      <div className='input_template'>
      <label>Plant name </label>
      <input type='text'></input>
      </div>

      <div className='input_template'>
      <label>Description </label>
      <input id='desc' type='text'></input>
      </div>

      <div className='input_template'>
      <label>Price </label>
      <input type='Number'></input>
      </div>

      <div className='input_template'>
      <label>Climate </label>
      <input type='text'></input>
      </div>

      <div className='input_template'>
      <label>Ideal light </label>
      <input type='text'></input>
      </div>

      <div className='input_template'>
      <label>Watering </label>
      <input type='text'></input>
      </div>

      <div className='input_template'>
      <label>Plant use </label>
      <input type='text'></input>
      </div>

      <div className='input_template'>
      <label>Plant Image</label>
      <input type="file" placeholder='Post_price' accept="image/*"></input>
      </div>

      <div className='button_cont'>
      <button className='post_button'>POST</button>
      </div>

    </div>
    </div>
  )
}
