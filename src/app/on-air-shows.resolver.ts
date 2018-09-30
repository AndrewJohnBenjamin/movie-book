import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TmdbService } from './data-services/tmdb.service';
import { TvShow } from './models/TvShow.model';
import { SearchResponse } from './models/SearchResponse';
import { TvShowSearchResult } from './models/TvShowSearchResult.model';

@Injectable()
export class OnAirShowsResolver implements Resolve<Array<TvShowSearchResult>> {
  constructor(private tmdbService: TmdbService) {}

  resolve(activateRoute: ActivatedRouteSnapshot) {
    return this.tmdbService.getOnAirTvShows().toPromise().then((searchResponse: SearchResponse<TvShowSearchResult>) => {
      return searchResponse.results.splice(0, 3);
    });
  }
}
