// src/pages/RecipeDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) {
    return (
      <div style={{ padding: '20px' }}>
        <p>Recipe not found.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime} minutes</p>
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default RecipeDetail;
