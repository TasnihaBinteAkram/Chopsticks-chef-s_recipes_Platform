import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Home from './Home';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <>
           <Outlet/>
           <Footer/>
           <ToastContainer />
            {/* <h1>footer</h1> */}
        </>
    );
};

export default Main;