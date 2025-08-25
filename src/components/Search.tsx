import type { ISearchProps, ISearchState } from '../types/interface';
import React from 'react';

class Search extends React.Component<ISearchProps, ISearchState> {
  inputRef = React.createRef<HTMLInputElement>();

  constructor(props: ISearchProps) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      search: '',
      type: 'all',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  handleKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      () => ({ type: event.target.dataset.type ?? 'all' }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  handleSubmit = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };

  render() {
    const { search } = this.state;

    return (
      <div className='row'>
        <div className='input-field'>
          <input
            placeholder='Search'
            type='search'
            className='validate'
            value={search}
            onKeyDown={this.handleKey}
            onChange={this.handleChange}
          />
          <button
            className='btn search-btn'
            onClick={this.handleSubmit}
            disabled={this.state.search.length === 0}
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
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
              disabled={this.state.search.length === 0}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
              disabled={this.state.search.length === 0}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
              disabled={this.state.search.length === 0}
            />
            <span>Series</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='game'
              onChange={this.handleFilter}
              checked={this.state.type === 'game'}
              disabled={this.state.search.length === 0}
            />
            <span>Game</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
