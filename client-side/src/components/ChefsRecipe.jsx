import React, { useEffect, useState } from 'react';
import {useNavigation } from 'react-router-dom';
import RecipeCard from './cards/RecipeCard';
import LoadingSpinner from './LoadingSpinner';

const ChefsRecipe = ({id}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('https://chopsticks-server-side-tasnihabinteakram.vercel.app/recipes')
        .then(res => res.json())
        .then(data => {
            const chefsRecipe = data.filter(rec => rec.chef_id == id);
            setRecipes(chefsRecipe);
        })
    },[])
    const navigate = useNavigation();
    if (navigate.state === 'loading'){
        return <LoadingSpinner/>
    }
    return (
        <div className='space-y-10 mt-20'>
            {
                recipes.length > 0 && (
                    recipes.map(rec => <RecipeCard
                    key={rec.id}
                    recipe = {rec}
                    ></RecipeCard>)
                )
            }
        </div>
    );
};

export default ChefsRecipe;