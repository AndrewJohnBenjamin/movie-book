import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

import { TmdbService } from '../data-services/tmdb.service';
import { TVShow } from '../models/TVShow.model';
import { SearchResponse } from '../models/SearchResponse';

@Injectable()
export class OnAirShowsResolver implements Resolve<Array<TVShow>> {
  constructor(private tmdbService: TmdbService) {}

  resolve(activateRoute: ActivatedRouteSnapshot) {
    return this.tmdbService.getOnAirTvShows().toPromise().then((searchResponse: SearchResponse<TVShow>) => {
      return searchResponse.results.splice(0, 3);
    });
  }
}
