/** Main */
export type MediaType = 'movie' | 'series' | 'game' | 'all';

export interface IOmdbResponse {
  Response: string;
  Search?: Array<IMovieItem>;
  totalResults?: string;
  Error?: string;
}

/** Search */
export interface ISearchProps {
  searchMovies: (
    value: string,
    type?: 'all' | 'movie' | 'series' | 'game'
  ) => void;
}

/** Movies */
export interface IMovies {
  movies?: IMovieItem[];
}

/** Movie */
export interface IMovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
