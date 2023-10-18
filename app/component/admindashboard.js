'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './admin.css';

export default function Admin() {
    const [role, setRole] = useState('User');
    const [showDiv, setShowDiv] = useState(false);
    const [data, setData] = useState({});
    const [user, setUser] = useState([]);
    const [useridCount, setUseridCount] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const [Admins, setAdmins] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Retrieve the role from local storage
        const roles = localStorage.getItem('role');

        // Set the role in state and show/hide the div based on the role
        setRole(roles);
        setShowDiv(roles === 'Admin');
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const [serverResponse, userResponse] = await Promise.all([
                    axios.get('http://localhost:3000/api/server'),
                    axios.get('http://localhost:3000/api/userAuth'),
                ]);

                setData(serverResponse.data);
                setUseridCount(serverResponse.data[0].userid_count);
                setProductCount(serverResponse.data[0].product_count);
                setUser(userResponse.data);

                // Count the number of admins and update the Admins state
                const adminCount = userResponse.data.filter((user) => user.role === 'Admin').length;
                setAdmins(adminCount);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    function renderUsers() {
        return user.map((userData, index) => (
            <div className='temp3' key={index}>
                <div className='user_list'>
                    <p className='User_child'>{userData.fname} {userData.lname}</p>
                    <p className='ss' style={{ color: userData.role === 'Admin' ? 'green' : 'orange' }}>
                        {userData.role}
                    </p>
                </div>
            </div>
        ));
    }

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : showDiv ? (
                <div className='admin_cont'>
                    <h1 className='dash_title'>Admin Dashboard</h1>
                    <div className='temp'>
                        <div className='admin_stats'>
                            <p className='header'>Users</p>
                            <h1 className='dash_title'>{useridCount}</h1>
                        </div>
                        <div className='admin_stats'>
                            <p className='header'>Products</p>
                            <h1 className='dash_title'>{productCount}</h1>
                        </div>
                        <div className='admin_stats'>
                            <p className='header'>Admins</p>
                            <h1 className='dash_title'>{Admins}</h1>
                        </div>
                    </div>

                    <h1 className='dash_title'>Users</h1>
                    <div className='temp2'>{renderUsers()}</div>
                </div>
            ) : (
                <p>You do not have permission to access this dashboard.</p>
            )}
        </div>
    );
}
