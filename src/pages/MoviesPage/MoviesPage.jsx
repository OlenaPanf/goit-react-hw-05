import { useState, } from 'react';
import { searchMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList'; 

export default function MoviesPage() {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (keyword.trim() === '') return;

    const searchedMovies = await searchMovies(keyword);
    setMovies(searchedMovies);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
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

// import { toast } from 'react-hot-toast';

// export const SearchBar = ({ onSearch }) => {
  
// 	const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const keyword = form.elements.keyword.value;
        
//     // Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції.
//     if(keyword.trim() === "") {
//         toast.error("Please enter search term!");
//         return;
//     }
    
//     // У протилежному випадку викликаємо пропс і передаємо йому значення поля
//     onSearch(keyword);
//     form.reset();
//   };

//   return (
//         <header>
//             <form onSubmit={handleSubmit}>
//               <input
//                     type="text"
//                     name="keyword"
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search movies"
//                 />
//                 <button className={css.button} type="submit">Search</button>
//             </form>
//         </header>
//     );
// };
