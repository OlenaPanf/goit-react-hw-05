import css from './MovieList.module.css'
import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <div>
      <ul className={css.list}>
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

//to={`${movie.id}`} відносний шлях
//to={`/movie/${movie.id}`} абсолютний шлях







