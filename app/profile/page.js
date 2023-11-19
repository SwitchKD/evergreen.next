'use client'
import './profile.css'
import axios from 'axios'
import Profile from '../Components/Profile/profile_info'
import Quickaccess from '../Components/QuickAccess/quickaccess'
import { useState, useEffect } from 'react'

export default function Page() {
  const [Uid, setUid] = useState(null);
  const [userData, setUserData] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('uid')) {
      window.location.href = '/signup'
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // Perform localStorage action
      const storedUid = localStorage.getItem('uid');

      // Check if Uid is not null before making the request
      if (storedUid) {
        setUid(storedUid);

        try {
          const response = await axios.get(`http://localhost:3000/api/currentUser?uid=${storedUid}`, {
            headers: {
              'Cache-Control': 'no-store',
            }
          });
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching current user:', error);
        }
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs once when the component mounts

  return (
    <>
    <Profile firstname={userData.firstname} email={userData.email} lastname={userData.lastname} address={userData.address} role={userData.role} verified={userData.verified} phone={userData.phone} />
    <Quickaccess/>
    </>
  );
}