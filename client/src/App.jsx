import React, { useEffect, useState } from 'react';
import axios from "axios";
import PostData from './components/PostData';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/blog-posts/read-blog')
    .then(res =>{
      setPosts(res.data);
      console.log(res.data);
      
    })
    .catch(err =>{
      console.error(err.message)
      
    })
  }, [posts])
  
  return (
    <>
      <div>
        <div>
          <PostData/>
        </div>
        <div>
        <h1>blog posts ({posts.length})</h1> 
        <div id='wrapper'>
            {
              posts.map(items =>(
                <div key={items._id} id='card'>
                    <h3>{items.titleName}</h3>
                    <p>{items.description}</p>
                </div>
              ))
            }
        </div>
        </div>
      </div>
    </>
  )
}

export default App