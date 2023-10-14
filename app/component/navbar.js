'use client'
import './navbar.css'

export default function Navbar() {

  return (
    <div className='navbar'>
        <div className='navleft'>
            <a href='/' className='main_link'>Evergreen</a>
        </div>
        <div className='navright'>
            <a href='/about' className='link'>About</a>
            <a href='/browse' className='link'>Browse</a>
            <a href='/signup' className='sign_link'>Signup</a>
        </div>
    </div>
  )
}
