import React from 'react';
import bannerBg from '../assets/banner.jpg'
import Navbar from './Navbar';
const Banner = () => {
    const banner = {
        "backgroundImage":`url(${bannerBg})`,
        "backgroundSize": "cover",
        "backgroundRepeat": "none",
        "backgroundPosition":"bottom",
        "height": '500px',
        "width":'full'
    }
    return (
        <div style={banner}>
            <Navbar/>
                <div className='text-white my-container mt-4 lg:mt- space-y-6'>
                    <div className='hidden lg:block text-3xl lg:text-6xl font-semibold tracking-tight'>
                        <h1>
                        Satisfy Your Cravings <br /> With Our Recipes
                        </h1>
                    </div>
                    <div className='lg:hidden text-3xl lg:text-6xl font-semibold tracking-tight'>
                        <h1>
                        Satisfy Your <br /> Cravings With
                        <br /> Our Recipes
                        </h1>
                    </div>
                    <h2 className='w-2/3 lg:w-2/5'>
                    From classic comfort foods to exotic international dishes, our collection is designed to inspire you to try new things in the kitchen.
                    </h2>

                    <button className='my-btn'>Explore more</button>
                </div>
            
            
        </div>
    );
};

export default Banner;