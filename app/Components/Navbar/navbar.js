'use client'
import {useState} from 'react'
import './navbar.css'
import {FiShoppingCart} from 'react-icons/fi'
import {BiSolidUserCircle, BiCog} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'



export default function Navbar() {

  const [showopt, setShowopt] = useState(false)
  const [showuseropt, setShowUseropt] = useState(false)


  const toggleOptions = () => {
    setShowopt(!showopt);
  }

  const toggleUserOptions = () => {
    setShowUseropt(!showuseropt);
  }

  return (
    <>
    <div className='navbar'>
    <div className='sub_nav'>
      <div className='left_cont'>
      <div className='navleft'>
        <a href='/' className='logolink'>EVERGREEN</a>
      </div>
      </div>
      <div className='navright'>
        <a id='cog' href='' className='align-react-icon'><FiShoppingCart/></a>
        <button id='cog' href='' onClick={toggleUserOptions} className='align-react-icon'><BiSolidUserCircle/></button>
        <div className='gg'>
        <button onClick={toggleOptions} id='cog1' className='align-react-icon'><GiHamburgerMenu/></button>
        </div>
      </div>
    </div>
      <div className='option_user'>
        {showopt && (
          <>
          <div className='hidden'>
            <div className='sub_hidden'>
              <a className='link' href='/products'>Product</a>
              <a className='link' href='/blog'>Blog</a>
            </div>
          </div>
          </>
        )}
        {showuseropt && (
          <>
          <div className='hidden'>
            <div className='sub_hidden'>
              <a className='link' href='/signup'>Signup</a>
              <a className='link' href='/profile'>Profile</a>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
    </>
  )
}
