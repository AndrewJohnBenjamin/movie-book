import { MovieSearchResult } from './MovieSearchResult';
import { TmdbPagedResult } from './TmdbPagedResult';

export class TrendingMoviesResult extends TmdbPagedResult {
  results: Array<MovieSearchResult>;
}
