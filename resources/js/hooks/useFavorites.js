import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'recipe_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

 
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    setFavorites((prev) => {
      const exists = prev.some(r => r.id === recipe.id);
      return exists
        ? prev.filter(r => r.id !== recipe.id)
        : [...prev, recipe];
    });
  };

  return { favorites, toggleFavorite };
}
