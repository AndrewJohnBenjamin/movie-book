import { TmdbPagedResult } from './TmdbPagedResult.model';

export class SearchResponse<T> extends TmdbPagedResult {
  results: Array<T>;
}
