import React, { useState } from 'react';
import type { ISearchProps, MediaType } from '../types/interface';

const Search: React.FC<ISearchProps> = ({ searchMovies }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState<MediaType>('all');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.dataset.type as MediaType);
    searchMovies(search, event.target.dataset.type as MediaType);
  };

  const handleSubmit = () => {
    searchMovies(search, type);
  };

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          placeholder='Search'
          type='search'
          className='validate'
          value={search}
          onKeyDown={handleKey}
          onChange={handleChange}
        />
        <button
          className='btn search-btn'
          onClick={handleSubmit}
          disabled={search.length === 0}
        >
          Search
        </button>
      </div>
      <div>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='all'
            onChange={handleFilter}
            checked={type === 'all'}
            disabled={search.length === 0}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='movie'
            onChange={handleFilter}
            checked={type === 'movie'}
            disabled={search.length === 0}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='series'
            onChange={handleFilter}
            checked={type === 'series'}
            disabled={search.length === 0}
          />
          <span>Series</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='game'
            onChange={handleFilter}
            checked={type === 'game'}
            disabled={search.length === 0}
          />
          <span>Game</span>
        </label>
      </div>
    </div>
  );
};

export default Search;
