import React from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleCreateBlog = () => {
    navigate('/create-blog');
  };

  return (
    <div id='navbar-main'>
      <div id='navbar-wrapper' className='container'>
        <div>
          <div id='logo'><Link to='/'>TinyBlog</Link></div>
          <nav id='navlinks'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/blogs'>Blogs</Link>
              </li>
              <li>
                <Link to='/'>Contributors</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='buttons'>
          <button onClick={handleCreateBlog}>Create a Blog</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
