import React, { useEffect, useState } from "react";
import {useNavigation,useLoaderData } from 'react-router-dom';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import banner from "../assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg";
import { HiHeart } from "react-icons/hi";
import ChefsRecipe from "../components/ChefsRecipe";
import LoadingSpinner from '../components/LoadingSpinner';
import useTitle from "../useTitle";
const ChefDetail = () => {

    const data = useLoaderData()
    const { id } = useParams();
    
    useTitle("Chef's Recipes")
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])


  const navigate = useNavigation();
    if (navigate.state === 'loading'){
        return <LoadingSpinner/>
    }
  const {
    chefName,
    chefImageUrl,
    chefDetail,
    likes,
    numberOfRecipes,
    yearsOfExperience,
  } = data;

  return (
    
    <div>
      <div className="bg-amber-500">
        <Navbar />
      </div>
      <div className="">
        <div className="h-[300px]">
          <img className="w-full h-full object-cover" src={banner} alt="" />
        </div>
        {data && (
          <div className="px-6 mx-auto lg:px-8 md:px-24 md:max-w-full sm:max-w-xl lg:max-w-screen-xl">
            <div className="w-full flex justify-center items-center -translate-y-1/2">
              <div className="flex justify-center items-center rounded-full border-4 border-amber-500">
                {/* <LazyLoad height={50} once> */}
                <img
                  className="w-40 h-40 rounded-full border-4 border-white object-cover"
                  src={chefImageUrl}
                  alt="image"
                />
                {/* </LazyLoad> */}
              </div>
              
            </div>
            <div className="text-center -mt-20 space-y-4">
                <p className="text-3xl lg:text-4xl font-semibold">{chefName}</p>
                <p className="text-sm lg:text-base lg:w-2/3 mx-auto">{chefDetail}</p>
                <div className="font-semibold flex gap-6 lg:gap-16 justify-center items-center place-items-center">
                    <p>
                        <span className="text-amber-500">
                        {yearsOfExperience}+
                        </span> years of <br className="block md:hidden" /> Expertise
                    </p>
                    <p>
                        <span className="text-amber-500">
                        {numberOfRecipes}+
                        </span> Recipes
                    </p>
                    <p className="text-sm flex items-center gap-1"> <HiHeart className="text-amber-500 text-lg"/> {likes}
                    </p>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-center text-3xl font-semibold">{chefName}'s <span className="text-amber-500">Recipes</span>
                </h1>
                <ChefsRecipe id={id}></ChefsRecipe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChefDetail;
