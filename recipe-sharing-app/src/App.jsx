// App.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './store/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import Filters from './components/Filters';
import sampleData from './data/sampleRecipes.json';

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Simulate fetching recipe data
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

export default App;
