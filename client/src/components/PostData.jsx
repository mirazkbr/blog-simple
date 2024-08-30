import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios

const PostData = () => {
    const [blogData, setBlogData] = useState({
        titleName: '',
        description: '',
    });

    const handleInput = (e) => {
        setBlogData({...blogData, [e.target.name]: e.target.value})
    };

    const submitPost = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:3001/api/v1/blog-posts/create-blog', blogData)
            .then(res => {
                console.log('Post created successfully:', res.data);
                setBlogData({
                    titleName: '',
                    description: '',
                });
            })
            .catch(err => {
                console.error('Error posting data:', err);
            });
    };

    return (
        <div>
            <div>
                    <input
                        type="text"
                        name="titleName"
                        value={blogData.titleName}
                        placeholder="Enter blog title"
                        onChange={handleInput}
                    />
                    <input
                        type="text"
                        name="description"
                        value={blogData.description}
                        placeholder="Enter blog description"
                        onChange={handleInput}
                    />
                    <button onClick={submitPost}>Post Blog</button>
            </div>
        </div>
    );
}

export default PostData;
