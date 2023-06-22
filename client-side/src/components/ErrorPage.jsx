import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    console.log(error.message);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
                {/* <h1 className='text-6xl font-bold'>Error! <span>{status?status:""}</span></h1> */}
                <div className='w-2/3 mx-auto'>
                <img src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7891.jpg?w=740&t=st=1683159870~exp=1683160470~hmac=298c6b80ffb608e5bd20b24bb2f7fc41c5b8b0e0ad4f6f349fe0b853020b940f" alt="" />
                </div>
                <h1 className='text-xl my-4'>{error?.message}</h1>
                <Link className='my-btn text-white' to='/'>Back to homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;