import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TmdbService } from '../../data-services/tmdb.service';
import { Movie } from '../../models/Movie.model';

@Injectable()
export class MovieResolver implements Resolve<Movie> {
  constructor(private tmdbService: TmdbService) {}

  resolve(activateRoute: ActivatedRouteSnapshot) {
    const movieId = activateRoute.paramMap.get('id');
    return this.tmdbService.getMovie(movieId);
  }
}
