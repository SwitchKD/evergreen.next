'use client'
import './profile_info.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import AdminStats from '../AdminStats/adminstats'

export default function profile_info(props) {

const role = props.role
const verified = props.verified

const [showAdminStats, setAdminStats] = useState(false)
const [userList, setuserList] = useState(null);
const [blogList, setblogList] = useState(null);

var userListLength = userList ? userList.length : 0
var blogListLength = blogList ? blogList.length : 0

useEffect(() => {
    if (role === 'Admin') {
      setAdminStats(true);

    const fetchUserList = async () => {
        // Use axios to make a GET request
        const response_user = await axios.get('http://localhost:3000/api/userList');

        // Update the state with the fetched user list
        setuserList(response_user.data);
    };

      // Call the fetchUserList function when the component mounts
      fetchUserList();
    }
  }, [role]);

  useEffect(() => {
      const fetchBlogList = async () => {
        // Use axios to make a GET request
        const response_blog = await axios.get('http://localhost:3000/api/blogList');

        // Update the state with the fetched user list
        setblogList(response_blog.data);
    };
      fetchBlogList();
    }), [];

  return (
    <>
    <div className='profile_container'>
        <div className='info_container'>
            <h3>Personal Details</h3>
            <p>{props.firstname} {props.lastname}</p>
            <p>{props.email}</p>
        </div>

        <div className='info_container'>
            <h3>Shipping Details</h3>
            <p>{props.address}</p>
        </div>
    </div>

    {showAdminStats &&(
        <>
        <AdminStats user = {userList} admin_name = {props.firstname} total_users = {userListLength} total_blogs = {blogListLength}/>
        </>
    )}
    </>
  )
}
