import React from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import RecipeList from '../components/RecipeList';
import FavoritesList from '../components/FavoritesList';
import RecommendationsList from '../components/RecommendationsList';

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Filters />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default Home;
