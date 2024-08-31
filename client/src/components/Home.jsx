import React, { useState, useEffect } from 'react';
import './home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [trendPosts, setTrendPosts] = useState([]);

  useEffect(() => {
    // Fetch the latest 4 blog posts
    axios.get('https://blog-simple-api.vercel.app/api/v1/blog-posts/read-blog')
      .then(res => {
        const blogs = res.data; // Assuming the API returns an array of blog posts
        setLatestBlogs(blogs.slice(0, 4)); // Get the latest 4 posts
      })
      .catch(err => console.error('Error fetching latest blogs:', err));

    // Fetch 4 random posts for the trend posts section
    axios.get('https://blog-simple-api.vercel.app/api/v1/blog-posts/read-blog')
      .then(res => {
        const blogs = res.data;
        const shuffled = blogs.sort(() => 0.5 - Math.random()); // Shuffle the array
        setTrendPosts(shuffled.slice(0, 4)); // Get 4 random posts
      })
      .catch(err => console.error('Error fetching trend posts:', err));
  }, []);

  // Function to truncate description to 50 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 50) {
      return words.slice(0, 50).join(' ') + '... more';
    }
    return description;
  };

  // Sample data for top contributors
  const contributors = [
    { id: 1, name: 'Alice Johnson', posts: 15 },
    { id: 2, name: 'Bob Smith', posts: 10 },
    { id: 3, name: 'Carol Lee', posts: 20 },
    { id: 4, name: 'David Brown', posts: 12 },
    { id: 5, name: 'Eve Davis', posts: 8 },
  ];

  return (
    <>
      <div id='home-main' className='container'>
        {/* hero section */}
        <section id='hero'>
          <div className='hero-wrapper'>
            <div className='hero-img'>
              <img src="/hero.jpg" alt="Hero Image" />
            </div>
            <div className='hero-content'>
              <h1>create your own space</h1>
            </div>
          </div>
        </section>
        {/* trend posts */}
        <section id='trend-posts'>
          <h2>trend posts</h2>
          <div className='card-grid'>
            {trendPosts.map(post => (
              <Link key={post._id} to={`/blogs/${post.titleName}`} className='card'>
                <h3>{post.titleName}</h3>
                <p>{truncateDescription(post.description)}</p>
              </Link>
            ))}
          </div>
        </section>
        {/* new blogs */}
        <section id='new-blogs'>
          <h2>new blogs</h2>
          <div className='card-grid'>
            {latestBlogs.map(post => (
              <Link key={post._id} to={`/blogs/${post.titleName}`} className='card'>
                <h3>{post.titleName}</h3>
                <p>{truncateDescription(post.description)}</p>
              </Link>
            ))}
          </div>
        </section>
        {/* top contributors */}
        <section id='top-contributors'>
          <h2>top contributors</h2>
          <div className='card-grid'>
            {contributors.map(contributor => (
              <div key={contributor.id} className='card'>
                <img src="/avater.jpg" alt={contributor.name} className='contributor-img' />
                <h3>{contributor.name}</h3>
                <p>Posts: {contributor.posts}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
