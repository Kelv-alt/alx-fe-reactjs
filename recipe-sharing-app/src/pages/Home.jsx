// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import RecipeList from '../components/RecipeList';
import sampleData from '../data/sampleRecipes.json';

const Home = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Load sample data once
    setRecipes(sampleData);
  }, [setRecipes]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🍲 Recipe Finder</h1>
      <SearchBar />
      <Filters />
      <RecipeList />
    </div>
  );
};

export default Home;
