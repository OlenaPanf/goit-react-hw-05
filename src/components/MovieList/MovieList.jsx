import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <div>
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


// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getTrendingMovies } from '../../movies-api';

// export default function MovieList() {
//     const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       const trendingMovies = await getTrendingMovies();
//       setMovies(trendingMovies);
//     };

//     fetchTrendingMovies();
//   }, []);

//   return (
//     <div>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movie/${movie.id}`}>
//               {movie.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }







