// components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '12px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <small>Prep Time: {recipe.prepTime} mins</small>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
