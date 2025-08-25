import type { IMoviesProps } from '../types/interface';
import Movie from './Movie';

const Movies: React.FunctionComponent<IMoviesProps> = ({ movies = [] }) => {
  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => (
          <Movie
            key={movie.imdbID}
            {...movie}
          />
        ))
      ) : (
        <h3>Not found</h3>
      )}
    </div>
  );
};

export default Movies;
