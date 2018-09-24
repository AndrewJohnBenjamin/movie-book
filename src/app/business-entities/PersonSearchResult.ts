import { MovieSearchResult } from './MovieSearchResult';
import { TVSearchResult } from './TVSearchResult';

export class PersonSearchResult {
  profile_path?: string;
  adult?: boolean;
  id?: number;
  media_type?: string;
  known_for?: Array<MovieSearchResult | TVSearchResult>;
  name?: string;
  popularity?: number;
}
