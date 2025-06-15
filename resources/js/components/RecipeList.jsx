import './RecipeList.css';
import { Link } from '@inertiajs/react';
import React from 'react';

export default function RecipeList({ recipes, favorites, onToggleFavorite }) {
  return (
    <div className="d-flex flex-column align-items-center gap-3 w-100">
      {recipes.map((r, i) => {
        const isFav = favorites.some(f => f.id === r.id);

        return (
          <div key={i} style={{ width: '100%', maxWidth: '384px' }}>
            <Link
              href={`/recipe/${r.id}`}
              data={{ recipe: r }} 
              method="get"
              preserveState
              className="text-decoration-none text-dark d-block"
            >
              <div className="recipe-card d-flex align-items-center">
                {/* Imagine */}
                <div className="image-box">
                  <img
                    src="/imgoo.png"
                    alt={r.title}
                    className="img-fluid rounded"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

            
                <div className="recipe-content d-flex justify-content-between align-items-start px-3 flex-grow-1 w-100">
                  <div className="d-flex flex-column">
                    <div className="fw-bold">{r.title}</div>
                    <div className="text-muted small">{r.time} min</div>
                  </div>

                  <div
                    className="favorite-icon"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.preventDefault(); 
                      onToggleFavorite(r);
                    }}
                  >
                    <i
                      className={`bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}`}
                      style={{
                        fontSize: '20px',
                        color: isFav ? '#65558F' : '#000',
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
