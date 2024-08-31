import React, { useState } from 'react';
import './postData.css';
import axios from 'axios'; 

const PostData = () => {
    const [blogData, setBlogData] = useState({
        titleName: '',
        description: '',
    });

    const handleInput = (e) => {
        setBlogData({...blogData, [e.target.name]: e.target.value});
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
            <div id='postdata-main_unique' className='container'>
                <label htmlFor="titleName_unique" className="label_unique">
                    Blog Title
                </label>
                <input
                    type="text"
                    id="titleName_unique"
                    name="titleName"
                    value={blogData.titleName}
                    placeholder="Enter blog title"
                    onChange={handleInput}
                    className="input_unique"
                />
                
                <label htmlFor="description_unique" className="label_unique">
                    Blog Description
                </label>
                <textarea
                    id="description_unique"
                    name="description"
                    value={blogData.description}
                    placeholder="Enter blog description"
                    onChange={handleInput}
                    className="textarea_unique"
                />
                
                <button onClick={submitPost} className="button_unique">Post Blog</button>
            </div>
        </div>
    );
}

export default PostData;
