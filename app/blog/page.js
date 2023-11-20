'use client'
import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react';
import './blog.css'
import Link from 'next/link';
import { FaHeart } from "react-icons/fa";

export default function page() {

  const [blogsData, setblogData] = useState('')
  const [userData, setuserData] = useState('')


  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/blogList', {
            headers: {
              'Cache-Control': 'no-store',
            },
          });
  
          setblogData(response.data); // Assuming the response contains a list of blog data
        } catch (error) {
          console.error('Error fetching blog list:', error);
        }
      };
  
      fetchData(); // Call the fetchData function when the component mounts
  
      // Optionally, you can clean up the effect (e.g., cancel the request) if the component unmounts
      return () => {
        // Your cleanup logic here, if needed
      };
    }, []);
  
    var blog_array = []
  
    function printBlogs(){
      for (let index = 0; index < blogsData.length; index++) {
          blog_array.push(
            <Link key={index} href={`/blog/${blogsData[index]._id}`}>
              <div className='blog_item' key={index}>
                <p className='blog_link1'>{blogsData[index].blog.blog_title}</p>
                <p className='blog_link1'>{blogsData[index].blogCreator_name}</p>
                <p className='blog_link'><FaHeart className='heart_icon' /> {blogsData[index].blog.blog_rating}</p>
              </div>
            </Link>
          )
      }
      return blog_array
    }

  return (
    <>
    <div className='blog_container'>
    <Suspense>
    {printBlogs()}
    </Suspense>
    </div>
    </>
  )
}
