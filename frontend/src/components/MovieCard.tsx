import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

interface CardProps {
  movie: Movie;
}

function MovieCard({ movie }: CardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavorite(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavorite}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <a href={`https://pstream.org/browse/${movie.title}`} target="_blank">
          <button className="watch-button">Watch movie</button>
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
