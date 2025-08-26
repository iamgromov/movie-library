import type { IMovieItem } from '../types/interface';

const Movie: React.FC<IMovieItem> = ({ Title, Poster, Type, Year, imdbID }) => {
  return (
    <div
      id={imdbID}
      className='movie card cyan darken-3'
    >
      <div className='card-image'>
        <img
          alt={`${Title} poster`}
          src={Poster}
        />
      </div>
      <div className='card-content white-text'>
        <span className='card-title'>{Title}</span>
        <p>
          {Year} <span className='right'>{Type.toUpperCase()}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
