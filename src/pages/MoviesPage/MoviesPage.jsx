import { useState, useRef } from 'react';
import { searchMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList'; 

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const keyword = formRef.current.elements.keyword.value.trim();
    if (keyword.trim() === '') return;

    const searchedMovies = await searchMovies(keyword);
    setMovies(searchedMovies);
    formRef.current.reset();  
  };

  return (
    <div>
      <div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            name="keyword"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </div>
  );
}


