import { MovieSearchResult } from './MovieSearchResult';
import { PersonSearchResult } from './PersonSearchResult';
import { TVSearchResult } from './TVSearchResult';

export class SearchResults {
  page: number;
  results: Array<MovieSearchResult | PersonSearchResult | TVSearchResult>;
  total_results: number;
  total_pages: number;
}
