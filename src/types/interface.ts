export interface IAppState {
  movies: IMovieItem[];
  loading: boolean;
}

export type Props = object;

export interface IMainProps {
  movies: IMovieItem[];
}

export interface ISearchProps {
  searchMovies: (searchValue: string, searchType: string) => void;
}

export interface ISearchState {
  search: string;
  type: string;
}

export interface IMoviesProps {
  movies: IMovieItem[];
}

export interface IMovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
