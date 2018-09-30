import { MovieSearchResult } from './MovieSearchResult.model';
import { PersonSearchResult } from './PersonSearchResult.model';
import { TvShowSearchResult } from './TvShowSearchResult.model';

export class GenericSearchResults {
    page: number;
    results: Array<MovieSearchResult | PersonSearchResult | TvShowSearchResult>;
    total_results: number;
    total_pages: number;
}
