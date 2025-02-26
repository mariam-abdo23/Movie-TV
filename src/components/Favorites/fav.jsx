import React, { useEffect, useState } from "react";

export default function Fav() {
  const [favorites, setFavorites] = useState([]);

  // تحميل الأفلام المحفوظة من localStorage عند فتح الصفحة
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // حذف فيلم من المفضلة
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "brown" }}>Favorite ❤</h2>

      {favorites.length === 0 ? (
        <h4 className="text-center text-secondary">There are no movies added to favorites</h4>
      ) : (
        <div className="row">
          {favorites.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-4">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{movie.title}</h5>
                  <button 
                    className="btn btn-danger mt-2"
                    onClick={() => removeFromFavorites(movie.id)}
                  >
                    Delete from favorites ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}