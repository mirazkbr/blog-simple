import React, { useEffect, useState } from 'react';
import './blogDetails.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { titleName } = useParams(); // Get titleName from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/blog-posts/read-blog')
      .then(res => {
        const foundBlog = res.data.find(blog => blog.titleName === titleName);
        setBlog(foundBlog);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, [titleName]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div id='blogDetails-main' className='container'>
        <div className='cover-img'>
            <img src="/hero.jpg" alt="" />
        </div>
      <div className="contexts">
      <h2 id='header'>{blog.titleName}</h2>
      <p id='para'>{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
