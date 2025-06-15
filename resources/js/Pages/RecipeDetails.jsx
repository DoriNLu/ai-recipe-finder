import React from 'react';
import { useFavorites } from '../hooks/useFavorites';

export default function RecipeDetails({ recipe }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.some((f) => f.id === recipe?.id);

  if (!recipe) {
    return (
      <div className="container py-5">
        <h2>Recipe not found</h2>
      </div>
    );
  }

  return (
    <div className="container-md py-5 px-3">
      <div className="row">
        {/* Imaginea: fixă pe desktop */}
        <div className="col-md-4 mb-4 mb-md-0">
          <div
            className="position-sticky top-0"
            style={{ zIndex: 1 }}
          >
            <img
              src="/imgoo.png"
              alt={recipe.title}
              className="img-fluid rounded"
              style={{ objectFit: 'cover', width: '100%' }}
            />

            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Titlu și timp */}
              <div>
                <h2 className="mb-1">{recipe.title}</h2>
                <p className="text-muted mb-0">{recipe.time} minutes</p>
              </div>

              {/* Inimioară simplă, fără chenar */}
              <button
                onClick={() => toggleFavorite(recipe)}
                title="Toggle Favorite"
                style={{
                  border: 'none',
                  background: 'transparent',
                  padding: 0,
                  cursor: 'pointer'
                }}
              >
                <i
                  className={`bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}`}
                  style={{
                    fontSize: '1.8rem',
                    color: isFav ? '#65558F' : '#000'
                  }}
                ></i>
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <h5 className="fw-bold mt-4">Ingredients:</h5>
          <ul className="mb-4">
            {recipe.ingredients?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h5 className="fw-bold">Instructions:</h5>
          <ol className="mb-0">
            {recipe.instructions?.map((step, i) => (
              <li key={i} className="mb-2">{step}</li>
            ))}
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ipsam facilis, eum impedit nobis illum provident accusantium ex consequatur deleniti
              obcaecati cumque enim incidunt odit dolorem perferendis fugit vitae repudiandae.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}