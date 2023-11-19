'use client'
import './navbar.css'
import Image from 'next/image'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [currentUser, setcurrentUser] = useState ('')

    const [showPagesBar, setShowpagesbar] = useState(true)

    function toggleBar(){
        setShowpagesbar(!showPagesBar)
    }

    useEffect(() => {
        // Perform localStorage action
        setcurrentUser(localStorage.getItem('username'))
      }, [])

    function logout(){
        localStorage.setItem('uid','')
        localStorage.clear('username')

        setTimeout(function() {
            // Redirect to "/login" after 500 milliseconds
            window.location.href = '/';
          }, 500);
    }

  return (
    <>
    <div className='navbar'>
        <div className='navbar_top'>
            <div className='navbar_left'>
                <a href='/'>
                <Image
                className='logo'
                    src="/evergreen.svg"
                    height={60}
                    width={0}
                    quality={100}
                    priority={true}
                    alt="Picture of the author"
                />
                </a>
            </div>

            <div className='navbar_right'>
                <div className="dropdown">
                    <p className="dropbtn"><LuUser className='navbar_icon' /></p>
                        <div className="dropdown-content">
                            <a className='page_link' href="/profile">Profile</a>
                            <a className='page_link' href="/signup">Signup</a>
                            <a className='page_link' onClick={logout}>Logout</a>
                        </div>
                </div>
                <p>{currentUser}</p>
                <a href='/'>
                <HiOutlineShoppingBag className='navbar_icon' />
                </a>
                <a onClick={toggleBar}>
                <IoMenu className='navbar_icon' id='navbar_menu' />
                </a>
            </div>
        </div>
        <div className='navbar_bottom'>
            {
                showPagesBar && (
                    <>
                    <div className='page_bar'>
                        <a href='/' className='page_link'>HOME</a>
                        <a href='/shop' className='page_link'>SHOP</a>
                        <a href='/blog' className='page_link'>BLOG</a>
                        <a href='/about' className='page_link'>ABOUT</a>
                        <a href='/contact' className='page_link'>CONTACT</a>
                    </div>
                    </>
                )
            }
        </div>
    </div>
    </>
  )
}
