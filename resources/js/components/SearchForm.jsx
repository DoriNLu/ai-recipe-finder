import './SearchForm.css';
import React from 'react';

export default function SearchForm({ searchInput, setSearchInput, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchInput.trim()) {
          onSubmit(searchInput.trim());
        }
      }}
      className="position-relative w-100"
      style={{ maxWidth: '300px' }}
    >
      <input
        type="text"
        className="search-input"
        placeholder="What do you feel like eating?"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {!searchInput && (
        <i className="bi bi-search search-action-icon" />
      )}

      {searchInput && (
        <button
          type="button"
          className="search-action-icon clear-button"
          onClick={() => setSearchInput('')}
          aria-label="Clear search"
        >
          &times;
        </button>
      )}
    </form>
  );
}
