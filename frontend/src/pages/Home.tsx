import MovieCard from "../components/MovieCard";
import { useState } from "react";

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
}

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies: Movie[] = [
    { id: 1, title: "John Wick", releaseDate: "2020" },
    { id: 2, title: "Terminator", releaseDate: "1998" },
    { id: 3, title: "Spongebob", releaseDate: "2018" },
  ];

  const handleSearch = (e: any) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard
                key={movie.id}
                movieUrl={`url_to_poster_${movie.id}`}
                movieTitle={movie.title}
                movieReleaseDate={movie.releaseDate}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
