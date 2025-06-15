import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import RecipeList from '../components/RecipeList';
import { useRecipeSearch } from '../hooks/useRecipeSearch';
import { useFavorites } from '../hooks/useFavorites';

export default function Home() {
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [blacklist, setBlacklist] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0); // forțăm re-fetch
  const { favorites, toggleFavorite } = useFavorites();

  const {
    data: recipes,
    isLoading,
    error,
  } = useRecipeSearch(search, blacklist, refreshKey);

  const defaultRecipes = [
    { id: 1, title: 'Mashed potatoes', time: 20 },
    { id: 2, title: 'Mashed bun', time: 20 },
    { id: 3, title: 'Mashed mai bun', time: 20 },
    { id: 4, title: 'Mashed perfect', time: 20 },
  ];

  const handleSearchSubmit = (text) => {
    setSearch(text);
    setBlacklist([]);
    setRefreshKey((prev) => prev + 1);
  };

  const handleDislike = () => {
    if (recipes?.length > 0) {
      setBlacklist((prev) => [...prev, recipes[0].title]);
      setRefreshKey((prev) => prev + 1);
    }
  };

  return (
    <div className="d-flex justify-content-center w-100">
      <div
        className="container py-5 d-flex flex-column align-items-center"
        style={{ minHeight: '100vh', maxWidth: '500px' }}
      >
        <div className="mb-4 w-100" style={{ maxWidth: '370px' }}>
          <SearchForm
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onSubmit={handleSearchSubmit}
          />
        </div>

        {recipes?.length > 0 && (
          <h2 className="fw-bold text-center mb-4">Suggested recipes</h2>
        )}

        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching recipes</p>}

        {recipes?.length > 0 && (
          <>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
            <button
              className="btn mt-3 px-4 py-2 fw-bold text-white"
              onClick={handleDislike}
              style={{
                backgroundColor: '#65558F',
                borderRadius: '12px',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#65558F';
                e.currentTarget.style.color = '#fff';
              }}
            >
              I don’t like these
            </button>
          </>
        )}

        <h2 className="fw-bold text-center mt-5 mb-4">Favorites</h2>
        <RecipeList
          recipes={favorites}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}