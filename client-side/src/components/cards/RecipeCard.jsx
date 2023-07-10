import React, { useState } from "react";
import {useNavigation } from 'react-router-dom';
import { HiHeart } from "react-icons/hi";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../LoadingSpinner';

const RecipeCard = ({ recipe }) => {
  const { id, recipeName, recipeImg, rating, ingredients, cooking_method } =
    recipe;
  const [fav, setFav] = useState(false)
  const navigate = useNavigation();
  if (navigate.state === 'loading'){
      return <LoadingSpinner/>
  }
  if(fav){
    
    toast("Recipe added to your favourites!",{
        toastId: "ab"
    })
    }
  
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="h-1/3 w-full lg:w-1/3">
        <img className="h-full w-full object-cover" src={recipeImg} alt={recipeName} />
      </figure>
      <div className="relative card w-4/5 ml-6 my-4 flex flex-col gap-4 lg:gap-6">
        <h2 className="card-title">{recipeName}</h2>

        <p className="text-xs hidden lg:block lg:text-sm">
          {cooking_method.length > 300
            ? cooking_method.slice(0, 300)
            : cooking_method}
          ...<span className="text-amber-500">see more</span>
        </p>

        <p className="text-xs lg:text-sm block lg:hidden">
          {cooking_method.length > 200
            ? cooking_method.slice(0, 200)
            : cooking_method}
          ...<span className="text-amber-500">see more</span>
        </p>

        <div className="lg:flex items-center">
          <div className="flex-grow">
            <p className="text-base font-medium">Ingredients</p>
            {ingredients.map((ing, i) => (
              <li className="text-xs lg:text-sm" key={i}>
                {ing}
              </li>
            ))}
          </div>

          <div className="flex items-center mr-6 mt-4 lg:mt-0">
            <Rating  style={{ maxWidth: 100 }} value={rating} readOnly /> 
            <span className="font-medium ml-1">{rating}</span>
          </div>
        </div>

        <div className="card-actions w-full">
            <button disabled={fav ? true : false} onClick={()=>setFav(!fav)} className={`my-btn text-white w-full ${fav? "bg-gray-700":""}`}>
              Add to your Favourites
              <span>
                <HiHeart className="text-white text-lg inline-flex ml-1 mb-1" />
              </span>
            </button>
            
        </div>
      </div>
      
    </div>
  );
};

export default RecipeCard;
