import { buildImageUrl } from '../../movies-api'; 

export default function MovieCast({ actors }) {
    // Функція для створення повного URL зображення актора
    const getImageUrl = (profilePath) =>
        buildImageUrl("https://image.tmdb.org/t/p/w500", profilePath);

    return (
        <div>
            {actors.map((actor) => (
                <div key={actor.id}>
                    <img src={getImageUrl(actor.profile_path)} alt={actor.name} />
                    <h3>{actor.name}</h3>
                    <p>Character: {actor.character}</p>
                </div>
            ))}
        </div>
    );
}

