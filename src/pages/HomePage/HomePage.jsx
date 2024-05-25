import MovieList from '../../components/MovieList/MovieList'; // Імпортуйте MovieList

export default function HomePage() {
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList /> {/* Відображення MovieList на HomePage */}
      
    </div>
  );
}



