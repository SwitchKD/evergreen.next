import { useState } from 'react'
import './post.css'
import axios from 'axios';

export default function post() {

  var uid = null
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    uid = localStorage.getItem('uid')
    // console.log(uid);
  }

  const [postdata, setPostdata] = useState({
    user_id:uid,
    post:{
    plant_name:'',
    plant_description:'',
    plant_price:0,
    plant_climate:'',
    plant_light:'',
    plant_temp_minC:'',
    plant_temp_maxC:'',
    plant_water:'',
    plant_use:'',
    plant_image:'https://www.shutterstock.com/image-illustration/palm-plants-260nw-273656024.jpg',
    plant_quantity:1,
    }
  })

  function SendData(){
    axios.post('https://plantio.vercel.app/api/createPost', postdata)
    window.location.reload()
  }

  return (
    <div className='post_container'>
    <div><p className='post_title'>Create Post</p></div>
    <div className='post_input'>

      <div className='input_template'>
      <label>Plant name </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_name: e.target.value } }))}
        type="text"
      />
      </div>

      <div className='input_template'>
      <label>Description </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_description: e.target.value } }))}
        type="text"
      />
      </div>

      <div className='input_template'>
      <label>Price </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_price: e.target.value } }))}
        type="Number"
      />
      </div>

      <div className='input_template'>
      <label>Climate </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_climate: e.target.value } }))}
        type="text"
      />
      </div>

      <div className='input_template'>
      <label>Ideal light </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_light: e.target.value } }))}
        type="text"
      />
      </div>

      <div className='input_template'>
      <label>temp Min </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_temp_minC: e.target.value } }))}
        type="Number"
      />
      </div>

      <div className='input_template'>
      <label>temp Max </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_temp_maxC: e.target.value } }))}
        type="Number"
      />
      </div>

      <div className='input_template'>
      <label>Watering </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_water: e.target.value } }))}
        type="text"
      />
      </div>

      <div className='input_template'>
      <label>Plant use </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_use: e.target.value } }))}
        type="text"
      />
      </div>

      <div className='input_template'>
      <label>Plant Quantity </label>
      <input
        onChange={(e) => setPostdata((prevData) => ({ ...prevData, post: { ...prevData.post, plant_quantity: e.target.value } }))}
        type="text"
      />
      </div>

      <div className='button_cont'>
      <button onClick={SendData} className='post_button'>POST</button>
      </div>

    </div>
    </div>
  )
}
