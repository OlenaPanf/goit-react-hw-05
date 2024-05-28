import css from './MoviesPage.module.css'
import { useState, useRef, useEffect } from 'react';
import { searchMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom'; 

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const formRef = useRef(null);
  const [searchParms, setSearchParams] = useSearchParams();
  const movieFilter = searchParms.get('query') ?? '';

  useEffect(() => {
    const fetchMovies = async () => {
      if (movieFilter) {
        const searchedMovies = await searchMovies(movieFilter);
        setMovies(searchedMovies);
      }
    };
    
    fetchMovies();
  }, [movieFilter]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const keyword = formRef.current.elements.keyword.value.trim();
    if (keyword.trim() === '') return;

    setSearchParams({ query: keyword });
    formRef.current.reset();  
  };

  return (
    <div className={css.container}>
      <div>
        <form ref={formRef} onSubmit={handleSubmit} className={css.form}>
          <input
            className={css.input}
            type="text"
            name="keyword"
            autoComplete="off"
            autoFocus
            placeholder=""
          />
          <button type="submit" >Search</button>
        </form>
      </div>
      <div>
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </div>
  );
}


