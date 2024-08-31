import React from 'react';
import Navbar from './Navbar'; // Import Navbar
import { Outlet } from 'react-router-dom'; // To render child routes
import Footer from './Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render the child routes */}
      <Footer/>
    </div>
  );
};

export default RootLayout;
