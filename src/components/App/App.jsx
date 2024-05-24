import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function App() {

  return (
    <div>
      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/moviesPage">
          Movies
        </NavLink>
        {/* <NavLink to="/moviesDetailsPage">
          MovieDetailsPage
        </NavLink> */}
      </nav>
      <h1>Trending today</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moviesPage" element={<MoviesPage />} />
        <Route path="/moviesDetailsPage" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </div>
  );
}



