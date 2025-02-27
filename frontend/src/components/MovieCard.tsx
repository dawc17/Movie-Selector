import "../css/MovieCard.css";

interface CardProps {
  movieUrl: string;
  movieTitle: string;
  movieReleaseDate: string;
}

function MovieCard({ movieUrl, movieReleaseDate, movieTitle }: CardProps) {
  function onFavorite() {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movieUrl} alt={movieTitle}></img>
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavorite}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movieTitle}</h3>
        <p>{movieReleaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
