import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // === STATE ===
  recipes: [],                 
  searchTerm: '',              
  ingredientFilter: '',        
  prepTimeFilter: null,        
  filteredRecipes: [],         
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  setSearchTerm: (term) =>
    set((state) => {
      const updatedTerm = term.toLowerCase();
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(updatedTerm)
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  setIngredientFilter: (ingredient) => set({ ingredientFilter: ingredient }),
  setPrepTimeFilter: (time) => set({ prepTimeFilter: time }),

  applyAdvancedFilters: () =>
    set((state) => {
      const search = state.searchTerm.toLowerCase();
      const ingredient = state.ingredientFilter.toLowerCase();
      const maxTime = state.prepTimeFilter;

      const filtered = state.recipes.filter((recipe) => {
        const matchesTitle = recipe.title.toLowerCase().includes(search);

        const matchesIngredient = ingredient
          ? recipe.ingredients?.some((ing) =>
              ing.toLowerCase().includes(ingredient)
            )
          : true;

        const matchesPrepTime =
          maxTime != null ? recipe.prepTime <= maxTime : true;

        return matchesTitle && matchesIngredient && matchesPrepTime;
      });

      return { filteredRecipes: filtered };
    }),
}));
