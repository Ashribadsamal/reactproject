import React from 'react';
import './Recipe.css'

function Recipes({title,image,calorie,ingredient}) {
    return (
        <div className="recipeitem">
            <h2>{title}</h2>
            <ol>
                {ingredient.map(items=>(
                    <li>{items.text}</li>
                ))}
            </ol>
           
            <p className="calorieitem">Calorie-: {calorie}</p>
            <img className="imageitem" src= {image} alt ="recipeimage"/>
        </div>
    )
}

export default Recipes
