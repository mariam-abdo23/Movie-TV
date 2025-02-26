import { useParams } from "react-router";
import { useEffect, useState } from "react";
import AxiosInstance from "../../api/AxiosInstance";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    AxiosInstance.get(`movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  useEffect(() => {
    const storeFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storeFavorites);
  }, []);

  // إضافة الفيلم للمفضلة
  const addToFavorites = () => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      alert("The movie has been added to your favorites!");
    } else {
      alert("The movie is already in your favorites!");
    }
  };

  if (!movie) return <h2 className="text-center text-danger mt-5">Loading...</h2>;

  return (
    <div className="container mb-5 mt-5">
      <div className="row gap-5">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-7">
          <h2 className="text-center mb-4" style={{ color: "brown" }}>{movie.title}</h2>
          <p className="text-secondary"><strong className="fs-5 fw-bold" style={{ color: "brown" }}>Overview :</strong> {movie.overview}</p>
          <p className="text-secondary"><strong className="fs-5 fw-bold" style={{ color: "brown" }}>Release Date :</strong> {movie.release_date}</p>
          <p className="text-secondary"><strong className="fs-5 fw-bold" style={{ color: "brown" }}>Rating :</strong> {movie.vote_average} / 10</p>

         
          <button 
            className="btn btn-warning mt-3"
            onClick={addToFavorites}
          >
          Add to Favorites ❤
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;