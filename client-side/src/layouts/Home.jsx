import React from 'react';
import Banner from '../components/Home/Banner';
import Chefs from '../components/Home/Chefs';
import {useNavigation,useLoaderData} from 'react-router-dom';

import LoadingSpinner from '../components/LoadingSpinner';
import Categories from '../components/Home/Categories';
import LatestRecipes from '../components/Home/LatestRecipes';
import useTitle from '../useTitle';
import Videos from '../components/Home/Videos';
import Sponsors from '../components/Home/Sponsors';


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
           <Videos/>
           <Chefs data={data}/>    
           <Sponsors/>   
        </>
    );
};

export default Home;