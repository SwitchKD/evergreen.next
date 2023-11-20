'use client'
import './id.css'
import { useState, useEffect, Suspense } from "react";
import { usePathname } from 'next/navigation'
import axios from 'axios'

export default function page() {

  const pathname = usePathname()
  const id = pathname.replace('/blog/', '');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://plantio.vercel.app/api/blogID?id="+id, {
          headers: {
            'Cache-Control': 'max-age=3600',
          },
        });

        setBlog(response.data); // Assuming the response contains a list of blog data
      } catch (error) {
        console.error('Error fetching blog list:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts

    // Optionally, you can clean up the effect (e.g., cancel the request) if the component unmounts
    return () => {
      // Your cleanup logic here, if needed
    };
  }, [id]);

  const [Blog, setBlog] = useState({
    "blog": {
      "blog_title": "",
      "blog_content": "",
      "blog_rating": 0
    },
    "_id": "",
    "blogCreator_id": "",
    "__v": 0
  })

  const { blog, _id, blogCreator_id, __v } = Blog

  return (
    <>
    <Suspense>
    <div className='id_container'>
      <div className='content'>
        <h1>{blog.blog_title}</h1>
        <p>{blog.blog_content}.</p>
      </div>

      <div id='blob1' className='design'></div>
      <div id='blob2' className='design'></div>

    </div>
    </Suspense>
    </>
  )
}
