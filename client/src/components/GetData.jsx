import React, { useEffect, useState } from 'react';
import './getData.css'
import axios from "axios";
import { Link } from 'react-router-dom';

const GetData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/blog-posts/read-blog')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  return (
    <div id='getData-main' className='container'>
      <h1 style={{padding: "20px 0"}}>Blog Posts</h1>
      <div id='wrapper'>
        {posts.map(item => (
          <div key={item._id} id='card'>
            <Link to={`/blogs/${item.titleName}`}>
            <img id='coverimg' src="/hero.jpg" alt="" />
              <h3>{item.titleName}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetData;
