import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../movies-api';

export default function MovieList() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {/* <h1>Trending Movies</h1> */}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}







// export default function MovieList({ movies }) {
//   return (
//     <ul>
//       {movies.map((movie) => (
//         <li key={movie.id}>
//           <MovieList movie={movie} />
//         </li>
//       ))}
//     </ul>
//   );
// }