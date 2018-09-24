import { Genre } from './Genre';
import { ProductionCompany } from './ProductionCompany';
import { Country } from './Country';
import { SpokenLanguage } from './SpokenLanguage';
import { MovieCredits } from './MovieCredits';

export class Movie {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget?: number;
  genres?: Array<Genre>;
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: Array<ProductionCompany>;
  production_countries?: Array<Country>;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languges?: Array<SpokenLanguage>;
  status?: string;
  tagline?: string;
  title?: string;
  video?: true;
  vote_average?: number;
  vote_count?: number;
  credits?: MovieCredits;
}
