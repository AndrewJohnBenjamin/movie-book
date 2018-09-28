import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TmdbService } from './data-services/tmdb.service';
import { Movie } from './models/Movie.model';
import { SearchResponse } from './models/SearchResponse';

@Injectable()
export class MoviesInTheatresResolver implements Resolve<Array<Movie>> {
  constructor(private tmdbService: TmdbService) {}

  resolve(activateRoute: ActivatedRouteSnapshot) {
    return this.tmdbService.getLatestCinemaReleases().toPromise().then((searchResponse: SearchResponse<Movie>) => {
      return searchResponse.results.splice(0, 3);
    });
  }
}
