'use client'
import './admin.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Admin() {

    const [role, setRole] = useState('User');
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        // Retrieve the role from local storage
        const roles = localStorage.getItem('role');

        // Set the role in state and show/hide the div based on the role
        setRole(roles);
        setShowDiv(roles === 'Admin');
    }, []);


  return (
    <>
    <div>
      {showDiv && (
        <div className='admin_cont'>
            <h1 className='dash_title'>Admin Dashboard</h1>
            <div className='temp'>
                <div className='admin_stats'>
                    <p>Users</p>
                    <h1 className='dash_title'>{}</h1>
                </div>
                <div className='admin_stats'>
                    <p>products</p>
                    <h1 className='dash_title'>{}</h1>
                </div>
            </div>
        </div>
      )}
    </div>
    </>
  )
}
