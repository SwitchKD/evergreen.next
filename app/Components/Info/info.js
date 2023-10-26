'use client'
import {useState} from 'react'
import './info.css'
import axios from 'axios'

export default function Info() {
    var id = localStorage.getItem('uid')
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

  return (
    <>
    <div className='info_cont'>
        <div className='cont'>
            <img className='user_img' src={data.img_url} alt=''></img>
            <div className='in_cont'>
            <p className='user_name'>{data.firstname} {data.lastname}</p>
            <p className='user_name'>{data.email}</p>
            </div>
        </div>
    </div>
    </>
  )
}
