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


    const [data, setData] = useState({});
    const [useridCount, setUseridCount] = useState(0);
    const [productCount, setProductCount] = useState(0);
  
    useEffect(() => {
      async function fetchData() {
          const response = await axios.get('http://localhost:3000/api/server');
          setData(response.data);
  
            setUseridCount(response.data[0].userid_count);

            setProductCount(response.data[0].product_count);
      }
  
      fetchData();
    }, []);

  return (
    <>
    <div>
      {showDiv && (
        <div className='admin_cont'>
            <h1 className='dash_title'>Admin Dashboard</h1>
            <div className='temp'>
                <div className='admin_stats'>
                    <p className='header'>Users</p>
                    <h1 className='dash_title'>{useridCount}</h1>
                </div>
                <div className='admin_stats'>
                    <p className='header'>products</p>
                    <h1 className='dash_title'>{productCount}</h1>
                </div>
            </div>
        </div>
      )}
    </div>
    </>
  )
}
