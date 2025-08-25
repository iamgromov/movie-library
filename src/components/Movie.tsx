import type { IMovieItem } from '../types/interface';

const Movie: React.FunctionComponent<IMovieItem> = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: imdbID,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div
      id={imdbID}
      className='movie card cyan darken-3'
    >
      <div className='card-image'>
        <img
          alt={`${title} poster`}
          src={poster}
        />
      </div>
      <div className='card-content white-text'>
        <span className='card-title'>{title}</span>
        <p>
          {year} <span className='right'>{type.toUpperCase()}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
