'use client'
import {useState} from 'react'
import './info.css'
import axios from 'axios'
import { VscStarFull } from 'react-icons/vsc';

export default function Info() {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        var id = localStorage.getItem('uid')
      }
    const [data, setData] = useState('')

    async function authenticate() {
        const response = await axios.get(`https://plantio.vercel.app/api/currentUser?uid=${id}`, {
            headers: {
              'Cache-Control': 'no-store',
            }
          });
          setData(response.data)
          }

    authenticate()

    const rats = []

    function rating(score)
    {
      for (let index = 0; index < score; index++) {
        rats.push(
          <VscStarFull key={index} className='temp_p'/>
        )
      }
      return rats
    }
  return (
    <>
    <div className='info_cont'>
        <div className='cont'>
            <div className='img_cont'> 
            <img className='user_img' src={data.img_url} alt=''></img>
            </div>
            <div className='in_cont'>
            <p className='user_name'>{data.firstname} {data.lastname}</p>
            <p className='user_name'>{data.email}</p>
            <p className='user_name'>{data.phone}</p>
            <div className='user_rating'>{rating(data.rating)}</div>
            </div>
        </div>
    </div>
    </>
  )
}
