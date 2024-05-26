import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getMovieDetails, getConfiguration, buildImageUrl } from '../../movies-api';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [baseImageUrl, setBaseImageUrl] = useState('');
  
  useEffect(() => {
      const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(id);
      setMovie(movieDetails);
      };
      
      const fetchConfiguration = async () => {
      const config = await getConfiguration();
      setBaseImageUrl(config.secure_base_url);
      };
                 
      fetchMovieDetails();
      fetchConfiguration();      
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
    }
    
    const posterUrl = buildImageUrl(baseImageUrl, 'w500', movie.poster_path);

    return (
        <div>
            <div>
      <img src={posterUrl} alt={`${movie.title} poster`} />    
      <h2>{movie.title}</h2>
      <p>User Score: {movie.popularity}</p> 
      <h3>Overview</h3>    
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres.map(({ name }) => (
          <span key={name}>{name} </span>
        ))}</p>
      </div>
            
        <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
        </ul>
        
        <Outlet />
      </div>
      
  );
}

{/* <MovieCast actors={actors} />   
<MovieReviews reviews={reviews} /> */}