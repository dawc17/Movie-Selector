import MovieCard from "../components/MovieCard";

interface Movie {
  id: number;
  title: string;
  releaseDate: string;
}

function Home() {
  const movies: Movie[] = [
    { id: 1, title: "John Wick", releaseDate: "2020" },
    { id: 2, title: "Terminator", releaseDate: "1998" },
    { id: 3, title: "Spongebob", releaseDate: "2018" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieUrl={`url_to_poster_${movie.id}`} movieTitle={movie.title} movieReleaseDate={movie.releaseDate} />
        ))}
      </div>
    </div>
  );
}

export default Home;
