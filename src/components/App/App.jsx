import './App.css'
import { Routes, Route, } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function App() {

  return (
    <div>
      <Navigation />
     
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </div>
  );
}



