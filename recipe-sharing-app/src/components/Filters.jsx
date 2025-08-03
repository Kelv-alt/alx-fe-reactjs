// components/Filters.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const Filters = () => {
  const setIngredientFilter = useRecipeStore((s) => s.setIngredientFilter);
  const setPrepTimeFilter = useRecipeStore((s) => s.setPrepTimeFilter);
  const applyAdvancedFilters = useRecipeStore((s) => s.applyAdvancedFilters);

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
      <input
        type="text"
        placeholder="Filter by ingredient..."
        onChange={(e) => {
          setIngredientFilter(e.target.value);
          applyAdvancedFilters();
        }}
      />
      <input
        type="number"
        placeholder="Max prep time (min)"
        onChange={(e) => {
          setPrepTimeFilter(Number(e.target.value));
          applyAdvancedFilters();
        }}
      />
    </div>
  );
};

export default Filters;
