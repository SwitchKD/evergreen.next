'use client'
import './postblog.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
  const [Uid, setUid] = useState(null);

  var postData = {
    blogCreator_id: Uid,
    blog: {
      blog_title: '',
      blog_content: '',
      blog_rating: 0,
    },
  };

  useEffect(() => {
    // Perform localStorage action
    setUid(localStorage.getItem('uid'))
  }, [])

  async function postblog() {
    // Form validation
    if (!postData.blog.blog_title.trim() || !postData.blog.blog_content.trim()) {
      alert('Blog title and content are required.');
      return;
    }

    // Set blogCreator_id to Uid from localStorage
    postData.blogCreator_id = localStorage.getItem('uid');

    axios.post('https://plantio.vercel.app/api/postBlog', postData)
      .then(response => {
        console.log("Post request successful:", response.data);
      })
      .catch(error => {
        console.error("Error posting blog:", error);
      })
      .finally(() => {
        setTimeout(function () {
          window.location.href = '/postblog';
        }, 200);
      });
  }

  return (
    <>
      <div className="form_container">
        <h2>Post your Blog</h2>
        <div className="input_container">
          <label>Blog Title</label>
          <input
            onChange={(e) => postData.blog.blog_title = e.target.value}
            className='signup_input' type="text" />
        </div>

        <div className="input_container">
          <label>Blog Content</label>
          <input
            onChange={(e) => postData.blog.blog_content = e.target.value}
            className='signup_input' type="text" />
        </div>

        <div className="submit_container">
          <a onClick={postblog} className='signup_submit'>POST</a>
        </div>
      </div>
    </>
  );
}




