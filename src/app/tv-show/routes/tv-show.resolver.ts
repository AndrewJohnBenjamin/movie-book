import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TmdbService } from '../../data-services/tmdb.service';
import { TVShow } from '../../models/TVShow.model';

@Injectable()
export class TvShowResolver implements Resolve<TVShow> {
  constructor(private tmdbService: TmdbService) {}

  resolve(activateRoute: ActivatedRouteSnapshot) {
    const tvShowId = activateRoute.paramMap.get('id');
    return this.tmdbService.getTvShow(tvShowId, 'credits,reviews');
  }
}
