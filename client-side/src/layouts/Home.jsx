import React from 'react';
import Banner from '../components/Banner';
import Chefs from '../components/Chefs';
import {useNavigation,useLoaderData} from 'react-router-dom';

import LoadingSpinner from '../components/LoadingSpinner';
import Categories from '../components/Categories';
import LatestRecipes from '../components/LatestRecipes';
import useTitle from '../useTitle';


const Home = () => {
    const data = useLoaderData();
    const navigate = useNavigation();
    useTitle('Home')
    if (navigate.state === 'loading'){
        return <LoadingSpinner/>
    }
    return (
        <>
           <Banner/> 
           <Categories/>
           <LatestRecipes/>
           <Chefs data={data}/>       
        </>
    );
};

export default Home;