import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import GetData from './components/GetData';
import BlogDetails from './components/BlogDetails';
import PostData from './components/PostData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />  {/* Render Home only at the root path */}
          <Route path="blogs" element={<GetData />} /> {/* Render GetData at /blogs */}
          <Route path="blogs/:titleName" element={<BlogDetails />} /> 
          <Route path="/create-blog" element={<PostData />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
