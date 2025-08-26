import React, { useEffect, useState } from 'react';
import type { IMovieItem, IOmdbResponse, MediaType } from '../types/interface';

import Search from '../components/Search';
import Preloader from '../components/Preloader';
import Movies from '../components/Movies';

const API_KEY = import.meta.env.VITE_API_URL_KEY as string;

const stubs = [
  'Marvel',
  'Bond',
  'X-men',
  'Star Wars',
  'Potter',
  'Rings',
  'Jurassic',
  'Impossible',
  'Terminator',
  'Pirates',
];

const Main: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<Array<IMovieItem>>();
  const [loading, setLoading] = useState(true);

  const searchMovies = (value: string, type: MediaType = 'all') => {
    setLoading(true);

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => {
        return response.json();
      })
      .then((data: IOmdbResponse) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    const value = stubs[Math.floor(Math.random() * stubs.length)];

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
