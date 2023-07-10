import React, { useEffect, useState } from 'react';
import ChefCard from "../cards/ChefCard"


const Chefs = ({data}) => {
    return (
        <div className='my-container'>
            <div className='text-center mt-16'>
                <h1 className='section-title'>Our Honourable Chefs</h1>
                <p>Bringing your food imaginations to lives </p>
            </div>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 mt-16'>
            {
                data && (
                    data.map(chef => <ChefCard
                    key={chef.id}
                    chef = {chef}
                    ></ChefCard>)
                )
            }
        </div>
        </div>
    );
};

export default Chefs;