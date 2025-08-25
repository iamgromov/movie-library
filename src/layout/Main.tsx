import React from 'react';

import type { IAppState } from '../types/interface';
import Search from '../components/Search';
import Preloader from '../components/Preloader';
import Movies from '../components/Movies';

const API_KEY = import.meta.env.VITE_API_URL_KEY;

class Main extends React.Component<object, IAppState> {
  state = {
    movies: [],
    loading: true,
  };

  movies = [
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

  componentDidMount() {
    const value = this.movies[Math.floor(Math.random() * this.movies.length)];

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  }

  searchMovies = (value: string, type = 'all') => {
    this.setState({ loading: true });

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export default Main;
