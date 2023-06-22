import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <div className='w-12 h-12 rounded-full border-8 border-gray-500 border-dashed animate-spin'></div>
        </div>
    );
};

export default LoadingSpinner;