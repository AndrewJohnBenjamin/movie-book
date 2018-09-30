import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TmdbService } from '../../data-services/tmdb.service';
import { TvShow } from '../../models/TvShow.model';

@Injectable()
export class TvShowResolver implements Resolve<TvShow> {
  constructor(private tmdbService: TmdbService) {}

  resolve(activateRoute: ActivatedRouteSnapshot) {
    const tvShowId = activateRoute.paramMap.get('id');
    return this.tmdbService.getTvShow(tvShowId, 'credits,reviews');
  }
}
