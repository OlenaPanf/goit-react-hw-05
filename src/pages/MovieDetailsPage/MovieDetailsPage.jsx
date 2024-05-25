import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getConfiguration, buildImageUrl, getMovieCredits } from '../../movies-api';
import MovieCast from '../../components/MovieCast/MovieCast';

export default function MovieDetailsPage() {
  const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [baseImageUrl, setBaseImageUrl] = useState('');
    const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(id);
      setMovie(movieDetails);
      };
      
      const fetchConfiguration = async () => {
      const config = await getConfiguration();
      setBaseImageUrl(config.secure_base_url);
      };
      
      const fetchActorCredits = async () => {
      const credits = await getMovieCredits(id);
      // Тут ви можете додати логіку для фільтрації акторів, якщо потрібно
      setActors(credits.cast); // Припускаючи, що cast містить потрібну інформацію
      };
      
      fetchMovieDetails();
      fetchConfiguration();
      fetchActorCredits();
  }, [id]);

  if (!movie ||!actors.length) {
    return <div>Loading...</div>;
    }
    
    const posterUrl = buildImageUrl(baseImageUrl, 'w500', movie.poster_path);

    return (
        <div>
            <div>
      <img src={posterUrl} alt={`${movie.title} poster`} />    
      <h2>{movie.title}</h2>
      <p>User Score:{movie.popularity}</p> 
      <h3>Overview</h3>    
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres.map(({ name }) => (
          <span key={name}>{name} </span>
        ))}</p>
      </div>
            <div>
                <MovieCast actors={actors} />
      </div>
      </div>
      
  );
}