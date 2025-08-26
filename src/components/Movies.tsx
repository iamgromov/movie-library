import type { IMovies } from '../types/interface';

import Movie from './Movie';

const Movies: React.FC<IMovies> = ({ movies }) => {
  return (
    <div className='movies'>
      {movies?.length ? (
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
