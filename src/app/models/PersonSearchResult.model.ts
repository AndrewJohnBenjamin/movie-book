import { MovieSearchResult } from './MovieSearchResult.model';
import { TvShowSearchResult } from './TvShowSearchResult.model';

export class PersonSearchResult {
  profile_path?: string;
  adult?: boolean;
  id?: number;
  media_type?: string;
  known_for?: Array<MovieSearchResult | TvShowSearchResult>;
  name?: string;
  popularity?: number;
}
