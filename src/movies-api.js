import axios from 'axios';

//Створюю файл конфігурації для API-запитів
const apiKey = '6198839cbe21861b5981d3604da41577';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTk4ODM5Y2JlMjE4NjFiNTk4MWQzNjA0ZGE0MTU3NyIsInN1YiI6IjY2NGYyYWFmODk0ZDRlMDdjNzA2NTRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jCbrHTseQnFa6_N_dpZE_NE0IISjYuWSowVUR-TM_GQ';

const options = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

//Отримую базовий URL для зображень
async function getConfiguration() {
  const url = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;

  try {
    const response = await axios.get(url, options);
    return response.data.images;
  } catch (error) {
    console.error('Error fetching configuration:', error);
  }
}

//Функція для пошуку фільмів:
async function searchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    query
  )}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
  }
}

// async function searchMovies(query) {
//   const encodedQuery = encodeURIComponent(query);
//   const url = `https://api.themoviedb.org/3/search/movie`;
//   const options = {
//     params: {
//       query: encodedQuery,
//       include_adult: false,
//       language: 'en-US',
//       page: 1,
//       api_key: apiKey,
//     },
//   };
//   try {
//     const response = await axios.get(url, options);
//     return response.data.results;
//   } catch (error) {
//     console.error('Error searching movies:', error);
//   }
// }

//Функція для побудови повного URL зображення:
function buildImageUrl(base_url, file_size, file_path) {
  return `${base_url}${file_size}${file_path}`;
}

export { getConfiguration, searchMovies, buildImageUrl };

// async function main() {
//   const query = 'keyword'; // Змінюйте це значення для пошуку різних фільмів
//   const imagesConfig = await getConfiguration();

//   if (imagesConfig) {
//     const movies = await searchMovies(query);
//     if (movies) {
//       movies.forEach(movie => {
//         const posterPath = movie.poster_path;
//         if (posterPath) {
//           const imageUrl = buildImageUrl(
//             imagesConfig.secure_base_url,
//             'w500',
//             posterPath
//           );
//           console.log(`Title: ${movie.title}, Poster URL: ${imageUrl}`);
//         } else {
//           console.log(`Title: ${movie.title}, No poster available`);
//         }
//       });
//     }
//   }
// }
