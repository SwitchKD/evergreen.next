'use client'
import axios from 'axios'
import {useState} from 'react'
import Info from '../Components/Info/info'

export default function page() {

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    var id = localStorage.getItem('uid')
  }
const [Userdata, setUser] = useState('')
const [Serverdata, setServer] = useState('')

async function authenticate() {
    const response = await axios.get(`https://plantio.vercel.app/api/currentUser?uid=${id}`, {
        headers: {
          'Cache-Control': 'no-store',
        }
      });
      setUser(response.data)
      }

authenticate()
  return (
    <>
    <div className='profile_cont'>
      <Info fname={Userdata.firstname} lname={Userdata.lastname} email={Userdata.email} rating={Userdata.rating} phone={Userdata.phone} img_url={Userdata.img_url}/>
    </div>
    </>
  )
}
