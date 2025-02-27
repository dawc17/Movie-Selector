import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", releaseDate: "2020" },
    { id: 2, title: "Terminator", releaseDate: "1998" },
    { id: 3, title: "Spongebob", releaseDate: "2018" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
