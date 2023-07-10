import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/shared/Footer';

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